"use client";
import {
  Globe,
  MessageCircle,
  Youtube,
  Loader,
  Bot,
  Users,
} from "lucide-react";
import React, { useState } from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState(null);
  const [network, setNetwork] = useState(null);

  const dummyComments = [
    {
      platform: "YouTube",
      icon: <Youtube size={20} className="text-red-500" />,
      url: "https://youtube.com/watch?v=xxxx",
      time: "2 weeks ago",
      comment:
        "She talks a lot about her travel experiences. Interesting perspective.",
    },
    {
      platform: "Reddit",
      icon: <Bot size={20} className="text-orange-500" />,
      url: "https://reddit.com/r/random/comments/xxxx",
      time: "3 months ago",
      comment:
        "I remember posting about this topic last year. Good insight.",
    },
    {
      platform: "Random Forum",
      icon: <MessageCircle size={20} className="text-green-400" />,
      url: "https://exampleforum.com/thread/xxxx",
      time: "1 year ago",
      comment:
        "She asked about photography gear once. Very active in hobby forums.",
    },
  ];

  // بيانات الحسابات المشتبه بها وشبكة الروابط
  const dummyNetwork = {
    nodes: [
      { id: 1, name: "amin.baker", platform: "Facebook", similarity: 92 },
      { id: 2, name: "islam", platform: "Instagram", similarity: 81 },
      { id: 3, name: "n.baker", platform: "Twitter", similarity: 76 },
      { id: 4, name: "ahmed", platform: "TikTok", similarity: 69 },
    ],
    links: [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 1, to: 4 },
    ],
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setComments(dummyComments);
      setNetwork(dummyNetwork);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-4 text-gray-50 flex justify-center items-center mt-6 flex-col">
      <h1 className="text-center font-extrabold text-3xl mb-6">
        OSINT Intelligence Scanner
      </h1>

      <p className="text-gray-300 text-center max-w-md">
        Advanced public trace intel using deep Google Dorking & entity mapping.
      </p>

      <form
        onSubmit={handleSearch}
        className="mt-6 w-full max-w-xl flex items-center gap-3 bg-gradient-to-r from-slate-900 to-blue-900 py-3 px-4 rounded-2xl shadow-lg"
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username or full name..."
          className="flex-1 bg-transparent outline-none text-gray-100 placeholder-gray-400"
          required
        />
        <button
          className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 duration-200"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

     
      {loading && (
        <div className="mt-10 flex flex-col items-center">
          <Loader size={36} className="animate-spin text-blue-400" />
          <p className="text-gray-400 mt-2">Collecting public traces...</p>
        </div>
      )}

{!loading && comments && (
  <div className="mt-16 w-full max-w-xl">
    <h2 className="text-xl font-bold mb-4">Identified Public Profile</h2>

    <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-5 flex gap-4 items-center shadow-xl">
      <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-3xl">
        🧿
      </div>

      <div>
        <h3 className="text-lg font-semibold">{username}</h3>
        <p className="text-gray-400 text-sm">
          Possible identity detected across multiple platforms.
        </p>
        <p className="text-gray-300 text-sm mt-1">
          First seen online: <span className="font-bold">2018</span>
        </p>
      </div>
    </div>
  </div>
)}



{!loading && comments && (
  <div className="mt-12 w-full max-w-xl">
    <h2 className="text-xl font-bold mb-4">Digital Footprint Analysis</h2>

    <div className="grid grid-cols-3 gap-4">
      <div className="p-4 bg-gray-900 rounded-xl border border-gray-800">
        <p className="text-gray-400 text-sm">Activity Level</p>
        <p className="text-2xl font-bold text-blue-400">High</p>
      </div>

      <div className="p-4 bg-gray-900 rounded-xl border border-gray-800">
        <p className="text-gray-400 text-sm">Most Active</p>
        <p className="text-2xl font-bold text-red-400">YouTube</p>
      </div>

      <div className="p-4 bg-gray-900 rounded-xl border border-gray-800">
        <p className="text-gray-400 text-sm">Last Seen</p>
        <p className="text-2xl font-bold text-green-400">6 days</p>
      </div>
    </div>
  </div>
)}



{!loading && comments && (
  <div className="mt-12 w-full max-w-xl">
    <h2 className="text-xl font-bold mb-4">Mutual Links & Matches</h2>

    <div className="space-y-3">
      <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl">
        <p className="text-gray-300 font-semibold">Matched Email</p>
        <p className="text-gray-400 text-sm">islam.baker92@example.com</p>
      </div>

      <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl">
        <p className="text-gray-300 font-semibold">Found on Platforms</p>
        <p className="text-gray-400 text-sm">Instagram, Twitter, TikTok</p>
      </div>

      <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl">
        <p className="text-gray-300 font-semibold">Shared Followers</p>
        <p className="text-gray-400 text-sm">12 mutual connections</p>
      </div>
    </div>
  </div>
)}



{!loading && comments && (
  <div className="mt-12 w-full max-w-xl">
    <h2 className="text-xl font-bold mb-2">Risk Score</h2>

    <div className="bg-gray-900 p-5 border border-gray-800 rounded-xl">
      <p className="text-center text-5xl font-extrabold text-orange-400">64</p>
      <p className="text-center text-gray-400 mt-2">
        Medium digital footprint variability
      </p>
    </div>
  </div>
)}


{!loading && comments && (
  <div className="mt-12 w-full max-w-xl">
    <h2 className="text-xl font-bold mb-4">Public Activity Timeline</h2>

    <div className="border-l border-gray-700 pl-4 space-y-6">
      <div>
        <p className="text-sm text-gray-500">2024</p>
        <p className="text-gray-300">Joined TikTok</p>
      </div>

      <div>
        <p className="text-sm text-gray-500">2023</p>
        <p className="text-gray-300">Became active on Reddit</p>
      </div>

      <div>
        <p className="text-sm text-gray-500">2021</p>
        <p className="text-gray-300">Frequent YouTube comments</p>
      </div>

      <div>
        <p className="text-sm text-gray-500">2018</p>
        <p className="text-gray-300">First online appearance</p>
      </div>
    </div>
  </div>
)}


      
      {!loading && network && (
        <div className="mt-16 w-full max-w-xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users size={20} /> Suspected Accounts Network
          </h2>

          <div className="relative w-full h-72 bg-black/30 rounded-xl border border-gray-800 overflow-hidden">
            <svg width="100%" height="100%">
              {network.links.map((link, idx) => {
                const from = network.nodes.find((n) => n.id === link.from);
                const to = network.nodes.find((n) => n.id === link.to);
                return (
                  <line
                    key={idx}
                    x1={from.id * 60}
                    y1={80}
                    x2={to.id * 60}
                    y2={200}
                    stroke="#555"
                    strokeWidth="2"
                  />
                );
              })}

              {network.nodes.map((node) => (
                <g key={node.id}>
                  <circle
                    cx={node.id * 60}
                    cy={node.id % 2 === 0 ? 200 : 80}
                    r="20"
                    fill="#1e1e1e"
                    stroke="#0af"
                  />
                  <text
                    x={node.id * 60}
                    y={node.id % 2 === 0 ? 245 : 45}
                    fontSize="10"
                    fill="#fff"
                    textAnchor="middle"
                  >
                    {node.name}
                  </text>
                  <text
                    x={node.id * 60}
                    y={node.id % 2 === 0 ? 260 : 60}
                    fontSize="10"
                    fill="#0af"
                    textAnchor="middle"
                  >
                    {node.platform} ({node.similarity}%)
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
