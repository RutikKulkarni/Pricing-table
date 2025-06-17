"use client";

import { FaCheck, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Plan, FeatureConfig } from "@/types/pricing";

interface FeatureComparisonProps {
  plans: Plan[];
  features: FeatureConfig[];
}

export function FeatureComparison({ plans, features }: FeatureComparisonProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-600">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Feature Comparison
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Compare features across all plans
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200 dark:border-gray-600">
              <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white text-base w-2/5">
                Features
              </th>
              {plans.map((plan) => (
                <th key={plan.name} className="text-center py-4 px-4 w-1/5">
                  <div className="space-y-2">
                    <div className="font-bold text-lg text-gray-900 dark:text-white">
                      {plan.name}
                    </div>
                    {plan.name === "Pro" && (
                      <Badge variant="default" size="sm">
                        Recommended
                      </Badge>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <motion.tr
                key={feature.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className={`border-b border-gray-100 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  index % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gray-50 dark:bg-gray-850"
                }`}
              >
                <td className="py-4 px-6">
                  <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                    {feature.label}
                  </div>
                </td>
                {plans.map((plan) => (
                  <td key={plan.name} className="py-4 px-4 text-center">
                    <div className="flex justify-center">
                      {feature.availability[plan.name] ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 bg-green-100 dark:bg-green-900/40 rounded-full">
                          <FaCheck className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 dark:bg-gray-600 rounded-full">
                          <FaTimes className="w-3.5 h-3.5 text-gray-400 dark:text-gray-400" />
                        </div>
                      )}
                    </div>
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 text-center border-t border-gray-200 dark:border-gray-600">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Need a custom plan?{" "}
          <Button variant="link" size="sm" className="p-0 h-auto font-semibold">
            Contact our sales team
          </Button>
        </p>
      </div>
    </div>
  );
}
