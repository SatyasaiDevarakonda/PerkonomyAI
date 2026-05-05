import { useMemo, useState } from "react";
import { Search, Tag, ArrowRight, Sparkles } from "lucide-react";
import { coupons, cards, Coupon } from "@/lib/data";

const categories = ["All", "Food", "Travel", "Grocery", "Fashion", "Bills"] as const;

export default function Coupons() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return coupons
      .filter((c) => (cat === "All" ? true : c.category === cat))
      .filter((c) => (q ? (c.merchant + c.title).toLowerCase().includes(q.toLowerCase()) : true))
      .sort((a, b) => b.estSaving - a.estSaving);
  }, [cat, q]);

  const totalAvailable = filtered.reduce((a, b) => a + b.estSaving, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="h-display text-3xl font-extrabold">Coupon Hub</h1>
          <p className="text-ink-600 text-sm mt-0.5">
            {filtered.length} live offers from 40+ sources · ₹{totalAvailable.toLocaleString("en-IN")} available right now.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-ink-200 rounded-full px-3 py-2 w-full sm:w-72">
          <Search className="h-4 w-4 text-ink-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search merchants or offers"
            className="flex-1 outline-none text-sm bg-transparent"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={
              "px-4 py-1.5 rounded-full text-sm font-semibold transition border " +
              (c === cat
                ? "bg-brand-600 text-white border-brand-600"
                : "bg-white text-ink-700 border-ink-200 hover:border-brand-400")
            }
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((c) => (
          <CouponCard key={c.id} coupon={c} />
        ))}
      </div>
    </div>
  );
}

function CouponCard({ coupon }: { coupon: Coupon }) {
  const card = cards.find((c) => c.id === coupon.bestCardId);
  return (
    <div className="card-base p-5 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-bold h-display">{coupon.merchant}</div>
          <div className="text-xs text-ink-500">{coupon.category} · expires in {coupon.expiresInDays}d</div>
        </div>
        <span className="chip-saffron"><Tag className="h-3 w-3" /> {coupon.discount}</span>
      </div>
      <p className="mt-3 text-sm text-ink-700 leading-relaxed flex-1">{coupon.title}</p>

      {card ? (
        <div className="mt-4 p-3 rounded-xl bg-ink-50 border border-ink-100 flex items-center gap-3">
          <div className="h-7 w-10 rounded-md flex-shrink-0" style={{ background: card.color }} />
          <div className="flex-1 text-xs">
            <div className="font-semibold text-ink-900">Stack with {card.bank} {card.name}</div>
            <div className="text-ink-500">+₹{coupon.estSaving.toLocaleString("en-IN")} estimated saving</div>
          </div>
          <Sparkles className="h-4 w-4 text-saffron-500" />
        </div>
      ) : null}

      <div className="mt-4 flex items-center justify-between">
        {coupon.code ? (
          <code className="px-2 py-1 rounded-md bg-ink-100 text-xs font-mono">{coupon.code}</code>
        ) : <span className="text-xs text-ink-500">No code needed</span>}
        <button className="text-sm font-semibold text-brand-700 hover:underline inline-flex items-center gap-1">
          Activate <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
