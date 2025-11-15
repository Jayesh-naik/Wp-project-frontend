import React from "react";
import { FiHome, FiMapPin, FiDollarSign, FiUploadCloud, FiCalendar } from "react-icons/fi";

export function PostRoomPage() {
  const [form, setForm] = React.useState({
    title: "",
    location: "",
    rent: "",
    bedrooms: 1,
    bathrooms: 1,
    availableFrom: "",
    description: "",
  });
  const [photos, setPhotos] = React.useState([]);
  const [submitting, setSubmitting] = React.useState(false);

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const onPhotosChange = (e) => {
    const files = Array.from(e.target.files || []);
    setPhotos(files);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return alert("Please add a room title.");
    if (!form.location.trim()) return alert("Please add location.");
    if (!form.rent) return alert("Please add monthly rent.");
    if (String(form.description).trim().length < 50) return alert("Description must be at least 50 characters.");
    setSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 800));
      alert("Your room has been posted! (demo)");
      setForm({ title: "", location: "", rent: "", bedrooms: 1, bathrooms: 1, availableFrom: "", description: "" });
      setPhotos([]);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="page post-room">
      <div className="page-header reveal-down">
        <div className="icon-circle"><FiHome /></div>
        <h2>Post Your Room</h2>
        <p className="muted">Find the perfect roommate for your space</p>
      </div>

      <div className="form-card reveal-up">
        <h3 className="form-title">Room Details</h3>
        <form className="form-grid" onSubmit={onSubmit}>
          <div className="field">
            <div className="field-label">Room Title</div>
            <div className="field-input">
              <input placeholder="e.g., Cozy Studio in Andheri West" value={form.title} onChange={(e) => set("title", e.target.value)} />
            </div>
          </div>

          <div className="field">
            <div className="field-label">Location</div>
            <div className="field-input with-icon">
              <FiMapPin />
              <input placeholder="City, Neighborhood" value={form.location} onChange={(e) => set("location", e.target.value)} />
            </div>
          </div>

          <div className="field">
            <div className="field-label">Monthly Rent</div>
            <div className="field-input with-icon">
              <FiDollarSign />
              <input type="number" min="0" step="1000" placeholder="₹" value={form.rent} onChange={(e) => set("rent", e.target.value)} />
            </div>
          </div>

          <div className="field full">
            <div className="field-label">Description</div>
            <div className="field-input">
              <textarea rows={5} placeholder="Describe the room, nearby landmarks, amenities, flat rules... (min 50 chars)" value={form.description} onChange={(e) => set("description", e.target.value)} />
            </div>
          </div>

          <div className="field full">
            <div className="field-label">Room Photos</div>
            <div className="upload-zone">
              <FiUploadCloud />
              <div>Upload photos of your room</div>
              <small>PNG, JPG up to 10MB</small>
              <label className="btn-outline">
                <input type="file" accept="image/*" multiple onChange={onPhotosChange} style={{ display: "none" }} />
                Choose Files
              </label>
              {!!photos.length && (
                <div className="thumbs">
                  {photos.slice(0, 4).map((f, i) => (
                    <span key={i} className="thumb">{f.name}</span>
                  ))}
                  {photos.length > 4 && <span className="more">+{photos.length - 4} more</span>}
                </div>
              )}
            </div>
          </div>

          <div className="field">
            <div className="field-label">Bedrooms</div>
            <div className="field-input">
              <input type="number" min="0" max="6" value={form.bedrooms} onChange={(e) => set("bedrooms", Number(e.target.value))} />
            </div>
          </div>
          <div className="field">
            <div className="field-label">Bathrooms</div>
            <div className="field-input">
              <input type="number" min="0" max="6" value={form.bathrooms} onChange={(e) => set("bathrooms", Number(e.target.value))} />
            </div>
          </div>

          <div className="field">
            <div className="field-label">Available From</div>
            <div className="field-input with-icon">
              <FiCalendar />
              <input type="date" value={form.availableFrom} onChange={(e) => set("availableFrom", e.target.value)} />
            </div>
          </div>

          <div className="actions">
            <button className="btn-primary" type="submit" disabled={submitting}>{submitting ? "Posting..." : "Post Room"}</button>
          </div>
        </form>
      </div>
    </section>
  );
}
