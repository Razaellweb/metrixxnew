import { Check } from "lucide-react";

interface Feature {
  text: string;
  isHeading?: boolean;
}

interface Plan {
  plan: string;
  price: string;
  priceSuffix: string | null;
  features: Feature[];
  cta: string;
  recommended: boolean;
}

const pricingPlans: Plan[] = [
  {
    plan: "Starter",
    price: "$0",
    priceSuffix: "/month",
    features: [
      { text: "10k metered events/mo" },
      { text: "Basic pricing rules" },
      { text: "Stripe test mode" },
      { text: "Community support" },
    ],
    cta: "Get started free",
    recommended: false,
  },
  {
    plan: "Growth",
    price: "$299",
    priceSuffix: "/month + usage",
    features: [
      { text: "All in Starter, plus:", isHeading: true },
      { text: "1M events/mo included" },
      { text: "Dynamic pricing engine" },
      { text: "Threshold alerts & webhooks" },
      { text: "Plan migration with proration" },
    ],
    cta: "Start 14-day trial",
    recommended: true,
  },
  {
    plan: "Enterprise",
    price: "Custom",
    priceSuffix: null,
    features: [
      { text: "All in Growth, plus:", isHeading: true },
      { text: "SOC2 & SSO" },
      { text: "Advanced VAT/GST" },
      { text: "Dedicated support & SLAs" },
      { text: "On-prem options" },
    ],
    cta: "Contact sales",
    recommended: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-12 md:py-20 lg:py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
          Pricing
        </h2>
        <p className="mt-3 text-lg font-medium text-muted-foreground">
          Scale from startup to enterprise with transparent pricing and usage tiers.
        </p>
      </div>
      <div className="container mt-8 grid gap-8 md:mt-12 lg:grid-cols-3 lg:gap-4">
        {pricingPlans.map((plan) => (
          <div
            key={plan.plan}
            className={`flex flex-col justify-between gap-6 rounded-xl border p-8 transition-all hover:shadow-lg ${
              plan.recommended ? "bg-primary/5 ring-2 ring-green-600" : ""
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold tracking-tight">
                {plan.plan}
              </h3>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                {plan.priceSuffix && (
                  <span className="text-muted-foreground">
                    {plan.priceSuffix}
                  </span>
                )}
              </div>
              <ul className="space-y-2 text-start">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={
                      feature.isHeading
                        ? "text-muted-foreground -ml-8"
                        : "flex items-center gap-3"
                    }
                  >
                    {!feature.isHeading && (
                      <Check className="size-5 shrink-0 text-green-600" />
                    )}
                    {feature.text.replace(/&amp;/g, "&")}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="/signup"
              className={`inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 ${
                plan.recommended
                  ? "bg-green-600 text-white shadow-sm hover:bg-green-700"
                  : "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;