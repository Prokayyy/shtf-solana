"use client";

import { motion } from 'framer-motion';
import { FaWallet, FaExchangeAlt, FaFire } from 'react-icons/fa';

export default function HowToBuy() {
  const steps = [
    { num: "01", title: "CREATE WALLET", desc: "Download Phantom or Solflare.", icon: <FaWallet /> },
    { num: "02", title: "GET SOL", desc: "Load up on SOL from an exchange.", icon: <FaExchangeAlt /> },
    { num: "03", title: "BUY $SHTF", desc: "Head to Jupiter and swap.", icon: <FaFire /> }
  ];

  return (
    // CHANGE: Added 'sticky top-0 z-30 min-h-screen bg-[#0a0404]'
    // This makes it slide over Origin and stack on top.
    <section className="sticky top-0 z-30 min-h-screen py-24 px-4 bg-[#0a0404] border-t border-[#ff3300]/20 flex flex-col justify-center relative">
      <div className="max-w-5xl mx-auto w-full">
        
        <h2 className="text-5xl font-black text-center mb-16 text-[#ff3300] uppercase tracking-tight">
          HOW TO IGNITE
        </h2>

        <div className="grid gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-gradient-to-r from-[#1a0b0b] to-[#0a0404] border-2 border-[#ff3300]/40 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-[0_0_30px_rgba(255,50,0,0.1)]"
            >
              <div className="bg-black text-[#ff3300] text-3xl font-black w-16 h-16 flex items-center justify-center rounded-xl border-2 border-[#ff3300] shrink-0">
                {step.num}
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase">{step.title}</h3>
                <p className="text-gray-400 font-mono">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}