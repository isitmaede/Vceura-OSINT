"use client";
import { Search, Loader2 } from "lucide-react";
import React, { useState } from "react";

export default function WhoisPage() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleWhoisLookup = async (e) => {
    e.preventDefault();
    if (!domain) return;

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/whois?domain=${domain}`,
        {
          headers: {
            "X-Api-Key": "Z44Lst1YGj70Csa5AWdiSA==HJImDkyvoUxl0X7H",
          },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  return (
    <div className="min-h-screen  text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">WHOIS Domain Lookup</h1>
      <p className="text-gray-400 mb-6 text-center">
        Enter a domain to see registrar, creation, expiry, and more
      </p>

      <form
        onSubmit={handleWhoisLookup}
        className="flex gap-3 w-full max-w-lg mb-6"
      >
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="example.com"
          required
          className="flex-1 p-4 rounded-2xl bg-gray-800 border border-gray-700 focus:outline-none text-gray-100"
        />
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-green-700 hover:bg-green-800 duration-150"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Search />}
        </button>
      </form>

      {error && <p className="text-red-400 mb-4">{error}</p>}

      {result && (
        <div className="w-full max-w-xl bg-gray-950 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">{domain}</h2>
          <ul className="space-y-2">
            <li>
              <strong>Registrar:</strong> {result.registrar || "N/A"}
            </li>
            <li>
              <strong>WHOIS Server:</strong> {result.whois_server || "N/A"}
            </li>
            <li>
              <strong>Creation Date:</strong> {formatDate(result.creation_date)}
            </li>
            <li>
              <strong>Expiration Date:</strong> {formatDate(result.expiration_date)}
            </li>
            <li>
              <strong>Name Servers:</strong>{" "}
              {result.name_servers ? result.name_servers.join(", ") : "N/A"}
            </li>
            <li>
              <strong>DNSSEC:</strong> {result.dnssec || "N/A"}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
