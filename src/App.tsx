import Navbar from "./components/Navbar/";
import HomeSection from "./components/Home";
import ComingSoon from "./components/ComingSoon";

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
        <section id="home" className="min-h-screen scroll-mt-24 pt-6">
          <HomeSection />
        </section>

        <section id="countdown" className="scroll-mt-24">
          <ComingSoon
            title="Beta launching soon"
            launchDate="2025-09-01T09:00:00Z"
            progress={62}
            onNotifySubmit={async (email) => {
              // wire up: await fetch("/api/notify", { method: "POST", body: JSON.stringify({ email }) })
              console.log("notify:", email);
            }}
            stats={[
              { label: "Signups", value: "1,248" },
              { label: "Cities", value: "42" },
              { label: "Trees pledged", value: "580" },
            ]}
            features={[
              {
                title: "No ads. No feeds.",
                blurb: "A quiet space to read, meet, and swap.",
              },
              {
                title: "Local-first meetups",
                blurb: "Small gatherings with nearby readers.",
              },
              {
                title: "Simple book swaps",
                blurb: "Trade without marketplaces or spam.",
              },
            ]}
            roadmap={[
              { title: "Invite system", status: "in-progress", eta: "Aug" },
              { title: "Swap flow v1", status: "next", eta: "Sep" },
              { title: "Mobile PWA", status: "next", eta: "Oct" },
            ]}
            supporters={["JS", "AL", "KP", "MN", "RB", "TT", "XZ"]}
          />
        </section>
      </main>
    </div>
  );
}
