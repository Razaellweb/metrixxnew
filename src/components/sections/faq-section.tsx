"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is Metrixx?",
    answer:
      "Metrixx provides real-time metering, dynamic pricing, Stripe-powered billing, and entitlement management for SaaS, AI, and API-driven businesses.",
  },
  {
    question: "How do pricing tiers and proration work?",
    answer:
      "Define tier rules in the pricing engine. We auto-prorate on plan migrations and sync invoices to Stripe.",
  },
  {
    question: "Do you have SDKs?",
    answer:
      "Yes, official SDKs for Node.js and Python with examples for quick integration.",
  },
  {
    question: "What about taxes and currencies?",
    answer:
      "We support multi-currency pricing and basic VAT/GST handling out of the box.",
  },
  {
    question: "How fast are entitlement checks?",
    answer:
      "Typical P99 under 50ms using cached policies backed by Redis.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-12 w-full">
            {faqData.map((faq, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="py-6 text-left text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;