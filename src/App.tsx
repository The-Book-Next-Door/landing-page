import Navbar from "./components/Navbar/";
import HomeSection from "./components/Home";
import ComingSoon from "./components/ComingSoon";
import StoryBehind from "./components/Story";
import GradientBlurBackground from "./components/Background";
import Team from "./components/Team";

export default function App() {
  return (
    <GradientBlurBackground>
      <div className="relative min-h-screen isolate overflow-hidden">


        {/* Navigation */}
        <Navbar />

        {/* Page sections */}
        <main>
          {/* Home Section */}
          <section
            id="home"
            className="flex items-center min-h-screen pb-8 pt-6 md:pt-24"
          >
            <HomeSection />
          </section>

          {/* CountDown Section */}
          <section id="countdown" className="min-h-[70vh]">
            <ComingSoon
              showBackgroundDecor={false}
              title="Beta launching soon"
              launchDate="2025-09-01T09:00:00Z"
              progress={62}
              onNotifySubmit={async (email) => {
                console.log("notify:", email);
              }}
              roadmap={[
                {
                  title: "UX Design Drafts",
                  status: "in-progress",
                  eta: "August 2025",
                },
                {
                  title: "Basic App Structure Setup",
                  status: "in-progress",
                  eta: "August 2025",
                },
                {
                  title: "Core Feature Prototypes",
                  status: "next",
                  eta: "September 2025",
                },
              ]}
              supporters={["JS", "AL", "KP", "MN", "RB", "TT", "XZ"]}
            />
          </section>

          {/* Story Behinde Section */}
          <section id="storybehinde" className="">
            <StoryBehind />
          </section>

          <section id="our-team">
            <Team/>
          </section>
        </main>
      </div>
    </GradientBlurBackground>
  );
}