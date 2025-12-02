export default function MainFooter() {
  return (
    <div className=" w-full bg-[#0D0D0F] border-t border-[#1C1C21] py-10 px-6 flex flex-col items-center text-gray-400">
      
      <h1 className="text-gray-200 text-2xl font-semibold tracking-wide">
        Vecura
      </h1>

      <p className="text-gray-400 text-sm mt-2 text-center max-w-md leading-relaxed">
        A modern OSINT toolkit that brings powerful open-source intelligence 
        tools together in one unified interface.
      </p>

      <div className="flex gap-8 mt-6 text-sm">
        <a href="/" className="hover:text-gray-200 transition">Home</a>
        <a href="/" className="hover:text-gray-200 transition">Tools</a>
        <a href="/" className="hover:text-gray-200 transition">About</a>
        <a href="/" className="hover:text-gray-200 transition">Privacy</a>
      </div>

      <p className="mt-8 text-xs text-gray-500">
        © {new Date().getFullYear()} Vecura. All rights reserved.
      </p>
    </div>
  );
}
