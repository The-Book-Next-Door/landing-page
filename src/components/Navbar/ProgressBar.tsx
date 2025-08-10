type Props = { progress: number };

export default function ProgressBar({ progress }: Props) {
  return (
    <span
      aria-hidden
      style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
      className="absolute left-0 top-0 h-0.5 bg-gradient-to-r from-emerald-600 to-sky-500 transition-[width] duration-150 rounded-full"
    />
  );
}
