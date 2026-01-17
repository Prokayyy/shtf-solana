"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Origin() {
  return (
    <section className="relative z-10 py-24 px-4 bg-[#0a0404] border-t border-[#ff3300]/20 overflow-hidden min-h-[80vh] flex items-center">
      
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
          <p className="text-xl text-gray-300 font-mono leading-relaxed">
            Born from the trenches. While others panic, we build. 
            <span className="text-white font-bold"> $SHTF</span> is the answer to a market full of noise.
          </p>
        </motion.div>

        {/* Right Side: YOUR IMAGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[300px] md:h-[450px] w-full flex justify-center"
        >
          {/* 👇 CHANGE THE FILENAME HERE 👇 */}
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