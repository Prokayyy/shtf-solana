"use client";

import { FaTwitter, FaTelegram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a0b0b] py-12 px-6 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">$SHTF</h2>
          <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0">
            A meme coin for entertainment purposes only. No financial advice. 
            We are here for the chaos.
          </p>
        </div>

        <div className="flex gap-6 justify-center">
          <SocialLink href="https://twitter.com/shtf_meme" icon={<FaTwitter />} label="Twitter" />
          <SocialLink href="https://t.me/shtf_meme" icon={<FaTelegram />} label="Telegram" />
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: any) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-2xl text-gray-400 hover:text-[#E11D48] hover:scale-110 transition-all bg-white/5 p-3 rounded-full"
      aria-label={label}
    >
      {icon}
    </a>
  );
}