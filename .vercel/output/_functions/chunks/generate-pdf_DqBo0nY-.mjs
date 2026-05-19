import ConvertAPI from 'convertapi';

const prerender = false;
function jsonError(message, status, extra) {
  return new Response(JSON.stringify({ error: message, ...extra }), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
const POST = async ({ request }) => {
  const secret = "faT7kCm1yM6LmzL7fv7NhDu2xZggRtyf";
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError("Corps JSON invalide.", 400);
  }
  if (!body.path || typeof body.path !== "string" || !body.path.startsWith("/")) {
    return jsonError("`path` requis, doit commencer par '/'.", 400);
  }
  const origin = new URL(request.url).origin;
  const targetUrl = `${origin}${body.path}`;
  if (/^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)/.test(targetUrl)) {
    return jsonError(
      "ConvertAPI ne peut pas atteindre localhost. Déploie sur Vercel preview ou expose localhost via ngrok pour tester en local.",
      400,
      { targetUrl }
    );
  }
  const params = {
    Url: targetUrl,
    PageSize: body.pageSize,
    PageOrientation: body.orientation,
    MarginTop: body.margins.top,
    MarginRight: body.margins.right,
    MarginBottom: body.margins.bottom,
    MarginLeft: body.margins.left,
    ConversionScale: body.scale,
    // Attendre que les fonts fontshare/googleapis et les icônes Iconify (Web Components) soient rendues.
    ConversionDelay: 2
  };
  if (body.pageSize === "custom" && body.pageWidth && body.pageHeight) {
    params.PageWidth = body.pageWidth;
    params.PageHeight = body.pageHeight;
  }
  if (body.pageRange) {
    params.PageRange = body.pageRange;
  }
  try {
    const convertapi = ConvertAPI(secret);
    const result = await convertapi.convert("pdf", params, "web");
    const pdfUrl = result.file.url;
    const pdfResponse = await fetch(pdfUrl);
    if (!pdfResponse.ok) {
      throw new Error(
        `Téléchargement PDF échoué : ${pdfResponse.status} ${pdfResponse.statusText}`
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
        "Content-Length": pdfBuffer.byteLength.toString()
      }
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Génération PDF échouée.";
    console.error("ConvertAPI error:", err);
    return jsonError(message, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
