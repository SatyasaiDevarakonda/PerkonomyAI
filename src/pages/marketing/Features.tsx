import { Link } from "react-router-dom";
import {
  Wallet, Tag, Plane, Users, BellRing, BarChart3, Mic, Receipt, Sparkles,
  ArrowRight,
} from "lucide-react";
import { productFeatures } from "@/lib/data";
import { MobileFrame } from "@/components/ui/MobileFrame";

const featureIcons: Record<string, any> = {
  Wallet, Tag, Plane, Users, BellRing, BarChart3, Mic, Receipt, Sparkles,
};

export default function Features() {
  return (
    <>
      <section className="container-tight py-20">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Product · Features</span>
          <h1 className="h-display text-4xl sm:text-5xl font-extrabold mt-3 leading-tight">
            Nine features built around how Indian families actually spend.
          </h1>
          <p className="mt-4 text-lg text-ink-600">
            Each one solves a specific, validated pain point — and they compound. The pilot
            programme proved that users save more from feature stacking than from any single
            module on its own.
          </p>
        </div>
      </section>

      <section className="container-tight pb-20 space-y-20">
        {productFeatures.map((f, i) => {
          const Icon = featureIcons[f.icon] || Sparkles;
          const reversed = i % 2 === 1;
          return (
            <div
              key={f.id}
              className={"grid lg:grid-cols-12 gap-10 items-center " + (reversed ? "lg:[&>*:first-child]:order-2" : "")}
            >
              <div className="lg:col-span-7 space-y-4">
                <span className="chip">
                  <Icon className="h-3.5 w-3.5" /> {f.title.split("—")[0].trim()}
                </span>
                <h2 className="h-display text-3xl font-extrabold">{f.title}</h2>
                <p className="text-ink-600">{f.body}</p>
                <ul className="grid sm:grid-cols-2 gap-2 mt-4">
                  {sampleBullets(f.id).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink-700">
                      <span className="h-5 w-5 rounded-full bg-money-100 text-money-700 grid place-items-center text-[10px] font-bold mt-0.5">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/login?signup=1" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 mt-2">
                  Try this feature in the live demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <MobileFrame size="sm" caption={f.title}>
                  <FeatureMockScreen id={f.id} />
                </MobileFrame>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

function sampleBullets(id: string): string[] {
  switch (id) {
    case "card-batao":   return ["Pre-purchase, not post-purchase", "Factors caps and milestones", "Works for UPI-on-credit-card too"];
    case "coupon-hub":   return ["40+ live sources", "One-tap activation", "Re-verified four times daily"];
    case "trip-planner": return ["Card-level expense routing", "Alternative redemption suggestions", "Cash-flow timeline view"];
    case "parivar":      return ["Up to 5 members", "Festival pre-optimisation", "Role-based household access"];
    case "expiry":       return ["30 / 15 / 7-day alerts", "Live redemption value shown", "Under-60-second redemption"];
    case "khazana":      return ["Lounge, golf, movies, concierge", "Quota counters & activation links", "Surfaces day-1 on every new card"];
    case "rec-engine":   return ["60-day spend analysis", "Net-gain after annual fee", "Affiliate-tracked apply links"];
    case "bills":        return ["Routes via highest-yielding wallet", "Statement-cycle aware", "Maximises interest-free credit"];
    case "voice":        return ["7 Indian languages day 1", "Indian-finance-tuned NLU", "Hands-free at the till"];
    default:             return [];
  }
}

function FeatureMockScreen({ id }: { id: string }) {
  switch (id) {
    case "card-batao":
      return (
        <div className="p-3 space-y-3">
          <div className="rounded-xl bg-saffron-50 border border-saffron-200 p-3">
            <div className="text-[10px] font-bold text-saffron-700 uppercase">Card Batao · BigBasket</div>
            <div className="text-sm font-semibold text-ink-900 mt-1">Use HDFC Regalia Gold</div>
            <div className="text-[11px] text-ink-600 mt-0.5">5x rewards + 10% bank offer = ₹245 saved.</div>
          </div>
          <div className="rounded-xl bg-ink-50 p-3 text-[11px] text-ink-700">
            Default would have been your Axis Magnus → only ₹64 reward value.
          </div>
        </div>
      );
    case "coupon-hub":
      return (
        <div className="p-3 space-y-2">
          <div className="text-[10px] font-bold uppercase text-brand-700">Top coupons today</div>
          {[["Swiggy","40% off","₹120"],["Cleartrip","₹1,500 off","₹1,500"],["Myntra","Extra 10%","₹850"]].map(([m,d,s]) => (
            <div key={m} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-ink-100">
              <div className="h-7 w-7 rounded bg-brand-100 grid place-items-center text-[9px] font-bold text-brand-700">{m.slice(0,2).toUpperCase()}</div>
              <div className="flex-1 text-[11px]">
                <div className="font-semibold">{m}</div>
                <div className="text-ink-500">{d}</div>
              </div>
              <span className="text-[10px] font-bold text-money-700">{s}</span>
            </div>
          ))}
        </div>
      );
    case "trip-planner":
      return (
        <div className="p-3 space-y-2">
          <div className="rounded-xl bg-brand-600 text-white p-3">
            <div className="text-[10px] uppercase opacity-80">Goa · 3 nights</div>
            <div className="font-bold">₹21,860 / ₹25,000</div>
            <div className="text-[10px] opacity-80">₹3,140 saved via card allocation</div>
          </div>
          {[["Flight","Axis Magnus","₹540"],["Hotel","Axis Magnus","₹960"],["Dining","HDFC Regalia","₹240"]].map(([t,c,s]) => (
            <div key={t} className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-white border border-ink-100">
              <div><div className="font-semibold">{t}</div><div className="text-ink-500">{c}</div></div>
              <span className="font-bold text-money-700">+{s}</span>
            </div>
          ))}
        </div>
      );
    case "parivar":
      return (
        <div className="p-3 space-y-2">
          <div className="text-[10px] font-bold uppercase text-brand-700">Parivar — 5 members</div>
          {[["A","Aanya","₹2,840"],["R","Rohan","₹2,260"],["M","Maya","₹640"],["S","Suresh","₹980"]].map(([i,n,s]) => (
            <div key={n} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-ink-100">
              <div className="h-7 w-7 rounded-full bg-brand-600 text-white grid place-items-center text-[10px] font-bold">{i}</div>
              <div className="flex-1 text-[11px] font-semibold">{n}</div>
              <span className="text-[11px] font-bold text-money-700">{s}/mo</span>
            </div>
          ))}
        </div>
      );
    case "expiry":
      return (
        <div className="p-3 space-y-2">
          <div className="rounded-xl bg-red-50 border border-red-200 p-3">
            <div className="text-[10px] font-bold text-red-700 uppercase">Expires in 7 days</div>
            <div className="text-sm font-semibold mt-1">₹1,500 BookMyShow vouchers</div>
            <div className="text-[11px] text-ink-600 mt-0.5">SBI ELITE — tap to redeem now.</div>
          </div>
          {[["Lounge visits", "32d"], ["EDGE points", "47d"], ["Annual fee waiver", "60d"]].map(([t, d]) => (
            <div key={t} className="flex justify-between text-[11px] p-2 rounded-lg bg-white border border-ink-100">
              <span className="font-semibold">{t}</span><span className="text-ink-500">{d}</span>
            </div>
          ))}
        </div>
      );
    case "khazana":
      return (
        <div className="p-3 space-y-2">
          <div className="text-[10px] font-bold uppercase text-saffron-700">Hidden benefits found</div>
          {[["Priority Pass","HDFC Regalia","6/year"],["Golf rounds","Axis Magnus","2/year"],["BMS BOGO","SBI ELITE","Until Dec"]].map(([n,c,q]) => (
            <div key={n} className="p-2 rounded-lg bg-white border border-ink-100">
              <div className="text-[11px] font-semibold">{n}</div>
              <div className="text-[10px] text-ink-500">{c} · {q}</div>
            </div>
          ))}
        </div>
      );
    case "rec-engine":
      return (
        <div className="p-3 space-y-2">
          <div className="rounded-xl bg-money-50 border border-money-300 p-3">
            <div className="text-[10px] font-bold text-money-700 uppercase">Suggested addition</div>
            <div className="text-sm font-semibold mt-1">HDFC Diners Black</div>
            <div className="text-[11px] text-ink-600 mt-0.5">+₹11,200/yr − ₹10k fee = ₹1,200 net</div>
          </div>
          <div className="text-[10px] font-bold uppercase text-ink-500 mt-2">Your spend</div>
          {[["Travel","32%"],["Dining","24%"],["Groceries","19%"]].map(([n,p]) => (
            <div key={n} className="text-[11px] p-2 rounded-lg bg-white border border-ink-100 flex justify-between">
              <span>{n}</span><span className="font-bold">{p}</span>
            </div>
          ))}
        </div>
      );
    case "bills":
      return (
        <div className="p-3 space-y-2">
          <div className="text-[10px] font-bold uppercase text-brand-700">Bill optimiser</div>
          {[["Electricity","Amazon Pay","2% back"],["Broadband","CRED Coins","₹50 cb"],["Postpaid","PhonePe","1.5%"]].map(([b,m,r]) => (
            <div key={b} className="p-2 rounded-lg bg-white border border-ink-100">
              <div className="text-[11px] font-semibold flex justify-between">{b}<span className="text-money-700">{r}</span></div>
              <div className="text-[10px] text-ink-500">via {m}</div>
            </div>
          ))}
        </div>
      );
    case "voice":
      return (
        <div className="p-3 space-y-2">
          <div className="rounded-xl bg-brand-50 border border-brand-200 p-3">
            <div className="text-[10px] font-bold text-brand-700 uppercase">हिंदी</div>
            <div className="text-sm mt-1 italic">"Goa kal ke liye 25,000 mein plan karo."</div>
          </div>
          <div className="rounded-xl bg-saffron-50 border border-saffron-200 p-3">
            <div className="text-[10px] font-bold text-saffron-700 uppercase">தமிழ்</div>
            <div className="text-sm mt-1 italic">"இந்த அட்டையில் எத்தனை புள்ளிகள்?"</div>
          </div>
        </div>
      );
    default:
      return <div className="p-3 text-xs text-ink-500">Demo screen</div>;
  }
}
