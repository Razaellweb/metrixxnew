"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Zap, ShieldCheck, Cpu, BarChart4, ArrowRight } from "lucide-react";

interface Slide {
  image: string;
  alt: string;
  title: string;
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const slidesData: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1551281044-8ea9f52fc3a5?q=80&w=1920&auto=format&fit=crop",
    alt: "Usage metering dashboard",
    title: "Real-time metering",
  },
  {
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1920&auto=format&fit=crop",
    alt: "Dynamic pricing configuration UI",
    title: "Dynamic pricing",
  },
  {
    image: "https://images.unsplash.com/photo-1661961112951-f2fad6d8d142?q=80&w=1920&auto=format&fit=crop",
    alt: "Entitlement checks and SDKs",
    title: "Entitlements & SDKs",
  },
];

const featuresData: Feature[] = [
  {
    icon: Zap,
    title: "Real-time metering",
    description: "Accurate usage tracking with idempotency and low latency.",
  },
  {
    icon: Cpu,
    title: "Dynamic pricing",
    description: "Tiered, volume, and per-seat pricing with proration.",
  },
  {
    icon: ShieldCheck,
    title: "Entitlements",
    description: "Low-latency, cached checks with SDKs for Node.js & Python.",
  },
  {
    icon: BarChart4,
    title: "Stripe billing",
    description: "Seamless payments, multi-currency, VAT/GST basics included.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Pagination = ({ className }: { className?: string }) => (
    <div className={`flex flex-col items-center font-medium ${className}`}>
      <div>
        <span className="text-sand-700">{currentSlide + 1} of {slidesData.length} — </span>
        <span className="text-green-700">{slidesData[currentSlide]?.title}</span>
      </div>
      <div className="flex gap-2">
        {slidesData.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className="py-2"
            onClick={() => setCurrentSlide(index)}
          >
            <div
              className={`h-0.5 w-6 rounded-full transition-colors ${
                currentSlide === index
                  ? "bg-green-600"
                  : "bg-green-600/20 hover:bg-green-600/40"
              }`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-sand-100 relative overflow-hidden pt-16 md:pt-24 lg:pt-32">
      <div className="relative container grid gap-12 lg:grid-cols-[1fr_0.68fr]">
        <div className="to-foreground/27 absolute inset-x-0 bottom-0 z-10 -mr-[max(5rem,calc((100vw-80rem)/2+5rem))] h-px bg-gradient-to-r from-transparent" />
        <div className="space-y-8 lg:space-y-12">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              empower your saas with real-time usage billing and entitlements
            </h1>
            <p className="font-inter-tight text-sand-700 mt-3 text-xl md:text-2xl lg:text-3xl">
              Metrixx is a scalable platform for SaaS, AI, and API businesses: real-time metering, dynamic pricing, Stripe integration, and developer SDKs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {featuresData.map((feature, index) => (
              <div key={index} className="flex max-w-[320px] gap-2.5 lg:gap-5">
                <feature.icon className="mt-1 size-4 shrink-0 lg:size-5 text-green-700" />
                <div>
                  <h2 className="font-inter font-semibold">{feature.title}</h2>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/signup"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white shadow-sm hover:bg-green-700 h-9 px-4 py-2"
              aria-label="Get started free"
            >
              get started free
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 max-sm:hidden"
            >
              <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                see pricing
                <ArrowRight className="size-4" strokeWidth={3} />
              </span>
            </a>
          </div>
          <Pagination className="!mb-4 max-lg:hidden" />
        </div>

        <div className="relative -mr-[max(5rem,calc((100vw-80rem)/2+5rem))] shadow-xl max-lg:translate-x-10 lg:shadow-2xl">
          <div className="relative size-full" role="region">
            <div className="overflow-hidden rounded-t-xl">
              <div
                className="flex size-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slidesData.map((slide, index) => (
                  <div key={index} role="group" className="min-w-0 shrink-0 grow-0 basis-full">
                    <div className="relative size-full min-h-[30rem]">
                       <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          className="object-cover object-left-top"
                          priority={index <= 1}
                        />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination className="mt-6 mb-8 lg:hidden" />
    </section>
  );
};

export default HeroSection;