export default function BackgroundDecor() {
  return (
    <>
      <div className="pointer-events-none absolute -top-24 -right-24 h-[42vmax] w-[42vmax] rounded-full bg-gradient-to-br from-emerald-400/20 via-emerald-300/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-[48vmax] w-[48vmax] rounded-full bg-gradient-to-tr from-sky-400/20 via-sky-300/10 to-transparent blur-3xl" />
    </>
  );
}
