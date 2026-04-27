import type { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBand } from '@/components/cta-band';
import { Jsonld } from '@/components/jsonld';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About Redline Roofing — Three Generations of Oklahoma Roofers',
  description:
    'Meet the McAllister family — Walter, Travis Sr., and Trey — three generations of Oklahoma roofers serving the OKC metro since 1962. 41 W-2 employees, 12 trucks, and 2,500+ roofs installed.',
};

const milestones = [
  { year: '1962', text: 'Grandfather Walter McAllister starts an El Reno roofing crew out of a flatbed truck, serving Canadian County farmers and ranchers after spring storms.' },
  { year: '1980s', text: 'Father Travis McAllister Sr. runs storm-restoration crews across the OKC metro after the devastating 1986 hailstorm that damaged over 60,000 homes. Travis Sr. teaches a teenage Trey how to strip a roof and flash a valley before he can drive.' },
  { year: '2005–2006', text: 'Trey deploys with the Oklahoma Army National Guard 1-179th Infantry Battalion. Twelve months overseas cements a work ethic and leadership standard that becomes the backbone of Redline\'s culture.' },
  { year: 'April 2007', text: 'Trey founds Redline Roofing & Restoration with his retirement enlistment bonus and a single F-250. First job: a full tear-off on a 1,400 sq ft ranch house in Bethany for $6,200.' },
  { year: '2008', text: 'Better Business Bureau A+ accreditation. Zero complaints on file — a record Redline maintains to this day.' },
  { year: '2011', text: 'Moves to the current 23rd Street facility in Oklahoma City — 4,800 sq ft of office and warehouse space with room for an in-house sheet metal shop.' },
  { year: '2014', text: 'Earns GAF Master Elite certification, placing Redline in the top 2% of roofing contractors nationwide. Unlocks the GAF Golden Pledge warranty for customers.' },
  { year: '2018', text: 'Owens Corning Platinum Preferred contractor designation, the highest tier in the OC contractor program.' },
  { year: '2022', text: 'Opens a dedicated commercial roofing division. TPO, EPDM, modified bitumen, and standing-seam metal systems for flat and low-slope properties across the metro.' },
  { year: '2024', text: 'Passes 2,500 Oklahoma City area roofs installed — residential and commercial combined.' },
  { year: 'Today', text: '41 employees, all W-2 (no subcontractors), 12 trucks, an in-house sheet metal fabrication shop, and a reputation built on three generations of showing up, doing it right, and standing behind the work.' },
];

const team = [
  {
    name: 'Travis "Trey" McAllister III',
    title: 'Founder & President',
    bio: 'Oklahoma Army National Guard veteran, HAAG-certified inspector, GAF Master Elite contractor. Trey started Redline in 2007 with a pickup truck and a promise: no shortcuts, no storm-chaser games, no payment until the city signs off. He still personally inspects every complex roof and meets adjusters on-site for high-value claims.',
  },
  {
    name: 'Jake Holliday',
    title: 'Lead Estimator — North Metro',
    bio: 'Covers Edmond, Piedmont, and Deer Creek. Jake holds HAAG residential and commercial certifications and has written over 1,200 Xactimate estimates. Before Redline he spent six years on the carrier side adjusting claims for Farmers Insurance, which means he knows exactly what adjusters look for — and what they miss.',
  },
  {
    name: 'Maria Sandoval',
    title: 'Lead Estimator — South Metro',
    bio: 'Covers Norman, Moore, and Newcastle. Maria is bilingual (English and Spanish), HAAG-certified, and specializes in post-tornado rebuilds. She joined Redline in 2016 and has personally managed over $4.2 million in insurance-supplemented claims for south-metro homeowners.',
  },
  {
    name: 'Cody Brashear',
    title: 'Lead Estimator — West Metro',
    bio: 'Covers Yukon, Mustang, and Bethany. Cody is a third-generation Yukon resident, former volunteer firefighter, and HAAG-certified inspector. He manages Redline\'s relationship with local real estate agents and handles pre-listing roof certifications for sellers across Canadian County.',
  },
  {
    name: 'Andre Powell',
    title: 'Lead Estimator — East Metro & Commercial',
    bio: 'Covers Midwest City, Del City, Choctaw, and all commercial projects. Andre holds both HAAG residential and commercial certifications, plus a CertainTeed Master Applicator credential. He spent eight years in commercial property management before joining Redline and understands the unique needs of multi-tenant and industrial roofing.',
  },
  {
    name: 'Jim Kreeger',
    title: 'Production Manager — Residential',
    bio: 'Jim oversees every residential install from materials staging to final magnet sweep. He manages Redline\'s 28-person field crew, coordinates permit pulls with the Oklahoma City building department, and ensures every job passes inspection on the first attempt. On-site daily, rain or shine.',
  },
  {
    name: 'Eduardo Garza',
    title: 'Production Manager — Commercial & Sheet Metal',
    bio: 'Eduardo runs the commercial division\'s field operations and Redline\'s in-house sheet metal fabrication shop. He custom-fabricates drip edge, counter flashing, coping caps, and specialty trim pieces on-site, eliminating the two-week lead time most contractors face ordering from distributors.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'AboutPage',
              name: 'About Redline Roofing & Restoration',
              url: `${SITE.url}/about`,
              description: 'Three generations of Oklahoma roofers — the McAllister family story.',
              mainEntity: {
                '@type': 'RoofingContractor',
                name: SITE.name,
                url: SITE.url,
                founder: {
                  '@type': 'Person',
                  name: SITE.ownerName,
                  jobTitle: SITE.ownerTitle,
                },
                foundingDate: '2007',
                numberOfEmployees: { '@type': 'QuantitativeValue', value: 41 },
                areaServed: { '@type': 'City', name: 'Oklahoma City' },
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
                { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE.url}/about` },
              ],
            },
          ],
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />

        <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-xl mb-8">
          <Image src="/img/hero-crew.jpg" alt="Redline Roofing crew on a job site in Oklahoma City" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-deep/60 to-slate-deep/20" />
          <div className="absolute inset-0 flex items-center px-8">
            <h1 className="text-white font-display text-3xl font-bold sm:text-4xl lg:text-5xl drop-shadow-lg">Three generations of Oklahoma roofers.</h1>
          </div>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-slate-deep/80">
          Redline Roofing &amp; Restoration is not a franchise. It is not a private-equity rollup. It is a
          family roofing business that started on a flatbed truck in El Reno in 1962 and grew into one of
          Oklahoma City&rsquo;s most trusted roofing contractors — one roof, one handshake, one passed
          inspection at a time.
        </p>

        <div className="relative h-48 md:h-60 w-full overflow-hidden rounded-xl mt-10">
          <Image src="/img/handshake.jpg" alt="Handshake representing Redline Roofing values and trust" fill sizes="100vw" className="object-cover" />
        </div>

        {/* ---------- Photo grid ---------- */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand">
            <Image
              src="/img/about/walter-1962.jpg"
              alt="Walter McAllister with his roofing crew in El Reno, Oklahoma, 1962"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <span className="absolute bottom-3 left-3 rounded bg-slate-deep/70 px-2 py-1 text-xs font-medium text-white">
              Walter McAllister, El Reno, 1962
            </span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand">
            <Image
              src="/img/about/travis-sr-1986.jpg"
              alt="Travis McAllister Sr. running storm restoration crews after the 1986 OKC hailstorm"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <span className="absolute bottom-3 left-3 rounded bg-slate-deep/70 px-2 py-1 text-xs font-medium text-white">
              Travis Sr. after the &rsquo;86 hailstorm
            </span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand">
            <Image
              src="/img/about/trey-deployment-2005.jpg"
              alt="Trey McAllister during Oklahoma Army National Guard deployment, 2005"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <span className="absolute bottom-3 left-3 rounded bg-slate-deep/70 px-2 py-1 text-xs font-medium text-white">
              Trey, 1-179th Infantry, 2005
            </span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand">
            <Image
              src="/img/about/crew-2026.jpg"
              alt="The full Redline Roofing crew at the 23rd Street facility, 2026"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <span className="absolute bottom-3 left-3 rounded bg-slate-deep/70 px-2 py-1 text-xs font-medium text-white">
              The Redline crew, 2026
            </span>
          </div>
        </div>

        {/* ---------- Timeline ---------- */}
        <section className="mt-16" aria-labelledby="timeline-heading">
          <h2 id="timeline-heading" className="font-display text-2xl font-bold sm:text-3xl">
            Our timeline
          </h2>
          <div className="mt-8 space-y-6 border-l-2 border-copper/30 pl-6">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-copper bg-cream" />
                <p className="font-display text-sm font-bold text-copper">{m.year}</p>
                <p className="mt-1 leading-relaxed text-slate-deep/80">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Team ---------- */}
        <section className="mt-16 mb-16" aria-labelledby="team-heading">
          <div className="relative h-48 md:h-60 w-full overflow-hidden rounded-xl mb-8">
            <Image src="/img/construction-team.jpg" alt="Redline Roofing construction team working together" fill sizes="100vw" className="object-cover" />
          </div>
          <h2 id="team-heading" className="font-display text-2xl font-bold sm:text-3xl">
            Meet the team
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-deep/80">
            Every Redline employee is W-2 — no day-labor subcontractors, no temp crews, no one we
            haven&rsquo;t trained, vetted, and insured ourselves. When our truck pulls up, you know exactly
            who is on your roof.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-slate-deep/10 bg-white p-6 shadow-soft"
              >
                <p className="font-display text-lg font-semibold">{member.name}</p>
                <p className="text-sm font-medium text-copper">{member.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-deep/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
