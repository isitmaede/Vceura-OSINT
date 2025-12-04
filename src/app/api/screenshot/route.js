import fetch from "node-fetch";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Body received:", body);

    const { url } = body;
    if (!url) {
      return new Response(JSON.stringify({ error: "URL is required" }), { status: 400 });
    }

    const apiUrl = `https://api.screenshotapi.net/screenshot?token=9EPKVR1-W7R4Y0G-JPQQMJN-X5RKKZT&url=${encodeURIComponent(url)}&output=json&file_type=png&wait_for_event=load`;
    console.log("Calling API:", apiUrl);

    const response = await fetch(apiUrl);
    const text = await response.text(); // بدل response.json() مؤقتًا
    console.log("API raw response:", text);

    const data = JSON.parse(text); // لو JSON صالح
    return new Response(JSON.stringify({ screenshot: data.screenshot }), { status: 200 });

  } catch (err) {
    console.error("Screenshot API error:", err);
    return new Response(JSON.stringify({ error: "Failed to generate screenshot" }), { status: 500 });
  }
}
