import { FormEvent, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight, Mail, Lock, Sparkles, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { fakeLogin } from "@/lib/auth";

export default function Login() {
  const [params] = useSearchParams();
  const isSignup = params.get("signup") === "1";
  const [mode, setMode] = useState<"login" | "signup">(isSignup ? "signup" : "login");
  const [email, setEmail] = useState("demo@perkonomy.ai");
  const [password, setPassword] = useState("demo1234");
  const navigate = useNavigate();

  function submit(e: FormEvent) {
    e.preventDefault();
    fakeLogin(email);
    navigate("/app");
  }

  return (
    <section className="min-h-[calc(100vh-64px)] grid md:grid-cols-2">
      <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-brand-700 via-brand-800 to-ink-900 text-white p-12">
        <Logo inverted />
        <div>
          <span className="chip-saffron"><Sparkles className="h-3.5 w-3.5" /> Live prototype</span>
          <h2 className="h-display text-3xl font-extrabold mt-4 leading-tight">
            "We thought our SBI ELITE was useless. Khazana found ₹1,500 in vouchers we
            had paid for and forgotten."
          </h2>
          <p className="mt-3 text-brand-100">— Priya M., Bengaluru pilot user</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-brand-200">
          <ShieldCheck className="h-4 w-4" /> Demo runs entirely in-browser. No real bank linkage.
        </div>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-12">
        <form onSubmit={submit} className="w-full max-w-sm space-y-5">
          <div className="md:hidden mb-2"><Logo /></div>
          <h1 className="h-display text-3xl font-extrabold">
            {mode === "login" ? "Welcome back." : "Create your demo account."}
          </h1>
          <p className="text-sm text-ink-500">
            Any email and password will work — this is a frontend-only prototype.
          </p>

          <div>
            <label className="text-xs font-semibold text-ink-600 uppercase tracking-widest">Email</label>
            <div className="mt-1.5 flex items-center gap-2 border border-ink-200 rounded-xl px-3 py-2.5 focus-within:border-brand-500">
              <Mail className="h-4 w-4 text-ink-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 outline-none text-sm bg-transparent"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-ink-600 uppercase tracking-widest">Password</label>
            <div className="mt-1.5 flex items-center gap-2 border border-ink-200 rounded-xl px-3 py-2.5 focus-within:border-brand-500">
              <Lock className="h-4 w-4 text-ink-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 outline-none text-sm bg-transparent"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button type="submit" className="btn-primary w-full justify-center text-base">
            Enter the demo <ArrowRight className="h-4 w-4" />
          </button>

          <div className="text-sm text-ink-500 text-center">
            {mode === "login" ? (
              <>New here? <button type="button" onClick={() => setMode("signup")} className="font-semibold text-brand-700 hover:underline">Create account</button></>
            ) : (
              <>Already have an account? <button type="button" onClick={() => setMode("login")} className="font-semibold text-brand-700 hover:underline">Log in</button></>
            )}
          </div>

          <div className="text-xs text-center text-ink-400 pt-3 border-t border-ink-100">
            By continuing, you agree to our <Link to="#" className="underline">Terms</Link> and acknowledge our <Link to="#" className="underline">Privacy Policy</Link>.
          </div>
        </form>
      </div>
    </section>
  );
}
