import { LeadForm } from '@/components/lead-form';
import { SITE } from '@/lib/site-config';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-deep via-slate-deep to-slate-deep/95" aria-labelledby="hero-heading">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="text-white">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-copper">
              Oklahoma City · Since 2007 · GAF Master Elite
            </p>
            <h1 id="hero-heading" className="mb-6 text-white">
              The last roof you&rsquo;ll ever buy in Oklahoma City.
            </h1>
            <p className="mb-8 text-lg text-white/80 leading-relaxed lg:text-xl">
              Veteran-owned. Third-generation Oklahoman. Lifetime workmanship warranty &mdash; and you don&rsquo;t pay a dollar until your city permit inspection passes.
            </p>

            {/* Stat row */}
            <div className="mb-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { num: '2,847', label: 'OKC roofs installed' },
                { num: '4.9★', label: 'from 1,612 reviews' },
                { num: '19', label: 'yrs in business' },
                { num: '30s', label: 'AI callback' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-semibold text-copper">{stat.num}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#lead-form-mid"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-copper px-6 py-3.5 font-semibold text-white transition-colors hover:bg-copper-dk"
              >
                Get My Free Roof Inspection
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border-2 border-white px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call Trey: {SITE.phone}
              </a>
            </div>

            <p className="mt-4 text-sm text-white/50">
              No salesman. No pressure. No &ldquo;today only&rdquo; BS.
            </p>
          </div>

          {/* Right column — lead form */}
          <div>
            <LeadForm source="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
