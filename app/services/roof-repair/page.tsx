import type { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { LeadForm } from '@/components/lead-form';
import { FaqAccordion } from '@/components/faq-accordion';
import { Jsonld } from '@/components/jsonld';

export const metadata: Metadata = {
  title: 'Roof Repair in Oklahoma City',
  description:
    'Same-week roof repair for non-emergencies and 24-hour response for active leaks. Typical OKC repairs range from $385 to $1,800. Redline Roofing & Restoration.',
};

const faqs = [
  {
    question: 'How do I know if my roof needs repair or replacement?',
    answer:
      'If damage is confined to a single slope or a small area (less than 30% of the roof), repair is usually the right call. If damage spans multiple slopes, if your roof is over 18 years old with architectural shingles, or if the decking is compromised, replacement is more cost-effective. Our free 27-point inspection gives you a clear answer with photos.',
  },
  {
    question: 'Do you repair roofs that another company installed?',
    answer:
      'Absolutely. We repair all brands and styles of residential roofing, regardless of who installed the original system. We stock the most common OKC shingle lines so we can color-match quickly.',
  },
  {
    question: 'How quickly can you get to an active leak?',
    answer:
      'During storm season, we maintain emergency tarping crews on standby 24/7. For active leaks, we typically arrive within 2 to 6 hours of your call. We secure the leak with a heavy-duty tarp and schedule the permanent repair within the week.',
  },
  {
    question: 'Will a repair void my manufacturer warranty?',
    answer:
      'No, as long as the repair is performed by a certified contractor using approved materials. Redline holds certifications from GAF, Owens Corning, CertainTeed, and Malarkey, so our repairs maintain your warranty coverage.',
  },
  {
    question: 'Can I file an insurance claim for a roof repair?',
    answer:
      'Yes, if the damage was caused by a covered peril like hail or wind. Many homeowners skip filing because the repair cost is near their deductible. We document every repair with photos and an Xactimate estimate so you can make an informed decision.',
  },
];

export default function RoofRepairPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Roof Repair in Oklahoma City',
              serviceType: 'Roof Repair',
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
                'Same-week roof repair for non-emergencies and 24-hour emergency response for active leaks across the Oklahoma City metro.',
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://redlineroofingok.com' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://redlineroofingok.com/services' },
                { '@type': 'ListItem', position: 3, name: 'Roof Repair', item: 'https://redlineroofingok.com/services/roof-repair' },
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
            { name: 'Roof Repair', href: '/services/roof-repair' },
          ]}
        />

        <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-xl mb-8">
          <Image src="/img/shingles-closeup.jpg" alt="Close-up of roof shingles being repaired" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-deep/60 to-slate-deep/20" />
          <div className="absolute inset-0 flex items-center px-8">
            <h1 className="text-white font-display text-3xl font-bold sm:text-4xl lg:text-5xl drop-shadow-lg">Roof repair in Oklahoma City.</h1>
          </div>
        </div>

        <p className="mt-6 text-lg leading-relaxed">
          <strong>
            Redline Roofing &amp; Restoration schedules non-emergency roof repairs within the same
            week and responds to active leaks within 24 hours. Most residential repairs in the
            Oklahoma City metro fall between $385 and $1,800, depending on the scope and materials
            involved, and every repair comes with a written warranty backed by our manufacturer
            certifications.
          </strong>
        </p>

        <p className="mt-2 text-sm text-slate-deep/60">Last updated: April 25, 2026</p>

        {/* --- When to repair vs replace --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            When should I repair my roof instead of replacing it?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            A repair makes sense when damage is localized and your roof still has meaningful life
            left. As a rule of thumb, if your roof is less than 15 years old and the damage covers
            less than 30% of the total area, a targeted repair is both practical and cost-effective.
            Common repair-worthy scenarios include a handful of blown-off shingles after a
            windstorm, a single leaking pipe boot, or cracked flashing around a chimney.
          </p>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Replacement becomes the better investment when damage is widespread, when the roof is
            approaching the end of its rated lifespan, or when the decking underneath is rotted or
            warped. We never push replacement when repair will solve the problem &mdash; and our
            free 27-point inspection gives you the data to decide with confidence.
          </p>
        </section>

        {/* --- Common OKC repair issues --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            What are the most common roof repairs in Oklahoma City?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Oklahoma&rsquo;s weather punishes roofs in ways that milder climates never do. Between
            severe hailstorms, straight-line winds that regularly exceed 70 mph, and temperature
            swings from 10&deg;F to 105&deg;F, roofing materials age faster here than the national
            average. These are the four repair issues we see most often.
          </p>

          <dl className="mt-6 space-y-4">
            <div>
              <dt className="font-semibold">Hail Bruising</dt>
              <dd className="mt-1 text-slate-deep/80">
                Hail impacts fracture the fiberglass mat beneath the granule surface. The damage is
                often invisible from the ground but shows up clearly as soft spots when you press the
                shingle. Left untreated, bruised shingles lose granules rapidly and fail years before
                their rated lifespan. We identify hail bruising during every inspection and document
                it with close-up photos for your insurance file.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Ridge Cap Loss</dt>
              <dd className="mt-1 text-slate-deep/80">
                Ridge caps sit at the highest point of the roof where two slopes meet. They take the
                full force of wind from every direction, and Oklahoma wind delivers. Blown-off ridge
                caps expose the ridge vent and the gap between the two slopes, creating a direct path
                for water into the attic. Replacement is straightforward and typically costs $385
                &ndash; $650 for a standard ridgeline.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Valley Flashing Failures</dt>
              <dd className="mt-1 text-slate-deep/80">
                Valleys concentrate water runoff, so even a small flashing gap can send hundreds of
                gallons into the roof deck during a single storm. We replace failed valley flashing
                with 24-gauge galvanized steel and ice-and-water shield underlayment, ensuring a
                watertight seal that lasts the life of the roof.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Pipe Boot Failures</dt>
              <dd className="mt-1 text-slate-deep/80">
                Every plumbing vent that exits through your roof is sealed by a rubber pipe boot.
                Oklahoma sun and thermal cycling degrade the rubber in as few as 8&ndash;10 years,
                causing cracks that let water drip down the vent pipe and into walls and ceilings.
                Pipe boot replacement is one of the most affordable repairs at $185&ndash;$350 per
                boot, and it prevents thousands of dollars in interior water damage.
              </dd>
            </div>
          </dl>
        </section>

        {/* --- Emergency tarping --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Do you offer emergency tarping for active leaks?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Yes. During storm season &mdash; roughly March through June in Oklahoma &mdash; we keep
            emergency tarping crews on standby around the clock. When you call with an active leak,
            our dispatch team aims to have a crew on site within 2 to 6 hours. We install heavy-duty
            UV-stabilized tarps secured with furring strips and masonry screws, not sandbags or
            cinder blocks that blow off in the next storm.
          </p>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Emergency tarping typically costs $350&ndash;$750 depending on the size of the area.
            If the tarp is related to a covered insurance claim, we include the tarping cost in the
            claim documentation so it is reimbursed by your carrier.
          </p>
        </section>

        {/* --- Pricing --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            How much does a roof repair cost in Oklahoma City?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Repair pricing depends on the type of damage, the materials required, and accessibility.
            Below are typical ranges for the most common repairs we perform.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-deep/20">
                  <th className="py-3 pr-4 text-left font-semibold">Repair Type</th>
                  <th className="py-3 pr-4 text-left font-semibold">Typical Cost</th>
                  <th className="py-3 text-left font-semibold">Time on Site</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-deep/10">
                <tr>
                  <td className="py-3 pr-4">Pipe boot replacement (each)</td>
                  <td className="py-3 pr-4">$185 &ndash; $350</td>
                  <td className="py-3">30&ndash;60 min</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Ridge cap replacement</td>
                  <td className="py-3 pr-4">$385 &ndash; $650</td>
                  <td className="py-3">1&ndash;2 hours</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Valley flashing repair</td>
                  <td className="py-3 pr-4">$600 &ndash; $1,200</td>
                  <td className="py-3">2&ndash;4 hours</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Shingle replacement (per slope)</td>
                  <td className="py-3 pr-4">$450 &ndash; $1,800</td>
                  <td className="py-3">2&ndash;6 hours</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Emergency tarp</td>
                  <td className="py-3 pr-4">$350 &ndash; $750</td>
                  <td className="py-3">1&ndash;2 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Frequently asked questions about roof repair
          </h2>
          <div className="mt-6">
            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* --- Lead Form --- */}
        <section className="mt-16 mb-16">
          <LeadForm source="roof-repair" />
        </section>
      </div>
    </>
  );
}
