"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MainHeader() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const tools = [
    { id: 1, name: "IP Information", ToolLink: "/ip" },
    { id: 2, name: "Website ScreenShots", ToolLink: "/webshot" },
    
    { id:3, name: "PhoneNumber Information", ToolLink: "/phone" },
   
    {id: 4, name: "whois domain" , ToolLink: "/whois",}
  
  ];

  return (
    <div className="p-3 flex flex-row justify-between items-center bg-[#0F0F11] border-b border-[#232329]">
     
      <Link href={'/'}><Image src={"/vepng.png"} width={120} height={120} alt="vecura" /></Link>

      <div className="hidden md:flex flex-row gap-10 p-4 text-white font-normal items-center">
        <Link href={"/"}>
          <h1 className="hover:border-b hover:border-gray-50 cursor-pointer">
            What is Vercura?
          </h1>
        </Link>

        <Link href={"/"}>
          <h1 className="hover:border-b hover:border-gray-50 cursor-pointer">
            How To Use
          </h1>
        </Link>

        
        <div
          className="relative"
          onMouseEnter={() => setOpenDropdown(true)}
          onMouseLeave={() => setOpenDropdown(false)}
        >
          <div className="flex flex-row items-center bg-white text-black py-2 px-4 rounded-3xl cursor-pointer">
            <h1>Tools</h1>
            <ChevronDown size={16} className="ml-1" />
          </div>

         
          <AnimatePresence>
            {openDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
                className="absolute mt-2 right-0 w-56 bg-[#16161A] shadow-lg rounded-xl border border-[#232329] p-3 z-50"
              >
                {tools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={tool.ToolLink}
                    className="block py-2 px-3 rounded-lg hover:bg-[#232329] text-[#E7E7EC]"
                  >
                    {tool.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

     
      <button onClick={() => setMobileMenu(true)} className="md:hidden">
        <Menu size={28} color="white" />
      </button>

     
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 right-0 h-full w-64 bg-[#16161A] shadow-xl z-50 p-5"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenu(false)}>
                <X size={28} color="white" />
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-5 text-white">
              <Link href={"/"} onClick={() => setMobileMenu(false)}>
                What is Vercura?
              </Link>
              <Link href={"/"} onClick={() => setMobileMenu(false)}>
                How To Use
              </Link>

              <h1 className="mt-3 text-gray-300">Tools:</h1>
              {tools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.ToolLink}
                  onClick={() => setMobileMenu(false)}
                  className="py-2 px-3 rounded-lg hover:bg-[#232329]"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


// {
//       id: 3,
//       name: "Stalk Social Media",
//       ToolLink: "/socialmedia",
//       icon: UserSearch,
//     },

//     { id: 3, name: "Stalk Social Media", ToolLink: "/socialmedia" },