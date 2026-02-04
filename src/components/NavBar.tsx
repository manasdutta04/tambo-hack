export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="nav-brand">
        <span className="nav-mark" aria-hidden="true">
          <svg viewBox="0 0 48 48" role="img" aria-label="ReliefOps logo">
            <defs>
              <linearGradient id="navGlowGlobal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f6f8ff" />
                <stop offset="100%" stopColor="#9fb7ff" />
              </linearGradient>
            </defs>
            <rect x="3" y="3" width="42" height="42" rx="14" fill="url(#navGlowGlobal)" />
            <path
              d="M15 25c4.5-6.5 13.5-6.5 18 0"
              stroke="#0a0f1f"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M19 31c2.8-3.8 7.2-3.8 10 0"
              stroke="#0a0f1f"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="24" cy="18" r="3" fill="#0a0f1f" />
          </svg>
        </span>
        <div className="brand-text">
          <span>ReliefOps</span>
          <span className="brand-sub">Mission Control</span>
        </div>
      </a>
      <div className="nav-links">
        <a href="/docs">Docs</a>
        <a href="/pricing">Pricing</a>
        <a href="/about">About</a>
        <a href="/security">Security</a>
        <a href="/console" className="nav-cta">Launch Console</a>
      </div>
    </nav>
  );
}
