import { useMemo } from "react";
import { motion } from "framer-motion";
import team from "./team.json";
import LeadCard from "./LeadCard";
import MemberCard from "./MemberCard";
import type { TeamMember } from "./types";

export default function Team() {
  const members = useMemo(() => team as TeamMember[], []);
  const [lead, ...others] = members;

  return (
    <section
      id="team"
      className="relative isolate overflow-hidden py-20 md:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:18px_18px]" />

      <div className="mx-auto max-w-6xl px-6">
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Meet Our Team
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            A small, hands-on group of readers, makers, and community builders.
          </p>
        </header>

        {lead && (
          <div className="mt-12">
            <LeadCard member={lead} />
          </div>
        )}

        {others.length > 0 &&
          (others.length === 1 ? (
            <div className="mt-8 max-w-md mx-auto">
              <MemberCard member={others[0]} />
            </div>
          ) : (
            <motion.ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((m) => (
                <motion.li key={m.id || m.name}>
                  <MemberCard member={m} />
                </motion.li>
              ))}
            </motion.ul>
          ))}
      </div>
    </section>
  );
}
