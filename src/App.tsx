import Navbar from "./components/Navbar";
import HomeSection from "./components/Home";
import ComingSoon from "./components/Home/ComingSoon";

// App – apply a single, lightweight background to the whole app
// - Full-viewport gradient + subtle dot pattern
// - Ambient corner glows
// - Components/sections sit on transparent backgrounds so the global bg shows through
// - No JS animations

export default function App() {
  return (
    <div className="relative min-h-screen isolate overflow-hidden">
      {/* Navigation */}
      <Navbar />

     
      {/* Page sections */}
      <main>
        {/* Home Section */}
        <section id="home" className="scroll-mt-24 pt-6">
          <HomeSection />
        </section>

        {/* Coming soon */}
        <section className="scroll-mt-24 pb-16 md:pb-24">
          <ComingSoon
          // Example props you can wire up later:
          // launchDate="2025-09-01T09:00:00Z"
          // progress={62}
          // onNotifySubmit={(email) => console.log("notify:", email)}
          />
        </section>
      </main>
    </div>
  );
}
