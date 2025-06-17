"use client";

import { Switch } from "@headlessui/react";

interface BillingToggleProps {
  isYearly: boolean;
  onToggle: (isYearly: boolean) => void;
}

export function BillingToggle({ isYearly, onToggle }: BillingToggleProps) {
  return (
    <div className="flex flex-col items-center gap-2 pb-8">
      <div className="flex items-center gap-4">
        <span
          className={`text-sm font-medium transition-colors ${
            !isYearly
              ? "text-gray-900 dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          Monthly
        </span>

        <Switch
          checked={isYearly}
          onChange={onToggle}
          className={`${
            isYearly
              ? "bg-gray-900 dark:bg-white"
              : "bg-gray-200 dark:bg-gray-600"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors `}
        >
          <span
            className={`${
              isYearly ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-900 transition-transform`}
          />
        </Switch>

        <span
          className={`text-sm font-medium transition-colors ${
            isYearly
              ? "text-gray-900 dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          Yearly
        </span>
      </div>

      <div
        className={`text-xs font-semibold h-4 transition-opacity duration-200 ${
          isYearly ? "opacity-100" : "opacity-0"
        } text-green-600 dark:text-green-400`}
      >
        (Save up to 17%)
      </div>
    </div>
  );
}
