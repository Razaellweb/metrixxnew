import {
  Cable,
  Coins,
  ServerCog,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

interface TimelineItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

const timelineItems: Omit<TimelineItemProps, "isLast">[] = [
  {
    icon: Cable,
    title: "Integrate",
    description: "Send usage events via API/SDK with idempotency keys.",
  },
  {
    icon: Coins,
    title: "Price",
    description: "Configure dynamic pricing, tiers, and thresholds.",
  },
  {
    icon: ServerCog,
    title: "Bill",
    description: "Sync invoices and subscriptions through Stripe.",
  },
  {
    icon: ShieldCheck,
    title: "Enforce",
    description: "Cache entitlements and enforce access in <50ms.",
  },
];

const TimelineItem = ({
  icon: Icon,
  title,
  description,
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className={`relative pl-12 ${isLast ? "" : "pb-12"}`}>
      <div className="absolute left-4 top-1 -translate-x-1/2">
        <div className="flex size-8 items-center justify-center rounded-full border bg-background">
          <Icon className="size-4 text-green-700" />
        </div>
      </div>
      <div>
        <h3 className="font-inter text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const TimelineFeature = () => {
  return (
    <section className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            From events to revenue to access
          </h2>
          <p className="mt-6 text-lg font-medium text-muted-foreground">
            Metrixx connects your metering, pricing, billing, and entitlements into a single scalable workflow.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-xl md:mt-20">
          <div className="absolute left-4 top-2 bottom-8 w-px -translate-x-1/2 bg-border"></div>
          <div className="absolute left-4 top-1/4 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-border"></div>
          <div className="absolute left-4 top-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-border"></div>
          <div className="absolute left-4 top-3/4 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-border"></div>

          <div>
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                isLast={index === timelineItems.length - 1}
              />
            ))}
          </div>
        </div>
        <h4 className="mt-8 text-center text-sm font-medium text-muted-foreground">
          Designed for SaaS, AI and API platforms.
        </h4>
      </div>
    </section>
  );
};

export default TimelineFeature;