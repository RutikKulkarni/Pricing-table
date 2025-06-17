export interface Plan {
  name: string;
  monthly: number;
  yearly: number;
  features: string[];
}

export interface FeatureConfig {
  label: string;
  availability: {
    [planName: string]: boolean;
  };
}

export interface PricingConfig {
  plans: Plan[];
  features: FeatureConfig[];
}
