"use client";

import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <div className={`relative group ${className}`}>
      <h1 
        className="glitch-wrapper relative inline-block font-black uppercase tracking-tighter text-white"
        data-text={text} // Crucial: This passes the text to the CSS pseudo-elements
      >
        {text}
      </h1>
    </div>
  );
}