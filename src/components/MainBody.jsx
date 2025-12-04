"use client";
import Link from "next/link";
import React from "react";
import {
  Locate,
  ImageUp,
  UserSearch,
  Smartphone,
  Mail,
  Earth,
  Wallpaper,
} from "lucide-react";

export default function MainBody() {
  const tools = [
    { id: 1, name: "IP Information", ToolLink: "/ip", icon: Locate },
    { id: 2, name: "Website ScreenShots", ToolLink: "/webshot", icon: Wallpaper },
    { id: 3, name: "PhoneNumber Info", ToolLink: "/phone", icon: Smartphone },
    { id: 4, name: "whois domain", ToolLink: "/whois", icon: Earth },
  ];

  return (
    <div className="p-8 min-h-screen flex flex-col items-center bg-[#0E0E10]">
      <h1 className="text-gray-100 text-4xl mb-10 font-semibold tracking-wide">
        Our Tools
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div
              key={tool.id}
              className="p-6 rounded-xl bg-[#1A1A1F]/70 backdrop-blur-md shadow-md border border-[#2A2A2F]
              hover:border-[#3A3A45] hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-center mb-4">
                <Icon
                  size={38}
                  className="text-gray-200 group-hover:text-white transition-all duration-300"
                />
              </div>

              <h2 className="text-gray-100 text-xl text-center font-light mb-3 group-hover:text-white transition">
                {tool.name}
              </h2>

              <Link
                href={tool.ToolLink}
                className="block text-center text-blue-400 hover:text-blue-300 transition font-medium"
              >
                Try →
              </Link>
            </div>
          );
        })}
      </div>
      <h1 className="text-center mt-10 text-gray-50 font-semibold text-2xl ">
        more coming soon ...
      </h1>
    </div>
  );
}
