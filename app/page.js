import HeroSection from "./components/HeroSection";
import PropertySection from "./components/PropertySection";
import PropertyTypes from "./components/PropertyTypes";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PropertyTypes />
      <PropertySection />
    </>
  );
}
