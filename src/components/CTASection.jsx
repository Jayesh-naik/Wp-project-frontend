// src/components/CTASection.jsx
import React from "react";

export function CTASection() {
  return (
    <section className="cta-section">
      <h2>Ready to Find Your Perfect Roommate?</h2>
      <p>Join our growing community and start your search today!</p>
      <div className="cta-buttons">
        <button className="btn-primary">Get Started</button>
        <button className="btn-outline">Post a Room</button>
      </div>
    </section>
  );
}
