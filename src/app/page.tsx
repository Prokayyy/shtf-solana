import Hero from '../components/sections/Hero';
import Origin from '../components/sections/Origin';
import HowToBuy from '../components/sections/HowToBuy';
import ContractCopier from '../components/ui/ContractCopier';

export default function Home() {
  return (
    <div className="bg-[#0a0404]">
      
      {/* 1. HERO: Sticky at z-0 (Bottom Layer) */}
      <Hero />
      
      {/* 2. ORIGIN: Sticky at z-10 (Slides over Hero) */}
      {/* NOTE: Ensure Origin.tsx has 'sticky top-0 z-10' in its class string */}
      <Origin />

      {/* 3. HOW TO BUY: Sticky at z-20 (Slides over Origin) */}
      <HowToBuy />

      {/* 4. CONTRACT: Sticky at z-30 */}
      <section className="sticky top-0 z-30 min-h-screen flex items-center justify-center px-4 bg-[#0a0404] border-t border-[#ff3300]/20">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold mb-8 text-white uppercase tracking-wider">Official Contract</h2>
          <div className="bg-[#ff3300] p-[3px] rounded-2xl max-w-3xl mx-auto shadow-[0_0_50px_rgba(255,50,0,0.3)]">
             <div className="bg-[#0a0404] rounded-xl p-2">
               <ContractCopier />
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}