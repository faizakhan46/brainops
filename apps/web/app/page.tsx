import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/marketing/Hero";
import TrustedBy from "@/components/marketing/TrustedBy";
import Features from "@/components/marketing/Features";
import Pricing from "@/components/marketing/Pricing";
import FAQ from "@/components/marketing/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0B0909] text-white">
        <Hero />
        <TrustedBy />
        <Features />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}