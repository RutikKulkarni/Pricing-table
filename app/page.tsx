import { PricingSection } from "@/components/sections/pricing-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-end mb-8">
            <ThemeToggle />
          </div>

          <HeroSection />
          <PricingSection />
        </div>
      </main>
    </div>
  );
}
