import { FeaturesSection } from "@/features/cms/components/FeaturesSection";
import { HeroSection } from "@/features/cms/components/HeroSection";

export default function Home() {
  return (
    <div className="space-y-28">
      <HeroSection />
      <FeaturesSection />
      <div></div>
    </div>
  );
}
