import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

// ComingSoon – professional + interactive
// - Polished layout with gradient top border and soft background accents
// - Optional live countdown to a launch date
// - "Plant a Tree" highlight chip with subtle motion
// - Notify form with a11y (you can wire onNotifySubmit to your backend)
// - Optional progress meter (e.g., build status)

type ComingSoonProps = {
  title?: string;
  programLabel?: string; // e.g., "Plant a Tree Program"
  programBlurb?: string; // e.g., "For every book swap, we'll plant a tree in your community."
  launchDate?: Date | string; // to enable countdown
  progress?: number; // 0..100 to show a progress meter (optional)
  onNotifySubmit?: (email: string) => void; // wire to API later
  className?: string;
};

export default function ComingSoon({
  title = "COMING SOON…",
  programLabel = "Plant a Tree Program",
  programBlurb = "For every book swap, we'll plant a tree in your community.",
  launchDate,
  progress,
  onNotifySubmit,
  className = "",
}: ComingSoonProps) {
  const target = useMemo(() => (launchDate ? new Date(launchDate) : null), [launchDate]);
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    if (!target) return;
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const remaining = useMemo(() => {
    if (!target) return null;
    const diff = Math.max(0, target.getTime() - now.getTime());
    const s = Math.floor(diff / 1000);
    const days = Math.floor(s / 86400);
    const hours = Math.floor((s % 86400) / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const seconds = s % 60;
    return { days, hours, minutes, seconds };
  }, [now, target]);

  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNotifySubmit?.(email);
  };

  return (
    <section
      className={[
        "relative mt-24 pt-16",
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-emerald-400/60 before:to-transparent",
        "isolate overflow-hidden",
        className,
      ].join(" ")}
    >
      {/* background accents */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-1/2 translate-x-1/2 h-64 w-[36rem] rounded-full bg-sky-400/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
        >
          {title}
        </motion.h2>

        {/* Program chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="mt-6 flex items-center justify-center gap-3 text-base md:text-lg"
        >
          <motion.span
            aria-hidden
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
            className="text-2xl"
          >
            🌱
          </motion.span>
          <span className="font-semibold text-emerald-700">{programLabel}:</span>
          <span className="text-slate-600">{programBlurb}</span>
        </motion.div>

        {/* Countdown */}
        {remaining && (
          <div className="mt-8">
            <div className="inline-flex items-stretch divide-x divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm">
              {[{k:"Days", v:remaining.days}, {k:"Hours", v:remaining.hours}, {k:"Minutes", v:remaining.minutes}, {k:"Seconds", v:remaining.seconds}].map(({k,v}) => (
                <div key={k} className="px-5 py-3 first:rounded-l-2xl last:rounded-r-2xl">
                  <div className="text-2xl md:text-3xl font-bold tabular-nums text-slate-900 text-center">{String(v).padStart(2,'0')}</div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 text-center">{k}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Progress bar (optional) */}
        {typeof progress === "number" && (
          <div className="mx-auto mt-6 max-w-xl">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span>Build Progress</span>
              <span className="tabular-nums font-medium">{Math.max(0, Math.min(100, Math.round(progress)))}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-200">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
                style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
                aria-hidden
              />
            </div>
          </div>
        )}

        {/* Notify form */}
        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex w-full max-w-md items-center gap-2">
          <label htmlFor="notify-email" className="sr-only">Email address</label>
          <input
            id="notify-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to get notified"
            className="w-full rounded-full border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
          >
            Notify Me
          </button>
        </form>

        {/* Small print */}
        <p className="mx-auto mt-3 max-w-md text-xs text-slate-500">
          No spam. We’ll email you only when the feature is live (and maybe send you a tree photo 🌳).
        </p>
      </div>
    </section>
  );
}
