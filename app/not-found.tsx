import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-5 text-champagne">Error 404</p>
      <h1 className="font-display text-5xl font-light text-charcoal sm:text-6xl">
        This page has moved on.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        The piece you are looking for is no longer here. Discover the rest of
        the collection instead.
      </p>
      <Link
        href="/"
        className="mt-9 inline-flex items-center justify-center rounded-full bg-charcoal px-9 py-4 text-[0.78rem] font-semibold tracking-luxe text-ivory uppercase transition-colors hover:bg-champagne hover:text-charcoal"
      >
        Return Home
      </Link>
    </section>
  );
}
