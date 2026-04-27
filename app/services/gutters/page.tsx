import type { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { LeadForm } from '@/components/lead-form';
import { FaqAccordion } from '@/components/faq-accordion';
import { Jsonld } from '@/components/jsonld';

export const metadata: Metadata = {
  title: 'Gutters & Downspouts in Oklahoma City',
  description:
    'Seamless 5" and 6" aluminum gutters, K-style and half-round profiles, leaf guards, and downspout extensions. Installed same-day across the OKC metro by Redline Roofing.',
};

const faqs = [
  {
    question: 'How much do new gutters cost in Oklahoma City?',
    answer:
      'Seamless 5-inch K-style aluminum gutters typically cost $8 to $12 per linear foot installed, including downspouts and hangers. A typical OKC home with 150 to 200 linear feet of gutter runs $1,200 to $2,400. Six-inch gutters, half-round profiles, and leaf guard systems add to the total.',
  },
  {
    question: 'What is the difference between 5-inch and 6-inch gutters?',
    answer:
      'Five-inch gutters handle approximately 5,500 square feet of roof drainage area per downspout. Six-inch gutters handle roughly 7,900 square feet. If your home has a steep roof pitch, large roof planes, or limited downspout locations, 6-inch gutters prevent overflow during Oklahoma downpours.',
  },
  {
    question: 'Do I need leaf guards on my gutters?',
    answer:
      'If your property has mature trees within 20 feet of the roofline, leaf guards pay for themselves by eliminating the need for biannual gutter cleaning. We install micro-mesh guards that block leaves, pine needles, and shingle granules while allowing water to flow freely.',
  },
  {
    question: 'How long do aluminum gutters last in Oklahoma?',
    answer:
      'Seamless aluminum gutters with properly spaced hangers last 20 to 30 years in Oklahoma conditions. The most common failure point is not the gutter itself but the hangers and fasteners. Redline uses heavy-duty hidden hangers screwed into the rafter tails every 24 inches for maximum longevity.',
  },
  {
    question: 'Can you match my gutter color to my existing trim?',
    answer:
      'Yes. We stock over 25 factory-baked enamel colors that match the most popular OKC trim and fascia colors. If your home has a custom color, we can order a color-matched coil with a 2 to 3 week lead time.',
  },
];

export default function GuttersPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Gutters and Downspouts in Oklahoma City',
              serviceType: 'Gutter Installation',
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
                'Seamless aluminum gutter installation in 5-inch and 6-inch profiles with leaf guards and downspout extensions across the Oklahoma City metro.',
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://redlineroofingok.com' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://redlineroofingok.com/services' },
                { '@type': 'ListItem', position: 3, name: 'Gutters', item: 'https://redlineroofingok.com/services/gutters' },
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
            { name: 'Gutters', href: '/services/gutters' },
          ]}
        />

        <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-xl mb-8">
          <Image src="/img/house-roof-1.jpg" alt="House with gutters and roofing in Oklahoma City" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-deep/60 to-slate-deep/20" />
          <div className="absolute inset-0 flex items-center px-8">
            <h1 className="text-white font-display text-3xl font-bold sm:text-4xl lg:text-5xl drop-shadow-lg">Gutters and downspouts.</h1>
          </div>
        </div>

        <p className="mt-6 text-lg leading-relaxed">
          <strong>
            Redline Roofing &amp; Restoration installs seamless aluminum gutters in 5-inch and 6-inch
            profiles across the Oklahoma City metro. We form every gutter on site from a continuous
            coil, eliminating the sectional joints where leaks start. K-style and half-round profiles,
            micro-mesh leaf guards, extended downspouts, and 25+ factory-baked color options let you
            protect your foundation and match your home&rsquo;s aesthetic down to the last detail.
          </strong>
        </p>

        <p className="mt-2 text-sm text-slate-deep/60">Last updated: April 25, 2026</p>

        {/* --- Why seamless gutters? --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Why should I choose seamless gutters over sectional?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Sectional gutters from a hardware store are joined every 10 feet with a slip connector
            sealed by caulk. Over two to three Oklahoma summers, that caulk dries out, cracks, and
            starts dripping water behind your fascia board. Seamless gutters are formed on site from
            a single coil of aluminum, producing one continuous piece per run. No joints means no
            joint failures.
          </p>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Seamless gutters also look cleaner because there are no visible seams or overlapping
            edges. They cost only marginally more than sectional systems when you factor in the labor
            of cutting, fitting, and sealing joints. For most OKC homes, the price difference is
            $150 to $300 total &mdash; a small premium for decades of leak-free performance.
          </p>
        </section>

        {/* --- Profiles --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            What gutter profile should I choose?
          </h2>

          <dl className="mt-6 space-y-4">
            <div>
              <dt className="font-semibold">K-Style</dt>
              <dd className="mt-1 text-slate-deep/80">
                The standard residential profile in the OKC metro. The flat back sits flush against
                the fascia, and the decorative front mimics crown molding. K-style gutters carry more
                water per inch of width than half-round because the flat bottom allows full depth
                utilization. Ideal for most single-family homes.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Half-Round</dt>
              <dd className="mt-1 text-slate-deep/80">
                A semicircular profile common on historic, Craftsman, and Mediterranean-style homes.
                Half-round gutters self-clean more effectively because debris cannot lodge in
                corners. They are often required by historic district guidelines in Mesta Park and
                Heritage Hills. Available in aluminum, copper, and zinc.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Box / Commercial</dt>
              <dd className="mt-1 text-slate-deep/80">
                A rectangular profile used on commercial buildings and large custom homes. Box
                gutters handle extreme volume and are fabricated from 24-gauge steel or .040
                aluminum in our in-house sheet metal shop. Custom-sized to the building&rsquo;s
                drainage requirements.
              </dd>
            </div>
          </dl>
        </section>

        {/* --- Sizing --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            How do I know what size gutter my home needs?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Gutter sizing is determined by three variables: roof area draining to each gutter run,
            roof pitch (steeper pitches accelerate runoff), and local rainfall intensity. Oklahoma
            City&rsquo;s 10-year, 5-minute rainfall intensity is approximately 7.5 inches per hour
            &mdash; among the highest in the country. That extreme rate is what causes overflow
            during heavy storms.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-deep/20">
                  <th className="py-3 pr-4 text-left font-semibold">Gutter Size</th>
                  <th className="py-3 pr-4 text-left font-semibold">Max Drainage Area</th>
                  <th className="py-3 pr-4 text-left font-semibold">Downspout Size</th>
                  <th className="py-3 text-left font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-deep/10">
                <tr>
                  <td className="py-3 pr-4">5-inch K-style</td>
                  <td className="py-3 pr-4">~5,500 sq ft per downspout</td>
                  <td className="py-3 pr-4">2&times;3 inch</td>
                  <td className="py-3">Most residential homes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">6-inch K-style</td>
                  <td className="py-3 pr-4">~7,900 sq ft per downspout</td>
                  <td className="py-3 pr-4">3&times;4 inch</td>
                  <td className="py-3">Large homes, steep roofs</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">6-inch half-round</td>
                  <td className="py-3 pr-4">~6,000 sq ft per downspout</td>
                  <td className="py-3 pr-4">4-inch round</td>
                  <td className="py-3">Historic and custom homes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 leading-relaxed text-slate-deep/80">
            For most Oklahoma City homes, 5-inch K-style gutters with 2&times;3 downspouts provide
            adequate capacity. If your home has long roof runs, steep pitches above 8/12, or limited
            downspout locations, we recommend upgrading to 6-inch gutters to prevent overflow during
            the intense thunderstorms that roll through every spring.
          </p>
        </section>

        {/* --- Leaf guards --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Should I add leaf guards to my gutters?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            If you have mature trees within 20 feet of your roofline, leaf guards eliminate the need
            for the twice-yearly gutter cleaning that most OKC homeowners ignore until water is
            pouring over the side. We install surgical-grade stainless steel micro-mesh guards that
            block leaves, pine needles, cottonwood seeds, and even shingle granules while allowing
            water to pass through at full flow.
          </p>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Leaf guards typically add $4 to $8 per linear foot to the gutter installation cost. On
            a 180-foot gutter system, that is $720 to $1,440 &mdash; roughly the equivalent of 6 to
            10 years of professional gutter cleaning. After that, the guards are saving you money
            every year for the remaining 15&ndash;20 years of the gutter&rsquo;s lifespan.
          </p>
        </section>

        {/* --- Downspout extensions --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Why are downspout extensions important for my foundation?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Oklahoma&rsquo;s expansive clay soils swell when wet and shrink when dry, creating the
            foundation movement that cracks drywall, sticks doors, and shifts window frames. The
            single most effective thing a homeowner can do to stabilize foundation moisture is to
            route gutter downspouts at least 4 to 6 feet away from the foundation wall.
          </p>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            We install corrugated or rigid PVC underground extensions that route water to a
            pop-up emitter in the yard, a French drain, or the street curb. Surface splash blocks
            are an option for homes where trenching is impractical. Every gutter project includes a
            foundation drainage assessment at no additional charge.
          </p>
        </section>

        {/* --- FAQ --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Frequently asked questions about gutters
          </h2>
          <div className="mt-6">
            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* --- Lead Form --- */}
        <section className="mt-16 mb-16">
          <LeadForm source="gutters" />
        </section>
      </div>
    </>
  );
}
