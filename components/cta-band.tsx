import Link from 'next/link';
import { SITE } from '@/lib/site-config';

export function CtaBand() {
  return (
    <section className="bg-copper py-16 text-white" aria-labelledby="cta-band-heading">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 id="cta-band-heading" className="text-white mb-4">
          Stop patching. Start protecting.
        </h2>
        <p className="mb-8 text-lg text-white/90">
          Schedule your free 27-point roof inspection today. No salesman, no pressure, no &ldquo;today only&rdquo; deals.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center rounded-lg bg-slate-deep px-6 py-3.5 font-semibold text-white transition-colors hover:bg-slate-deep/90"
          >
            Get My Free Inspection
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex min-h-[48px] items-center rounded-lg border-2 border-white px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Call Trey: {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
