"use client";

import Link from 'next/link';

export default function Navbar() {
  // TODO: Double check this address matches yours
  const CA = "x14VTJnxDiDA4WEVqoQPfp4kUzfwVyD84ULHaHLmoon";

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      {/* Changed border color to fire-orange and darkened the background slightly */}
      <div className="max-w-6xl mx-auto bg-[#0a0404]/80 backdrop-blur-md border-2 border-[#ff3300]/30 rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl shadow-orange-900/20">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
           <span className="text-2xl font-black italic text-white tracking-tighter group-hover:text-[#ff3300] transition-colors">
             $SHTF
           </span>
        </Link>

        {/* The "Go $SHTF" Button (Recolored) */}
        <a 
          href={`https://jup.ag/swap/SOL-${CA}`}
          target="_blank" 
          rel="noopener noreferrer"
          // Changed bg to fire-orange [#ff3300] and shadow to solid black
          className="bg-[#ff3300] text-black font-black text-lg px-6 py-2 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all uppercase"
        >
          BUY $SHTF
        </a>
      </div>
    </nav>
  );
}