// FIX: Using relative paths (../)
import Hero from '../components/sections/Hero';
import HowToBuy from '../components/sections/HowToBuy';
import ContractCopier from '../components/ui/ContractCopier';

export default function Home() {
  return (
    <div className="space-y-24 pb-32">
      <Hero />
      
      {/* Mission Section */}
      <section className="px-6 py-16 text-center bg-gradient-to-b from-[#0a0404] to-[#1a0b0b] rounded-3xl mx-4 max-w-5xl md:mx-auto border-y-2 border-[#ff3300]/20">
        <h2 className="text-4xl font-black text-[#ff3300] mb-8 uppercase tracking-wider">THE MISSION</h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-mono">
          Crypto is a disaster zone. Rugs, scams, and endless dumps. 
          <span className="text-white font-bold"> $SHTF is the response.</span> We are the community that thrives when the panic sets in. No false promises, just pure, unadulterated chaos.
        </p>
      </section>

      <HowToBuy />

      {/* Contract Section */}
      <section className="px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white uppercase">Official Contract</h2>
        <div className="bg-[#ff3300] p-[3px] rounded-2xl max-w-3xl mx-auto shadow-[0_0_50px_rgba(255,50,0,0.3)] hover:scale-[1.02] transition-transform">
           <div className="bg-[#0a0404] rounded-xl p-2">
             <ContractCopier />
           </div>
        </div>
      </section>
    </div>
  );
}