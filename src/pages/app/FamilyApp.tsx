import { Users, UserPlus, ShoppingBag, PartyPopper } from "lucide-react";
import { familyMembers } from "@/lib/data";

export default function FamilyApp() {
  const total = familyMembers.reduce((a, b) => a + b.monthlySaving, 0);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="h-display text-3xl font-extrabold flex items-center gap-2">
            Parivar <span className="chip-saffron">5 members</span>
          </h1>
          <p className="text-ink-600 text-sm mt-0.5">Auto-routed across the household. Single savings story.</p>
        </div>
        <button className="btn-primary"><UserPlus className="h-4 w-4" /> Invite member</button>
      </div>

      <div className="card-base p-6 bg-gradient-to-br from-brand-700 to-brand-900 text-white border-transparent">
        <div className="text-xs uppercase tracking-widest text-brand-200">This month</div>
        <div className="h-display text-4xl font-extrabold mt-1">₹{total.toLocaleString("en-IN")}</div>
        <div className="text-brand-100 text-sm">total household savings · ↑ 31% vs last month</div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {familyMembers.map((m) => (
          <div key={m.id} className="card-base p-5 flex items-center gap-4">
            <div
              className="h-12 w-12 rounded-full text-white grid place-items-center font-bold text-lg flex-shrink-0"
              style={{ background: m.avatarColor }}
            >
              {m.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="font-semibold">{m.name} <span className="text-xs font-normal text-ink-500">· {m.role}</span></div>
              <div className="text-xs text-ink-500">Best card: {m.topCard}</div>
              <div className="mt-2 h-2 rounded-full bg-ink-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-600 to-saffron-500"
                  style={{ width: `${Math.min(100, (m.monthlySaving / 3500) * 100)}%` }}
                />
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-money-700 tabular-nums">₹{m.monthlySaving.toLocaleString("en-IN")}</div>
              <div className="text-[11px] text-ink-500">this month</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card-base p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2"><PartyPopper className="h-4 w-4 text-saffron-600" /> <span className="font-semibold h-display">Diwali pre-optimisation</span></div>
            <span className="chip-saffron">Active</span>
          </div>
          <p className="text-sm text-ink-600 mt-3">
            21 items in your shopping list have been pre-routed across the family's
            cards. Estimated festival savings: <strong>₹4,820</strong>.
          </p>
          <div className="mt-4 space-y-2">
            {[
              ["Sweets · Anand Sweets",       "Rohan · Magnus", "₹260"],
              ["Lights · Big Bazaar",         "Aanya · Regalia", "₹140"],
              ["Gifts · Amazon",              "Maya · Amazon Pay ICICI", "₹180"],
              ["Family clothes · Pantaloons", "Aanya · Regalia", "₹620"],
            ].map(([title, route, save]) => (
              <div key={title} className="p-3 rounded-xl bg-ink-50 border border-ink-100 flex items-center gap-3">
                <ShoppingBag className="h-4 w-4 text-ink-400" />
                <div className="flex-1 text-sm">
                  <div className="font-semibold">{title}</div>
                  <div className="text-xs text-ink-500">→ {route}</div>
                </div>
                <span className="font-bold text-money-700 text-sm">{save}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-base p-6">
          <div className="flex items-center gap-2 mb-3"><Users className="h-4 w-4 text-brand-700" /><span className="font-semibold h-display">Collective rewards pool</span></div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Stat label="Pooled points" value="36,750" />
            <Stat label="Best-route value" value="₹17,770" accent />
            <Stat label="Lounge visits left" value="14" />
            <Stat label="Voucher balance"  value="₹3,200" />
          </div>
          <button className="btn-secondary w-full justify-center">Redeem from pool</button>
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
