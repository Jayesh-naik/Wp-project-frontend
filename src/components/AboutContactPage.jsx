import React from "react";

export function AboutContactPage() {
  const [form, setForm] = React.useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = React.useState(false);
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return alert("Please complete required fields");
    setSending(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      alert("Thanks! We'll get back to you soon. (demo)");
      setForm({ name: "", email: "", subject: "", message: "" });
    } finally { setSending(false); }
  };

  return (
    <section className="page">
      <div className="page-header reveal-down">
        <h2>About Us</h2>
        <p className="muted">RoomMateConnect helps students and professionals find compatible roommates and rooms—fast, safe, and easy.</p>
      </div>

      <div className="form-card reveal-up" style={{ marginBottom: 16 }}>
        <h3 className="form-title">Contact Us</h3>
        <form className="form-grid" onSubmit={submit}>
          <div className="field">
            <div className="field-label">Full Name</div>
            <div className="field-input"><input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" /></div>
          </div>
          <div className="field">
            <div className="field-label">Email</div>
            <div className="field-input"><input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" /></div>
          </div>
          <div className="field">
            <div className="field-label">Subject</div>
            <div className="field-input"><input value={form.subject} onChange={(e) => set("subject", e.target.value)} placeholder="How can we help?" /></div>
          </div>
          <div className="field full">
            <div className="field-label">Message</div>
            <div className="field-input"><textarea rows={5} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Describe your question or issue..." /></div>
          </div>
          <div className="actions" style={{ gridColumn: "1 / -1" }}>
            <button className="btn-primary" type="submit" disabled={sending}>{sending ? "Sending..." : "Send Message"}</button>
          </div>
        </form>
      </div>

      <div className="muted" style={{ textAlign: "center" }}>Or email us at support@roommateconnect.com</div>
    </section>
  );
}
