"use client";
import React, { useState } from "react";
import { Loader2, Camera } from "lucide-react";

export default function ScreenshotGenerator() {
  const [url, setUrl] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!url) return;
    setLoading(true);

    const apiUrl = `https://image.thum.io/get/width/1200/crop/900/${url}`;

    setScreenshot(apiUrl);

    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen  text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Website Screenshot Generator</h1>
      <p className="text-gray-400 mb-6 text-center">
        Enter a website URL and see its screenshot instantly
      </p>

      <div className="flex flex-col gap-4 w-full max-w-lg mb-6">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="p-4 rounded-2xl bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none"
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="px-6 py-3 rounded-2xl bg-green-700 hover:bg-green-800 duration-150 flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Camera />}
          Generate Screenshot
        </button>
      </div>

      {screenshot && (
        <div className="mt-4 w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
          <img
            src={screenshot}
            alt="Website Screenshot"
            className="w-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
