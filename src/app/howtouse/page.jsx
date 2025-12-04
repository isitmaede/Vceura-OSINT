"use client";
import React from "react";
import { Globe, Search, ToolCase, CheckCircle } from "lucide-react";

export default function HowToUse() {
  const steps = [
    {
      title: "Explore Our Tools",
      description: "Visit our platform and browse through our diverse OSINT tools designed to simplify your investigations.",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Choose a Tool",
      description: "Select the tool that best fits your needs, whether it's data discovery, verification, or analysis.",
      icon: <ToolCase className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Input Data",
      description: "Enter the information you want to investigate. Our tools are intuitive and easy to use.",
      icon: <Search className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Get Insights",
      description: "Receive actionable insights quickly and efficiently. Our platform guides you through every step.",
      icon: <CheckCircle className="w-8 h-8 text-indigo-500" />,
    },
  ];

  return (
    <div className="min-h-screen text-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">How to Use Our Platform</h1>
      <p className="text-gray-400 text-center mb-12 max-w-2xl">
        Our platform provides powerful OSINT tools to help you discover, verify, and analyze information efficiently. Follow these simple steps to get started.
      </p>

      <div className="relative border-l-2 border-gray-700 ml-4">
        {steps.map((step, index) => (
          <div key={index} className="mb-10 ml-6 relative">
            <span className="absolute -left-5 top-0 bg-gray-900 border-2 border-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
              {step.icon}
            </span>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-gray-500 text-sm text-center max-w-md">
        This workflow is designed to make your OSINT investigations simple, structured, and efficient. Each step guides you toward smarter information gathering.
      </p>
    </div>
  );
}
