export async function POST(request: Request) {
  const body = await request.text();

  const upstream = await fetch("http://localhost:8069/api/quote-request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const responseText = await upstream.text();

  return new Response(responseText, {
    status: upstream.status,
    headers: {
      "Content-Type":
        upstream.headers.get("Content-Type") || "application/json",
    },
  });
}
