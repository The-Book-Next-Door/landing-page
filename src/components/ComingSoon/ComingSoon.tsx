import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Stat = { label: string; value: string };
type Feature = { title: string; blurb: string };
type Milestone = { title: string; status: "done" | "in-progress" | "next"; eta?: string };

type ComingSoonProps = {
  title?: string;
  programLabel?: string;
  programBlurb?: string;
  launchDate?: Date | string;
  progress?: number;
  onNotifySubmit?: (email: string) => Promise<void> | void;
  className?: string;

  // NEW, all optional:
  stats?: Stat[];                    // e.g., [{label:"Signups", value:"1,248"}]
  features?: Feature[];              // e.g., [{title:"No ads", blurb:"No feeds or banners."}]
  roadmap?: Milestone[];             // e.g., [{title:"Invite system", status:"in-progress", eta:"Aug"}]
  supporters?: string[];             // e.g., ["AB","CD","EF","GH"]
  successMessage?: string;           // custom success text
  showBackgroundDecor?: boolean;     // soft blobs behind content
};

export default function ComingSoon({
  title = "COMING SOON…",
  programLabel = "Plant a Tree Program",
  programBlurb = "For every book swap, we'll plant a tree in your community.",
  launchDate,
  progress,
  onNotifySubmit,
  className = "",
  stats,
  features,
  roadmap,
  supporters,
  successMessage = "You're on the list. We’ll ping you at launch!",
  showBackgroundDecor = true,
}: ComingSoonProps) {
  const target = useMemo(
    () => (launchDate ? new Date(launchDate) : null),
    [launchDate]
  );
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
    return { days, hours, minutes, seconds, total: diff };
  }, [now, target]);

  // Locale-friendly launch line
  const launchLine = useMemo(() => {
    if (!target) return null;
    try {
      const fmt = new Intl.DateTimeFormat(undefined, {
        dateStyle: "long",
        timeStyle: "short",
      });
      return fmt.format(target);
    } catch {
      return target.toISOString();
    }
  }, [target]);

  // Notify form state
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const [msg, setMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hp.trim().length > 0) return; // bot caught
    try {
      setStatus("loading");
      await onNotifySubmit?.(email);
      setStatus("ok");
      setMsg(successMessage);
      setEmail("");
    } catch (err: any) {
      setStatus("err");
      setMsg(err?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      className={[
        "relative pt-20",
        "isolate overflow-hidden",
        className,
      ].join(" ")}
    >
      {/* Top gradient border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-500 via-sky-500 to-emerald-500" />

      {/* Soft background accents */}
      {showBackgroundDecor && (
        <>
          <div className="pointer-events-none absolute -top-24 -right-24 h-[42vmax] w-[42vmax] rounded-full bg-gradient-to-br from-emerald-400/20 via-emerald-300/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-[48vmax] w-[48vmax] rounded-full bg-gradient-to-tr from-sky-400/20 via-sky-300/10 to-transparent blur-3xl" />
        </>
      )}

      <div className="mx-auto max-w-5xl px-6 text-center">
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
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-base md:text-lg"
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

        {/* Launch date line */}
        {launchLine && (
          <p className="mt-3 text-sm text-slate-600">
            Launching on <span className="font-medium text-slate-900">{launchLine}</span>
          </p>
        )}

        {/* Countdown */}
        {remaining && (
          <div className="mt-8" aria-live="polite">
            <div className="inline-flex items-stretch divide-x divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm">
              {[
                { k: "Days", v: remaining.days },
                { k: "Hours", v: remaining.hours },
                { k: "Minutes", v: remaining.minutes },
                { k: "Seconds", v: remaining.seconds },
              ].map(({ k, v }) => (
                <div key={k} className="px-5 py-3 first:rounded-l-2xl last:rounded-r-2xl">
                  <div className="text-2xl md:text-3xl font-bold tabular-nums text-slate-900 text-center">
                    {String(v).padStart(2, "0")}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 text-center">
                    {k}
                  </div>
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
              <span className="tabular-nums font-medium">
                {Math.max(0, Math.min(100, Math.round(progress)))}%
              </span>
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

        {/* NEW: Stats row */}
        {stats && stats.length > 0 && (
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((s, i) => (
              <li
                key={`${s.label}-${i}`}
                className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
              >
                <div className="text-xl font-bold text-slate-900">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                  {s.label}
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* NEW: Feature cards */}
        {features && features.length > 0 && (
          <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 text-left">
            {features.map((f, i) => (
              <li
                key={`${f.title}-${i}`}
                className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 7 10 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.blurb}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* NEW: Mini roadmap */}
        {roadmap && roadmap.length > 0 && (
          <div className="mx-auto mt-10 max-w-3xl text-left">
            <h4 className="text-sm font-semibold text-slate-900">Roadmap</h4>
            <ul className="mt-3 space-y-3">
              {roadmap.map((m, i) => (
                <li
                  key={`${m.title}-${i}`}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/80 p-4"
                >
                  <StatusDot status={m.status} />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-slate-900">{m.title}</span>
                      <StatusChip status={m.status} />
                      {m.eta && (
                        <span className="text-xs text-slate-500">ETA: {m.eta}</span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Notify form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex w-full max-w-md items-center gap-2"
          aria-describedby="notify-help"
        >
          <label htmlFor="notify-email" className="sr-only">
            Email address
          </label>
          <input
            id="notify-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to get notified"
            className="w-full rounded-full border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          />
          {/* Honeypot for bots */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            className="hidden"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Notify Me"}
          </button>
        </form>

        <p id="notify-help" className="mx-auto mt-3 max-w-md text-xs text-slate-500">
          No spam. We’ll email you only when the feature is live (and maybe send you a tree photo 🌳).
        </p>

        {/* NEW: Form result (a11y live) */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {status === "ok" && msg}
          {status === "err" && msg}
        </div>

        {/* NEW: Supporters / avatars */}
        {supporters && supporters.length > 0 && (
          <div className="mx-auto mt-10 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {supporters.slice(0, 6).map((initials, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-slate-200 text-[11px] font-semibold text-slate-700"
                  title={initials}
                >
                  {initials}
                </div>
              ))}
            </div>
            {supporters.length > 6 && (
              <span className="text-xs text-slate-600">
                +{supporters.length - 6} more interested
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function StatusDot({ status }: { status: Milestone["status"] }) {
  const c =
    status === "done"
      ? "bg-emerald-500"
      : status === "in-progress"
      ? "bg-sky-500"
      : "bg-slate-300";
  return <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${c}`} />;
}

function StatusChip({ status }: { status: Milestone["status"] }) {
  const map = {
    done: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "in-progress": "bg-sky-50 text-sky-700 border-sky-200",
    next: "bg-slate-50 text-slate-700 border-slate-200",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${map[status]}`}
    >
      {status === "done" ? "Done" : status === "in-progress" ? "In progress" : "Next"}
    </span>
  );
}
