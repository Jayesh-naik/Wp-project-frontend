import React from "react";
import { FiSearch, FiSend, FiMoreVertical, FiCheck } from "react-icons/fi";

export function ChatPage() {
  const [query, setQuery] = React.useState("");
  const [conversations, setConversations] = React.useState([
    { id: "c1", name: "Aarav Sharma", city: "Mumbai", avatar: "https://i.pravatar.cc/64?img=12", last: "Cool, let's connect!", unread: 2 },
    { id: "c2", name: "Priya Singh", city: "Pune", avatar: "https://i.pravatar.cc/64?img=49", last: "Budget looks fine.", unread: 0 },
    { id: "c3", name: "Rohan Verma", city: "Bengaluru", avatar: "https://i.pravatar.cc/64?img=5", last: "Can we visit Saturday?", unread: 1 },
  ]);
  const initialThreads = {
    c1: [
      { id: 1, from: "them", text: "Hi! Saw your profile.", time: "10:05" },
      { id: 2, from: "me", text: "Hey Aarav!", time: "10:06", read: true },
      { id: 3, from: "them", text: "Cool, let's connect!", time: "10:07" },
    ],
    c2: [
      { id: 1, from: "me", text: "Is 16k okay?", time: "09:41", read: true },
      { id: 2, from: "them", text: "Budget looks fine.", time: "09:44" },
    ],
    c3: [
      { id: 1, from: "them", text: "Can we visit Saturday?", time: "08:30" },
    ],
  };
  const [activeId, setActiveId] = React.useState("c1");
  const [threads, setThreads] = React.useState(initialThreads);
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);

  const filtered = conversations.filter((c) => `${c.name} ${c.city}`.toLowerCase().includes(query.toLowerCase()));
  const current = conversations.find((c) => c.id === activeId);
  const messages = threads[activeId] || [];

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const time = new Date();
    const t = time.toTimeString().slice(0,5);
    setThreads((p) => ({
      ...p,
      [activeId]: [...(p[activeId]||[]), { id: Date.now(), from: "me", text, time: t, read: false }],
    }));
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setThreads((p) => ({
        ...p,
        [activeId]: [...(p[activeId]||[]), { id: Date.now()+1, from: "them", text: "Got it! Let's plan.", time: t }],
      }));
      setTyping(false);
      setConversations((cs) => cs.map((c) => c.id === activeId ? { ...c, last: "Got it! Let's plan.", unread: (c.unread||0) + 1 } : c));
    }, 900);
  };

  React.useEffect(() => {
    // Mark unread as read when opening
    setConversations((cs) => cs.map((c) => c.id === activeId ? { ...c, unread: 0 } : c));
  }, [activeId]);

  const topRecent = conversations.slice(0, 3);

  return (
    <section className="page chat-page">
      <div className="recent-chats reveal-down">
        <div className="recent-title">Recent Chats</div>
        <div className="recent-list">
          {topRecent.map((c) => (
            <button key={c.id} className={c.id === activeId ? "recent-item active" : "recent-item"} onClick={() => setActiveId(c.id)}>
              <img className="recent-avatar" src={c.avatar} alt={c.name} />
              <div className="recent-name">{c.name}</div>
              {c.unread ? <span className="badge-dot" /> : null}
            </button>
          ))}
        </div>
      </div>

      <div className="chat-wrap reveal-up">
        <aside className="chat-sidebar">
          <div className="chat-search field-input with-icon">
            <FiSearch />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name or city" />
          </div>
          <div className="chat-list">
            {filtered.map((c) => (
              <button key={c.id} className={c.id === activeId ? "chat-item active" : "chat-item"} onClick={() => setActiveId(c.id)}>
                <img className="chat-avatar" src={c.avatar} alt={c.name} />
                <div className="chat-meta">
                  <div className="chat-name">{c.name}</div>
                  <div className="chat-last">{c.last}</div>
                </div>
                {c.unread ? <span className="badge-dot" /> : null}
              </button>
            ))}
          </div>
        </aside>

        <main className="chat-main">
          {current ? (
            <>
              <header className="chat-header">
                <div className="peer">
                  <img className="chat-avatar" src={current.avatar} alt={current.name} />
                  <div>
                    <div className="chat-name">{current.name}</div>
                    <div className="chat-sub">{current.city}</div>
                  </div>
                </div>
                <button className="icon-only" aria-label="More"><FiMoreVertical /></button>
              </header>

              <div className="chat-thread">
                {messages.map((m) => (
                  <div key={m.id} className={m.from === "me" ? "msg me" : "msg"}>
                    <div className="bubble">
                      <span>{m.text}</span>
                      <div className="meta">
                        <span className="time">{m.time}</span>
                        {m.from === "me" && <span className={m.read ? "ticks read" : "ticks"}><FiCheck /><FiCheck /></span>}
                      </div>
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="msg">
                    <div className="bubble typing"><span><i></i><i></i><i></i></span></div>
                  </div>
                )}
              </div>

              <div className="chat-composer">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
                  placeholder="Type a message"
                />
                <button className="btn-primary" onClick={send}><FiSend /> Send</button>
              </div>
            </>
          ) : (
            <div className="empty">Select a conversation</div>
          )}
        </main>
      </div>
    </section>
  );
}
