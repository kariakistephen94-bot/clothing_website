"use client";

import { collections } from "@/data/products";
import CollectionCard from "./CollectionCard";
import Reveal from "./Reveal";

const women = collections.filter((c) => c.gender === "women");
const men = collections.filter((c) => c.gender === "men");

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal>
      <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow mb-3 text-champagne">{eyebrow}</p>
          <h2 className="font-display text-4xl font-light leading-tight text-charcoal sm:text-5xl">
            {title}
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </Reveal>
  );
}

export default function FeaturedCollections() {
  return (
    <section
      id="collections"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Women */}
      <div id="women" className="scroll-mt-24">
        <SectionHeading
          eyebrow="The Women's Edit"
          title="Curated for her."
          description="Pieces defined by line, drape, and restraint — a wardrobe built to endure beyond the season."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {women.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <CollectionCard collection={c} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Men */}
      <div id="men" className="mt-20 scroll-mt-24 lg:mt-28">
        <SectionHeading
          eyebrow="The Men's Edit"
          title="Tailored for him."
          description="Considered tailoring and elevated essentials, cut for the modern man who values craft over noise."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {men.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <CollectionCard collection={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
