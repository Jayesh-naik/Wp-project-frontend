import React from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

export function SignupLoginPage() {
  const [mode, setMode] = React.useState("login");
  const [form, setForm] = React.useState({ name: "", email: "", password: "" });
  const [showPwd, setShowPwd] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const validEmail = (e) => /.+@.+\..+/.test(e);

  const submit = async (e) => {
    e.preventDefault();
    if (mode === "signup" && !form.name.trim()) return alert("Please enter your name");
    if (!validEmail(form.email)) return alert("Please enter a valid email");
    if (!form.password || form.password.length < 6) return alert("Password must be at least 6 characters");
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      alert(`${mode === "login" ? "Logged in" : "Account created"} (demo)`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page auth-page">
      <div className="auth-card reveal-up">
        <div className="auth-tabs">
          <button className={mode === "login" ? "tab active" : "tab"} onClick={() => setMode("login")}>Login</button>
          <button className={mode === "signup" ? "tab active" : "tab"} onClick={() => setMode("signup")}>Sign Up</button>
        </div>

        <form className="auth-form" onSubmit={submit}>
          {mode === "signup" && (
            <div className="field">
              <div className="field-label">Full Name</div>
              <div className="field-input with-icon">
                <FiUser />
                <input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" />
              </div>
            </div>
          )}
          <div className="field">
            <div className="field-label">Email</div>
            <div className="field-input with-icon">
              <FiMail />
              <input value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" type="email" />
            </div>
          </div>
          <div className="field">
            <div className="field-label">Password</div>
            <div className="field-input with-icon">
              <FiLock />
              <input value={form.password} onChange={(e) => set("password", e.target.value)} placeholder="••••••" type={showPwd ? "text" : "password"} />
            </div>
            <div className="hint"><label><input type="checkbox" checked={showPwd} onChange={(e) => setShowPwd(e.target.checked)} /> Show password</label></div>
          </div>

          <button className="btn-primary auth-submit" type="submit" disabled={loading}>{loading ? (mode === "login" ? "Logging in..." : "Creating...") : (mode === "login" ? "Login" : "Create Account")}</button>

          <div className="or">or continue with</div>
          <div className="auth-socials">
            <button type="button" className="btn-social google">Google</button>
            <button type="button" className="btn-social github">GitHub</button>
            <button type="button" className="btn-social linkedin">LinkedIn</button>
          </div>

          <div className="switch-mode">
            {mode === "login" ? (
              <span>Don't have an account? <button type="button" className="link" onClick={() => setMode("signup")}>Sign up</button></span>
            ) : (
              <span>Already have an account? <button type="button" className="link" onClick={() => setMode("login")}>Login</button></span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
