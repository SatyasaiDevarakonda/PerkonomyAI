import { BellRing, Sparkles, ArrowRight } from "lucide-react";
import { expiryAlerts, cards } from "@/lib/data";

const severity = (d: number) => (d <= 7 ? "high" : d <= 30 ? "medium" : "low");
const tone = {
  high:   { bar: "bg-red-500",    bg: "bg-red-50",    text: "text-red-700",    label: "Urgent" },
  medium: { bar: "bg-saffron-500",bg: "bg-saffron-50",text: "text-saffron-700",label: "Soon" },
  low:    { bar: "bg-money-500",  bg: "bg-money-50",  text: "text-money-700",  label: "Plan ahead" },
};

export default function Alerts() {
  const totalAtRisk = expiryAlerts.reduce((a, b) => a + b.valueINR, 0);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="h-display text-3xl font-extrabold flex items-center gap-2">
          <BellRing className="h-7 w-7 text-saffron-600" /> Expiry Rakshak
        </h1>
        <p className="text-ink-600 text-sm mt-0.5">
          {expiryAlerts.length} alerts · ₹{totalAtRisk.toLocaleString("en-IN")} at risk if no action is taken.
        </p>
      </div>

      <div className="card-base divide-y divide-ink-100">
        {expiryAlerts.map((a) => {
          const card = cards.find((c) => c.id === a.cardId);
          const t = tone[severity(a.expiresInDays)];
          return (
            <div key={a.id} className={"p-5 flex items-start gap-4 " + t.bg}>
              <div className={"h-12 w-12 rounded-xl text-white grid place-items-center font-bold flex-shrink-0 " + t.bar}>
                {a.expiresInDays}d
              </div>
              <div className="flex-1">
                <div className={"text-[11px] font-bold uppercase tracking-widest " + t.text}>
                  {t.label} · {a.type}
                </div>
                <div className="font-semibold text-ink-900 mt-0.5">{a.title}</div>
                <div className="text-xs text-ink-500 mt-0.5">
                  {card ? `${card.bank} ${card.name}` : "Across cards"} · Live value ₹{a.valueINR.toLocaleString("en-IN")}
                </div>
              </div>
              <button className="btn-primary self-center">
                {a.cta} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>

      <div className="card-base p-6 bg-gradient-to-br from-brand-50 to-white">
        <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-saffron-500" /><div className="font-semibold h-display">Why this matters</div></div>
        <p className="text-sm text-ink-600 mt-2 leading-relaxed">
          49% of cardholders redeem points sub-optimally and 68% don't know their balance.
          Expiry Rakshak surfaces every soon-to-expire reward asset with the live redemption
          value already calculated — so a ₹1,500 voucher is never silently written off again.
        </p>
      </div>
    </div>
  );
}
