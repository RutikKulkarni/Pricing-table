import type { Plan, FeatureConfig } from "@/types/pricing";

export const PRICING_PLANS: Plan[] = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    features: [
      "Up to 1,000 events/month",
      "Basic analytics dashboard",
      "Email support",
      "1 team member",
      "Basic integrations",
    ],
  },
  {
    name: "Pro",
    monthly: 29,
    yearly: 290,
    features: [
      "Up to 50,000 events/month",
      "Advanced analytics dashboard",
      "Priority email support",
      "Up to 10 team members",
      "All integrations",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    monthly: 99,
    yearly: 990,
    features: [
      "Unlimited events",
      "Enterprise analytics",
      "24/7 phone & email support",
      "Unlimited team members",
      "All integrations + custom",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "API access",
      "Advanced integrations",
      "Dedicated account manager",
      "Custom contracts",
    ],
  },
];

export const FEATURE_CONFIG: FeatureConfig[] = [
  {
    label: "Basic analytics dashboard",
    availability: { Free: true, Pro: true, Enterprise: true },
  },
  {
    label: "Advanced analytics dashboard",
    availability: { Free: false, Pro: true, Enterprise: true },
  },
  {
    label: "Enterprise analytics",
    availability: { Free: false, Pro: false, Enterprise: true },
  },
  {
    label: "Email support",
    availability: { Free: true, Pro: true, Enterprise: true },
  },
  {
    label: "Priority email support",
    availability: { Free: false, Pro: true, Enterprise: true },
  },
  {
    label: "24/7 phone & email support",
    availability: { Free: false, Pro: false, Enterprise: true },
  },
  {
    label: "Up to 1,000 events/month",
    availability: { Free: true, Pro: false, Enterprise: false },
  },
  {
    label: "Up to 50,000 events/month",
    availability: { Free: false, Pro: true, Enterprise: false },
  },
  {
    label: "Unlimited events",
    availability: { Free: false, Pro: false, Enterprise: true },
  },
  {
    label: "1 team member",
    availability: { Free: true, Pro: false, Enterprise: false },
  },
  {
    label: "Up to 10 team members",
    availability: { Free: false, Pro: true, Enterprise: false },
  },
  {
    label: "Unlimited team members",
    availability: { Free: false, Pro: false, Enterprise: true },
  },
  {
    label: "Basic integrations",
    availability: { Free: true, Pro: false, Enterprise: false },
  },
  {
    label: "All integrations",
    availability: { Free: false, Pro: true, Enterprise: false },
  },
  {
    label: "All integrations + custom",
    availability: { Free: false, Pro: false, Enterprise: true },
  },
  {
    label: "API access",
    availability: { Free: false, Pro: true, Enterprise: true },
  },
  {
    label: "Custom branding",
    availability: { Free: false, Pro: true, Enterprise: true },
  },
  {
    label: "Priority support",
    availability: { Free: false, Pro: true, Enterprise: true },
  },
  {
    label: "Advanced integrations",
    availability: { Free: false, Pro: false, Enterprise: true },
  },
  {
    label: "Dedicated account manager",
    availability: { Free: false, Pro: false, Enterprise: true },
  },
  {
    label: "Custom contracts",
    availability: { Free: false, Pro: false, Enterprise: true },
  },
];
