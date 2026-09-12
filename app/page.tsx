import { FeatureBeats } from "@/components/feature-beats";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  Camps,
  DayByDay,
  Employees,
  Faq,
  FinalCta,
  Hero,
  HowHelps,
  Instructor,
  OfferOverview,
  PricingGuarantee,
  Proof,
  Room,
  WeekGlance,
  WhoFor,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <OfferOverview />
        <Instructor />
        <WeekGlance />
        <WhoFor />
        <FeatureBeats />
        <DayByDay />
        <Camps />
        <HowHelps />
        <Proof />
        <Employees />
        <Room />
        <PricingGuarantee />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
