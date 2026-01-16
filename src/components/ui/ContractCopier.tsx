"use client";
import { useState } from 'react';

export default function ContractCopier() {
  const [copied, setCopied] = useState(false);
  const ADDRESS = "x14VTJnxDiDA4WEVqoQPfp4kUzfwVyD84ULHaHLmoon"; // From screenshot

  const handleCopy = () => {
    navigator.clipboard.writeText(ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-2 my-6">
      <span className="text-xs text-gray-400 uppercase tracking-widest">Official Contract (Solana)</span>
      <button 
        onClick={handleCopy}
        className="bg-black/50 border border-red-500/50 px-6 py-4 rounded-xl backdrop-blur-md hover:bg-red-900/20 transition-all cursor-pointer flex items-center gap-3"
      >
        <code className="text-[#E11D48] font-mono font-bold text-lg sm:text-xl">
          {ADDRESS.slice(0, 6)}...{ADDRESS.slice(-6)}
        </code>
        <span className={`text-xs font-bold ${copied ? 'text-green-500' : 'text-gray-500'}`}>
          {copied ? 'COPIED!' : 'COPY'}
        </span>
      </button>
    </div>
  );
}