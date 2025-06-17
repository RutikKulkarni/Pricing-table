"use client";

import { motion } from "framer-motion";
import { FaCheck, FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { calculateSavings, formatPrice } from "@/lib/utils/pricing";
import type { Plan } from "@/types/pricing";

interface PricingCardProps {
  plan: Plan;
  isYearly: boolean;
  isRecommended?: boolean;
}

export function PricingCard({
  plan,
  isYearly,
  isRecommended,
}: PricingCardProps) {
  const price = isYearly ? plan.yearly : plan.monthly;
  const savings = calculateSavings(plan, isYearly);

  const getButtonText = () => {
    if (plan.name === "Free") return "Get Started";
    if (plan.name === "Enterprise") return "Contact Sales";
    return "Get Started";
  };

  const getButtonVariant = () => {
    if (isRecommended) return "default";
    if (plan.name === "Enterprise") return "default";
    if (plan.name === "Free") return "secondary";
    return "outline";
  };

  return (
    <div
      className={`relative rounded-2xl p-6 transition-all duration-300 ${
        isRecommended
          ? "bg-white dark:bg-gray-800 shadow-2xl ring-2 ring-gray-900 dark:ring-white transform scale-105 hover:scale-110 mt-12 mb-12 md:mt-0 md:mb-0"
          : "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105"
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <Badge
            variant="default"
            className="flex items-center gap-1.5 shadow-lg"
          >
            <FaStar className="w-3 h-3" />
            RECOMMENDED
          </Badge>
        </div>
      )}

      <div className={`${isRecommended ? "pt-4" : ""}`}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {plan.name}
          </h3>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span className="text-lg text-gray-500 dark:text-gray-400">$</span>
            <motion.span
              key={`${price}-${isYearly}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-5xl font-bold text-gray-900 dark:text-white"
            >
              {price}
            </motion.span>
            <span className="text-gray-500 dark:text-gray-400">
              /{isYearly ? "year" : "month"}
            </span>
          </div>

          {isYearly && plan.monthly > 0 && savings > 0 && (
            <div className="mb-2">
              <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
                Originally {formatPrice(plan.monthly * 12)}/year
              </span>
            </div>
          )}

          {savings > 0 && isYearly && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-4"
            >
              <Badge variant="success">
                Save {savings}% ({formatPrice(plan.monthly * 12 - plan.yearly)})
              </Badge>
            </motion.div>
          )}

          {plan.monthly === 0 && (
            <p className="text-green-600 dark:text-green-400 text-sm font-medium">
              Forever free
            </p>
          )}
        </div>

        <div className="mb-8">
          <Button
            variant={getButtonVariant()}
            size="lg"
            className={`w-full ${
              isRecommended
                ? "bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 shadow-lg hover:shadow-xl rounded-xl"
                : plan.name === "Enterprise"
                ? "bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-xl"
                : plan.name === "Free"
                ? "bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 text-white dark:text-gray-900 rounded-xl"
                : ""
            }`}
          >
            {getButtonText()}
          </Button>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
            What's included:
          </h4>
          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-4 h-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <FaCheck className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            {plan.monthly === 0
              ? "No credit card required"
              : "14-day free trial"}
          </p>
        </div>
      </div>
    </div>
  );
}
