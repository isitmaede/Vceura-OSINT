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
import React, { use, useEffect, useState } from "react";

export default function Page() {
  const [coptext , settext] = useState('');
  const [myip, Setmyip] = useState("");
  const [ip, setIp] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    async function MyIp() {
      try {
        const response = await axios.get(`/api/ip`);
        const ip = response.data.query;
        Setmyip(ip)
      } catch (error) {
        console.log(error)
        Setmyip('bad connection')
      }
    }
    MyIp()
  }, 
  
  []);
  const handleSearch = async () => {
    if (!ip) return;
    setLoading(true);
    try {
      const response = await axios.get(`/api/ip?ip=${ip}`);
      setSearchResult(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setSearchResult(null);
    }
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(myip);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    setTimeout(() => settext('copied!') , 10)
  };

  return (
    <div className="flex flex-col items-center justify-center text-gray-50 p-6 ">
      
      <div className="bg-cyan-950 py-4 px-8 rounded-3xl flex flex-col items-center gap-3 shadow-lg border border-cyan-700">
  <h1 className="text-xl font-bold text-center text-white tracking-wide">My IP</h1>
  <div className="flex items-center gap-4 bg-cyan-900 px-4 py-2 rounded-xl shadow-inner">
    <p className="text-lg font-medium text-white">{myip}</p>
    <button
      onClick={handleCopy}
      className="flex items-center justify-center bg-gray-50 hover:bg-gray-400 transition duration-200 p-2 rounded-lg shadow-sm"
      title="Copy IP"
    >
      <Copy size={18} color="gray" />
    </button>
  </div>
  <h1 className="text-emerald-500 bg-gray-950 py-1 px-3 rounded-md font-bold ">{coptext}</h1>
</div>


      <h1 className="text-3xl font-semibold mt-6 text-center">
        IP Lookup & Information
      </h1>

      <div className="flex flex-row items-center justify-between gap-4 bg-gray-900 border border-gray-700 mt-6 w-full max-w-xl h-[70px] px-5 rounded-3xl shadow-lg">
        <input
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          className="flex-1 bg-transparent focus:outline-none text-gray-200 placeholder-gray-400 text-lg"
          placeholder="Enter IP here..."
          required
        />

        <button
          onClick={handleSearch}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl font-medium"
        >
          Search
          <Search size={22} />
        </button>
      </div>
      {loading && (
        <div className="mt-8 p-6 bg-gray-800 rounded-2xl w-full max-w-xl shadow-md text-left flex flex-col gap-4">
          <h2 className="text-center text-gray-50">Fetching information....</h2>
        </div>
      )}
      {searchResult && (
        <div className="mt-8 p-6 bg-gray-800 rounded-2xl w-full max-w-xl shadow-md text-left flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Globe size={20} />{" "}
            <span>
              <span className="font-semibold">IP:</span> {searchResult.query}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Flag size={20} />{" "}
            <span>
              <span className="font-semibold">Country:</span>{" "}
              {searchResult.country}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={20} />{" "}
            <span>
              <span className="font-semibold">City:</span> {searchResult.city}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Compass size={20} />{" "}
            <span>
              <span className="font-semibold">Region:</span>{" "}
              {searchResult.regionName}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={20} />{" "}
            <span>
              <span className="font-semibold">Lat / Lon:</span>{" "}
              {searchResult.lat} / {searchResult.lon}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Users size={20} />{" "}
            <span>
              <span className="font-semibold">ISP:</span> {searchResult.isp}
            </span>
          </div>
          <div className="flex items-center gap-3">
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
