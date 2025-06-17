"use client";

import { useState } from "react";
import { PricingTable } from "@/components/pricing/pricing-table";
import { BillingToggle } from "@/components/pricing/billing-toggle";
import { FeatureComparison } from "@/components/pricing/feature-comparison";
import { PRICING_PLANS, FEATURE_CONFIG } from "@/lib/constants/pricing";

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="space-y-12">
      <div className="flex justify-center">
        <BillingToggle isYearly={isYearly} onToggle={setIsYearly} />
      </div>

      <PricingTable plans={PRICING_PLANS} isYearly={isYearly} />

      <div className="mt-16">
        <FeatureComparison plans={PRICING_PLANS} features={FEATURE_CONFIG} />
      </div>
    </div>
  );
}
