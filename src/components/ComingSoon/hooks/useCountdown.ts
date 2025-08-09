import { useEffect, useMemo, useState } from "react";

export function useCountdown(launchDate?: Date | string | null) {
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

  const launchLine = useMemo(() => {
    if (!target) return null;
    try {
      return new Intl.DateTimeFormat(undefined, {
        dateStyle: "long",
        timeStyle: "short",
      }).format(target);
    } catch {
      return target.toISOString();
    }
  }, [target]);

  return { target, remaining, launchLine };
}
