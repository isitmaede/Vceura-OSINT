"use client";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";

export default function ReverseImageFinder() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // عند اختيار صورة
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResults([]);
      setError("");
    }
  };

  // إرسال الصورة للـ Backend
  const handleSearch = async () => {
    if (!image) return;
    setLoading(true);
    setResults([]);
    setError("");

    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch("/api/reverse-image", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.error) setError(data.error);
      else setResults(data.results || []);
    } catch (err) {
      setError("Error searching image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Reverse Image Finder</h1>
      <p className="text-gray-400 mb-6 text-center">
        Upload an image to see where it has been published online
      </p>

      <div className="flex flex-col items-center gap-4 mb-6 w-full max-w-lg">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="text-gray-200"
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
        )}
        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-6 py-3 rounded-2xl bg-green-700 hover:bg-green-800 duration-150 mt-2 flex items-center justify-center"
        >
          {loading ? <Loader2 className="animate-spin" /> : "Search Image"}
        </button>
      </div>

      {error && <p className="text-red-400 mb-4">{error}</p>}

      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
          {results.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <img
                src={item.thumbnail}
                alt={item.title || "Result"}
                className="w-full h-48 object-cover"
              />
              <div className="p-2 bg-gray-800 text-sm text-gray-100 truncate">
                {item.title || item.url}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
