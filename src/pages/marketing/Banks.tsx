import { Link } from "react-router-dom";
import { Building2, ShieldCheck, TrendingUp, Workflow, ArrowRight } from "lucide-react";

export default function Banks() {
  return (
    <>
      <section className="container-tight py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="chip"><Building2 className="h-3.5 w-3.5" /> For banks · B2B</span>
          <h1 className="h-display text-4xl sm:text-5xl font-extrabold mt-4 leading-tight">
            White-label the financial co-pilot
            <br /> your premium cardholders are looking for.
          </h1>
          <p className="mt-4 text-lg text-ink-600 max-w-2xl">
            Perkonomy AI's optimisation engine, coupon stack and AI trip planner — embedded
            inside your bank's mobile app. Drives higher activation, retention, and per-card
            spend, with a six-month implementation cycle and zero engineering overhead on
            your side.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="mailto:partners@perkonomy.ai" className="btn-primary">Talk to partnerships <ArrowRight className="h-4 w-4" /></a>
            <Link to="/features" className="btn-secondary">See the engine</Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="card-base p-6 bg-gradient-to-br from-brand-700 to-brand-900 text-white border-transparent">
            <div className="text-xs uppercase tracking-widest text-brand-200">Year-1 contract</div>
            <div className="h-display text-4xl font-extrabold mt-1">₹40 Lakh</div>
            <div className="text-brand-100 text-sm">Per-bank licensing, 12-month term</div>
            <div className="mt-6 space-y-2 text-sm">
              {[
                "White-label SDK for iOS + Android",
                "Bank-branded coupon and offer dashboards",
                "AI Trip Planner integration",
                "Co-marketed customer-facing campaigns",
                "Co-developed bank-specific milestone challenges",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-saffron-400 text-ink-900 grid place-items-center text-[10px] font-bold mt-0.5">✓</span>
                  <span className="text-brand-100">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20">
        <div className="container-tight grid md:grid-cols-3 gap-6">
          {[
            [TrendingUp, "+22% activation", "Pilot data shows premium-card activation rises by 22% within 60 days of optimisation tooling rollout."],
            [Workflow,   "6-month delivery", "From signed term sheet to live SDK in your app: typical six-month implementation."],
            [ShieldCheck,"RBI-compliant",   "Architected on RBI-licensed Account Aggregators (Perfios). No bank credentials touch our systems."],
          ].map(([Icon, h, b]: any) => (
            <div key={h} className="card-base p-6">
              <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-700 grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold h-display text-lg">{h}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-tight py-20">
        <div className="rounded-3xl bg-ink-900 text-white p-10 lg:p-14 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="h-display text-3xl sm:text-4xl font-extrabold leading-tight">
              Two contracted banks. <br/> Year 2 target: four.
            </h2>
            <p className="mt-3 text-ink-300 max-w-md">
              We're in early conversations with three private-sector banks for the
              first ₹40 lakh contracts. If your team is responsible for premium-card
              activation, retention, or co-brand strategy — we'd like to speak.
            </p>
          </div>
          <div className="lg:justify-self-end flex flex-wrap gap-3">
            <a href="mailto:partners@perkonomy.ai" className="btn-saffron">Email partnerships</a>
            <Link to="/about" className="btn-secondary bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white">About the team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
