"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProductsByGender, type Gender } from "@/data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

const TABS: { label: string; value: Gender }[] = [
  { label: "Women", value: "women" },
  { label: "Men", value: "men" },
];

export default function NewArrivals() {
  const [active, setActive] = useState<Gender>("women");
  const items = getProductsByGender(active);

  return (
    <section
      id="new-arrivals"
      className="scroll-mt-24 border-t border-stone/70 bg-ivory py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow mb-3 text-champagne">New Arrivals</p>
            <h2 className="max-w-2xl font-display text-4xl font-light leading-tight text-charcoal sm:text-5xl">
              The latest from the atelier.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              Newly released pieces, crafted in limited quantities from the
              world&apos;s finest materials.
            </p>

            {/* Gender toggle */}
            <div className="mt-9 inline-flex rounded-full border border-stone bg-stone/30 p-1">
              {TABS.map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActive(tab.value)}
                  className="relative rounded-full px-7 py-2 text-[0.78rem] font-semibold tracking-luxe uppercase transition-colors"
                >
                  {active === tab.value && (
                    <motion.span
                      layoutId="arrivals-pill"
                      className="absolute inset-0 rounded-full bg-charcoal"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      active === tab.value ? "text-ivory" : "text-muted"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Product grid */}
        <div className="mt-12 lg:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-4"
            >
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
