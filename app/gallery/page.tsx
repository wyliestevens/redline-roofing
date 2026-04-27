import type { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { LeadForm } from '@/components/lead-form';
import { CtaBand } from '@/components/cta-band';
import { Jsonld } from '@/components/jsonld';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Project Gallery | Recent OKC Roofing Projects',
  description:
    'Before-and-after photos from recent Redline Roofing installations across the Oklahoma City metro — residential shingle replacements, commercial TPO, metal roofs, and luxury upgrades.',
};

const projects = [
  {
    id: 1,
    city: 'Edmond',
    type: 'Residential Shingle Replacement',
    description:
      'GAF Timberline HDZ installation in Wedgewood Estates. Full tear-off and replacement after the September 2024 baseball-hail supercell. Insurance claim totaled $26,318 — homeowner paid only their $1,000 deductible.',
  },
  {
    id: 2,
    city: 'Norman',
    type: 'Impact-Resistant Upgrade',
    description:
      'Owens Corning Duration STORM Class 4 IR shingles in The Trails neighborhood. Upgraded from standard 3-tab to impact-resistant architectural shingles. Homeowner\'s premium dropped 18% after completion.',
  },
  {
    id: 3,
    city: 'Moore',
    type: 'Post-Tornado Rebuild',
    description:
      'CertainTeed Landmark IR installation in a post-tornado rebuild area. Complete tear-off and new underlayment, ice and water shield in all valleys, and ridge ventilation upgrade. Two-day install start to finish.',
  },
  {
    id: 4,
    city: 'Mustang',
    type: 'New Construction Color Match',
    description:
      'GAF Timberline HDZ in Charcoal on a new-construction home. Matched the builder\'s original color spec and installed with GAF\'s Golden Pledge warranty system. Completed in just 1.5 days.',
  },
  {
    id: 5,
    city: 'Bethany',
    type: 'Full Legacy Roof Replacement',
    description:
      'Replaced a 1960s original roof with GAF Timberline Natural Shadow shingles. Extensive decking repair required — over 40% of the plywood was delaminated and replaced before the new roof went on.',
  },
  {
    id: 6,
    city: 'Midwest City',
    type: 'Emergency Response & Replacement',
    description:
      'Emergency tarp deployment near Tinker AFB followed by full replacement. USAA insurance claim handled start to finish. 24-hour initial response from the first phone call to tarp on the roof.',
  },
  {
    id: 7,
    city: 'Nichols Hills',
    type: 'Luxury Shingle Installation',
    description:
      'CertainTeed Grand Manor luxury shingle on a steep turret roof with three valleys. Four-day premium installation requiring specialized staging and hand-nailing on all steep-slope sections.',
  },
  {
    id: 8,
    city: 'Yukon',
    type: 'Commercial Standing-Seam Metal',
    description:
      'Standing-seam metal roof on a Route 66 corridor commercial property. Galvalume panels with concealed fasteners and snow guards. 20-year manufacturer warranty with annual inspection program.',
  },
  {
    id: 9,
    city: 'Del City',
    type: 'Budget-Friendly Architectural Upgrade',
    description:
      'Upgraded from aging 3-tab shingles to Owens Corning Oakridge architectural shingles. Homeowner financed through Wisetack with affordable monthly payments. Dramatic curb appeal improvement on a budget.',
  },
  {
    id: 10,
    city: 'Piedmont',
    type: 'Large Acreage Property',
    description:
      'Massive 4,200 sq ft roof on a large acreage property. GAF Timberline HDZ with StainGuard Plus algae protection. Three-day install with materials staged on-site the day before to minimize disruption.',
  },
  {
    id: 11,
    city: 'The Village',
    type: 'Synthetic Tile Replacement',
    description:
      'Synthetic Brava tile replacing original cedar shake on a mid-century home. Preserved the architectural character while eliminating fire risk and maintenance. Premium dropped and curb appeal is unmatched.',
  },
  {
    id: 12,
    city: 'OKC',
    type: 'Commercial TPO Membrane',
    description:
      'Commercial TPO membrane on an 18,000 sq ft warehouse. Full tear-off of failing modified bitumen, new tapered insulation for positive drainage, and heat-welded TPO. Completed one day ahead of schedule.',
  },
];

export default function GalleryPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
            { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${SITE.url}/gallery` },
          ],
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Gallery', href: '/gallery' }]} />

        <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-xl mb-8">
          <Image src="/img/aerial-roof.jpg" alt="Aerial view of a completed roofing project in Oklahoma City" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-deep/60 to-slate-deep/20" />
          <div className="absolute inset-0 flex items-center px-8">
            <h1 className="text-white font-display text-3xl font-bold sm:text-4xl lg:text-5xl drop-shadow-lg">Recent Oklahoma City roofing projects.</h1>
          </div>
        </div>

        <div className="max-w-3xl">
          <p className="mt-6 text-lg leading-relaxed text-slate-deep/80">
            Before-and-after photos from recent Redline installations across the OKC metro.
          </p>
        </div>

        <section className="mt-12" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="sr-only">
            Project gallery
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-slate-deep/10 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`/img/gallery/project-${project.id}.jpg`}
                    alt={`${project.type} in ${project.city}, Oklahoma`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-slate-deep/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {project.city}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-slate-deep">
                    {project.type}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-deep/70">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 mb-16 max-w-4xl mx-auto" aria-labelledby="gallery-form-heading">
          <h2
            id="gallery-form-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Want your roof to look this good?
          </h2>
          <p className="mt-3 text-slate-deep/80">
            Schedule your free 27-point inspection and get a no-pressure quote.
          </p>
          <div className="mt-8">
            <LeadForm />
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
