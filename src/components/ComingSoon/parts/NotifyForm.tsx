import { useState } from "react";

type NotifyFormType = Readonly<{
  onSubmit?: (email: string) => Promise<void> | void;
  successMessage?: string;
}>;

export default function NotifyForm({
  onSubmit,
  successMessage = "You're on the list. We’ll ping you at launch!",
}: NotifyFormType) {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hp.trim()) return;
    try {
      setStatus("loading");
      await onSubmit?.(email);
      setStatus("ok");
      setMsg(successMessage);
      setEmail("");
    } catch (err: any) {
      setStatus("err");
      setMsg(err?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
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

      <p
        id="notify-help"
        className="mx-auto mt-3 max-w-md text-xs text-slate-500"
      >
        No spam. We’ll email you only when the feature is live (and maybe send
        you a tree photo 🌳).
      </p>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {(status === "ok" || status === "err") && msg}
      </div>
    </>
  );
}
