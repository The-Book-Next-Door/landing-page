import { useEffect, useState } from "react";

type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
};

function toCountdownParts(targetTimestamp: number): CountdownParts {
  const deltaMs = targetTimestamp - Date.now();

  if (deltaMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
  }

  const totalSeconds = Math.floor(deltaMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, finished: false };
}

function CountdownCell({ value, label }: { value: number; label: string }) {
  return (
    <div className="min-w-16 sm:min-w-20 rounded-2xl bg-paper/80 border border-ink/10 px-3 py-2 sm:px-4 sm:py-3">
      <p className="font-serif text-2xl sm:text-3xl leading-none text-ink tabular-nums">
        {String(value).padStart(2, "0")}
      </p>
      <p className="mt-1 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-ink/55">
        {label}
      </p>
    </div>
  );
}

export function LaunchCountdown({ launchAt }: { launchAt: string }) {
  const targetTimestamp = Date.parse(launchAt);
  const [countdown, setCountdown] = useState<CountdownParts>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    if (!Number.isFinite(targetTimestamp)) {
      return;
    }

    const update = () => {
      setCountdown(toCountdownParts(targetTimestamp));
    };

    update();
    const timer = window.setInterval(update, 1000);

    return () => window.clearInterval(timer);
  }, [targetTimestamp]);

  if (!Number.isFinite(targetTimestamp)) {
    return null;
  }

  if (countdown.finished) {
    return (
      <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-forest/30 bg-forest/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-forest">
        We are live now
      </div>
    );
  }

  return (
    <div className="mt-10 animate-fade-up [animation-delay:220ms]">
      <p className="text-[10px] font-mono uppercase tracking-widest text-ink/50 mb-3">
        Launching soon
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <CountdownCell value={countdown.days} label="Days" />
        <CountdownCell value={countdown.hours} label="Hours" />
        <CountdownCell value={countdown.minutes} label="Minutes" />
        <CountdownCell value={countdown.seconds} label="Seconds" />
      </div>
    </div>
  );
}