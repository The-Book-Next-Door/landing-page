import { BookOpen, ArrowUpRight, Search } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <BookOpen className="size-8 mx-auto text-clay mb-6" />
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl italic leading-[0.95] text-balance">
          Your next chapter <br />is on the next street.
        </h2>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <button className="inline-flex items-center justify-center gap-2 bg-ink text-paper px-7 py-4 rounded-full font-medium hover:bg-clay transition-colors">
            <Search className="size-4" /> Browse Books Nearby
          </button>
          <button className="inline-flex items-center justify-center gap-2 border border-ink/15 px-7 py-4 rounded-full font-medium hover:bg-sand transition-colors">
            List a Book <ArrowUpRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}