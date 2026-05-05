import { ReactNode, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CreditCard,
  Tag,
  Plane,
  Users,
  BellRing,
  LogOut,
  Sparkles,
} from "lucide-react";
import { Logo } from "./ui/Logo";
import { fakeLogout, getUser } from "@/lib/auth";

const items = [
  { to: "/app",              icon: LayoutDashboard, label: "Dashboard" },
  { to: "/app/cards",        icon: CreditCard,      label: "My Cards" },
  { to: "/app/coupons",      icon: Tag,             label: "Coupon Hub" },
  { to: "/app/trip-planner", icon: Plane,           label: "AI Trip Planner" },
  { to: "/app/family",       icon: Users,           label: "Parivar" },
  { to: "/app/alerts",       icon: BellRing,        label: "Expiry Rakshak" },
];

export default function AppLayout({ children }: { children?: ReactNode }) {
  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    if (!user) navigate("/login", { replace: true });
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col bg-ink-50">
      <header className="bg-white border-b border-ink-100 sticky top-0 z-30">
        <div className="container-tight flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Logo />
            <span className="hidden md:inline-flex chip-saffron"><Sparkles className="h-3 w-3" /> Live demo</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <div className="text-sm font-semibold text-ink-900">{user.name}</div>
              <div className="text-xs text-ink-500">Family · Bengaluru</div>
            </div>
            <div
              className="h-9 w-9 rounded-full bg-brand-600 text-white grid place-items-center font-semibold"
              aria-hidden
            >
              {user.name.charAt(0).toUpperCase()}
            </div>
            <button
              onClick={() => {
                fakeLogout();
                navigate("/");
              }}
              title="Sign out"
              className="rounded-full p-2 text-ink-500 hover:bg-ink-100"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <div className="container-tight grid grid-cols-12 gap-6 py-6 flex-1 w-full">
        <aside className="col-span-12 lg:col-span-3 xl:col-span-2">
          <nav className="card-base p-2">
            {items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                end={it.to === "/app"}
                className={({ isActive }) =>
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition " +
                  (isActive
                    ? "bg-brand-600 text-white shadow-card"
                    : "text-ink-700 hover:bg-ink-100")
                }
              >
                <it.icon className="h-4 w-4" />
                {it.label}
              </NavLink>
            ))}
          </nav>

          <div className="card-base p-4 mt-4 bg-gradient-to-br from-brand-600 to-brand-800 text-white border-transparent shadow-pop">
            <div className="text-xs uppercase tracking-widest text-brand-200">This year</div>
            <div className="mt-1 text-3xl font-extrabold h-display">₹14,260</div>
            <div className="text-xs text-brand-100 mt-1">total saved across the family</div>
            <Link to="/app/family" className="mt-3 inline-flex text-xs font-semibold underline decoration-saffron-300 underline-offset-4">
              See breakdown →
            </Link>
          </div>
        </aside>

        <main className="col-span-12 lg:col-span-9 xl:col-span-10">
          {children ?? <Outlet />}
        </main>
      </div>
    </div>
  );
}
