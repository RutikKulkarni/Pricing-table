import { ThemeToggle } from "../ui/theme-toggle";

export function HeroSection() {
  return (
    <div className="relative text-center mb-12">
      {/* <div className="absolute top-0 right-0">
        <ThemeToggle />
      </div> */}

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Choose Your Plan
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Select the perfect plan for your needs. Start free and upgrade as you
        grow.
      </p>
    </div>
  );
}
