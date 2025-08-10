type Props = { readonly open: boolean; readonly setOpen: (v: boolean) => void };

export default function MobileMenuButton({ open, setOpen }: Props) {
  return (
    <button
      type="button"
      className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      aria-controls="mobile-menu"
      aria-expanded={open}
      onClick={() => setOpen(!open)}
    >
      <span className="sr-only">Toggle menu</span>
      {open ? (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      )}
    </button>
  );
}
