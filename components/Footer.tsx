"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube, ArrowRight } from "lucide-react";

const columns = [
  {
    title: "Customer Service",
    links: ["Contact Us", "FAQ", "Order Tracking", "Returns & Exchanges", "Size Guide"],
  },
  {
    title: "Shipping",
    links: ["Shipping Information", "International Delivery", "Click & Collect", "Gift Wrapping"],
  },
  {
    title: "The House",
    links: ["Our Story", "Sustainability", "Careers", "Press", "Boutiques"],
  },
];

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "Youtube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <footer className="border-t border-stone/70 bg-ivory">
      {/* Newsletter */}
      <div className="border-b border-stone/70">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-20">
          <div>
            <h2 className="font-display text-3xl font-light leading-tight text-charcoal sm:text-4xl">
              Join the ÉLAN circle.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Be the first to receive new collections, private previews, and
              stories from the atelier.
            </p>
          </div>

          <form onSubmit={onSubmit} className="lg:justify-self-end lg:w-full lg:max-w-md">
            <div className="flex items-center border-b border-charcoal/30 pb-2 transition-colors focus-within:border-charcoal">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-transparent text-sm text-charcoal placeholder:text-muted focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="ml-3 flex items-center gap-2 text-[0.72rem] font-semibold tracking-luxe text-charcoal uppercase transition-opacity hover:opacity-60"
              >
                Subscribe
                <ArrowRight size={15} />
              </button>
            </div>
            <p
              className={`mt-3 text-xs text-champagne transition-opacity duration-500 ${
                submitted ? "opacity-100" : "opacity-0"
              }`}
            >
              Thank you — welcome to the circle.
            </p>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <Link
              href="/"
              className="font-display text-3xl font-medium tracking-[0.22em] text-charcoal"
            >
              ÉLAN
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Contemporary fashion crafted with timeless elegance. Designed in
              Lagos, made to remain.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stone text-charcoal transition-colors hover:border-champagne hover:text-champagne"
                >
                  <Icon size={17} strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow mb-5 text-charcoal">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="link-underline text-sm text-muted transition-colors hover:text-charcoal"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone/70">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-muted sm:flex-row sm:px-8 lg:px-12">
          <p>© {2026} ÉLAN Atelier. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#" className="transition-colors hover:text-charcoal">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-charcoal">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-charcoal">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
