import { EmployeeMarquee } from "@/components/employee-marquee";
import { FeatureBands } from "@/components/feature-bands";
import { Hero } from "@/components/hero";
import {
  Employees,
  Faq,
  FinalCta,
  PricingGuarantee,
  WhoFor,
} from "@/components/sections";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WeekZone } from "@/components/week-zone";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <EmployeeMarquee />
        <FeatureBands />
        <WhoFor />
        <Employees />
        <WeekZone />
        <PricingGuarantee />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
