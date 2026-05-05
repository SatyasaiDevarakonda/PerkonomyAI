import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Wallet,
  Tag,
  Plane,
  Users,
  BellRing,
  BarChart3,
  Mic,
  Receipt,
  CheckCircle2,
  Star,
  TrendingUp,
} from "lucide-react";
import { MobileFrame } from "@/components/ui/MobileFrame";
import { CreditCardVisual } from "@/components/ui/CreditCard";
import { SurveyBars } from "@/components/charts/SurveyBars";
import { cards, plans, productFeatures, stats, testimonials } from "@/lib/data";

const featureIcons: Record<string, any> = {
  Wallet, Tag, Plane, Users, BellRing, BarChart3, Mic, Receipt, Sparkles,
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero-grid bg-[length:18px_18px]">
        <div className="container-tight grid lg:grid-cols-12 gap-10 py-16 lg:py-24 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <span className="chip-saffron">
                <Sparkles className="h-3.5 w-3.5" /> Now in Hindi, Tamil, Telugu + 4 more
              </span>
              <h1 className="h-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
                Stop losing{" "}
                <span className="text-saffron-600">₹12,000 a year</span>
                <br />
                to your own credit cards.
              </h1>
              <p className="text-lg text-ink-600 max-w-xl">
                Perkonomy AI is the financial co-pilot for Indian households — it
                tells you which card to swipe, surfaces every offer you missed,
                and plans entire trips with optimal card allocation. No bank passwords. No
                dark patterns.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/login?signup=1" className="btn-primary text-base">
                  Try the live demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/trip-planner" className="btn-secondary text-base">
                  See AI Trip Planner
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-500 pt-2">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-money-600" /> RBI Account Aggregator
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-money-600" /> No bank passwords ever
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-saffron-500" /> Pilot NPS 8.5 / 10
                </span>
              </div>
            </motion.div>
          </div>

          {/* Hero device cluster */}
          <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
            <motion.div
              className="absolute right-0 top-0 animate-floaty"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <MobileFrame size="md">
                <DemoDashboardScreen />
              </MobileFrame>
            </motion.div>
            <motion.div
              className="absolute left-0 bottom-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <CardBatatNotificationCard />
            </motion.div>
            <motion.div
              className="absolute -left-4 top-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CreditCardVisual card={cards[0]} size="sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-ink-100 bg-ink-50/60">
        <div className="container-tight py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="h-display text-3xl font-extrabold text-brand-700">{s.value}</div>
              <div className="text-xs text-ink-500 mt-0.5">
                {s.sub} · <span className="font-medium text-ink-700">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="container-tight py-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <span className="section-eyebrow">The problem</span>
          <h2 className="h-display text-3xl sm:text-4xl font-extrabold mt-3">
            Indian households are quietly losing ₹5,000+ crore in unused rewards every year.
          </h2>
          <p className="mt-4 text-ink-600">
            Out of 1,000 cardholders we surveyed, 87% have lost track of their points,
            68% can't tell you their balance, and 49% redeem at sub-optimal value. We
            built Perkonomy AI because none of the existing apps actually <em>decide</em>{" "}
            for you — they only display.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "₹2,340 average pilot saving per user / month",
              "73% willing to pay ₹499/year after a 4-week trial",
              "90% pilot retention — 18 of 20 asked to stay on after pilot",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 text-sm text-ink-700">
                <CheckCircle2 className="h-5 w-5 text-money-600 mt-0.5 flex-shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="card-base p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold h-display">Primary research findings</div>
              <span className="chip">n = 1,000 cardholders</span>
            </div>
            <SurveyBars />
            <p className="text-xs text-ink-500 mt-5">
              Source: Perkonomy AI quantitative survey, 4 metros + 3 Tier-2 cities.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gradient-to-b from-white via-ink-50/60 to-white">
        <div className="container-tight py-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-eyebrow">Nine features. One savings story.</span>
            <h2 className="h-display text-3xl sm:text-4xl font-extrabold mt-3">
              The first end-to-end financial co-pilot for India.
            </h2>
            <p className="mt-4 text-ink-600">
              Built for the way Indian families actually decide — together, in their own language,
              and at the precise moment of purchase.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {productFeatures.map((f) => {
              const Icon = featureIcons[f.icon] || Sparkles;
              return (
                <div key={f.id} className="card-base p-6 hover:shadow-pop transition group">
                  <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-700 grid place-items-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold h-display text-lg">{f.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{f.body}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/features" className="btn-secondary">
              See every feature in detail <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-tight py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-eyebrow">How it works</span>
            <h2 className="h-display text-3xl sm:text-4xl font-extrabold mt-3">
              Four moments. Every day. Real money saved.
            </h2>
            <ol className="mt-8 space-y-6">
              {[
                ["8:00 AM", "Morning notification", "Coupon Hub sends you the day's stack — 40% off Swiggy if you order before 1 PM. ₹120 saved."],
                ["1:00 PM", "Card Batao", "You tap the order screen. Perkonomy says: use HDFC, not Axis. ₹245 stack between bank offer + reward boost."],
                ["6:00 PM", "Khazana surfacing", "Grocery run at BigBasket — Khazana surfaces an unactivated 10% off you'd been paying for. Auto-applied."],
                ["9:30 PM", "Trip planner", "Goa weekend — AI returns a full itinerary with each expense allocated to the optimal card. ₹3,140 saved."],
              ].map(([t, h, b], i) => (
                <li key={t} className="flex gap-4">
                  <div className="flex-shrink-0 h-9 w-9 rounded-full bg-brand-600 text-white grid place-items-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-saffron-600 uppercase tracking-widest">{t}</div>
                    <div className="font-semibold h-display">{h}</div>
                    <div className="text-sm text-ink-600">{b}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="card-base p-6 bg-gradient-to-br from-ink-50 to-white">
            <div className="flex items-center justify-between">
              <div className="font-semibold h-display">Today's recommendations</div>
              <span className="chip-money"><TrendingUp className="h-3.5 w-3.5" /> ₹2,840 this week</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["Card Batao",  "Use HDFC at BigBasket",        "₹245",  "#1F4E79"],
                ["Khazana",     "Activate SBI 10% offer",       "₹180",  "#E8810B"],
                ["Coupon Hub",  "Swiggy 40% — ends in 2 days",  "₹120",  "#10B981"],
                ["AI Trip",     "Goa weekend itinerary ready",  "₹3,140","#2E75B6"],
              ].map(([app, title, amt, color]) => (
                <div key={title} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-ink-100">
                  <div className="h-8 w-8 rounded-lg" style={{ background: color as string, opacity: 0.15 }} />
                  <div className="flex-1">
                    <div className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: color as string }}>{app}</div>
                    <div className="text-sm font-medium text-ink-800">{title}</div>
                  </div>
                  <div className="font-bold text-money-700 tabular-nums">{amt}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="bg-ink-900 text-white py-20">
        <div className="container-tight grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-300">Pricing</span>
            <h2 className="h-display text-3xl sm:text-4xl font-extrabold mt-3 text-white">
              The lowest price.
              <br /> The widest feature set.
            </h2>
            <p className="mt-4 text-ink-300 max-w-sm">
              Free forever, ₹499/year for the full product, or ₹799/year for up to five family
              members. If you don't save at least the subscription fee in a year, full refund.
            </p>
            <Link to="/pricing" className="btn-saffron mt-6">See full comparison</Link>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
            {plans.map((p) => (
              <div key={p.id} className={"rounded-2xl p-5 " + (p.popular ? "bg-white text-ink-900 ring-2 ring-saffron-400" : "bg-ink-800 text-white")}>
                {p.popular ? <span className="chip-saffron mb-3">MOST POPULAR</span> : null}
                <div className="text-sm font-semibold opacity-80">{p.name}</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="h-display text-4xl font-extrabold">₹{p.price}</span>
                  <span className="text-sm opacity-70">{p.cadence}</span>
                </div>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {p.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className={"h-4 w-4 mt-0.5 flex-shrink-0 " + (p.popular ? "text-money-600" : "text-saffron-300")} />
                      <span className="opacity-90">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-tight py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Pilot stories</span>
          <h2 className="h-display text-3xl sm:text-4xl font-extrabold mt-3">
            Twenty households. ₹2,340 saved on average. Every month.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-base p-6 flex flex-col">
              <div className="flex gap-0.5 text-saffron-500">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-3 text-ink-800 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-4 pt-4 border-t border-ink-100 flex items-center justify-between text-sm">
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-ink-500 text-xs">{t.city}</div>
                </div>
                <div className="text-right">
                  <div className="text-money-700 font-bold">₹{t.saving.toLocaleString("en-IN")}</div>
                  <div className="text-xs text-ink-500">saved/month</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-tight pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-ink-900 text-white p-10 lg:p-14 grid lg:grid-cols-2 gap-8 items-center shadow-pop">
          <div>
            <h2 className="h-display text-3xl sm:text-4xl font-extrabold leading-tight">
              Walk through the live prototype in two minutes.
            </h2>
            <p className="mt-3 text-brand-100 max-w-md">
              No signup, no real bank linkage. The demo runs entirely in your browser
              with realistic mock data — exactly the way investors and partners see it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/login?signup=1" className="btn-saffron text-base">Open the demo</Link>
            <Link to="/banks" className="btn-secondary text-base bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white">For banks</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- mini hero components ---------- */

function DemoDashboardScreen() {
  return (
    <div className="p-4 space-y-3">
      <div className="text-[11px] uppercase tracking-widest text-ink-500">This month</div>
      <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white p-4">
        <div className="text-xs opacity-80">Total saved</div>
        <div className="h-display text-3xl font-extrabold">₹4,060</div>
        <div className="text-xs opacity-80 mt-1">↑ 26% vs last month</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[["Card", "₹2.4k", "#1F4E79"], ["Coupons", "₹1.1k", "#2E75B6"], ["Trip", "₹540", "#F39820"], ["Khazana", "₹220", "#10B981"]].map(([l, v, c]) => (
          <div key={l} className="rounded-xl bg-white border border-ink-100 p-2.5">
            <div className="text-[10px] font-semibold uppercase" style={{ color: c }}>{l}</div>
            <div className="text-sm font-bold">{v}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-saffron-50 border border-saffron-200 p-3">
        <div className="text-[11px] font-bold text-saffron-700 uppercase tracking-wide">Card Batao</div>
        <div className="text-xs mt-1 text-ink-700">Use HDFC Regalia at BigBasket — save ₹245.</div>
      </div>
    </div>
  );
}

function CardBatatNotificationCard() {
  return (
    <div className="card-base p-4 w-[280px] flex items-start gap-3">
      <div className="h-10 w-10 rounded-xl bg-brand-600 text-white grid place-items-center flex-shrink-0">
        <Wallet className="h-5 w-5" />
      </div>
      <div className="text-sm">
        <div className="font-semibold">Card Batao · just now</div>
        <div className="text-ink-600 text-xs leading-snug mt-0.5">
          Use HDFC Regalia (10x rewards). Stacks with bank offer for ₹245 vs your default.
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="chip-money">+₹245</span>
          <span className="text-[11px] text-ink-500">5x rewards · 10% offer</span>
        </div>
      </div>
    </div>
  );
}
