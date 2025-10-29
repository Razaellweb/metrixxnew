import Image from 'next/image';

const testimonialsData = [
  {
    quote: "Metering and billing used to be our bottleneck. Metrixx let us launch usage-based pricing in a week.",
    author: {
      name: "Amy Chase",
      role: "PM, AI Platform",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    },
  },
  {
    quote: "The SDKs and webhooks are solid. Entitlement checks are blazing fast and easy to cache.",
    author: {
      name: "Kevin Yam",
      role: "Engineering Lead, Fintech",
      avatar: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=256&auto=format&fit=crop",
    },
  },
  {
    quote: "Stripe integration just worked. Invoices, retries, proration — all handled.",
    author: {
      name: "Sarah Johnson",
      role: "CTO, API Startup",
      avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop",
    },
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-background py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Trusted by modern SaaS teams
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-muted-foreground">
            Move from events to revenue with confidence. Built for scale from day one.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[24px] border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-lg"
            >
              <blockquote className="flex-1 text-base">
                “{testimonial.quote}”
              </blockquote>
              <footer className="mt-6 flex items-center gap-4">
                <Image
                  src={testimonial.author.avatar}
                  alt={`Avatar of ${testimonial.author.name}`}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.author.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.author.role}
                  </div>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;