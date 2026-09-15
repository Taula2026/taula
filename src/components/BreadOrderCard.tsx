"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, Package } from "lucide-react";
import { path, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dict";

interface BreadOrderCardProps {
  locale: Locale;
  dict: Dictionary;
}

export function BreadOrderCard({ locale, dict }: BreadOrderCardProps) {
  const router = useRouter();
  const [cartons, setCartons] = useState(1);
  const [note, setNote] = useState("");
  const copy = dict.breadPage.orderCard;

  function handleSubmit() {
    const lines = [`${copy.cartonsLabel}: ${cartons} (${copy.unitLabel})`];
    if (note.trim()) {
      lines.push(`${copy.noteLabel}: ${note.trim()}`);
    }
    const message = lines.join("\n");

    const params = new URLSearchParams();
    params.set("interest", "bread");
    params.set("message", message);

    router.push(`${path(locale, "contact")}?${params.toString()}`);
  }

  return (
    <div className="card">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ice-pale text-navy">
          <Package size={18} aria-hidden="true" />
        </span>
        <h3 className="text-lg font-bold text-navy-deep">{copy.heading}</h3>
      </div>

      <p className="mt-2 text-sm text-navy-deep/60">{copy.unitLabel}</p>

      <div className="mt-6 flex items-center justify-between rounded-xl border border-navy/10 bg-bone px-4 py-3">
        <span className="text-sm font-medium text-navy-deep">{copy.cartonsLabel}</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="decrease"
            onClick={() => setCartons((value) => Math.max(1, value - 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 bg-white text-navy-deep transition-colors hover:border-leaf hover:text-leaf"
          >
            <Minus size={16} />
          </button>
          <span className="w-8 text-center text-lg font-bold text-navy-deep">{cartons}</span>
          <button
            type="button"
            aria-label="increase"
            onClick={() => setCartons((value) => value + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 bg-white text-navy-deep transition-colors hover:border-leaf hover:text-leaf"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="bread-note" className="mb-1 block text-sm font-medium text-navy-deep">
          {copy.noteLabel}
        </label>
        <textarea
          id="bread-note"
          rows={3}
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder={copy.notePlaceholder}
          className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm focus-visible:border-leaf"
        />
      </div>

      <button type="button" onClick={handleSubmit} className="btn-primary mt-5 w-full">
        {copy.submitCta}
      </button>

      <p className="mt-3 text-xs text-navy-deep/60">{copy.helperText}</p>
    </div>
  );
}
