"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    count,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease }}
            className="fixed inset-y-0 right-0 z-[61] flex w-full max-w-md flex-col bg-ivory shadow-2xl"
            role="dialog"
            aria-label="Shopping bag"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone/70 px-6 py-5">
              <h2 className="flex items-baseline gap-2 font-display text-2xl font-light text-charcoal">
                Shopping Bag
                <span className="text-sm font-sans text-muted">({count})</span>
              </h2>
              <button
                type="button"
                aria-label="Close"
                onClick={closeCart}
                className="-mr-1 p-1 text-charcoal transition-opacity hover:opacity-60"
              >
                <X size={22} strokeWidth={1.6} />
              </button>
            </div>

            {/* Items */}
            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-stone/50 text-muted">
                  <ShoppingBag size={26} strokeWidth={1.4} />
                </span>
                <div>
                  <p className="font-display text-xl text-charcoal">
                    Your bag is empty
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Discover pieces made to last.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-2 rounded-full bg-charcoal px-8 py-3 text-[0.75rem] font-semibold tracking-luxe text-ivory uppercase transition-colors hover:bg-champagne hover:text-charcoal"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="no-scrollbar flex-1 overflow-y-auto px-6 py-2">
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.key}
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0, x: 24 }}
                      transition={{ duration: 0.4, ease }}
                      className="flex gap-4 border-b border-stone/60 py-5"
                    >
                      <Link
                        href={`/products/${item.product.id}`}
                        onClick={closeCart}
                        className="relative aspect-[4/5] w-20 shrink-0 overflow-hidden bg-stone"
                      >
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="88px"
                          className="object-cover"
                        />
                      </Link>

                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between gap-2">
                          <div>
                            <h3 className="text-sm font-medium leading-snug text-charcoal">
                              {item.product.name}
                            </h3>
                            <p className="mt-1 text-xs text-muted">
                              {item.color} · Size {item.size}
                            </p>
                          </div>
                          <button
                            type="button"
                            aria-label="Remove item"
                            onClick={() => removeItem(item.key)}
                            className="h-fit p-1 text-muted transition-colors hover:text-charcoal"
                          >
                            <X size={16} />
                          </button>
                        </div>

                        <div className="mt-auto flex items-end justify-between pt-3">
                          {/* Quantity */}
                          <div className="flex items-center border border-stone">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() =>
                                updateQuantity(item.key, item.quantity - 1)
                              }
                              className="flex h-8 w-8 items-center justify-center text-charcoal transition-colors hover:bg-stone/50"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-8 text-center text-sm tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() =>
                                updateQuantity(item.key, item.quantity + 1)
                              }
                              className="flex h-8 w-8 items-center justify-center text-charcoal transition-colors hover:bg-stone/50"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <p className="text-sm font-medium text-charcoal">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* Footer / checkout */}
            {items.length > 0 && (
              <div className="border-t border-stone/70 px-6 py-6">
                <div className="flex items-center justify-between text-sm text-muted">
                  <span>Shipping</span>
                  <span>Complimentary</span>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-base font-medium text-charcoal">
                    Subtotal
                  </span>
                  <span className="font-display text-2xl font-light text-charcoal">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted">
                  Taxes calculated at checkout.
                </p>

                <button
                  type="button"
                  className="mt-5 w-full rounded-full bg-charcoal py-4 text-[0.78rem] font-semibold tracking-luxe text-ivory uppercase transition-colors hover:bg-champagne hover:text-charcoal"
                >
                  Proceed to Checkout
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-3 w-full text-center text-[0.78rem] tracking-luxe text-muted uppercase transition-colors hover:text-charcoal"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
