"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";
import type { ProductCopy } from "@/i18n/dict";
import { ProductModal } from "./ProductModal";

interface ProductCardProps {
  product: Product;
  copy: ProductCopy;
  formatsOnRequestLabel: string;
  detailsCtaLabel: string;
  closeLabel: string;
}

export function ProductCard({
  product,
  copy,
  formatsOnRequestLabel,
  detailsCtaLabel,
  closeLabel,
}: ProductCardProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isFeatured = product.featured;

  function handleClose() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <>
      <div className={`card flex flex-col overflow-hidden p-0 ${isFeatured ? "sm:col-span-2" : ""}`}>
        <div className={`relative w-full bg-bone ${isFeatured ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
          <Image
            src={isFeatured && product.imageWide ? product.imageWide : product.image}
            alt={copy.name}
            fill
            sizes={isFeatured ? "(min-width: 768px) 800px, 100vw" : "(min-width: 768px) 400px, 100vw"}
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="text-xl font-bold text-navy-deep">{copy.name}</h3>
          <p className="flex-1 text-sm text-navy-deep/70">{copy.short}</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-leaf">
            {formatsOnRequestLabel}
          </p>
          <button
            type="button"
            ref={triggerRef}
            onClick={() => setOpen(true)}
            className="btn-ghost mt-2 self-start"
          >
            {detailsCtaLabel}
          </button>
        </div>
      </div>

      {open ? (
        <ProductModal
          name={copy.name}
          description={copy.long}
          image={product.image}
          onClose={handleClose}
          closeLabel={closeLabel}
        />
      ) : null}
    </>
  );
}
