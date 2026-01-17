import Hero from '../components/sections/Hero';
import Origin from '../components/sections/Origin'; // <--- THIS MUST BE HERE
import HowToBuy from '../components/sections/HowToBuy';
import ContractCopier from '../components/ui/ContractCopier';

export default function Home() {
  return (
    // Remove all extra divs. The 'sticky' logic handles the layout now.
    <div className="bg-[#0a0404]">
      
      {/* 1. Hero (Sticks first, z-0) */}
      <Hero />
      
      {/* 2. Origin (Slides over Hero & Sticks, z-20) */}
      <Origin />

      {/* 3. How To Buy (Slides over Origin & Sticks, z-30) */}
      <HowToBuy />

      {/* 4. Contract (Slides over everything, z-40) */}
      <section className="sticky top-0 z-40 min-h-screen flex items-center justify-center px-4 bg-[#0a0404] border-t border-[#ff3300]/20">
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