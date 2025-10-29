import AnnouncementBanner from "@/components/sections/announcement-banner";
import HeaderNavigation from "@/components/sections/header-navigation";
import HeroSection from "@/components/sections/hero-section";
import LogoMarquee from "@/components/sections/logo-marquee";
import StatsCardsFeature from "@/components/sections/stats-cards-feature";
import BentoGridFeatures from "@/components/sections/bento-grid-features";
import TimelineFeature from "@/components/sections/timeline-feature";
import TestimonialsSection from "@/components/sections/testimonials-section";
import PricingSection from "@/components/sections/pricing-section";
import FaqSection from "@/components/sections/faq-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-sand-100 antialiased">
      {/* Remove template banner in production; adapted content for Metrixx */}
      <AnnouncementBanner />
      <HeaderNavigation />
      <main>
        <HeroSection />
        <LogoMarquee />
        <StatsCardsFeature />
        <BentoGridFeatures />
        <TimelineFeature />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
