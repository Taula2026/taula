"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ProductModalProps {
  name: string;
  description: string;
  image: string;
  closeLabel: string;
  onClose: () => void;
}

export function ProductModal({ name, description, image, closeLabel, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/60 p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={name}
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold text-navy-deep">{name}</h3>
          <button
            type="button"
            ref={closeButtonRef}
            onClick={onClose}
            aria-label={closeLabel}
            className="rounded-full p-1 text-navy-deep/60 hover:bg-bone hover:text-navy-deep"
          >
            <X size={22} />
          </button>
        </div>
        <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl bg-bone">
          <Image src={image} alt={name} fill sizes="(min-width: 768px) 512px, 100vw" className="object-cover" />
        </div>
        <p className="mt-4 text-navy-deep/80">{description}</p>
      </div>
    </div>
  );
}
