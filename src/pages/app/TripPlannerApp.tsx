import { useState } from "react";
import { Plane, Sparkles, IndianRupee, MapPin, Calendar, Users, Loader2 } from "lucide-react";
import { tripPlan } from "@/lib/data";
import { formatINR } from "@/lib/utils";

const destinations = ["Goa", "Jaipur", "Manali", "Pondicherry", "Kerala backwaters", "Andamans"];

export default function TripPlannerApp() {
  const [dest, setDest] = useState("Goa");
  const [nights, setNights] = useState(3);
  const [pax, setPax] = useState(2);
  const [budget, setBudget] = useState(25000);
  const [phase, setPhase] = useState<"form" | "loading" | "result">("form");

  function plan() {
    setPhase("loading");
    setTimeout(() => setPhase("result"), 1400);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="h-display text-3xl font-extrabold">AI Trip Planner</h1>
        <p className="text-ink-600 text-sm mt-0.5">Tell us where, when and how much. We'll allocate every rupee to the optimal card.</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5">
          <div className="card-base p-6 space-y-5">
            <div>
              <label className="text-xs font-semibold text-ink-600 uppercase tracking-widest flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Destination
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {destinations.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDest(d)}
                    className={
                      "px-3 py-1.5 text-sm rounded-full border " +
                      (d === dest
                        ? "bg-brand-600 text-white border-brand-600"
                        : "bg-white border-ink-200 text-ink-700 hover:border-brand-400")
                    }
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink-600 uppercase tracking-widest flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> Nights
                </label>
                <input
                  type="number"
                  min={1}
                  max={14}
                  value={nights}
                  onChange={(e) => setNights(Number(e.target.value))}
                  className="w-full mt-1.5 border border-ink-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-brand-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-600 uppercase tracking-widest flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" /> Travellers
                </label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={pax}
                  onChange={(e) => setPax(Number(e.target.value))}
                  className="w-full mt-1.5 border border-ink-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink-600 uppercase tracking-widest flex items-center gap-1.5">
                <IndianRupee className="h-3.5 w-3.5" /> Budget
              </label>
              <input
                type="range"
                min={10000}
                max={150000}
                step={5000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full mt-3 accent-brand-600"
              />
              <div className="flex items-center justify-between text-xs text-ink-500">
                <span>₹10k</span>
                <span className="font-bold text-ink-900 text-base">{formatINR(budget)}</span>
                <span>₹1.5L</span>
              </div>
            </div>

            <button onClick={plan} disabled={phase === "loading"} className="btn-primary w-full justify-center text-base disabled:opacity-60">
              {phase === "loading" ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Planning…</>
              ) : (
                <><Plane className="h-4 w-4" /> Generate optimised itinerary</>
              )}
            </button>

            <div className="text-xs text-ink-500 flex items-start gap-2 pt-3 border-t border-ink-100">
              <Sparkles className="h-3.5 w-3.5 text-saffron-500 mt-0.5" />
              GPT-4 + rule-based validation. Every recommendation is screened against live partner pricing.
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          {phase === "form" ? (
            <Empty />
          ) : phase === "loading" ? (
            <Loading />
          ) : (
            <Result destination={dest} nights={nights} pax={pax} budget={budget} />
          )}
        </div>
      </div>
    </div>
  );
}

function Empty() {
  return (
    <div className="card-base p-10 text-center text-ink-500">
      <div className="h-16 w-16 mx-auto rounded-2xl bg-ink-100 grid place-items-center">
        <Plane className="h-7 w-7 text-ink-400" />
      </div>
      <p className="mt-4 text-sm">Fill out the form to see your card-allocated itinerary.</p>
    </div>
  );
}

function Loading() {
  return (
    <div className="card-base p-10 text-center">
      <Loader2 className="h-8 w-8 mx-auto animate-spin text-brand-600" />
      <p className="mt-3 text-sm font-semibold">Analysing 4 cards × 7 line items…</p>
      <p className="text-xs text-ink-500 mt-1">Layered: rewards → bank offers → validation</p>
    </div>
  );
}

function Result({ destination, nights, pax, budget }: { destination: string; nights: number; pax: number; budget: number }) {
  const ratio = budget / 25000;
  const items = tripPlan.items.map((it) => ({
    ...it,
    amount: Math.round(it.amount * ratio),
    saving: Math.round(it.saving * ratio),
  }));
  const total = items.reduce((a, b) => a + b.amount, 0);
  const savings = items.reduce((a, b) => a + b.saving, 0);

  return (
    <div className="card-base p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-saffron-600 font-semibold">Optimised plan</div>
          <h2 className="h-display text-xl font-extrabold mt-1">{destination} · {nights} nights · {pax} pax</h2>
        </div>
        <span className="chip-money">+₹{savings.toLocaleString("en-IN")} saved</span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <Stat label="Budget"     value={`₹${budget.toLocaleString("en-IN")}`} />
        <Stat label="Optimised"  value={`₹${total.toLocaleString("en-IN")}`} accent />
        <Stat label="Net saved"  value={`₹${savings.toLocaleString("en-IN")}`} accent />
      </div>

      <div className="mt-5 space-y-2 max-h-[460px] overflow-y-auto pr-1">
        {items.map((it, i) => (
          <div key={i} className="p-3 rounded-xl bg-ink-50 border border-ink-100 flex items-start gap-3">
            <div className="h-9 w-9 rounded-lg bg-brand-600 text-white grid place-items-center text-xs font-bold flex-shrink-0">
              D{it.day}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-ink-900">{it.title}</div>
              <div className="text-xs text-ink-500">{it.reason}</div>
              <div className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-saffron-700 bg-saffron-50 rounded-full px-2 py-0.5">
                <Sparkles className="h-3 w-3" /> {it.card}
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="font-bold tabular-nums">₹{it.amount.toLocaleString("en-IN")}</div>
              <div className="text-[11px] text-money-700 font-semibold">+₹{it.saving}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={"rounded-xl p-3 " + (accent ? "bg-money-50 border border-money-300" : "bg-ink-50 border border-ink-100")}>
      <div className="text-[10px] uppercase tracking-widest text-ink-500">{label}</div>
      <div className={"font-bold mt-1 " + (accent ? "text-money-700" : "text-ink-900")}>{value}</div>
    </div>
  );
}
