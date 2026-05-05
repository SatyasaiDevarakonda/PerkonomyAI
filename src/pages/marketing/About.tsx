import { Link } from "react-router-dom";
import { ShieldCheck, Heart, Globe, ArrowRight } from "lucide-react";

const team = [
  { name: "Bhavesh Varma Konduru",                roll: "127018008", role: "Co-founder · Product" },
  { name: "Devarakonda Satyasai Yellayya",        roll: "127018011", role: "Co-founder · Engineering" },
  { name: "G R Pavanendra",                       roll: "127018012", role: "Engineering" },
  { name: "Maddipatla NVVRSS Sannihith",          roll: "127018031", role: "Design" },
  { name: "Potta Sai Varshith",                   roll: "127018044", role: "Growth" },
  { name: "Sudharsan N",                          roll: "127018059", role: "Operations" },
];

const principles = [
  { Icon: ShieldCheck, title: "Trust before features",  body: "No bank passwords. No data sale. Visible savings every month. Transparency is operational, not aspirational." },
  { Icon: Heart,       title: "Family-first by design", body: "Indian financial decisions are rarely made alone. Perkonomy AI is built for households, not isolated users." },
  { Icon: Globe,       title: "Indian-native, day 1",   body: "Vernacular voice in seven languages, UPI-on-credit-card support, festival pre-optimisation. Not adapted — built for the country." },
];

export default function About() {
  return (
    <>
      <section className="container-tight py-20 max-w-4xl">
        <span className="section-eyebrow">About</span>
        <h1 className="h-display text-4xl sm:text-5xl font-extrabold mt-3 leading-tight">
          We built Perkonomy AI because a member of our team lost ₹50,000 in expired
          credit-card points — and realised the problem isn't financial literacy, it's
          decision tooling.
        </h1>
        <p className="mt-6 text-lg text-ink-600">
          Indian households hold 85 million active credit cards and lose more than
          ₹5,000 crore each year in unused rewards. Existing apps either show you
          your spending after the fact, or pivot to features they can monetise. We
          chose the harder path: a subscription, paid by users, that has to earn its
          ₹499 every year by saving them more.
        </p>
      </section>

      <section className="bg-ink-50 py-16">
        <div className="container-tight grid md:grid-cols-3 gap-6">
          {principles.map(({ Icon, title, body }) => (
            <div key={title} className="card-base p-6">
              <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-700 grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold h-display text-lg">{title}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-tight py-20">
        <h2 className="h-display text-3xl font-extrabold">The team</h2>
        <p className="text-ink-600 mt-2">B.Tech students, SASTRA Deemed-to-be University · Course ENG316.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {team.map((t, i) => (
            <div key={t.roll} className="card-base p-5 flex items-center gap-4">
              <div
                className="h-12 w-12 rounded-full text-white grid place-items-center font-bold flex-shrink-0"
                style={{ background: ["#1F4E79","#2E75B6","#E8810B","#10B981","#475A70","#F39820"][i % 6] }}
              >
                {t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
              </div>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-ink-500">{t.role} · Roll {t.roll}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-tight pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-brand-700 to-ink-900 text-white p-10 lg:p-14 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="h-display text-3xl font-extrabold leading-tight">
              Submitted to Dr. V. Vidya, SASHE
            </h2>
            <p className="mt-3 text-ink-300 max-w-md">
              Project report submitted in partial fulfilment of the course ENG316 — Business
              Communication & Value Science 4. SASTRA Deemed-to-be University, Thanjavur 613401.
            </p>
          </div>
          <div className="lg:justify-self-end flex flex-wrap gap-3">
            <Link to="/login?signup=1" className="btn-saffron">Open the demo <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/banks" className="btn-secondary bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white">For banks</Link>
          </div>
        </div>
      </section>
    </>
  );
}
