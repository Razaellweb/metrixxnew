import { Cpu, Bell, ShieldCheck } from "lucide-react";
import type { LucideProps } from "lucide-react";

interface StatCardProps {
  icon: React.ComponentType<LucideProps>;
  stat: string;
  label: string;
}

const stats: StatCardProps[] = [
  {
    icon: Cpu,
    stat: "<50ms",
    label: "Entitlement checks",
  },
  {
    icon: Bell,
    stat: "Thresholds",
    label: "Alerts & webhooks",
  },
  {
    icon: ShieldCheck,
    stat: "99.99%",
    label: "Uptime for billing events",
  },
];

const StatsCardsFeature = () => {
  return (
    <section id="feature1" className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-3 md:flex-row">
          <h2 className="flex-1 text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            Real-time metering and entitlements that scale
          </h2>
          <p className="flex-1 text-lg font-medium text-muted-foreground md:max-w-md md:self-end">
            Ingest usage with idempotent events, compute pricing on the fly, and enforce access with cached entitlement checks.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-12 lg:mt-20 lg:grid-cols-3">
          {stats.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b from-muted to-mint [aspect-ratio:3.5/2.6] transition-transform duration-300 ease-in-out hover:scale-105 md:[aspect-ratio:3.8/4]"
              >
                <div className="p-8 pb-2">
                  <Icon className="size-10 text-green-700" />
                </div>
                <div className="p-6">
                  <div className="text-5xl font-semibold tracking-tight">
                    {card.stat}
                  </div>
                  <div className="text-xl font-semibold tracking-tight">
                    {card.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCardsFeature;