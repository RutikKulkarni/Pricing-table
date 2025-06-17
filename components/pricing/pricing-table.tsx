"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PricingCard } from "./pricing-card";
import type { Plan } from "@/types/pricing";

interface PricingTableProps {
  plans: Plan[];
  isYearly: boolean;
}

export function PricingTable({ plans, isYearly }: PricingTableProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
      <AnimatePresence mode="wait">
        {plans.map((plan, index) => (
          <motion.div
            key={`${plan.name}-${isYearly}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: [0.25, 0.25, 0, 1],
            }}
          >
            <PricingCard
              plan={plan}
              isYearly={isYearly}
              isRecommended={plan.name === "Pro"}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
