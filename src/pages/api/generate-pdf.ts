import type { APIRoute } from "astro";
// @ts-ignore — convertapi SDK ships without type declarations
import ConvertAPI from "convertapi";

export const prerender = false;

interface MarginsInput {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface GeneratePdfRequest {
  path: string;
  pageSize: "a3" | "a4" | "a5" | "letter" | "legal" | "custom";
  pageWidth?: number;
  pageHeight?: number;
  orientation: "portrait" | "landscape";
  margins: MarginsInput;
  scale: number;
  pageRange?: string;
  filename?: string;
}

function jsonError(message: string, status: number, extra?: Record<string, unknown>) {
  return new Response(JSON.stringify({ error: message, ...extra }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  const secret = import.meta.env.CONVERTAPI_SECRET;
  if (!secret) {
    return jsonError(
      "CONVERTAPI_SECRET n'est pas configuré. Ajoute la clé dans .env (local) ou dans les variables d'environnement Vercel (prod).",
      500,
    );
  }

  let body: GeneratePdfRequest;
  try {
    body = await request.json();
  } catch {
    return jsonError("Corps JSON invalide.", 400);
  }

  if (!body.path || typeof body.path !== "string" || !body.path.startsWith("/")) {
    return jsonError("`path` requis, doit commencer par '/'.", 400);
  }

  const origin = new URL(request.url).origin;
  // ?export=pdf signale à la page qu'elle est rendue pour ConvertAPI
  // (le composant PdfExportButton masque son trigger et sa modal sur ce flag)
  const targetUrl = `${origin}${body.path}?export=pdf`;

  // ConvertAPI tourne sur leurs serveurs, donc l'URL doit être publique. localhost n'est pas joignable.
  if (/^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)/.test(targetUrl)) {
    return jsonError(
      "ConvertAPI ne peut pas atteindre localhost. Déploie sur Vercel preview ou expose localhost via ngrok pour tester en local.",
      400,
      { targetUrl },
    );
  }

  const params: Record<string, unknown> = {
    Url: targetUrl,
    PageSize: body.pageSize,
    PageOrientation: body.orientation,
    MarginTop: body.margins.top,
    MarginRight: body.margins.right,
    MarginBottom: body.margins.bottom,
    MarginLeft: body.margins.left,
    ConversionScale: body.scale,
    // Attendre que les fonts fontshare/googleapis et les icônes Iconify (Web Components) soient rendues.
    ConversionDelay: 2,
  };
  if (body.pageSize === "custom" && body.pageWidth && body.pageHeight) {
    params.PageWidth = body.pageWidth;
    params.PageHeight = body.pageHeight;
  }
  if (body.pageRange) {
    params.PageRange = body.pageRange;
  }

  try {
    const convertapi = new ConvertAPI(secret);
    const result = await convertapi.convert("pdf", params, "web");

    const pdfUrl: string = result.file.url;
    const pdfResponse = await fetch(pdfUrl);
    if (!pdfResponse.ok) {
      throw new Error(
        `Téléchargement PDF échoué : ${pdfResponse.status} ${pdfResponse.statusText}`,
      );
    }
    const pdfBuffer = await pdfResponse.arrayBuffer();

    const filename = body.filename || "cv.pdf";
    const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "_");

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${safeName}"`,
        "Content-Length": pdfBuffer.byteLength.toString(),
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Génération PDF échouée.";
    console.error("ConvertAPI error:", err);
    return jsonError(message, 500);
  }
};
