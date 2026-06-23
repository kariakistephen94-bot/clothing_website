"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Collection } from "@/data/products";

interface CollectionCardProps {
  collection: Collection;
  /** Larger feature tile spans more space in the grid. */
  large?: boolean;
}

export default function CollectionCard({
  collection,
  large = false,
}: CollectionCardProps) {
  return (
    <Link
      href="/#new-arrivals"
      className={`group relative block overflow-hidden bg-stone ${
        large ? "aspect-[4/5] sm:aspect-auto" : "aspect-[4/5]"
      }`}
    >
      <Image
        src={collection.image}
        alt={collection.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />

      {/* Hover veil */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent transition-opacity duration-700" />
      <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-700 group-hover:bg-charcoal/15" />

      {/* Text overlay */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 lg:p-6">
        <div>
          <p className="eyebrow mb-1.5 text-champagne/90">
            {collection.count} Pieces
          </p>
          <h3 className="font-display text-2xl font-light text-ivory lg:text-[1.7rem]">
            {collection.title}
          </h3>
        </div>
        <span className="flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-ivory/40 text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
