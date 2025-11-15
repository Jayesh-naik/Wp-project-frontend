// src/components/LandingPage.jsx
import React from "react";
import { HeroSection } from "./HeroSection";
import { WhyChoose } from "./WhyChoose";
import { Testimonials } from "./Testimonials";
import { CTASection } from "./CTASection";
import "./LandingPage.css";



export function LandingPage() {
  return (
    <div>
      <HeroSection />
      <WhyChoose />
      <Testimonials />
      <CTASection />
    </div>
  );
}
