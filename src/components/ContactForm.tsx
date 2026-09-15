"use client";

import { Suspense, useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCT_SLUGS, type ProductSlug } from "@/data/products";
import type { Dictionary } from "@/i18n/dict";

interface ContactFormProps {
  dict: Dictionary;
}

type Interest = ProductSlug | "general" | "bread";

interface DraftState {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: Interest;
  message: string;
}

const EMPTY_DRAFT: DraftState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "general",
  message: "",
};

const STORAGE_KEY = "taula-contact-draft";

type Status = "idle" | "submitting" | "success" | "error";

function ContactFormInner({ dict }: ContactFormProps) {
  const searchParams = useSearchParams();
  const [draft, setDraft] = useState<DraftState>(EMPTY_DRAFT);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    // URL params (from e.g. the bread order card) take priority over a saved draft,
    // since they represent a fresh, intentional hand-off from another part of the site.
    const interestParam = searchParams.get("interest");
    const messageParam = searchParams.get("message");

    if (interestParam || messageParam) {
      setDraft((current) => ({
        ...current,
        interest: interestParam === "bread" ? "bread" : current.interest,
        message: messageParam ?? current.message,
      }));
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setDraft({ ...EMPTY_DRAFT, ...JSON.parse(stored) });
      } catch {
        // ignore malformed draft
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (status === "success") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  }, [draft, status]);

  function updateField<K extends keyof DraftState>(key: K, value: DraftState[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setDraft(EMPTY_DRAFT);
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      setStatus("error");
    }
  }

  const form = dict.contactPage.form;
  const isSubmitting = status === "submitting";

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-navy-deep">{form.heading}</h3>
      <p className="mt-1 text-xs text-navy-deep/60">{form.requiredNote}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy-deep">
            {form.name} *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            value={draft.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm focus-visible:border-leaf"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-navy-deep">
            {form.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={draft.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm focus-visible:border-leaf"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy-deep">
              {form.email} *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-required="true"
              value={draft.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm focus-visible:border-leaf"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-navy-deep">
              {form.phone}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={draft.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm focus-visible:border-leaf"
            />
          </div>
        </div>

        <div>
          <label htmlFor="interest" className="mb-1 block text-sm font-medium text-navy-deep">
            {form.interest}
          </label>
          <select
            id="interest"
            name="interest"
            value={draft.interest}
            onChange={(event) => updateField("interest", event.target.value as Interest)}
            className="w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-sm focus-visible:border-leaf"
          >
            <option value="general">{form.interestGeneral}</option>
            <option value="bread">{form.interestBread}</option>
            {PRODUCT_SLUGS.map((slug) => (
              <option key={slug} value={slug}>
                {dict.products[slug].name}
              </option>
            ))}
          </select>
          <p className="mt-1.5 text-xs text-navy-deep/60">{form.interestHelp}</p>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy-deep">
            {form.message} *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-required="true"
            value={draft.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm focus-visible:border-leaf"
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60">
          {isSubmitting ? form.submitting : form.submit}
        </button>

        <div role="status" aria-live="polite">
          {status === "success" ? (
            <p className="rounded-lg bg-leaf/10 px-4 py-3 text-sm text-leaf-dark">
              <span className="block font-semibold">{form.successTitle}</span>
              {form.successMessage}
            </p>
          ) : null}
          {status === "error" ? (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              <span className="block font-semibold">{form.errorTitle}</span>
              {form.errorMessage}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}

// useSearchParams requires a Suspense boundary in the App Router; this wrapper
// keeps that detail contained here so every page using ContactForm stays simple.
export function ContactForm({ dict }: ContactFormProps) {
  return (
    <Suspense fallback={<div className="card animate-pulse" aria-hidden="true" />}>
      <ContactFormInner dict={dict} />
    </Suspense>
  );
}
