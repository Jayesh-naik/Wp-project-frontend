// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun, FiMenu } from "react-icons/fi";

export function Header() {
  const [dark, setDark] = React.useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    try {
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (_) {}
  };

  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <h2 className="logo">RoomMateConnect</h2>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/signup-login">Login</Link>
        </nav>
        <div className="actions">
          <div style={{ position: "relative" }}>
            <button
              className="icon-btn"
              aria-label="Menu"
              aria-haspopup="true"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <FiMenu />
            </button>
            {menuOpen && (
              <div className="menu-dropdown" role="menu" aria-label="Quick menu">
                <div className="menu-item" style={{ fontWeight: 600, cursor: "default" }}>Quick Menu</div>
                <Link to="/search" className="menu-item" role="menuitem" onClick={() => setMenuOpen(false)}>
                  Search
                </Link>
                <Link to="/post-room" className="menu-item" role="menuitem" onClick={() => setMenuOpen(false)}>
                  Post
                </Link>
                <Link to="/profile-setup" className="menu-item" role="menuitem" onClick={() => setMenuOpen(false)}>
                  Profile
                </Link>
                <Link to="/chat" className="menu-item" role="menuitem" onClick={() => setMenuOpen(false)}>
                  Chat
                </Link>
                <Link to="/about-contact" className="menu-item" role="menuitem" onClick={() => setMenuOpen(false)}>
                  About / Contact
                </Link>
              </div>
            )}
          </div>
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}

