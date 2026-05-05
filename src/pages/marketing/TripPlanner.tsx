import { Link } from "react-router-dom";
import { Plane, Sparkles, ArrowRight, MapPin, Calendar, IndianRupee } from "lucide-react";
import { tripPlan } from "@/lib/data";
import { formatINR } from "@/lib/utils";

export default function TripPlannerMarketing() {
  return (
    <>
      <section className="container-tight py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <span className="chip-saffron"><Sparkles className="h-3.5 w-3.5" /> Flagship feature</span>
          <h1 className="h-display text-4xl sm:text-5xl font-extrabold mt-4 leading-tight">
            Tell us where you're going.
            <br /> We'll route every rupee through the right card.
          </h1>
          <p className="mt-4 text-lg text-ink-600 max-w-xl">
            The AI Trip Planner is the only feature like it in India: enter a destination,
            dates, party size, and budget — get back a complete itinerary with each
            expense pre-allocated to the highest-yielding card in your wallet.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link to="/login?signup=1" className="btn-primary"><Plane className="h-4 w-4" /> Plan a trip in the demo</Link>
            <Link to="/features" className="btn-secondary">All features</Link>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              ["₹3,140", "saved on a Goa weekend"],
              ["7 sec", "avg planning time"],
              ["100%", "card-portfolio aware"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="h-display text-2xl font-extrabold text-brand-700">{v}</div>
                <div className="text-xs text-ink-500">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <ItineraryCard />
        </div>
      </section>

      <section className="bg-ink-50 py-20">
        <div className="container-tight grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="section-eyebrow">How the allocation works</span>
            <h2 className="h-display text-3xl font-extrabold mt-3">Three layers of optimisation, run every time you tap "plan".</h2>
            <ol className="mt-8 space-y-5">
              {[
                ["Layer 1 — Reward maximisation", "GPT-4 evaluates every line item against each card's reward rate, category multiplier, milestone bonuses and quarterly caps."],
                ["Layer 2 — Live offer overlay",  "Bank-portal offers (HDFC SmartBuy, SBI Card, Axis Edge) and aggregator coupons are layered in real-time on top of base rewards."],
                ["Layer 3 — Validation",          "A rule-based layer screens every recommendation against ground-truth pricing — the AI is never the final say on financial advice."],
              ].map(([h, b], i) => (
                <li key={h} className="flex gap-4">
                  <div className="h-9 w-9 rounded-full bg-saffron-500 text-white grid place-items-center font-bold">{i + 1}</div>
                  <div>
                    <div className="font-semibold h-display">{h}</div>
                    <div className="text-sm text-ink-600">{b}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <ItineraryCard expanded />
        </div>
      </section>
    </>
  );
}

function ItineraryCard({ expanded = false }: { expanded?: boolean }) {
  return (
    <div className="card-base p-6 max-w-xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold uppercase text-saffron-600 tracking-widest">AI Trip Planner</div>
          <div className="h-display text-xl font-bold mt-1">Goa weekend · 3 nights · 2 pax</div>
        </div>
        <span className="chip-money">+₹{tripPlan.cardSavings.toLocaleString("en-IN")} saved</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-5">
        <Stat icon={<MapPin className="h-4 w-4" />} label="Goa, India" />
        <Stat icon={<Calendar className="h-4 w-4" />} label={`${tripPlan.nights} nights`} />
        <Stat icon={<IndianRupee className="h-4 w-4" />} label={formatINR(tripPlan.totalBudget)} />
      </div>

      <div className="mt-5 space-y-2 max-h-[420px] overflow-y-auto">
        {tripPlan.items.slice(0, expanded ? undefined : 4).map((it) => (
          <div key={it.title} className="p-3 rounded-xl bg-ink-50 border border-ink-100">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[11px] font-semibold uppercase text-brand-700">Day {it.day}</div>
                <div className="text-sm font-semibold text-ink-900">{it.title}</div>
                <div className="text-xs text-ink-500 mt-0.5">{it.reason}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-ink-800 tabular-nums">₹{it.amount.toLocaleString("en-IN")}</div>
                <div className="text-[11px] text-money-700 font-semibold">+₹{it.saving} saved</div>
              </div>
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-saffron-700 bg-saffron-50 rounded-full px-2 py-0.5">
              <Sparkles className="h-3 w-3" /> {it.card}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-ink-100 flex items-center justify-between">
        <div className="text-sm text-ink-600">Optimised total</div>
        <div className="h-display text-2xl font-extrabold text-money-700">
          {formatINR(tripPlan.totalAfterOptimisation)}
        </div>
      </div>
      <Link to="/login?signup=1" className="btn-primary w-full mt-4 justify-center">
        Try this in the demo <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 p-3 rounded-xl bg-ink-50 border border-ink-100 text-sm">
      <span className="text-brand-700">{icon}</span>
      <span className="font-semibold">{label}</span>
    </div>
  );
}
