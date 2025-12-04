"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./map"), { ssr: false });

export default function PhoneOSINT() {
  const [phone, setPhone] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch(
        `https://api.numlookupapi.com/v1/validate/${phone}?apikey=num_live_IP6oFF3VfnelKP27hfUITFMEmjhzCEe6K23w8xht`
      );

      if (!res.ok) throw new Error("Failed to fetch");

      const json = await res.json();
      setData(json);
    } catch (err) {
      setError("Error fetching data.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen  text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-4">Phone Intelligence</h1>
      <p className="text-gray-400 text-sm mb-8">
        Quick info about any phone number
      </p>

      <div className="flex gap-3 w-full max-w-xl">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+218XXXXXXXX"
          className="bg-gray-900 border border-gray-700 rounded-2xl p-4 w-full text-gray-200
                     focus:border-green-500 outline-none duration-200"
        />

        <button
          onClick={handleSearch}
          className="flex gap-2 items-center bg-green-700 hover:bg-green-800 
                     py-4 px-5 rounded-2xl text-white font-semibold duration-200"
        >
          Search <Search size={20} />
        </button>
      </div>

      <div className="mt-8 w-full max-w-xl bg-gray-900 p-5 rounded-2xl border border-gray-800">
        {loading && <p className="text-center">Searching...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {data && (
          <div>
            <h2 className="text-xl text-green-400 font-bold mb-4">Result</h2>

            <div className="space-y-2 text-gray-300">
              <p>Valid: {data.valid ? "Yes" : "No"}</p>
              <p>International: {data.international_format}</p>
              <p>Country: {data.country_name}</p>
              <p>Country Code: +{data.country_code}</p>
              <p>Carrier: {data.carrier}</p>
              <p>Line Type: {data.line_type}</p>
            </div>

            {data.country_name && (
              <div className="mt-6 h-72 w-full overflow-hidden rounded-xl">
                <Map country={data.country_name} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
