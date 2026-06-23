"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { STORY_IMAGE } from "@/data/products";
import Reveal from "./Reveal";

const stats = [
  { value: "1998", label: "Founded in Lagos" },
  { value: "100%", label: "Natural materials" },
  { value: "24", label: "Nigerian ateliers" },
];

export default function BrandStory() {
  return (
    <section
      id="about"
      className="scroll-mt-24 overflow-hidden bg-charcoal text-ivory"
    >
      <div className="mx-auto grid max-w-[1400px] items-stretch gap-0 lg:grid-cols-2">
        {/* Editorial image */}
        <div className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:min-h-[680px]">
          <motion.div
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={STORY_IMAGE}
              alt="ÉLAN Atelier editorial portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
          <Reveal>
            <p className="eyebrow mb-8 text-champagne">Our Philosophy</p>
          </Reveal>

          <Reveal delay={0.1}>
            <blockquote className="font-display text-3xl font-light leading-[1.18] tracking-[-0.01em] text-ivory sm:text-[2.7rem]">
              “Fashion is not about following time. It is about creating pieces
              that remain.”
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-ivory/70">
              ÉLAN Atelier was founded in Lagos on a single conviction: that
              true luxury is felt, not flaunted. Each garment is the work of
              Nigerian master artisans who treat cloth as craft — pairing
              generations of West African tailoring with the world&apos;s finest
              materials to make pieces designed to be lived in, and loved, for
              years.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-ivory/15 pt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-light text-champagne sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[0.7rem] leading-snug tracking-luxe text-ivory/50 uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
