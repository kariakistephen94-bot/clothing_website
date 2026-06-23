"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_IMAGE } from "@/data/products";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-charcoal">
      {/* Cinematic background */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease }}
        className="absolute inset-0"
      >
        <Image
          src={HERO_IMAGE}
          alt="ÉLAN Atelier campaign — a model in contemporary Nigerian tailoring"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Tonal overlays for legibility & mood */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/45 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-charcoal/15" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="eyebrow mb-6 text-champagne"
        >
          Spring — Summer Collection
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.55, ease }}
          className="max-w-4xl font-display text-[2.7rem] font-light leading-[1.04] tracking-[-0.01em] text-ivory sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
        >
          Designed for the moments
          <br className="hidden sm:block" /> that define you.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.75, ease }}
          className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/80 sm:text-lg"
        >
          Contemporary fashion crafted with timeless elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href="/#women"
            className="group inline-flex items-center justify-center rounded-full bg-ivory px-9 py-[0.95rem] text-[0.78rem] font-semibold tracking-luxe text-charcoal uppercase transition-all duration-500 hover:bg-champagne"
          >
            Shop Women
          </Link>
          <Link
            href="/#men"
            className="inline-flex items-center justify-center rounded-full border border-ivory/60 px-9 py-[0.95rem] text-[0.78rem] font-semibold tracking-luxe text-ivory uppercase backdrop-blur-sm transition-all duration-500 hover:border-ivory hover:bg-ivory/10"
          >
            Shop Men
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/40 p-1.5"
        >
          <span className="block h-2 w-0.5 rounded-full bg-ivory/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
