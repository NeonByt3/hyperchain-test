"use client";

import About from "@/components/Home/About";
import HomeSection from "@/components/Home/Home";
import HyperchainReady from "@/components/Home/HyperchainReady";
import ProofOfValidation from "@/components/Home/Proof";

export default function Home() {
  return (
    <>
      <HomeSection />
	  <ProofOfValidation />
	  <About	/>
	  <HyperchainReady	/>
    </>
  );
}
