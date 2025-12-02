import axios from "axios";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const ip = searchParams.get("ip") || ""; // فارغ = الـIP الحالي
    const url = ip ? `http://ip-api.com/json/${ip}` : `http://ip-api.com/json/`;
    const response = await axios.get(url);
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch IP data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
