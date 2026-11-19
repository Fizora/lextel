import AboutSection from "@/components/ui/home/about-section";
import CapabilityTicker from "@/components/capability-ticker";
import DotMatrix from "@/components/dot-matrix";
import Hero from "@/components/ui/home/hero";
import ServicesSection from "../ui/home/service-section";
import ProcessSection from "../ui/home/process-section";
import WorkSection from "../ui/home/work";
import FaqSection from "../ui/home/faq-section";
import CtaSection from "../ui/home/cta";
import BrandFooter from "../brand-footer";

const HomePage = () => {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#050505]">
      <div className="relative flex h-svh min-h-160 flex-col">
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0">
            <DotMatrix />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_62%_18%,rgba(255,122,26,0.11),transparent_62%)]"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,transparent_75%,rgba(5,5,5,0.55)_100%)]"
          />

          <div className="relative z-10 flex h-full flex-col justify-center">
            <Hero />
          </div>
        </div>

        {/* <CapabilityTicker /> */}
      </div>

      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <FaqSection />
      <CtaSection />
      <BrandFooter />
    </main>
  );
};

export default HomePage;
