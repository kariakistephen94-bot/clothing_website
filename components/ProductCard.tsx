"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { formatPrice, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link href={`/products/${product.id}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-stone">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />

        {/* Secondary image cross-fade on hover */}
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        )}

        {product.isNew && (
          <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 text-[0.62rem] font-semibold tracking-luxe text-charcoal uppercase backdrop-blur-sm">
            New
          </span>
        )}

        {/* Quick add */}
        <motion.button
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${product.name} to bag`}
          whileTap={{ scale: 0.92 }}
          className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-ivory text-charcoal opacity-0 shadow-lg transition-all duration-500 hover:bg-champagne group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Plus size={18} strokeWidth={1.8} />
        </motion.button>
      </div>

      {/* Meta */}
      <div className="pt-4">
        <p className="eyebrow mb-1 text-muted">{product.category}</p>
        <h3 className="text-[0.95rem] font-medium leading-snug text-charcoal transition-colors group-hover:text-champagne">
          {product.name}
        </h3>
        <p className="mt-1.5 text-[0.95rem] font-medium text-charcoal">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
