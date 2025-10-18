import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <CoreValues />
      <Features />
      <HowItWorks />
      <Testimonials />
      {/* <Video /> */}
      {/* <Pricing /> */}
      <FAQ />
      <Blog />
      {/* <CTA /> */}
    </>
  );
};

export default HomePage;
