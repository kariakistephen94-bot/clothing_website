"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, Plus, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { formatPrice, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Reveal from "./Reveal";

const assurances = [
  { icon: Truck, text: "Complimentary express shipping" },
  { icon: RotateCcw, text: "Free returns within 30 days" },
  { icon: ShieldCheck, text: "Lifetime craftsmanship guarantee" },
];

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0].name);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, { size, color, quantity: qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col">
      <Reveal y={20}>
        <p className="eyebrow mb-3 text-champagne">{product.category}</p>
        <h1 className="font-display text-4xl font-light leading-tight text-charcoal sm:text-5xl">
          {product.name}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {product.tagline}
        </p>
        <p className="mt-5 font-display text-3xl font-light text-charcoal">
          {formatPrice(product.price)}
        </p>
      </Reveal>

      {/* Color */}
      <Reveal y={20} delay={0.05}>
        <div className="mt-9">
          <div className="mb-3 flex items-center justify-between">
            <span className="eyebrow text-charcoal">Color</span>
            <span className="text-sm text-muted">{color}</span>
          </div>
          <div className="flex gap-3">
            {product.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                aria-label={c.name}
                onClick={() => setColor(c.name)}
                className={`relative h-9 w-9 rounded-full transition-transform duration-300 hover:scale-110 ${
                  color === c.name
                    ? "ring-1 ring-charcoal ring-offset-2 ring-offset-ivory"
                    : "ring-1 ring-stone"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Size */}
      <Reveal y={20} delay={0.1}>
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <span className="eyebrow text-charcoal">Size</span>
            <button
              type="button"
              className="link-underline text-xs tracking-luxe text-muted uppercase"
            >
              Size Guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`min-w-[3.25rem] border px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  size === s
                    ? "border-charcoal bg-charcoal text-ivory"
                    : "border-stone bg-transparent text-charcoal hover:border-charcoal"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Quantity + Add */}
      <Reveal y={20} delay={0.15}>
        <div className="mt-9 flex gap-3">
          <div className="flex items-center border border-stone">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="flex h-full w-12 items-center justify-center text-charcoal transition-colors hover:bg-stone/40"
            >
              <Minus size={15} />
            </button>
            <span className="w-10 text-center text-sm tabular-nums">{qty}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQty((q) => q + 1)}
              className="flex h-full w-12 items-center justify-center text-charcoal transition-colors hover:bg-stone/40"
            >
              <Plus size={15} />
            </button>
          </div>

          <motion.button
            type="button"
            onClick={handleAdd}
            whileTap={{ scale: 0.98 }}
            className="relative flex flex-1 items-center justify-center overflow-hidden rounded-full bg-charcoal py-4 text-[0.78rem] font-semibold tracking-luxe text-ivory uppercase transition-colors hover:bg-champagne hover:text-charcoal"
          >
            <AnimatePresence mode="wait" initial={false}>
              {added ? (
                <motion.span
                  key="added"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="flex items-center gap-2"
                >
                  <Check size={16} /> Added to Bag
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                >
                  Add to Bag — {formatPrice(product.price * qty)}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </Reveal>

      {/* Description */}
      <Reveal y={20} delay={0.2}>
        <div className="mt-12 border-t border-stone/70 pt-8">
          <h2 className="eyebrow mb-4 text-charcoal">The Piece</h2>
          <p className="text-[0.95rem] leading-relaxed text-ink/80">
            {product.description}
          </p>
        </div>
      </Reveal>

      {/* Details */}
      <Reveal y={20} delay={0.25}>
        <div className="mt-8 border-t border-stone/70 pt-8">
          <h2 className="eyebrow mb-4 text-charcoal">Details & Care</h2>
          <ul className="space-y-2.5">
            {product.details.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 text-[0.95rem] text-ink/80"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Assurances */}
      <Reveal y={20} delay={0.3}>
        <div className="mt-8 grid gap-3 border-t border-stone/70 pt-8">
          {assurances.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-sm text-muted">
              <Icon size={17} strokeWidth={1.5} className="text-charcoal" />
              {text}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
