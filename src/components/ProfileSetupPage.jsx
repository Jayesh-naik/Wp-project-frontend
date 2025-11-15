import React from "react";
import { FiMapPin, FiUser, FiEdit2, FiDollarSign } from "react-icons/fi";

export function ProfileSetupPage() {
  const [profile, setProfile] = React.useState({
    name: "",
    city: "",
    bio: "",
    occupation: "Any",
    gender: "Any",
    budget: "",
    interests: [],
  });
  const tags = ["Fitness", "Movies", "Music", "Travel", "Yoga", "Books", "Tech", "Food"];
  const set = (k, v) => setProfile((p) => ({ ...p, [k]: v }));
  const toggle = (val) => setProfile((p) => ({ ...p, interests: p.interests.includes(val) ? p.interests.filter((x) => x !== val) : [...p.interests, val] }));

  const onSave = (e) => {
    e.preventDefault();
    alert("Profile saved (demo)");
  };

  return (
    <section className="page profile-page">
      <div className="cover reveal-down" />

      <div className="profile-card reveal-up">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="avatar-wrap">
            <img src="https://i.pravatar.cc/160?img=12" alt="avatar" />
          </div>
          <div>
            <h2 style={{ margin: 0 }}>{profile.name || "Your Name"}</h2>
            <div className="loc" style={{ marginTop: 4 }}><FiMapPin /> {profile.city || "Your City"}</div>
          </div>
          <button className="btn-outline" style={{ marginLeft: "auto" }} type="button"><FiEdit2 /> Edit Photo</button>
        </div>

        <form className="profile-grid" onSubmit={onSave}>
          <div className="field">
            <div className="field-label">Full Name</div>
            <div className="field-input"><input value={profile.name} onChange={(e) => set("name", e.target.value)} placeholder="Your full name" /></div>
          </div>
          <div className="field">
            <div className="field-label">City</div>
            <div className="field-input with-icon"><FiMapPin /><input value={profile.city} onChange={(e) => set("city", e.target.value)} placeholder="e.g., Mumbai" /></div>
          </div>

          <div className="field">
            <div className="field-label">Occupation</div>
            <div className="field-input">
              <select value={profile.occupation} onChange={(e) => set("occupation", e.target.value)}>
                {(["Any","Student","Professional"]).map((o) => (<option key={o} value={o}>{o}</option>))}
              </select>
            </div>
          </div>
          <div className="field">
            <div className="field-label">Gender</div>
            <div className="field-input">
              <select value={profile.gender} onChange={(e) => set("gender", e.target.value)}>
                {(["Any","Female","Male"]).map((g) => (<option key={g} value={g}>{g}</option>))}
              </select>
            </div>
          </div>

          <div className="field">
            <div className="field-label">Budget (₹/mo)</div>
            <div className="field-input with-icon"><FiDollarSign /><input type="number" min="0" step="1000" value={profile.budget} onChange={(e) => set("budget", e.target.value)} placeholder="e.g., 20000" /></div>
          </div>
          <div className="field full">
            <div className="field-label">About You</div>
            <div className="field-input"><textarea rows={4} value={profile.bio} onChange={(e) => set("bio", e.target.value)} placeholder="Tell us about yourself, lifestyle, preferences..." /></div>
          </div>

          <div className="field full">
            <div className="field-label">Interests</div>
            <div className="badges">
              {tags.map((t) => (
                <button type="button" key={t} className={profile.interests.includes(t) ? "tag-chip active" : "tag-chip"} onClick={() => toggle(t)}>{t}</button>
              ))}
            </div>
          </div>

          <div className="actions" style={{ gridColumn: "1 / -1" }}>
            <button className="btn-primary" type="submit"><FiUser /> Save Changes</button>
          </div>
        </form>
      </div>
    </section>
  );
}
