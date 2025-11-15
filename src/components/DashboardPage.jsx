import React from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiMessageSquare,
  FiHome,
  FiUser,
  FiPlusCircle,
  FiSettings,
} from "react-icons/fi";

export function DashboardPage() {
  const features = [
    { to: "/search", title: "Find Rooms", desc: "Discover rooms and roommates", icon: <FiSearch /> },
    { to: "/chat", title: "Messages", desc: "Chat with matches", icon: <FiMessageSquare /> },
    { to: "/post-room", title: "Post a Room", desc: "List your room in minutes", icon: <FiPlusCircle /> },
    { to: "/profile-setup", title: "Profile", desc: "Complete your preferences", icon: <FiUser /> },
    { to: "/", title: "Browse", desc: "Explore recommendations", icon: <FiHome /> },
    { to: "/about-contact", title: "Settings & Help", desc: "Account & support", icon: <FiSettings /> },
  ];

  return (
    <section className="page">
      <div className="page-header">
        <h2>Dashboard</h2>
        <p className="muted">Quick access to everything you need</p>
      </div>
      <div className="dashboard-grid">
        {features.map((f) => (
          <Link key={f.title} to={f.to} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
