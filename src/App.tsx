import Navbar from "./components/Navbar/";
import HomeSection from "./components/Home";
import ComingSoon from "./components/ComingSoon";

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
              console.log("notify:", email);
            }}
            supporters={["JS", "AL", "KP", "MN", "RB", "TT", "XZ"]}
          />
        </section>
      </main>
    </div>
  );
}
