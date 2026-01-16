"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTelegram, FaTwitter, FaChartLine } from 'react-icons/fa';

// RELATIVE IMPORT (Safe)
import GlitchText from '../ui/GlitchText';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pb-20">
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff3300] opacity-20 blur-[150px] rounded-full z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center gap-10">
        
        {/* 1. Main Image */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative w-full max-w-3xl h-64 md:h-96"
        >
          <Image 
            src="/shtf-fire.png" 
            alt="$SHTF Explosion"
            fill
            className="object-contain drop-shadow-[0_10px_30px_rgba(255,50,0,0.5)]"
            priority
          />
        </motion.div>

        {/* 2. Glitch Title & Tagline */}
        <div className="space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* The New Glitch Component */}
            <GlitchText 
              text="CHAOS IS CURRENCY" 
              className="text-4xl md:text-6xl"
            />
          </motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 font-mono max-w-2xl mx-auto border-l-4 border-[#ff3300] pl-4"
          >
            "When everything dumps, we pump."
          </motion.p>
        </div>

        {/* 3. Buttons (Now including Chart) */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          {/* Twitter */}
          <SocialButton 
            href="https://twitter.com/shtf_meme" 
            icon={<FaTwitter />} 
            label="TWITTER" 
            color="bg-black border-2 border-[#ff3300] text-[#ff3300] hover:bg-[#ff3300] hover:text-black" 
          />
          
          {/* Telegram */}
          <SocialButton 
            href="https://t.me/shtf_meme" 
            icon={<FaTelegram />} 
            label="TELEGRAM" 
            color="bg-[#ff3300] border-2 border-[#ff3300] text-black hover:bg-black hover:text-[#ff3300]" 
          />

          {/* Chart (New) */}
          <SocialButton 
            href="https://dexscreener.com/solana/x14VTJnxDiDA4WEVqoQPfp4kUzfwVyD84ULHaHLmoon" 
            icon={<FaChartLine />} 
            label="CHART" 
            color="bg-white border-2 border-white text-black hover:bg-gray-200" 
          />
        </motion.div>

      </div>
    </section>
  );
}

// Reusable Button Helper
function SocialButton({ href, icon, label, color }: any) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} flex items-center gap-3 px-6 py-4 rounded-xl font-black text-lg uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`}
    >
      {icon} {label}
    </a>
  );
}