"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { label: "Women", href: "/#women" },
  { label: "Men", href: "/#men" },
  { label: "Collections", href: "/#collections" },
  { label: "New Arrivals", href: "/#new-arrivals" },
  { label: "About", href: "/#about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Only the homepage has a full-bleed hero to sit transparently over.
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid bar whenever scrolled, not on the homepage, or mobile menu open.
  const solid = scrolled || !overHero || mobileOpen;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ${
          solid
            ? "border-b border-stone/60 bg-ivory/85 shadow-[0_1px_30px_rgba(17,17,17,0.04)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
          {/* Left — mobile toggle + logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
              className={`-ml-1 p-1 lg:hidden ${
                solid ? "text-charcoal" : "text-ivory"
              }`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`font-display text-2xl font-medium leading-none tracking-[0.22em] transition-colors lg:text-[1.7rem] ${
                solid ? "text-charcoal" : "text-ivory"
              }`}
            >
              ÉLAN
            </Link>
          </div>

          {/* Center — primary navigation */}
          <ul
            className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 text-[0.8rem] font-medium tracking-luxe lg:flex ${
              solid ? "text-charcoal" : "text-ivory"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="link-underline py-2 uppercase">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right — utilities */}
          <div
            className={`flex items-center gap-4 sm:gap-5 ${
              solid ? "text-charcoal" : "text-ivory"
            }`}
          >
            <button
              type="button"
              aria-label="Search"
              className="hidden transition-opacity hover:opacity-60 sm:block"
            >
              <Search size={19} strokeWidth={1.6} />
            </button>
            <button
              type="button"
              aria-label="Account"
              className="hidden transition-opacity hover:opacity-60 sm:block"
            >
              <User size={19} strokeWidth={1.6} />
            </button>
            <button
              type="button"
              aria-label="Shopping bag"
              onClick={openCart}
              className="relative transition-opacity hover:opacity-60"
            >
              <ShoppingBag size={19} strokeWidth={1.6} />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-champagne px-1 text-[0.62rem] font-semibold text-charcoal"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory pt-16 lg:hidden"
          >
            <ul className="flex flex-col px-6 pt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.5 }}
                  className="border-b border-stone/60"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-5 font-display text-3xl font-light text-charcoal"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 flex gap-6 px-6 text-[0.8rem] tracking-luxe text-muted uppercase">
              <button type="button" className="link-underline">
                Search
              </button>
              <button type="button" className="link-underline">
                Account
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
