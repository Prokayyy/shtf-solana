"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Origin() {
  return (
    // CHANGE 1: 'sticky top-0' makes it hold in place.
    // CHANGE 2: 'min-h-screen' ensures it fills the whole view.
    <section className="sticky top-0 z-20 min-h-screen py-24 px-4 bg-[#0a0404] border-t border-[#ff3300]/20 flex items-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#ff3300] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-20">
        
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#ff3300] uppercase tracking-wider">
            THE ORIGIN
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 font-mono leading-relaxed">
            <p>
              Born from the trenches of Solana. <span className="text-white font-bold">$SHTF</span> was created for those who've seen it all.
            </p>
            <p className="border-l-4 border-[#ff3300] pl-4 italic text-white bg-[#ff3300]/5 py-2 pr-2 rounded-r-lg">
              "Rugs, jeets, and endless dumps... We're still here."
            </p>
          </div>
        </motion.div>

        {/* Right Side: THE IMAGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[300px] md:h-[450px] w-full flex justify-center"
        >
          {/* Ensure 'origin.png' is in your public folder! */}
          <Image 
            src="/origin.png" 
            alt="Origin Image"
            width={450}
            height={450}
            className="object-contain drop-shadow-[0_10px_30px_rgba(255,50,0,0.4)] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}