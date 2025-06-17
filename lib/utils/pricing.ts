import type { Plan } from "@/types/pricing";

export function calculateSavings(plan: Plan, isYearly: boolean): number {
  if (!isYearly || plan.monthly === 0) return 0;
  return Math.round(
    ((plan.monthly * 12 - plan.yearly) / (plan.monthly * 12)) * 100
  );
}

export function formatPrice(price: number): string {
  return `$${price}`;
}

export function getAnnualSavings(plan: Plan): number {
  if (plan.monthly === 0) return 0;
  return plan.monthly * 12 - plan.yearly;
}
