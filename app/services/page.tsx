import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Jsonld } from '@/components/jsonld';

export const metadata: Metadata = {
  title: 'Roofing Services in Oklahoma City',
  description:
    'Redline Roofing & Restoration offers roof replacement, roof repair, storm damage restoration, commercial roofing, gutters, and free inspections across the Oklahoma City metro.',
};

const services = [
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description:
      'Full tear-off and re-roof in one to two days. Lifetime workmanship warranty, GAF and Owens Corning certified crews, and no payment due until the permit inspection passes.',
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description:
      'Same-week scheduling for non-emergency repairs and 24-hour response for active leaks. Ridge caps, pipe boots, flashing, and missing shingles handled fast.',
  },
  {
    title: 'Hail & Storm Damage',
    href: '/services/storm-damage',
    description:
      'HAAG-certified inspectors, drone documentation, Xactimate estimates, and adjuster meetings on the roof. We supplement until you receive every dollar your policy allows.',
  },
  {
    title: 'Commercial Roofing',
    href: '/services/commercial',
    description:
      'TPO, EPDM, modified bitumen, and standing-seam metal systems for flat and low-slope commercial properties. $2M general liability and CIB commercial endorsement.',
  },
  {
    title: 'Gutters & Downspouts',
    href: '/services/gutters',
    description:
      'Seamless 5-inch and 6-inch aluminum gutters in K-style or half-round profiles. Leaf guards, downspout extensions, and 25+ color-matched finishes.',
  },
  {
    title: 'Free 27-Point Inspection',
    href: '/services/inspection',
    description:
      'Drone imagery, ladder walk, interior moisture check, attic ventilation assessment, and a written PDF report delivered within 24 hours. Always free, no strings.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CollectionPage',
              name: 'Roofing Services in Oklahoma City',
              url: 'https://redlineroofingok.com/services',
              description:
                'Complete roofing services for Oklahoma City homes and businesses from Redline Roofing & Restoration.',
              provider: {
                '@type': 'RoofingContractor',
                name: 'Redline Roofing & Restoration',
                url: 'https://redlineroofingok.com',
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://redlineroofingok.com' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://redlineroofingok.com/services' },
              ],
            },
          ],
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} />

        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Roofing services for Oklahoma City homes and businesses.
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-deep/80">
          From a single missing shingle to a full commercial re-roof, Redline Roofing &amp; Restoration
          handles every project with the same standard: manufacturer-certified crews, written warranties,
          and transparent pricing. Browse our services below and schedule your free inspection today.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col rounded-xl border border-slate-deep/10 bg-white p-6 shadow-soft transition-all hover:border-copper/40 hover:shadow-md"
            >
              <h2 className="font-display text-xl font-semibold group-hover:text-copper transition-colors">
                {service.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-deep/70">
                {service.description}
              </p>
              <span className="mt-4 text-sm font-semibold text-copper">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
