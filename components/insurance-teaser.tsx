import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp } from 'lucide-react';

export function InsuranceTeaser() {
  return (
    <section className="bg-slate-deep py-20 text-white" aria-labelledby="insurance-teaser-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-copper">
              Real OKC Insurance Claim
            </p>
            <h2 id="insurance-teaser-heading" className="mb-6 text-white">
              Wedgewood Estates, Edmond. Insurance offered $9,840. We got the homeowner $26,318.
            </h2>
            <p className="mb-6 leading-relaxed text-white/80">
              The Reeves family had a 12-year-old roof hammered by the September 24, 2024 baseball-hail supercell. State Farm&rsquo;s first estimate missed code-required ice and water shield, drip edge, and ridge ventilation upgrades &mdash; items the City of Oklahoma City requires on every reroof permit. Our Xactimate estimate documented all of it with drone photos. We met the adjuster on the roof. Final settlement: $26,318. The Reeves paid only their deductible.
            </p>
            <div className="mb-8 flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3">
              <TrendingUp className="h-5 w-5 text-copper" aria-hidden="true" />
              <p className="text-sm font-semibold">
                Average claim recovery uplift on Redline-supplemented claims: +27%
              </p>
            </div>
            <Link
              href="/insurance-claims"
              className="inline-flex min-h-[48px] items-center rounded-lg bg-copper px-6 py-3.5 font-semibold text-white transition-colors hover:bg-copper-dk"
            >
              See How Insurance Claims Work →
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/img/insurance-case-edmond.jpg"
              alt="Drone photo of hail-damaged roof in Wedgewood Estates, Edmond, alongside the Xactimate insurance estimate report"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
