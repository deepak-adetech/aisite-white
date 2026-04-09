"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import ProblemStatement from "@/components/ProblemStatement";
import Services from "@/components/Services";
import MetricsBar from "@/components/MetricsBar";
import CaseStudies from "@/components/CaseStudies";
import ToolAgnostic from "@/components/ToolAgnostic";
import Pillars from "@/components/Pillars";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <ProblemStatement />
        <Services />
        <MetricsBar />
        <CaseStudies />
        <ToolAgnostic />
        <Pillars />
        <Comparison />
        <Pricing />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
