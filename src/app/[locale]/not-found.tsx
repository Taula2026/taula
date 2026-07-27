import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <div className="shell flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
      <span className="eyebrow">404</span>
      <h1 className="text-3xl font-bold text-navy-deep">Seite nicht gefunden</h1>
      <p className="max-w-md text-navy-deep/70">
        Page not found — Page introuvable — Pagina non trovata
      </p>
      <Link href="/" className="btn-primary">
        Zur Startseite
      </Link>
    </div>
  );
}
