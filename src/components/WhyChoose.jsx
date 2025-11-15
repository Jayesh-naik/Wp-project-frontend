// src/components/WhyChoose.jsx
import React from "react";

export function WhyChoose() {
  const features = [
    {
      title: "Smart Matching",
      desc: "Find roommates with similar lifestyles, habits, and budgets.",
      icon: "🏡",
    },
    {
      title: "Verified Users",
      desc: "All profiles are verified to ensure safety and trust.",
      icon: "✅",
    },
    {
      title: "Location Based Search",
      desc: "Search for rooms and roommates in your preferred area.",
      icon: "📍",
    },
  ];

  return (
    <section className="section why-choose-section">
      <h2>Why Choose RoomMateConnect?</h2>
      <div className="card-grid">
        {features.map((item, index) => (
          <div className="card-box" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
