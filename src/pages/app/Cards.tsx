import { useState } from "react";
import { Plus, Sparkles } from "lucide-react";
import { CreditCardVisual } from "@/components/ui/CreditCard";
import { cards } from "@/lib/data";

export default function Cards() {
  const [selectedId, setSelectedId] = useState(cards[0].id);
  const sel = cards.find((c) => c.id === selectedId)!;

  const totalPoints = cards.reduce((a, c) => a + c.pointsBalance, 0);
  const totalValue  = cards.reduce((a, c) => a + c.pointsValueINR, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="h-display text-3xl font-extrabold">My Cards</h1>
          <p className="text-ink-600 text-sm mt-0.5">
            {cards.length} cards · {totalPoints.toLocaleString("en-IN")} points worth{" "}
            <span className="font-bold text-money-700">₹{totalValue.toLocaleString("en-IN")}</span>
          </p>
        </div>
        <button className="btn-primary"><Plus className="h-4 w-4" /> Add a card</button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((c) => (
              <CreditCardVisual
                key={c.id}
                card={c}
                size="md"
                selected={c.id === selectedId}
                onClick={() => setSelectedId(c.id)}
              />
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <div className="card-base p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-saffron-600">Selected</div>
            <div className="h-display text-xl font-extrabold mt-1">{sel.bank} {sel.name}</div>
            <div className="text-xs text-ink-500">{sel.network} · •••• {sel.last4}</div>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <Stat label="Points balance"        value={sel.pointsBalance.toLocaleString("en-IN")} />
              <Stat label="Worth (best route)"    value={`₹${sel.pointsValueINR.toLocaleString("en-IN")}`} accent />
              <Stat label="Annual fee"            value={sel.annualFee ? `₹${sel.annualFee.toLocaleString("en-IN")}` : "Free"} />
              <Stat label="Network"               value={sel.network} />
            </div>

            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-ink-500">Top-earning categories</div>
              <ul className="mt-2 space-y-2">
                {sel.topCategories.map((c) => (
                  <li key={c.category} className="flex items-center justify-between text-sm">
                    <span className="text-ink-800">{c.category}</span>
                    <span className="chip">{c.rate}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-saffron-700">
                <Sparkles className="h-3 w-3" /> Khazana — Hidden benefits
              </div>
              <ul className="mt-2 space-y-2">
                {sel.hiddenBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 p-3 rounded-xl bg-saffron-50 border border-saffron-200 text-sm">
                    <span className="h-5 w-5 rounded-full bg-saffron-500 text-white grid place-items-center text-[10px] font-bold mt-0.5">★</span>
                    <span className="text-ink-800">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
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
