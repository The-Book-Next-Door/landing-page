import { useEffect, useRef, useState } from "react";
import { LINKS } from "./constants";
import LogoLink from "./LogoLink";
import DesktopLinks from "./DesktopLinks";
import LanguageSelect from "./LanguageSelect";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import ProgressBar from "./ProgressBar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [lang, setLang] = useState("EN");

  const lastY = useRef(0);

  // Reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Scroll direction + progress
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const dirDown = y > lastY.current;
      if (!reduceMotion && Math.abs(y - lastY.current) > 24) {
        setHidden(dirDown && y > 80);
        lastY.current = y;
      } else {
        lastY.current = y;
      }
      const doc = document.documentElement;
      const h = doc.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? y / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduceMotion]);

  // Active section observer
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const io = new window.IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md shadow-lg transition-transform duration-300 will-change-transform ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <ProgressBar progress={progress} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          <LogoLink />
          <DesktopLinks active={active} />
          <div className="flex items-center gap-2 md:gap-3">
            <LanguageSelect lang={lang} setLang={setLang} />
            <MobileMenuButton open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
      <MobileMenu open={open} active={active} setOpen={setOpen} />
    </nav>
  );
}
