"use client";
import axios from "axios";
import {
  Search,
  MapPin,
  Globe,
  Flag,
  Compass,
  Clock,
  Users,
  Copy,
} from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [coptext, settext] = useState("");
  const [myip, Setmyip] = useState("");
  const [ip, setIp] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => Setmyip(data.ip))
      .catch(() => Setmyip("bad connection"));
  }, []);

  const handleSearch = async () => {
    if (!ip) return;
    setLoading(true);
    try {
      const response = await axios.get(`/api/ip?ip=${ip}`);
      setSearchResult(response.data);
    } catch (error) {
      console.error(error);
      setSearchResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(myip);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    setTimeout(() => settext("copied!"), 10);
  };

  return (
    <div className="flex flex-col items-center justify-center text-gray-50 p-4 sm:p-6">
      <div className="bg-cyan-950 py-4 px-6 sm:px-8 rounded-3xl flex flex-col items-center gap-3 shadow-lg border border-cyan-700 w-full max-w-md">
        <h1 className="text-xl font-bold text-center text-white tracking-wide">
          My IP
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-cyan-900 px-4 py-2 rounded-xl shadow-inner w-full">
          <p className="text-lg font-medium text-white break-all">{myip}</p>
          <button
            onClick={handleCopy}
            className="flex items-center justify-center bg-gray-50 hover:bg-gray-400 transition duration-200 p-2 rounded-lg shadow-sm"
            title="Copy IP"
          >
            <Copy size={18} color="gray" />
          </button>
        </div>
        <h1 className="text-emerald-500 bg-gray-950 py-1 px-3 rounded-md font-bold ">
          {coptext}
        </h1>
      </div>

      <h1 className="text-2xl sm:text-3xl font-semibold mt-6 text-center">
        IP Lookup & Information
      </h1>

      <div className="flex flex-col sm:flex-row items-center gap-3 bg-gray-900 border border-gray-700 mt-6 w-full max-w-md px-4 sm:px-5 py-3 rounded-3xl shadow-lg">
        <input
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          className="flex-1 bg-transparent focus:outline-none text-gray-200 placeholder-gray-400 text-lg w-full"
          placeholder="Enter IP here..."
          required
        />
        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl font-medium w-full sm:w-auto"
        >
          Search
          <Search size={22} />
        </button>
      </div>

      {loading && (
        <div className="mt-6 p-4 sm:p-6 bg-gray-800 rounded-2xl w-full max-w-md shadow-md text-left flex flex-col gap-3">
          <h2 className="text-center text-gray-50">Fetching information....</h2>
        </div>
      )}

      {searchResult && (
        <div className="mt-6 p-4 sm:p-6 bg-gray-800 rounded-2xl w-full max-w-md shadow-md text-left flex flex-col gap-3">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <Globe size={20} />{" "}
            <span>
              <span className="font-semibold">IP:</span> {searchResult.query}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <Flag size={20} />{" "}
            <span>
              <span className="font-semibold">Country:</span>{" "}
              {searchResult.country}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <MapPin size={20} />{" "}
            <span>
              <span className="font-semibold">City:</span> {searchResult.city}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <Compass size={20} />{" "}
            <span>
              <span className="font-semibold">Region:</span>{" "}
              {searchResult.regionName}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <MapPin size={20} />{" "}
            <span>
              <span className="font-semibold">Lat / Lon:</span>{" "}
              {searchResult.lat} / {searchResult.lon}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <Users size={20} />{" "}
            <span>
              <span className="font-semibold">ISP:</span> {searchResult.isp}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <Clock size={20} />{" "}
            <span>
              <span className="font-semibold">Timezone:</span>{" "}
              {searchResult.timezone}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
