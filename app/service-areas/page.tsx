import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Jsonld } from '@/components/jsonld';
import { CtaBand } from '@/components/cta-band';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Service Areas | Roofing Across the OKC Metro',
  description:
    'Redline Roofing & Restoration serves 14 cities across the Oklahoma City metro including Edmond, Norman, Moore, Yukon, and more. Free inspections everywhere we serve.',
};

export default function ServiceAreasPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CollectionPage',
              name: 'Service Areas | Roofing Across the OKC Metro',
              url: `${SITE.url}/service-areas`,
              description:
                'Redline Roofing & Restoration serves 14 cities across the Oklahoma City metro.',
              provider: {
                '@type': 'RoofingContractor',
                name: SITE.name,
                url: SITE.url,
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
                { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE.url}/service-areas` },
              ],
            },
          ],
        }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Service Areas', href: '/service-areas' }]} />

        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Roofing service areas across the Oklahoma City metro.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-deep/80">
          Redline Roofing &amp; Restoration is headquartered in Oklahoma City and serves homeowners
          and businesses across the entire OKC metro. From Piedmont to Choctaw, Norman to Edmond,
          our crews are on the road every day delivering free inspections, storm-damage assessments,
          and full roof replacements. Wherever you live in the metro, we treat your home like it is
          ours.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SITE.serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="group flex flex-col rounded-xl border border-slate-deep/10 bg-white p-6 shadow-soft transition-all hover:border-copper/40 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-copper" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-xl font-semibold group-hover:text-copper transition-colors">
                    {area.name}
                  </h2>
                  <p className="mt-1 text-sm text-slate-deep/60">{area.county}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-deep/70">
                <span className="font-medium">ZIP:</span> {area.zip}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-deep/70">
                {area.note}
              </p>
              <span className="mt-4 text-sm font-semibold text-copper">
                View {area.name} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <CtaBand />
      </div>
    </>
  );
}
