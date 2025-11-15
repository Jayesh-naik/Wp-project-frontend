import React from "react";
import { FiMapPin, FiSearch, FiDollarSign, FiCalendar, FiHeart, FiMessageCircle } from "react-icons/fi";

export function SearchPage() {
  const [mode, setMode] = React.useState("roommates");
  const [filters, setFilters] = React.useState({
    city: "Mumbai",
    gender: "Any",
    minBudget: "",
    maxBudget: "",
    age: "Any",
    occupation: "Any",
    pets: "Any",
    moveIn: "",
  });
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [selectedAreas, setSelectedAreas] = React.useState([]);
  const [priceTier, setPriceTier] = React.useState("");
  const [bedFilter, setBedFilter] = React.useState("");

  const genders = ["Any", "Female", "Male"];
  const budgets = ["", "5000", "10000", "15000", "20000", "25000", "30000", "40000", "50000"]; 
  const ages = ["Any", "18-24", "25-34", "35+"];
  const occupations = ["Any", "Student", "Professional"];
  const pets = ["Any", "Ok", "No"];
  const suggestCities = [
    "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad",
    "Jaipur", "Surat", "Noida", "Gurgaon", "Thane", "Navi Mumbai", "Indore", "Bhopal"
  ];
  const roommateTagSuggestions = ["Fitness", "Movies", "Travel", "Yoga", "Coffee", "Tech", "Books", "Outdoors"];
  const roomAreaSuggestions = ["Powai", "Andheri", "Koramangala", "HSR Layout", "Gachibowli", "Hauz Khas", "Hadapsar", "DLF Phase 3"];
  const priceTiers = ["<15k", "15k-25k", ">25k"];
  const bedOptions = ["1 BR", "2 BR"];

  const roommates = [
    { id: 1, name: "Aarav Sharma", age: 25, gender: "Male", city: "Mumbai, MH", bio: "Software engineer, cricket and cooking.", budget: "₹15,000-₹22,000", tags: ["Fitness", "Movies", "Travel"], pct: 95, avatar: "https://i.pravatar.cc/120?img=12" },
    { id: 2, name: "Aisha Khan", age: 24, gender: "Female", city: "Delhi, DL", bio: "Designer, art and music lover.", budget: "₹12,000-₹18,000", tags: ["Art", "Music", "Coffee"], pct: 92, avatar: "https://i.pravatar.cc/120?img=47" },
    { id: 3, name: "Rohan Verma", age: 27, gender: "Male", city: "Bengaluru, KA", bio: "Product manager, football and tech.", budget: "₹18,000-₹28,000", tags: ["Tech", "Football", "Food"], pct: 88, avatar: "https://i.pravatar.cc/120?img=5" },
    { id: 4, name: "Sneha Patel", age: 23, gender: "Female", city: "Ahmedabad, GJ", bio: "Student, books and cafes.", budget: "₹8,000-₹12,000", tags: ["Books", "Coffee", "Films"], pct: 85, avatar: "https://i.pravatar.cc/120?img=57" },
    { id: 5, name: "Vikram Iyer", age: 28, gender: "Male", city: "Chennai, TN", bio: "Engineer, running and photography.", budget: "₹14,000-₹20,000", tags: ["Running", "Photos", "Gaming"], pct: 84, avatar: "https://i.pravatar.cc/120?img=68" },
    { id: 6, name: "Priya Singh", age: 26, gender: "Female", city: "Pune, MH", bio: "Marketing, yoga and podcasts.", budget: "₹12,000-₹16,000", tags: ["Yoga", "Podcasts", "Outdoors"], pct: 83, avatar: "https://i.pravatar.cc/120?img=49" },
    { id: 7, name: "Ankit Das", age: 29, gender: "Male", city: "Kolkata, WB", bio: "Analyst, cycling and movies.", budget: "₹10,000-₹15,000", tags: ["Cycling", "Movies", "Food"], pct: 81, avatar: "https://i.pravatar.cc/120?img=21" },
    { id: 8, name: "Meera Nair", age: 25, gender: "Female", city: "Hyderabad, TS", bio: "Research, plants and art.", budget: "₹11,000-₹17,000", tags: ["Plants", "Art", "Tea"], pct: 80, avatar: "https://i.pravatar.cc/120?img=32" },
    { id: 9, name: "Kabir Mehta", age: 26, gender: "Male", city: "Gurgaon, HR", bio: "Consultant, running and podcasts.", budget: "₹20,000-₹30,000", tags: ["Running", "Podcasts", "Coffee"], pct: 89, avatar: "https://i.pravatar.cc/120?img=23" },
    { id: 10, name: "Tanya Gupta", age: 22, gender: "Female", city: "Noida, UP", bio: "Student, design and cafes.", budget: "₹8,000-₹12,000", tags: ["Art", "Books", "Coffee"], pct: 83, avatar: "https://i.pravatar.cc/120?img=56" },
    { id: 11, name: "Aditya Rao", age: 27, gender: "Male", city: "Navi Mumbai, MH", bio: "Data analyst, badminton and travel.", budget: "₹14,000-₹18,000", tags: ["Sports", "Travel", "Movies"], pct: 86, avatar: "https://i.pravatar.cc/120?img=8" },
    { id: 12, name: "Neha Kulkarni", age: 25, gender: "Female", city: "Thane, MH", bio: "Teacher, yoga and music.", budget: "₹10,000-₹14,000", tags: ["Yoga", "Music", "Books"], pct: 87, avatar: "https://i.pravatar.cc/120?img=33" },
    { id: 13, name: "Harsh Vardhan", age: 30, gender: "Male", city: "Jaipur, RJ", bio: "Entrepreneur, fitness and tech.", budget: "₹18,000-₹25,000", tags: ["Fitness", "Tech", "Coffee"], pct: 82, avatar: "https://i.pravatar.cc/120?img=19" },
    { id: 14, name: "Ritika Sen", age: 24, gender: "Female", city: "Kolkata, WB", bio: "Writer, films and art.", budget: "₹9,000-₹13,000", tags: ["Films", "Art", "Tea"], pct: 84, avatar: "https://i.pravatar.cc/120?img=45" },
    { id: 15, name: "Arjun Menon", age: 28, gender: "Male", city: "Bengaluru, KA", bio: "PM, startups and cycling.", budget: "₹22,000-₹30,000", tags: ["Cycling", "Tech", "Coffee"], pct: 90, avatar: "https://i.pravatar.cc/120?img=15" },
    { id: 16, name: "Sanya Kapoor", age: 26, gender: "Female", city: "Delhi, DL", bio: "Marketing, fashion and travel.", budget: "₹16,000-₹22,000", tags: ["Travel", "Music", "Outdoors"], pct: 88, avatar: "https://i.pravatar.cc/120?img=28" },
  ];

  const rooms = [
    { id: "r1", title: "Modern 1BHK near Powai Lake", city: "Mumbai, MH", area: "Powai", price: 28000, beds: 1, baths: 1, available: "Now", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200" },
    { id: "r2", title: "Cozy Room in Shared 2BHK", city: "Bengaluru, KA", area: "Koramangala", price: 18000, beds: 1, baths: 1, available: "Dec 10, 2025", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200" },
    { id: "r3", title: "Spacious Studio near Cyber Hub", city: "Gurgaon, HR", area: "DLF Phase 3", price: 22000, beds: 1, baths: 1, available: "Dec 1, 2025", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200" },
    { id: "r4", title: "2BHK with City View", city: "Hyderabad, TS", area: "Gachibowli", price: 32000, beds: 2, baths: 2, available: "Nov 25, 2025", image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200" },
    { id: "r5", title: "1 Room in Shared 3BHK", city: "Delhi, DL", area: "Hauz Khas", price: 15000, beds: 1, baths: 1, available: "Dec 5, 2025", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200" },
    { id: "r6", title: "Studio near Magarpatta", city: "Pune, MH", area: "Hadapsar", price: 17000, beds: 1, baths: 1, available: "Now", image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1200" },
    { id: "r7", title: "1BHK near HSR Layout Park", city: "Bengaluru, KA", area: "HSR Layout", price: 20000, beds: 1, baths: 1, available: "Now", image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200" },
    { id: "r8", title: "Studio in Andheri West", city: "Mumbai, MH", area: "Andheri", price: 26000, beds: 1, baths: 1, available: "Dec 12, 2025", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200" },
    { id: "r9", title: "Room near Gachibowli Stadium", city: "Hyderabad, TS", area: "Gachibowli", price: 14000, beds: 1, baths: 1, available: "Nov 30, 2025", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200" },
    { id: "r10", title: "2BHK near Sector 29", city: "Gurgaon, HR", area: "Sector 29", price: 35000, beds: 2, baths: 2, available: "Dec 20, 2025", image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1200" },
    { id: "r11", title: "Shared Room in Wakad", city: "Pune, MH", area: "Wakad", price: 12000, beds: 1, baths: 1, available: "Now", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200" },
    { id: "r12", title: "1BHK near Salt Lake", city: "Kolkata, WB", area: "Salt Lake", price: 16000, beds: 1, baths: 1, available: "Dec 8, 2025", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200" },
  ];

  const set = (k, v) => setFilters((p) => ({ ...p, [k]: v }));
  const toggle = (arr, setArr, val) => setArr((prev) => prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]);
  const cityMatch = (target) => {
    const c = (filters.city || "").trim().toLowerCase();
    if (!c || c === "any") return true;
    return (target || "").toLowerCase().includes(c);
  };
  const roommateResults = roommates
    .filter((x) => cityMatch(x.city))
    .filter((x) => selectedTags.length ? x.tags.some((t) => selectedTags.includes(t)) : true)
    .slice(0, 12);
  const roomResults = rooms
    .filter((x) => cityMatch(`${x.city} ${x.area}`))
    .filter((x) => selectedAreas.length ? selectedAreas.includes(x.area) : true)
    .filter((x) => priceTier === "<15k" ? x.price < 15000 : priceTier === "15k-25k" ? x.price >= 15000 && x.price <= 25000 : priceTier === ">25k" ? x.price > 25000 : true)
    .filter((x) => bedFilter ? (`${x.beds} BR` === bedFilter) : true)
    .slice(0, 12);

  React.useEffect(() => {
    const els = document.querySelectorAll('.results-grid .reveal-up, .results-grid .reveal-down, .results-grid .reveal-pop');
    els.forEach((el) => el.classList.add('is-visible'));
  }, [mode, roommateResults.length, roomResults.length]);

  return (
    <section className="page search-page">
      <div className="search-header">
        <h2>Find Your Perfect Match</h2>
        <p className="muted">Search for compatible roommates or available rooms</p>
      </div>

      <div className="filter-bar reveal-down">
        <div className="field">
          <div className="field-label">City</div>
          <div className="field-input with-icon">
            <FiMapPin />
            <input list="city-suggest" value={filters.city} onChange={(e) => set("city", e.target.value)} placeholder="Enter city (e.g., Mumbai)" />
            <datalist id="city-suggest">
              {suggestCities.map((c) => (<option key={c} value={c} />))}
            </datalist>
          </div>
        </div>
        <div className="field">
          <div className="field-label">Gender</div>
          <div className="select">
            <select value={filters.gender} onChange={(e) => set("gender", e.target.value)}>
              {genders.map((g) => (<option key={g} value={g}>{g}</option>))}
            </select>
          </div>
        </div>
        <div className="field wide">
          <div className="field-label">Budget</div>
          <div className="range">
            <div className="field-input with-icon">
              <FiDollarSign />
              <select value={filters.minBudget} onChange={(e) => set("minBudget", e.target.value)}>
                {budgets.map((b) => (<option key={`min-${b}`} value={b}>{b ? `₹${b}` : "Min"}</option>))}
              </select>
            </div>
            <div className="dash">–</div>
            <div className="field-input with-icon">
              <FiDollarSign />
              <select value={filters.maxBudget} onChange={(e) => set("maxBudget", e.target.value)}>
                {budgets.map((b) => (<option key={`max-${b}`} value={b}>{b ? `₹${b}` : "Max"}</option>))}
              </select>
            </div>
          </div>
        </div>
        <button className="btn-primary search-btn">
          <FiSearch />
          <span>Search</span>
        </button>
      </div>

      <div className="filter-bar secondary reveal-down">
        <div className="field">
          <div className="field-label">Age</div>
          <div className="select">
            <select value={filters.age} onChange={(e) => set("age", e.target.value)}>
              {ages.map((a) => (<option key={a} value={a}>{a}</option>))}
            </select>
          </div>
        </div>
        <div className="field">
          <div className="field-label">Occupation</div>
          <div className="select">
            <select value={filters.occupation} onChange={(e) => set("occupation", e.target.value)}>
              {occupations.map((o) => (<option key={o} value={o}>{o}</option>))}
            </select>
          </div>
        </div>
        <div className="field">
          <div className="field-label">Pets</div>
          <div className="select">
            <select value={filters.pets} onChange={(e) => set("pets", e.target.value)}>
              {pets.map((p) => (<option key={p} value={p}>{p}</option>))}
            </select>
          </div>
        </div>
        <div className="field">
          <div className="field-label">Move-in</div>
          <div className="field-input with-icon">
            <FiCalendar />
            <input type="date" value={filters.moveIn} onChange={(e) => set("moveIn", e.target.value)} />
          </div>
        </div>
      </div>

      <div className="segmented reveal-pop">
        <button className={mode === "roommates" ? "segment active" : "segment"} onClick={() => setMode("roommates")}>Find Roommates</button>
        <button className={mode === "rooms" ? "segment active" : "segment"} onClick={() => setMode("rooms")}>Find Rooms</button>
      </div>

      {mode === "roommates" ? (
        <div className="suggestions reveal-up">
          <div className="suggest-title">Quick filters</div>
          <div className="chips">
            {roommateTagSuggestions.map((t) => (
              <button key={t} className={selectedTags.includes(t) ? "chip-btn active" : "chip-btn"} onClick={() => toggle(selectedTags, setSelectedTags, t)}>{t}</button>
            ))}
          </div>
        </div>
      ) : (
        <div className="suggestions reveal-up">
          <div className="suggest-group">
            <div className="suggest-title">Areas</div>
            <div className="chips">
              {roomAreaSuggestions.map((a) => (
                <button key={a} className={selectedAreas.includes(a) ? "chip-btn active" : "chip-btn"} onClick={() => toggle(selectedAreas, setSelectedAreas, a)}>{a}</button>
              ))}
            </div>
          </div>
          <div className="suggest-group">
            <div className="suggest-title">Price</div>
            <div className="chips">
              {priceTiers.map((p) => (
                <button key={p} className={priceTier === p ? "chip-btn active" : "chip-btn"} onClick={() => setPriceTier(p === priceTier ? "" : p)}>{p}</button>
              ))}
            </div>
          </div>
          <div className="suggest-group">
            <div className="suggest-title">Beds</div>
            <div className="chips">
              {bedOptions.map((b) => (
                <button key={b} className={bedFilter === b ? "chip-btn active" : "chip-btn"} onClick={() => setBedFilter(b === bedFilter ? "" : b)}>{b}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="results-grid">
        {mode === "roommates" ? (
          roommateResults.length ? roommateResults.map((r) => (
            <article key={r.id} className="result-card reveal-up">
              <div className="card-header">
                <img className="avatar" src={r.avatar} alt={r.name} />
                <div className="title">
                  <h3>{r.name}</h3>
                  <div className="meta">{r.age} • {r.gender}</div>
                  <div className="loc"><FiMapPin /> {r.city}</div>
                </div>
                <div className="match-badge">{r.pct}%</div>
              </div>
              <p className="bio">{r.bio}</p>
              <div className="budget"><FiDollarSign /> {r.budget}</div>
              <div className="tags">
                {r.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="actions-row">
                <button className="message-btn"><FiMessageCircle /> Message</button>
                <button className="icon-only" aria-label="Save"><FiHeart /></button>
              </div>
            </article>
          )) : (
            <div className="muted">No roommates match your filters.</div>
          )
        ) : (
          roomResults.length ? roomResults.map((rm) => (
            <article key={rm.id} className="room-card reveal-up">
              <div className="room-image-wrap">
                <img className="room-image" src={rm.image} alt={rm.title} />
              </div>
              <div className="room-body">
                <h3 className="room-title">{rm.title}</h3>
                <div className="loc"><FiMapPin /> {rm.area}, {rm.city}</div>
                <div className="room-price"><FiDollarSign /> ₹{rm.price.toLocaleString("en-IN")}/mo</div>
                <div className="room-chips">
                  <span className="chip">{rm.beds} BR</span>
                  <span className="chip">{rm.baths} BA</span>
                </div>
                <div className="room-availability"><FiCalendar /> Available: {rm.available}</div>
                <div className="actions-row">
                  <button className="message-btn">Contact</button>
                  <button className="icon-only" aria-label="Save"><FiHeart /></button>
                </div>
              </div>
            </article>
          )) : (
            <div className="muted">No rooms match your filters.</div>
          )
        )}
      </div>
    </section>
  );
}
