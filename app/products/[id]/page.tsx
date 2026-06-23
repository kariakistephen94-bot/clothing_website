import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import {
  getProductById,
  getProductsByGender,
  products,
} from "@/data/products";
import ProductGallery from "@/components/ProductGallery";
import ProductDetail from "@/components/ProductDetail";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "ÉLAN Atelier" };
  return {
    title: `${product.name} — ÉLAN Atelier`,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = getProductsByGender(product.gender)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-ivory pt-16 lg:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1400px] px-5 pt-8 sm:px-8 lg:px-12">
        <nav className="flex items-center gap-2 text-xs tracking-luxe text-muted uppercase">
          <Link href="/" className="transition-colors hover:text-charcoal">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link
            href={`/#${product.gender}`}
            className="capitalize transition-colors hover:text-charcoal"
          >
            {product.gender}
          </Link>
          <ChevronRight size={12} />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <section className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ProductGallery images={product.images} alt={product.name} />
          </div>
          <ProductDetail product={product} />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-stone/70 py-20 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="mb-10 flex items-end justify-between sm:mb-12">
                <div>
                  <p className="eyebrow mb-3 text-champagne">Complete the Look</p>
                  <h2 className="font-display text-3xl font-light text-charcoal sm:text-4xl">
                    You may also like
                  </h2>
                </div>
                <Link
                  href={`/#${product.gender}`}
                  className="link-underline hidden text-[0.78rem] tracking-luxe text-charcoal uppercase sm:block"
                >
                  View All
                </Link>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
