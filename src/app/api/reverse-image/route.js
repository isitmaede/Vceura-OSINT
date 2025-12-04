import formidable from "formidable";
import fs from "fs";
import fetch from "node-fetch";


export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Error parsing form data" });

    const file = files.image;
    if (!file) return res.status(400).json({ error: "No image uploaded" });

    try {
      const imageData = fs.readFileSync(file.filepath, { encoding: "base64" });

     
      const response = await fetch(
        "https://serpapi.com/search.json?engine=google_reverse_image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            api_key: "SERPAPI_KEY",
            image_content: imageData,
          }),
        }
      );

      const data = await response.json();

     
      const results =
        data.image_results?.map((item) => ({
          thumbnail: item.thumbnail,
          url: item.link,
          title: item.title,
        })) || [];

      res.status(200).json({ results });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to search image" });
    }
  });
}
