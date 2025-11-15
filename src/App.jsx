// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global layout components (named exports)
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Main pages (named exports)
import { LandingPage } from "./components/LandingPage";
import { ChatPage } from "./components/ChatPage";
import { SearchPage } from "./components/SearchPage";
import { PostRoomPage } from "./components/PostRoomPage";
import { ProfileSetupPage } from "./components/ProfileSetupPage";
import { SignupLoginPage } from "./components/SignupLoginPage";
import { AboutContactPage } from "./components/AboutContactPage";

import "./App.css";

export default function App() {
  React.useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const selectors = [
      ".hero-section",
      ".section",
      ".card",
      ".card-box",
      ".feature-card",
      ".testimonial",
      ".footer-section",
      ".page-header",
      ".dashboard-grid > *",
      ".nav-links a",
      ".actions .icon-btn"
    ];
    const ensureRevealClass = (el) => {
      const hasVariant = ["reveal-up","reveal-down","reveal-left","reveal-right","reveal-pop"].some(c => el.classList.contains(c));
      if (!hasVariant) el.classList.add("reveal-up");
    };
    const prime = Array.from(document.querySelectorAll(selectors.join(",")));
    prime.forEach(ensureRevealClass);
    if (prefersReduced) {
      prime.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });
    const observeNew = (root = document) => {
      Array.from(root.querySelectorAll(".reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-pop")).forEach((el) => {
        if (!el.classList.contains("is-visible")) io.observe(el);
      });
    };
    observeNew();
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const el = node;
            if (selectors.some((sel) => el.matches && el.matches(sel))) ensureRevealClass(el);
            observeNew(el);
          }
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* Header always visible */}
        <Header />

        {/* Main content area */}
        <main className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/post-room" element={<PostRoomPage />} />
            <Route path="/profile-setup" element={<ProfileSetupPage />} />
            <Route path="/signup-login" element={<SignupLoginPage />} />
            <Route path="/about-contact" element={<AboutContactPage />} />
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}
