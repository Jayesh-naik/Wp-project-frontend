// src/components/HeroSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Find Your Perfect Roommate Today</h1>
        <p>
          Connect with compatible roommates based on your lifestyle, budget, and
          location preferences. Safe, verified, and easy to use.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate("/search")}>🔎Find Roommates</button>
          <button className="btn-outline" onClick={() => navigate("/post-room")}>🏠Post a Room</button>
        </div>
      </div>
    </section>
  );
}
