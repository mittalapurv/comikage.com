// Liveness endpoint for docker-compose's healthcheck and deploy.sh's post-deploy probe
// (both were previously answered by the nginx static.conf `location = /health` block).
export const dynamic = "force-dynamic";

export async function GET() {
  return new Response("ok\n", { status: 200, headers: { "Content-Type": "text/plain" } });
}
