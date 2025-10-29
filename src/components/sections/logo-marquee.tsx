import Image from "next/image";

const logos = [
  { href: "https://stripe.com", src: "https://assets.stripe.com/assets/shared/images/brand.png", alt: "Stripe", width: 120, height: 30 },
  { href: "https://kafka.apache.org", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg", alt: "Kafka", width: 120, height: 30 },
  { href: "https://redis.io", src: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg", alt: "Redis", width: 120, height: 30 },
  { href: "https://www.postgresql.org", src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", alt: "PostgreSQL", width: 120, height: 30 },
  { href: "https://nodejs.org", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", alt: "Node.js", width: 120, height: 30 },
  { href: "https://www.python.org", src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", alt: "Python", width: 40, height: 40 },
];

const LogoMarquee = () => {
  return (
    <section className="bg-sand-100 overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="container text-center">
        <h2 className="text-xl font-semibold tracking-tight text-balance lg:text-3xl">
          Built for modern usage-based SaaS stacks
        </h2>
      </div>
      <div className="relative mt-10">
        <div className="flex w-full">
          <div className="animate-marquee flex shrink-0 items-center gap-12">
            {logos.map((logo) => (
              <a key={logo.alt} href={logo.href} className="p-6" target="_blank" rel="noreferrer">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </a>
            ))}
          </div>
          <div
            className="animate-marquee flex shrink-0 items-center gap-12"
            aria-hidden="true"
          >
            {logos.map((logo) => (
              <a key={`${logo.alt}-duplicate`} href={logo.href} className="p-6" target="_blank" rel="noreferrer">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;