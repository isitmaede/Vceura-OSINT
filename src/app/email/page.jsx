"use client";
import { Search, Loader2 } from "lucide-react";
import React, { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleEmailFinder = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const res = await fetch(
        `https://api.proxydash.org/dehashed?query=${encodeURIComponent(email)}`
      );

      if (!res.ok) throw new Error("Bad Response");

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-2 text-center">Email Breach Check</h1>
      <p className="text-gray-400 mb-6 text-center">
        Check if your email appears in leaked databases.
      </p>

      <form onSubmit={handleEmailFinder} className="w-full max-w-xl flex gap-3">
        <input
          type="email"
          placeholder="Enter your email…"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 p-4 bg-gray-900 border border-gray-700 rounded-2xl text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />

        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-green-700 hover:bg-green-800 duration-200"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={22} />
          ) : (
            <>
              Search <Search size={22} />
            </>
          )}
        </button>
      </form>

      {error && <p className="text-red-400 mt-4">{error}</p>}

      {result && (
        <div className="w-full max-w-xl bg-gray-900 p-6 mt-6 rounded-2xl border border-gray-800">
          {result.total === 0 ? (
            <h2 className="text-green-400 text-center text-xl font-semibold">
              No leaks found. You're safe.
            </h2>
          ) : (
            <>
              <h2 className="text-red-400 text-xl font-bold mb-4 text-center">
                Found {result.total} breaches
              </h2>

              <div className="space-y-4">
                {result.entries.map((entry, i) => (
                  <div key={i} className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                    <p><strong>Email:</strong> {entry.email}</p>
                    {entry.password && (
                      <p><strong>Password:</strong> {entry.password}</p>
                    )}
                    {entry.database_name && (
                      <p><strong>Source:</strong> {entry.database_name}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
