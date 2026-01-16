"use client";

import { motion } from 'framer-motion';
import { FaWallet, FaExchangeAlt, FaFire } from 'react-icons/fa';

export default function HowToBuy() {
  const steps = [
    {
      num: "01",
      title: "CREATE WALLET",
      desc: "Download Phantom or Solflare from the app store. Keep your seed phrase safe from the fire.",
      icon: <FaWallet />
    },
    {
      num: "02",
      title: "GET SOME SOL",
      desc: "Load up on SOL from an exchange like Binance or Coinbase. You'll need it to ignite the swap.",
      icon: <FaExchangeAlt />
    },
    {
      num: "03",
      title: "BUY $SHTF",
      desc: "Head to Jupiter or Raydium, paste the contract address, and swap. Welcome to the chaos.",
      icon: <FaFire />
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      
      {/* Background Decor (Subtle glow behind the cards) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff3300] opacity-5 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center mb-16 text-white uppercase tracking-tighter drop-shadow-[0_2px_10px_rgba(255,50,0,0.5)]"
        >
          HOW TO <span className="text-[#ff3300]">IGNITE</span>
        </motion.h2>

        <div className="grid gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-[#0a0404] border border-[#ff3300]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-[#ff3300] hover:shadow-[0_0_30px_rgba(255,50,0,0.2)] transition-all duration-300"
            >
              {/* Step Number Badge */}
              <div className="shrink-0 w-16 h-16 bg-[#1a0b0b] border-2 border-[#ff3300] rounded-xl flex items-center justify-center text-2xl font-black text-[#ff3300] shadow-[4px_4px_0_0_#ff3300] group-hover:translate-y-1 group-hover:shadow-[2px_2px_0_0_#ff3300] transition-all">
                {step.num}
              </div>

              {/* Text Content */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-[#ff3300] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-mono text-base md:text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Large Background Icon (Visual only) */}
              <div className="text-[#ff3300] text-6xl opacity-20 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 hidden md:block">
                {step.icon}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}