import type { TeamMember } from "./types";
import Socials from "./Socials";

export default function LeadCard({ member }: { readonly member: TeamMember }) {
  return (
    <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white/85 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 p-6 md:p-8">
        <div className="mx-auto md:mx-0">
          <div className="relative">
            <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-400/30 to-sky-400/30 blur"></span>
            <img
              src={member.avatar}
              alt={member.name}
              className="relative h-28 w-28 md:h-32 md:w-32 rounded-2xl object-cover ring-2 ring-white shadow-md"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            Lead
          </div>
          <h3 className="mt-3 text-xl md:text-2xl font-semibold text-slate-900">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-emerald-700">{member.role}</p>
          <p className="mt-3 text-slate-700 leading-relaxed">{member.bio}</p>
          {member.socials?.length ? (
            <Socials
              socials={member.socials}
              className="mt-4 justify-center md:justify-start"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
