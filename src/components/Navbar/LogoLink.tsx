import Logo from "../../assets/logo.jpeg";

export default function LogoLink() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      <img src={Logo} alt="Brand logo" className="h-9 w-9 rounded-lg object-cover shadow-sm" />
      <span className="text-lg font-bold text-slate-900 tracking-tight hidden sm:inline">
        Book Next Door
      </span>
    </a>
  );
}
