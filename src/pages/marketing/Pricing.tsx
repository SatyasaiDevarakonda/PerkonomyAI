import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, X, ArrowRight } from "lucide-react";
import { plans, faqs } from "@/lib/data";

const featureMatrix: { label: string; values: [boolean | string, boolean | string, boolean | string] }[] = [
  { label: "Cards tracked",                   values: ["Up to 3 (manual)", "Unlimited", "Unlimited × 5 members"] },
  { label: "Card Batao real-time recs",       values: ["Basic categories", true, true] },
  { label: "Coupon Hub sources",              values: ["Top 20", "All 40+", "All 40+"] },
  { label: "AI Trip Planner",                 values: [false, true, "Auto-split for groups"] },
  { label: "Expiry Rakshak alerts",           values: ["7-day", "30 / 15 / 7-day", "30 / 15 / 7-day"] },
  { label: "Khazana hidden benefits",         values: [false, true, true] },
  { label: "Vernacular voice (7 languages)",  values: [false, true, true] },
  { label: "Family / Parivar dashboard",      values: [false, false, true] },
  { label: "Customer support SLA",            values: ["Email · 24h", "4-hour priority", "4-hour priority"] },
  { label: "Refund window",                   values: ["—", "7 days · pro-rata after", "7 days · pro-rata after"] },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  return (
    <>
      <section className="container-tight py-20 text-center">
        <span className="section-eyebrow">Pricing</span>
        <h1 className="h-display text-4xl sm:text-5xl font-extrabold mt-3">
          One sixth the price of the closest US comparator.
        </h1>
        <p className="mt-4 text-ink-600 max-w-2xl mx-auto">
          We tested ₹299, ₹499 and ₹799 — 73% of users committed to ₹499 after a value
          demonstration. Every plan is prepaid, transparent, and refundable in the first 7 days.
        </p>

        <div className="inline-flex items-center mt-8 p-1 rounded-full bg-ink-100">
          <button
            onClick={() => setAnnual(true)}
            className={"px-4 py-1.5 rounded-full text-sm font-semibold " + (annual ? "bg-white text-ink-900 shadow-card" : "text-ink-500")}
          >Annual · save 17%</button>
          <button
            onClick={() => setAnnual(false)}
            className={"px-4 py-1.5 rounded-full text-sm font-semibold " + (!annual ? "bg-white text-ink-900 shadow-card" : "text-ink-500")}
          >Monthly</button>
        </div>
      </section>

      <section className="container-tight pb-12 grid md:grid-cols-3 gap-6">
        {plans.map((p) => {
          const display = annual ? p.price : Math.round(p.price / 12 * 1.2);
          const cadence = annual ? p.cadence : "/month";
          return (
            <div
              key={p.id}
              className={
                "card-base p-7 flex flex-col " +
                (p.popular ? "ring-2 ring-saffron-400 shadow-pop" : "")
              }
            >
              {p.popular ? <span className="chip-saffron self-start">MOST POPULAR</span> : null}
              <div className="mt-2">
                <div className="text-sm font-semibold text-ink-500 uppercase tracking-widest">{p.name}</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="h-display text-5xl font-extrabold">₹{display}</span>
                  <span className="text-ink-500 text-sm">{cadence}</span>
                </div>
                <p className="text-sm text-ink-600 mt-2">{p.headline}</p>
              </div>
              <ul className="mt-5 space-y-2 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-money-600 mt-0.5 flex-shrink-0" />
                    <span className="text-ink-700">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/login?signup=1"
                className={(p.popular ? "btn-primary" : "btn-secondary") + " mt-6 w-full justify-center"}
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </section>

      <section className="container-tight py-20">
        <h2 className="h-display text-2xl font-extrabold mb-6">Compare every feature</h2>
        <div className="card-base overflow-x-auto">
          <table className="w-full text-sm min-w-[680px]">
            <thead className="bg-ink-50 text-ink-600 uppercase text-xs">
              <tr>
                <th className="text-left p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold">Free</th>
                <th className="p-4 font-semibold bg-saffron-50 text-saffron-700">Individual</th>
                <th className="p-4 font-semibold">Family</th>
              </tr>
            </thead>
            <tbody>
              {featureMatrix.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-ink-50/50"}>
                  <td className="p-4 font-medium text-ink-800">{row.label}</td>
                  {row.values.map((v, idx) => (
                    <td key={idx} className={"p-4 text-center " + (idx === 1 ? "bg-saffron-50/60" : "")}>
                      {v === true ? <CheckCircle2 className="h-5 w-5 text-money-600 inline" /> :
                       v === false ? <X className="h-5 w-5 text-ink-300 inline" /> :
                       <span className="text-ink-700">{v}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-ink-50 py-20">
        <div className="container-tight max-w-3xl">
          <span className="section-eyebrow">Common questions</span>
          <h2 className="h-display text-3xl font-extrabold mt-3 mb-8">Frequently asked</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="card-base group">
                <summary className="cursor-pointer p-5 flex items-center justify-between font-semibold list-none">
                  {f.q}
                  <span className="ml-4 text-ink-400 group-open:rotate-45 transition">＋</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-ink-600 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
