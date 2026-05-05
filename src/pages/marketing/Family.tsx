import { Link } from "react-router-dom";
import { Users, Heart, Calendar, ArrowRight, Star } from "lucide-react";
import { familyMembers } from "@/lib/data";

export default function Family() {
  const total = familyMembers.reduce((a, b) => a + b.monthlySaving, 0);
  return (
    <>
      <section className="container-tight py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <span className="chip"><Users className="h-3.5 w-3.5" /> Parivar Plan</span>
          <h1 className="h-display text-4xl sm:text-5xl font-extrabold mt-4 leading-tight">
            Indian families don't decide alone.
            <br /> Their finance app shouldn't either.
          </h1>
          <p className="mt-4 text-lg text-ink-600 max-w-xl">
            One household. Up to five members. Every spend automatically routed to whichever
            family member's card maximises returns. Festival shopping pre-optimised. A single,
            shared savings story that finally adds up.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link to="/login?signup=1" className="btn-primary">Try the family demo <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/pricing" className="btn-secondary">See Family Premium · ₹799/yr</Link>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="card-base p-6 bg-gradient-to-br from-saffron-50 to-white">
            <div className="flex items-center justify-between">
              <div className="font-semibold h-display">Sharma family · Bengaluru</div>
              <span className="chip-money">₹{total.toLocaleString("en-IN")}/mo saved</span>
            </div>
            <div className="mt-5 space-y-3">
              {familyMembers.map((m) => (
                <div key={m.id} className="flex items-center gap-4 p-3 rounded-xl bg-white border border-ink-100">
                  <div
                    className="h-11 w-11 rounded-full text-white grid place-items-center font-bold"
                    style={{ background: m.avatarColor }}
                  >
                    {m.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{m.name} <span className="text-xs font-normal text-ink-500">· {m.role}</span></div>
                    <div className="text-xs text-ink-500">Top card: {m.topCard}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-money-700 tabular-nums">₹{m.monthlySaving.toLocaleString("en-IN")}</div>
                    <div className="text-[11px] text-ink-500">this month</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20">
        <div className="container-tight grid md:grid-cols-3 gap-6">
          {[
            [Heart,    "Festival pre-optimisation", "We pre-route Diwali, Dussehra and Eid shopping lists across the family's cards before you check out."],
            [Calendar, "Group travel auto-split",   "AI Trip Planner auto-splits every booking by who has the best card — no spreadsheet required."],
            [Star,     "Collective rewards pool",   "Points across cards are pooled into a single household balance — redeem them anywhere."],
          ].map(([Icon, h, b]: any) => (
            <div key={h} className="card-base p-6">
              <div className="h-11 w-11 rounded-xl bg-saffron-500 text-white grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold h-display text-lg">{h}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
