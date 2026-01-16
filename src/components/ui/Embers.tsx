"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Embers() {
  const [embers, setEmbers] = useState<number[]>([]);

  useEffect(() => {
    setEmbers(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {embers.map((i) => (
        <motion.div
          key={i}
          initial={{ y: "100%", x: Math.random() * 100 + "%", opacity: 0 }}
          animate={{ 
            y: "-10%", 
            x: `${(Math.random() - 0.5) * 20}%`, 
            opacity: [0, 1, 0, 0] 
          }}
          transition={{ 
            duration: Math.random() * 5 + 5,
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "linear" 
          }}
          className="absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-t from-[#ff3300] to-yellow-500 rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
}