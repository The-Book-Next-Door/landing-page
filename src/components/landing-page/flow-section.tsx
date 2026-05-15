import { flowSteps } from "./data";

export function FlowSection() {
  return (
    <section id="flow" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-20 sm:mb-28">
          <span className="text-[10px] font-mono uppercase tracking-widest text-clay">
            · 02 / The Flow
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mt-3 italic text-balance">
            The journey of a book.
          </h2>
          <p className="mt-6 text-ink/60 text-lg leading-relaxed">
            We believe a book belongs to a journey, not a warehouse. Three slow, considered steps —
            from your shelf to your neighbor's.
          </p>
        </div>

        <div className="flex flex-col gap-24 sm:gap-32">
          {flowSteps.map((step, index) => (
            <div
              key={step.n}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16 group`}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-ink/10">
                <img
                  src={step.img}
                  alt={step.alt}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 md:px-8 lg:px-12">
                <span className="text-clay font-mono text-sm">
                  {step.n} / {step.label.toUpperCase()}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl mt-4 mb-5 text-balance">
                  {step.title}
                </h3>
                <p className="text-ink/65 leading-relaxed text-base sm:text-lg max-w-[45ch]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}