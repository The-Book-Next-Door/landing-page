import { sustainabilityImage } from "./data";

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="font-serif text-3xl sm:text-4xl text-ink">{k}</p>
      <p className="text-[10px] font-mono uppercase tracking-widest text-ink/50 mt-1">{v}</p>
    </div>
  );
}

export function SustainabilitySection() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <img
              src={sustainabilityImage}
              alt="Books on a wooden bench"
              loading="lazy"
              width={1280}
              height={800}
              className="w-full aspect-[16/10] object-cover rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-ink/10"
            />
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-clay">
              · 05 / Neighborhood
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-[1.05] text-balance">
              A second life, <span className="italic">on the same street.</span>
            </h2>
            <p className="mt-6 text-ink/65 text-lg leading-relaxed">
              Every shared book is a tiny act of resistance against waste — and a reason to meet the
              reader two doors down. Slow, local, and quietly radical.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
              <Stat k="6,200" v="Books rehomed" />
              <Stat k="14" v="Luxembourg quartiers" />
              <Stat k="89%" v="Found within 1 km" />
              <Stat k="0" v="Warehouses, ever" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}