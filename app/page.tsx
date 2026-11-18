import Hero from "@/app/components/landing/Hero";
import Services from "@/app/components/landing/Services";
import Portfolio from "@/app/components/landing/Portfolio";
import FAQ from "@/app/components/landing/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <FAQ />
    </>
  );
}
