import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/faqs";
import { recruitmentTimeline } from "@/lib/data/timeline";

export const metadata: Metadata = {
  title: "Recruitment",
  description:
    "Apply to join Cornell WebDev and work on real web products with a team of student developers and designers.",
};

export default function Recruitment() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Recruitment"
        subtitle="Join a community of builders shipping real products for Cornell."
      />

      {/* Join our team */}
      <section className="w-full border-b border-line bg-surface-hero px-6 py-16 md:px-10 md:py-20">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-serif font-medium text-4xl text-heading md:text-5xl">
            Join our team
          </h2>
          <p className="mt-4 max-w-lg text-body">
            Applications open every semester. Fill out the form below to get started.
          </p>
          <div className="mt-8">
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSdK6vGg7SqWPkc_pbOXM6jXtPkwRuiw9oso609abSLMEUHMzA/viewform?usp=dialog"
              size="lg"
            >
              Application form
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="w-full px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-serif font-medium text-4xl text-heading md:text-5xl">
              How it works
            </h2>
          </Reveal>
          <div className="mt-12">
            <Timeline steps={recruitmentTimeline} />
          </div>
          <p className="font-mono mt-10 pl-10 text-xs text-body-light">
            * Room locations are TBD.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-surface px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-serif font-medium text-4xl text-heading md:text-5xl">
              Frequently asked questions
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 border-t border-line">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
