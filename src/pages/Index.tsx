import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PartyThoughtSection from "@/components/PartyThoughtSection";
import StatePhilosophySection from "@/components/StatePhilosophySection";
import ContemporaryValueSection from "@/components/ContemporaryValueSection";
import ConclusionSection from "@/components/ConclusionSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";
import IntegritySection from "@/components/Integrity";
import Executive from "@/components/Executive";

const Index = () => {
  useScrollAnimation();
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <PartyThoughtSection />
        <StatePhilosophySection />
        <ContemporaryValueSection />
        <IntegritySection />
        <Executive />
        <ConclusionSection />
      </main>
    </div>
  );
};

export default Index;
