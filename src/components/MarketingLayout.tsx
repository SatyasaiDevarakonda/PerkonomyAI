import { ReactNode, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./ui/Logo";

const navItems = [
  { to: "/features",     label: "Features" },
  { to: "/trip-planner", label: "AI Trip Planner" },
  { to: "/family",       label: "Family Plan" },
  { to: "/banks",        label: "For Banks" },
  { to: "/pricing",      label: "Pricing" },
  { to: "/about",        label: "About" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/85 border-b border-ink-100">
      <div className="container-tight flex items-center justify-between h-16">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                "px-3 py-2 text-sm font-medium rounded-full transition " +
                (isActive
                  ? "text-brand-700 bg-brand-50"
                  : "text-ink-600 hover:text-ink-900 hover:bg-ink-50")
              }
            >
              {it.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <Link to="/login" className="btn-ghost">Log in</Link>
          <Link to="/login?signup=1" className="btn-primary">
            Try the demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <button
          className="lg:hidden p-2 rounded-md text-ink-700"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open ? (
        <div className="lg:hidden border-t border-ink-100 bg-white">
          <div className="container-tight py-3 flex flex-col gap-1">
            {navItems.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                onClick={() => setOpen(false)}
                className={
                  "px-3 py-2 rounded-md text-sm font-medium " +
                  (loc.pathname === it.to
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-700 hover:bg-ink-50")
                }
              >
                {it.label}
              </Link>
            ))}
            <Link
              to="/login?signup=1"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center mt-2"
            >
              Try the demo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200 pt-16 pb-10 mt-24">
      <div className="container-tight grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Logo inverted />
          <p className="mt-3 text-sm text-ink-400 leading-relaxed max-w-xs">
            The financial co-pilot for Indian credit-card-using households.
          </p>
        </div>
        <FooterCol title="Product" items={[
          ["Features", "/features"],
          ["AI Trip Planner", "/trip-planner"],
          ["Family Plan", "/family"],
          ["Pricing", "/pricing"],
        ]}/>
        <FooterCol title="Company" items={[
          ["About", "/about"],
          ["For Banks", "/banks"],
          ["Press kit", "#"],
          ["Careers", "#"],
        ]}/>
        <FooterCol title="Trust" items={[
          ["Privacy Policy", "#"],
          ["Terms of Service", "#"],
          ["Account Aggregator", "#"],
          ["Refund policy", "#"],
        ]}/>
      </div>
      <div className="container-tight mt-12 pt-6 border-t border-ink-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink-400">
        <p>© {new Date().getFullYear()} Perkonomy AI Pvt. Ltd. — Bengaluru, India.</p>
        <p>RBI-licensed Account Aggregator partner: Perfios.</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="text-xs font-semibold text-white uppercase tracking-widest">{title}</div>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link to={href} className="hover:text-white transition">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MarketingLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        {children ?? <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
