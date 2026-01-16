import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; 
import "./globals.css";

// FIX: Using relative paths (../) instead of aliases (@/)
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const sans = Inter({ subsets: ["latin"], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: "$SHTF | When It Dumps, We Pump",
  description: "The meme coin for survivors. Chaos is currency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-[#0a0404] text-white overflow-x-hidden selection:bg-[#ff3300] selection:text-white">
        
        <Navbar />

        <main className="flex-grow pt-24">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}