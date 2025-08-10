import type { TeamMember } from "./types";
import Socials from "./Socials";

export default function MemberCard({ member }: { readonly member: TeamMember }) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white/85 shadow-sm hover:shadow-md transition-shadow overflow-hidden p-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <span className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-400/25 to-sky-400/25 blur"></span>
          <img
            src={member.avatar}
            alt={member.name}
            className="relative h-20 w-20 rounded-2xl object-cover ring-2 ring-white shadow-md"
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">{member.name}</h3>
        <span className="text-sm text-emerald-700 font-medium">{member.role}</span>
        <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
        {member.specialties?.length ? (
          <ul className="mt-3 flex flex-wrap justify-center gap-2">
            {member.specialties.slice(0, 3).map((s) => (
              <li key={s} className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                {s}
              </li>
            ))}
          </ul>
        ) : null}
        {member.socials?.length ? <Socials socials={member.socials} className="mt-3" /> : null}
      </div>
    </div>
  );
}
