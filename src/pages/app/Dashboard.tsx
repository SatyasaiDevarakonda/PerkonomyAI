import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Sparkles, Wallet, Tag, Plane, BellRing } from "lucide-react";
import { SavingsChart } from "@/components/charts/SavingsChart";
import { CategoryDonut } from "@/components/charts/CategoryDonut";
import { liveNotifications, expiryAlerts, cards } from "@/lib/data";

const appIcons: Record<string, any> = {
  "Card Batao":     Wallet,
  "Coupon Hub":     Tag,
  "AI Trip":        Plane,
  "Khazana":        Sparkles,
  "Expiry Rakshak": BellRing,
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <Header />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 card-base p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-ink-500">Last 6 months</div>
              <div className="h-display text-3xl font-extrabold mt-1">₹14,260 saved</div>
            </div>
            <span className="chip-money"><TrendingUp className="h-3.5 w-3.5" /> ↑ 64% YoY</span>
          </div>
          <div className="mt-5">
            <SavingsChart />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 card-base p-6">
          <div className="text-xs uppercase tracking-widest text-ink-500">Where it came from</div>
          <CategoryDonut />
          <ul className="mt-3 space-y-1.5 text-sm">
            {[
              { c: "#1F4E79", label: "Coupons & offers",  v: 6200 },
              { c: "#2E75B6", label: "Card optimisation", v: 4800 },
              { c: "#F39820", label: "Trip planner",      v: 2140 },
              { c: "#10B981", label: "Bill optimiser",    v: 1120 },
            ].map((r) => (
              <li key={r.label} className="flex items-center gap-2 text-ink-700">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: r.c }} />
                <span className="flex-1">{r.label}</span>
                <span className="font-semibold tabular-nums">₹{r.v.toLocaleString("en-IN")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 card-base p-6">
          <div className="flex items-center justify-between">
            <div className="font-semibold h-display">Recent recommendations</div>
            <Link to="/app/coupons" className="text-sm font-semibold text-brand-700 hover:underline">View all <ArrowRight className="h-4 w-4 inline" /></Link>
          </div>
          <div className="mt-4 divide-y divide-ink-100">
            {liveNotifications.map((n) => {
              const Icon = appIcons[n.app] || Sparkles;
              return (
                <div key={n.id} className="py-4 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 text-brand-700 grid place-items-center flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-saffron-600">{n.app}</div>
                    <div className="font-semibold text-ink-900">{n.title}</div>
                    <div className="text-sm text-ink-600 mt-0.5">{n.body}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-money-700 tabular-nums">+₹{n.saving.toLocaleString("en-IN")}</div>
                    <div className="text-xs text-ink-500">{n.ago}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="card-base p-6">
            <div className="flex items-center justify-between">
              <div className="font-semibold h-display">Expiring soon</div>
              <Link to="/app/alerts" className="text-xs font-semibold text-brand-700 hover:underline">All alerts</Link>
            </div>
            <ul className="mt-3 space-y-3">
              {expiryAlerts.slice(0, 3).map((e) => (
                <li key={e.id} className="p-3 rounded-xl bg-ink-50 flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-red-100 text-red-700 grid place-items-center font-bold text-xs">
                    {e.expiresInDays}d
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{e.title}</div>
                    <div className="text-xs text-ink-500">{e.type} · ₹{e.valueINR.toLocaleString("en-IN")}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-base p-6">
            <div className="font-semibold h-display">Your cards</div>
            <ul className="mt-3 space-y-2">
              {cards.map((c) => (
                <li key={c.id} className="flex items-center gap-3 text-sm">
                  <div className="h-7 w-10 rounded-md" style={{ background: c.color }} />
                  <div className="flex-1">
                    <div className="font-semibold">{c.bank} {c.name}</div>
                    <div className="text-xs text-ink-500">•••• {c.last4}</div>
                  </div>
                  <div className="text-xs font-bold text-money-700">₹{c.pointsValueINR.toLocaleString("en-IN")}</div>
                </li>
              ))}
            </ul>
            <Link to="/app/cards" className="btn-secondary w-full justify-center mt-4">Manage cards</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div>
        <div className="text-xs uppercase tracking-widest text-saffron-600 font-semibold">Today</div>
        <h1 className="h-display text-3xl font-extrabold">You're saving more than 91% of users.</h1>
        <p className="text-ink-600 mt-1 text-sm">4 active recommendations · ₹3,685 in savings available right now.</p>
      </div>
      <div className="flex gap-2">
        <Link to="/app/trip-planner" className="btn-primary"><Plane className="h-4 w-4" /> Plan a trip</Link>
        <Link to="/app/coupons" className="btn-secondary">Coupon Hub</Link>
      </div>
    </div>
  );
}
