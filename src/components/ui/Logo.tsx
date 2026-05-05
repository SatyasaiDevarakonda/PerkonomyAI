import { Link } from "react-router-dom";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5 group">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-card group-hover:shadow-pop transition">
        <svg viewBox="0 0 64 64" className="h-5 w-5">
          <path
            d="M18 44 V20 h12 a8 8 0 0 1 0 16 H22"
            stroke="#F5A623"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="46" cy="22" r="4" fill="#F5A623" />
        </svg>
      </span>
      <span
        className={
          "h-display text-lg font-extrabold tracking-tight " +
          (inverted ? "text-white" : "text-ink-900")
        }
      >
        Perkonomy<span className="text-saffron-500">.</span>
        <span className={inverted ? "text-brand-200" : "text-brand-600"}>AI</span>
      </span>
    </Link>
  );
}
