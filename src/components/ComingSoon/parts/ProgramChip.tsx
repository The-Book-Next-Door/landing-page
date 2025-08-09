import { motion } from "framer-motion";

type ProgramChipProps = Readonly<{
  label: string;
  blurb: string;
}>;

export default function ProgramChip({
  label,
  blurb,
}: ProgramChipProps) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-base md:text-lg">
      <motion.span
        aria-hidden
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
        className="text-2xl"
      >
        📚
      </motion.span>
      <span className="font-semibold text-emerald-700">{label}:</span>
      <span className="text-slate-600">{blurb}</span>
    </div>
  );
}

