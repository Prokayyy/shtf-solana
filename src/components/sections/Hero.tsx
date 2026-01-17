"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTelegram, FaTwitter, FaChartLine } from 'react-icons/fa';
import GlitchText from '../ui/GlitchText';

export default function Hero() {
  return (
    // Z-INDEX FIX: Changed to 'z-0' (instead of -10) to ensure it's visible.
    // LAYOUT FIX: 'flex-col justify-center' ensures content is centered on the first screen.
    <section className="sticky top-0 z-0 h-screen w-full flex flex-col items-center justify-center text-center px-4 bg-[#0a0404] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff3300] opacity-20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center gap-6">
        
        {/* 1. THE FIRE IMAGE (Restored) */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-4xl h-64 md:h-96" // Big height for the logo
        >
          <Image 
            src="/shtf-fire.png" // Make sure your file is named this!
            alt="$SHTF Fire Logo"
            fill
            className="object-contain drop-shadow-[0_0_50px_rgba(255,50,0,0.6)]"
            priority
          />
        </motion.div>

        {/* 2. CHAOS IS CURRENCY Text */}
        <div className="space-y-4">
          <GlitchText 
            text="CHAOS IS CURRENCY" 
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-400 font-mono"
          >
            "When everything dumps, we pump."
          </motion.p>
        </div>

        {/* 3. BUTTONS (Restored) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <a href="https://twitter.com/shtf_meme" className="bg-black border-2 border-[#ff3300] text-[#ff3300] px-8 py-3 rounded-lg font-bold hover:bg-[#ff3300] hover:text-black transition-colors flex items-center gap-2">
            <FaTwitter /> TWITTER
          </a>
          <a href="https://t.me/shtf_meme" className="bg-[#ff3300] text-black px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors flex items-center gap-2">
            <FaTelegram /> TELEGRAM
          </a>
        </motion.div>

      </div>
    </section>
  );
}