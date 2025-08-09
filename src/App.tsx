import Navbar from "./components/Navbar/";
import HomeSection from "./components/Home";
import ComingSoon from "./components/ComingSoon";
import StoryBehind from "./components/Story";
import ParallaxLayer from "./components/Parallax/ParallaxLayer";

export default function App() {
  return (
    <div className="relative min-h-screen isolate overflow-hidden">
      <Background />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        {/* Home Section */}
        <section id="home" className="min-h-screen scroll-mt-24 pb-8 pt-6">
          <HomeSection />
        </section>

        {/* CountDown Section */}
        <section id="countdown" className="scroll-mt-24">
          <ComingSoon
            showBackgroundDecor={false}
            title="Beta launching soon"
            launchDate="2025-09-01T09:00:00Z"
            progress={62}
            onNotifySubmit={async (email) => {
              console.log("notify:", email);
            }}
            supporters={["JS", "AL", "KP", "MN", "RB", "TT", "XZ"]}
          />
        </section>

        {/* Story Behinde Section */}
        <section id="storybehinde" className="scroll-mt-24">
          <StoryBehind />
        </section>
      </main>
    </div>
  );
}

const Background = () => {
  return (
    <>
      <ParallaxLayer
        mode="fixed"
        speed={0.1}
        translateMax={160}
        className="absolute inset-0 -z-10"
      >
        <div className="h-full w-full bg-[radial-gradient(circle,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />
      </ParallaxLayer>
      <ParallaxLayer
        mode="fixed"
        speed={0.16}
        translateMax={200}
        className="absolute -z-10 -top-24 -right-24 h-[42vmax] w-[42vmax]"
      >
        <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-400/20 via-emerald-300/10 to-transparent blur-3xl" />
      </ParallaxLayer>
      <ParallaxLayer
        mode="fixed"
        speed={0.14}
        translateMax={200}
        className="absolute -z-10 -bottom-28 -left-28 h-[48vmax] w-[48vmax]"
      >
        <div className="h-full w-full rounded-full bg-gradient-to-tr from-sky-400/20 via-sky-300/10 to-transparent blur-3xl" />
      </ParallaxLayer>
      <div className="pointer-events-none absolute -top-24 -right-24 h-[42vmax] w-[42vmax] rounded-full bg-gradient-to-br from-emerald-400/20 via-emerald-300/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-[48vmax] w-[48vmax] rounded-full bg-gradient-to-tr from-sky-400/20 via-sky-300/10 to-transparent blur-3xl" />
    </>
  );
};
