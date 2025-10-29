import Image from "next/image";

const features = [
  {
    title: "Dynamic pricing engine",
    description:
      "Tiered, volume, and hybrid usage models with proration and plan migrations.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Stripe-powered billing",
    description: "Subscriptions, invoices, retries, and multi-currency support.",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1920&auto=format&fit=crop",
    className: "",
  },
  {
    title: "SDKs for Node.js & Python",
    description:
      "Integrate in minutes with our developer-friendly SDKs and examples.",
    image:
      "https://images.unsplash.com/photo-1518773664404-42a43aee47f9?q=80&w=1920&auto=format&fit=crop",
    className: "",
  },
  {
    title: "Kafka + Redis pipeline",
    description:
      "High-throughput ingestion with low-latency entitlement checks.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&auto=format&fit=crop",
    className: "",
  },
  {
    title: "PostgreSQL storage",
    description:
      "Reliable accounting and analytics with strong consistency.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1920&auto=format&fit=crop",
    className: "",
  },
];

const FeatureCard = ({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image: string;
  className?: string;
}) => {
  const isWide = className?.includes("lg:col-span-2");

  if (isWide) {
    return (
      <div
        className={`bg-card rounded-[24px] p-6 shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 group ${
          className ?? ""
        }`}
      >
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center h-full">
          <div className="max-md:mb-6">
            <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-card rounded-[24px] p-6 shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 group ${
        className ?? ""
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl border">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

const BentoGridFeatures = () => {
  return (
    <section id="feature2" className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
            Flexible pricing and infrastructure that grows with you
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              className={feature.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGridFeatures;