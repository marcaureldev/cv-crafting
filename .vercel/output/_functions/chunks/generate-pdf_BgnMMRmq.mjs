import 'convertapi';

const prerender = false;
function jsonError(message, status, extra) {
  return new Response(JSON.stringify({ error: message, ...extra }), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
const POST = async ({ request }) => {
  {
    return jsonError(
      "CONVERTAPI_SECRET n'est pas configuré. Ajoute la clé dans .env (local) ou dans les variables d'environnement Vercel (prod).",
      500
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
