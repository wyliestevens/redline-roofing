import type { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { LeadForm } from '@/components/lead-form';
import { FaqAccordion } from '@/components/faq-accordion';
import { Jsonld } from '@/components/jsonld';

export const metadata: Metadata = {
  title: 'Commercial Roofing in Oklahoma City',
  description:
    'TPO, EPDM, modified bitumen, and standing-seam metal commercial roofing in Oklahoma City. $2M GL, CIB commercial endorsement, in-house sheet metal fabrication.',
};

const faqs = [
  {
    question: 'What commercial roofing systems does Redline install?',
    answer:
      'We install TPO (thermoplastic polyolefin), EPDM (ethylene propylene diene monomer), APP and SBS modified bitumen, standing-seam metal, and R-panel metal systems. System selection depends on building use, slope, budget, and energy goals.',
  },
  {
    question: 'Does Redline carry enough insurance for commercial projects?',
    answer:
      'Yes. We carry $2 million in general liability, $1 million in commercial auto, and workers compensation coverage that meets or exceeds requirements for most commercial property managers and general contractors. Certificates of insurance are provided before work begins.',
  },
  {
    question: 'Can you work nights or weekends to avoid disrupting my business?',
    answer:
      'Absolutely. We regularly schedule commercial installs during off-hours for restaurants, medical offices, and retail locations. Night and weekend work is quoted at the same rate as standard hours for projects over 50 squares.',
  },
  {
    question: 'Do you offer commercial roof maintenance programs?',
    answer:
      'Yes. Our bi-annual maintenance program includes two full inspections per year, minor repairs up to $500 per visit included, detailed photo reports, and priority scheduling for emergency service. The program extends your roof warranty and catches small problems before they become expensive failures.',
  },
  {
    question: 'How long does a commercial re-roof take?',
    answer:
      'Timelines vary by system and building size. A 10,000 sq ft TPO overlay typically takes 5 to 7 working days. A full tear-off and re-cover on the same building runs 7 to 12 working days. Standing-seam metal projects require 10 to 20 working days depending on panel length and trim complexity.',
  },
];

export default function CommercialPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Commercial Roofing in Oklahoma City',
              serviceType: 'Commercial Roofing',
              provider: {
                '@type': 'RoofingContractor',
                name: 'Redline Roofing & Restoration',
                url: 'https://redlineroofingok.com',
              },
              areaServed: {
                '@type': 'City',
                name: 'Oklahoma City',
                sameAs: 'https://en.wikipedia.org/wiki/Oklahoma_City',
              },
              description:
                'TPO, EPDM, modified bitumen, and standing-seam metal commercial roofing with $2M GL coverage and CIB commercial endorsement.',
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://redlineroofingok.com' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://redlineroofingok.com/services' },
                { '@type': 'ListItem', position: 3, name: 'Commercial Roofing', item: 'https://redlineroofingok.com/services/commercial' },
              ],
            },
            {
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ],
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Services', href: '/services' },
            { name: 'Commercial Roofing', href: '/services/commercial' },
          ]}
        />

        <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-xl mb-8">
          <Image src="/img/commercial-roof.jpg" alt="Commercial roofing project in Oklahoma City" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-deep/60 to-slate-deep/20" />
          <div className="absolute inset-0 flex items-center px-8">
            <h1 className="text-white font-display text-3xl font-bold sm:text-4xl lg:text-5xl drop-shadow-lg">Commercial roofing in Oklahoma City.</h1>
          </div>
        </div>

        <p className="mt-6 text-lg leading-relaxed">
          <strong>
            Redline Roofing &amp; Restoration installs and services flat and low-slope commercial
            roofing systems across the Oklahoma City metro, including TPO, EPDM, modified bitumen,
            and standing-seam metal. We carry $2M in general liability, hold a CIB commercial
            endorsement, and fabricate custom sheet metal trim in-house to eliminate lead times
            and ensure a precision fit on every project.
          </strong>
        </p>

        <p className="mt-2 text-sm text-slate-deep/60">Last updated: April 25, 2026</p>

        {/* --- Which system is right? --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Which commercial roofing system is right for my building?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            The right system depends on your building&rsquo;s slope, foot traffic, energy goals, and
            budget. Oklahoma&rsquo;s extreme weather &mdash; hail, high winds, UV exposure, and
            dramatic temperature swings &mdash; eliminates some systems that work fine in milder
            climates. Here is how each option performs in OKC conditions.
          </p>

          <dl className="mt-6 space-y-4">
            <div>
              <dt className="font-semibold">TPO (Thermoplastic Polyolefin)</dt>
              <dd className="mt-1 text-slate-deep/80">
                The most popular commercial membrane in Oklahoma. White reflective surface reduces
                cooling costs by up to 30%. Heat-welded seams create a monolithic waterproof membrane
                with no adhesive to fail. Excellent hail resistance in 60-mil and 80-mil thicknesses.
                Typical lifespan: 20&ndash;30 years with proper maintenance.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">EPDM (Rubber Roofing)</dt>
              <dd className="mt-1 text-slate-deep/80">
                A proven single-ply membrane with over 50 years of track record. EPDM handles
                Oklahoma temperature swings better than any other membrane because it expands and
                contracts without fatiguing. Available in black (better for heating-dominated
                buildings) or white. Typical lifespan: 25&ndash;30 years.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Modified Bitumen</dt>
              <dd className="mt-1 text-slate-deep/80">
                A multi-layer system that adds redundancy. Two or three plies of modified asphalt
                are torch-applied or cold-adhered over a base sheet, creating a thick, durable
                membrane that handles foot traffic and rooftop equipment loads. Ideal for restaurant
                and retail buildings with frequent HVAC servicing. Typical lifespan: 20&ndash;25
                years.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Standing-Seam Metal</dt>
              <dd className="mt-1 text-slate-deep/80">
                Our in-house panel roll-forming equipment produces custom-length panels up to 50
                feet, eliminating horizontal seams and the leak points they create. 24-gauge
                Galvalume steel with Kynar 500 finish resists hail, wind uplift to 140 mph, and UV
                degradation. Best for buildings where a 40&ndash;60 year lifespan justifies the
                higher upfront cost.
              </dd>
            </div>
          </dl>
        </section>

        {/* --- Pricing --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            How much does commercial roofing cost in Oklahoma City?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Commercial pricing is quoted per square (100 sq ft) and depends on the system, substrate
            condition, insulation requirements, and access. The table below shows typical installed
            ranges for OKC-area projects.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-deep/20">
                  <th className="py-3 pr-4 text-left font-semibold">System</th>
                  <th className="py-3 pr-4 text-left font-semibold">Installed Cost / Square</th>
                  <th className="py-3 pr-4 text-left font-semibold">Warranty</th>
                  <th className="py-3 text-left font-semibold">Hail Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-deep/10">
                <tr>
                  <td className="py-3 pr-4">TPO (60 mil)</td>
                  <td className="py-3 pr-4">$650 &ndash; $900</td>
                  <td className="py-3 pr-4">20 years (NDL)</td>
                  <td className="py-3">Moderate</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">TPO (80 mil)</td>
                  <td className="py-3 pr-4">$800 &ndash; $1,100</td>
                  <td className="py-3 pr-4">25&ndash;30 years (NDL)</td>
                  <td className="py-3">High</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">EPDM (60 mil)</td>
                  <td className="py-3 pr-4">$600 &ndash; $850</td>
                  <td className="py-3 pr-4">20&ndash;25 years</td>
                  <td className="py-3">Moderate</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Modified Bitumen (2-ply)</td>
                  <td className="py-3 pr-4">$700 &ndash; $1,000</td>
                  <td className="py-3 pr-4">15&ndash;20 years</td>
                  <td className="py-3">Good</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Standing-Seam Metal</td>
                  <td className="py-3 pr-4">$1,200 &ndash; $1,800</td>
                  <td className="py-3 pr-4">40&ndash;50 years</td>
                  <td className="py-3">Excellent</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-deep/60">
            NDL = No Dollar Limit warranty. Prices include labor, membrane, insulation, and
            standard flashing. Rooftop equipment curbs, pitch pans, and custom fabrication quoted
            separately.
          </p>
        </section>

        {/* --- In-house sheet metal --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Why does in-house sheet metal fabrication matter?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Most commercial roofing failures occur at transitions: parapet walls, curb flashings,
            scupper drains, and equipment penetrations. Off-the-shelf flashing rarely fits
            commercial details precisely, which is why Redline invested in an in-house sheet metal
            brake and roll-forming line. We fabricate coping caps, counter flashing, scupper boxes,
            gutter systems, and equipment curb adapters to exact dimensions on site.
          </p>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Custom fabrication eliminates the 5&ndash;10 day lead time of outsourced metal work,
            keeps your project on schedule, and ensures every detail is watertight from day one.
            All fabricated metal is 24-gauge galvanized steel or Kynar-coated aluminum, depending
            on the application and aesthetic requirements.
          </p>
        </section>

        {/* --- Insurance and credentials --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            What credentials does Redline hold for commercial work?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Commercial property managers and general contractors require more than a standard
            residential license. Redline meets every requirement that institutional and multi-site
            property managers demand.
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-slate-deep/80">
            <li>CIB Commercial Endorsement (License #80003217)</li>
            <li>$2,000,000 General Liability Insurance</li>
            <li>$1,000,000 Commercial Auto Insurance</li>
            <li>Workers Compensation coverage for all field employees</li>
            <li>HAAG Commercial Roof Inspector certification</li>
            <li>GAF Master Elite Commercial certification</li>
            <li>OSHA 30-hour trained superintendents</li>
          </ul>
        </section>

        {/* --- FAQ --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Frequently asked questions about commercial roofing
          </h2>
          <div className="mt-6">
            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* --- Lead Form --- */}
        <section className="mt-16 mb-16">
          <LeadForm source="commercial" />
        </section>
      </div>
    </>
  );
}
