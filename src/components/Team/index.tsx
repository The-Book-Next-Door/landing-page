
import team from "./team.json";

type TeamMember = {
  name: string;
  role: string;
  avatar: string;
  bio: string;
};

export default function TeamSection() {
  return (
    <section id="team" className="py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
          Meet Our Team
        </h2>
        <p className="mb-10 text-slate-600 max-w-2xl mx-auto">
          A small, passionate group of readers, makers, and community builders.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {(team as TeamMember[]).map((member) => (
            <li key={member.name} className="flex flex-col items-center bg-white/90 rounded-2xl shadow-md p-6">
              <img
                src={member.avatar}
                alt={member.name}
                className="h-20 w-20 rounded-full object-cover border-2 border-emerald-100 shadow-sm mb-3"
              />
              <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
              <span className="text-sm text-emerald-700 font-medium mb-1">{member.role}</span>
              <p className="text-sm text-slate-600 mt-1">{member.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
