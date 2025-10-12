import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <CoreValues />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Video />
      <Pricing />
      <FAQ />
      <Blog />
      <CTA />
    </>
  );
};

export default HomePage;
