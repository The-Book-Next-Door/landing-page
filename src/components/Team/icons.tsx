import type { Social } from "./types";

export function iconFor(kind: Social["label"]) {
  switch (kind) {
    case "github":
      return <svg width="18" height="18" fill="currentColor"><path d="M12 2a10 10 ..."/></svg>;
    case "linkedin":
      return <svg width="18" height="18" fill="currentColor"><path d="M4.98 3.5 ..."/></svg>;
    case "x":
      return <svg width="18" height="18" fill="currentColor"><path d="M18.36 2 ..."/></svg>;
    default:
      return <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20"/></svg>;
  }
}
