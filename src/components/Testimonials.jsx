// src/components/Testimonials.jsx
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function Testimonials() {
  const reviews = [
    { name: "Aarav Patel", text: "Found an amazing roommate within 2 days! Great experience." },
    { name: "Sneha Sharma", text: "Safe and easy platform. Verified profiles helped me feel secure." },
    { name: "Rohan Mehta", text: "Posting my room was super simple. Got great responses fast!" },
    { name: "Priya Nair", text: "Loved the India-focused filters. Matched roommates in my city quickly." },
    { name: "Kabir Singh", text: "Clean UI and messaging made coordination easy. Highly recommend." },
    { name: "Ananya Gupta", text: "Got 5 quality leads in a day after posting my room!" },
    { name: "Vikram Rao", text: "Secure, smooth, and no spam. Found a professional flatmate in HSR." },
    { name: "Meera Iyer", text: "Photos and details helped me shortlist fast. Great experience overall." },
  ];

  const [index, setIndex] = React.useState(0);
  const count = reviews.length;

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 4000);
    return () => clearInterval(id);
  }, [count]);

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  return (
    <section className="section testimonials-section">
      <h2 className="reveal-down">What Our Users Say</h2>
      <div className="slider reveal-up">
        <button className="nav prev" aria-label="Previous" onClick={prev}>
          <FiChevronLeft />
        </button>
        <div className="slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {reviews.map((r, i) => (
            <div className="slide" key={i}>
              <div className="card-box testimonial-box">
                <p>"{r.text}"</p>
                <h4>- {r.name}</h4>
              </div>
            </div>
          ))}
        </div>
        <button className="nav next" aria-label="Next" onClick={next}>
          <FiChevronRight />
        </button>
      </div>
      <div className="slider-dots">
        {reviews.map((_, i) => (
          <button key={i} className={i === index ? "dot active" : "dot"} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`}></button>
        ))}
      </div>
    </section>
  );
}
