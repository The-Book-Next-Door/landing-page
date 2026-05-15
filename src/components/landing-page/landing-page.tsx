import { useEffect } from "react";

import { SiteNav } from "./site-nav";
import { HeroSection } from "./hero-section";
import { MarketplaceSection } from "./marketplace-section";
import { FlowSection } from "./flow-section";
import { WishlistSection } from "./wishlist-section";
import { ClubsSection } from "./clubs-section";
import { SustainabilitySection } from "./sustainability-section";
import { CtaSection } from "./cta-section";
import { SiteFooter } from "./site-footer";

export function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-paper text-ink overflow-x-clip">
      <SiteNav />
      <HeroSection />
      <MarketplaceSection />
      <FlowSection />
      <WishlistSection />
      <ClubsSection />
      <SustainabilitySection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}