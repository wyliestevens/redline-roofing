import type { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { LeadForm } from '@/components/lead-form';
import { FaqAccordion } from '@/components/faq-accordion';
import { Jsonld } from '@/components/jsonld';

export const metadata: Metadata = {
  title: 'Roof Replacement in Oklahoma City',
  description:
    'Redline Roofing replaces residential roofs across the OKC metro in one to two days, starting at $10,000 for a 2,000 sq ft home, with a transferable lifetime workmanship warranty.',
};

const faqs = [
  {
    question: 'How long does a roof replacement take in Oklahoma City?',
    answer:
      'Most residential re-roofs are completed in a single day. Larger or multi-story homes may extend into a second day. We schedule around weather forecasts to make sure your home is never left exposed overnight.',
  },
  {
    question: 'Will my insurance cover a full roof replacement?',
    answer:
      'If the damage was caused by a covered peril such as hail or wind, your homeowner\'s policy typically covers the full replacement minus your deductible. Redline\'s HAAG-certified inspectors document every square foot of damage so your claim is as strong as possible.',
  },
  {
    question: 'Do I need to be home during the replacement?',
    answer:
      'No. We walk the project with you before work begins, and our crew chief will text you photos at each milestone. We send a final walkthrough video when the job is complete so you can review everything from wherever you are.',
  },
  {
    question: 'What happens to my old shingles?',
    answer:
      'We place tarps around your home before the first shingle comes off. All debris goes directly into our dump trailer. After the install, we run a magnetic roller across your yard, driveway, and flower beds to pick up every stray nail. We guarantee a cleaner yard than when we arrived.',
  },
  {
    question: 'Is the warranty transferable if I sell my home?',
    answer:
      'Yes. Our lifetime workmanship warranty transfers to the next homeowner at no cost. GAF and Owens Corning manufacturer warranties also transfer with a simple registration form, which adds measurable resale value to your property.',
  },
];

export default function RoofReplacementPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Roof Replacement in Oklahoma City',
              serviceType: 'Roof Replacement',
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
                'Full residential roof replacement across the Oklahoma City metro with a transferable lifetime workmanship warranty.',
              offers: {
                '@type': 'Offer',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  price: '10000',
                  priceCurrency: 'USD',
                  description: 'Starting price for a 2,000 sq ft home',
                },
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://redlineroofingok.com' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://redlineroofingok.com/services' },
                { '@type': 'ListItem', position: 3, name: 'Roof Replacement', item: 'https://redlineroofingok.com/services/roof-replacement' },
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
            { name: 'Roof Replacement', href: '/services/roof-replacement' },
          ]}
        />

        <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-xl mb-8">
          <Image src="/img/nice-home-5.jpg" alt="Oklahoma City home with a brand new roof replacement" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-deep/60 to-slate-deep/20" />
          <div className="absolute inset-0 flex items-center px-8">
            <h1 className="text-white font-display text-3xl font-bold sm:text-4xl lg:text-5xl drop-shadow-lg">Roof replacement in Oklahoma City.</h1>
          </div>
        </div>

        <p className="mt-6 text-lg leading-relaxed">
          <strong>
            Redline Roofing &amp; Restoration replaces residential roofs across the Oklahoma City metro
            in one to two days, starting at $10,000 for a 2,000 sq ft home, with a transferable
            lifetime workmanship warranty and no payment due until your City of Oklahoma City permit
            inspection passes.
          </strong>
        </p>

        <p className="mt-2 text-sm text-slate-deep/60">Last updated: April 25, 2026</p>

        {/* --- How much does it cost? --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            How much does a roof replacement cost in Oklahoma City?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Pricing depends on three factors: the size of your roof measured in roofing squares (one
            square equals 100 square feet), the material you choose, and the complexity of your
            roofline. Steep pitches, multiple valleys, dormers, and skylights add labor. The table
            below shows installed pricing for a typical 20-square (2,000 sq ft) single-story home with
            a standard 4/12 pitch.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-deep/20">
                  <th className="py-3 pr-4 text-left font-semibold">Material</th>
                  <th className="py-3 pr-4 text-left font-semibold">Installed Cost (20 sq)</th>
                  <th className="py-3 pr-4 text-left font-semibold">Warranty</th>
                  <th className="py-3 text-left font-semibold">Wind Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-deep/10">
                <tr>
                  <td className="py-3 pr-4">3-Tab Asphalt</td>
                  <td className="py-3 pr-4">$10,000 &ndash; $12,500</td>
                  <td className="py-3 pr-4">25 years</td>
                  <td className="py-3">60 mph</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Architectural (Dimensional)</td>
                  <td className="py-3 pr-4">$12,500 &ndash; $16,000</td>
                  <td className="py-3 pr-4">Lifetime (limited)</td>
                  <td className="py-3">110 mph</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Class 4 Impact-Resistant</td>
                  <td className="py-3 pr-4">$15,000 &ndash; $19,000</td>
                  <td className="py-3 pr-4">Lifetime (limited)</td>
                  <td className="py-3">130 mph</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Standing-Seam Metal</td>
                  <td className="py-3 pr-4">$22,000 &ndash; $30,000</td>
                  <td className="py-3 pr-4">40&ndash;50 years</td>
                  <td className="py-3">140 mph</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Synthetic Slate / Shake</td>
                  <td className="py-3 pr-4">$25,000 &ndash; $35,000</td>
                  <td className="py-3 pr-4">50 years</td>
                  <td className="py-3">110 mph</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-deep/60">
            All prices include tear-off, disposal, synthetic underlayment, new drip edge, pipe
            boots, and ridge vent. Prices are estimates and may vary based on decking condition and
            code requirements.
          </p>
        </section>

        {/* --- What materials should I choose? --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            What roofing materials should I choose?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            For most Oklahoma City homeowners, architectural shingles hit the sweet spot between
            cost, curb appeal, and durability. They offer a dimensional look that mimics wood shake,
            carry lifetime limited warranties from manufacturers like GAF and Owens Corning, and
            handle the wind loads our metro regularly sees. If your neighborhood sits in a documented
            hail corridor &mdash; Edmond, Piedmont, Yukon, or Moore &mdash; the upgrade to Class 4
            impact-resistant shingles can pay for itself through insurance premium discounts.
          </p>

          <dl className="mt-6 space-y-4">
            <div>
              <dt className="font-semibold">Architectural Shingles</dt>
              <dd className="mt-1 text-slate-deep/80">
                The most popular choice in the OKC metro. Multi-layer construction provides depth
                and shadow lines that flat 3-tab shingles cannot match. GAF Timberline HDZ and Owens
                Corning Duration are our two most-installed products.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Class 4 Impact-Resistant Shingles</dt>
              <dd className="mt-1 text-slate-deep/80">
                Engineered with SBS-modified asphalt to absorb hail impacts up to 2 inches in
                diameter without cracking. Oklahoma insurers commonly offer 15&ndash;28% premium
                discounts for Class 4 roofs &mdash; enough to offset the upgrade cost in three to
                five years.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Standing-Seam Metal</dt>
              <dd className="mt-1 text-slate-deep/80">
                Built from 24-gauge or 26-gauge steel with concealed fasteners. Panels expand and
                contract with temperature shifts, so standing seam handles Oklahoma&rsquo;s 100-degree
                swings better than exposed-fastener metal. Lifespan reaches 40&ndash;60 years with
                minimal maintenance.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Synthetic Slate and Shake</dt>
              <dd className="mt-1 text-slate-deep/80">
                Composite products that replicate the look of natural slate or cedar shake at roughly
                half the weight and a fraction of the maintenance. A strong choice for Nichols Hills
                and Heritage Hills properties where aesthetics and HOA standards are paramount.
              </dd>
            </div>
          </dl>
        </section>

        {/* --- Should I upgrade to Class 4? --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Should I upgrade to Class 4 impact-resistant shingles?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            If you live anywhere in the Oklahoma City metro, the short answer is almost certainly
            yes. Oklahoma ranks first nationally in hail damage claims, and the OKC metro has been
            hit by damaging hailstorms in seven of the last ten years. Class 4 shingles, rated under
            UL 2218, withstand a 2-inch steel ball dropped from 20 feet without cracking. That test
            simulates golf-ball-sized hail &mdash; exactly what Oklahoma delivers.
          </p>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            The cost premium is typically $2,500&ndash;$4,000 over standard architectural shingles on
            a 20-square roof. But Oklahoma insurers routinely offer 15&ndash;28% premium discounts
            for a verified Class 4 installation, which translates to $300&ndash;$600 per year. In
            most cases, the upgrade pays for itself in four to seven years &mdash; and that ignores
            the avoided deductible and hassle of a future claim.
          </p>
        </section>

        {/* --- How long does the work take? --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            How long does a roof replacement take?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            A standard single-story home with a simple roofline is completed in one day. Two-story
            homes, cut-up rooflines with multiple dormers or valleys, and properties over 3,000
            square feet typically take two days. Metal roofs require three to five days due to
            precision panel fitting and trim fabrication. We deliver materials one day before the
            install so the crew can start at first light.
          </p>
        </section>

        {/* --- The Redline 5-Step Process --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            The Redline 5-step roof replacement process
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Every Redline replacement follows the same five steps, no matter the material or scope.
          </p>
          <ol className="mt-6 space-y-4 list-decimal list-inside text-slate-deep/80">
            <li>
              <strong>Free 27-point inspection.</strong> We fly a drone over your roof, walk every
              accessible plane with a ladder, check the attic for ventilation and moisture, and
              deliver a written PDF report within 24 hours. If you have storm damage, we document it
              in Xactimate format for your insurer.
            </li>
            <li>
              <strong>Material selection and proposal.</strong> You choose the shingle line, color,
              and ventilation upgrades. We provide a line-item proposal with no hidden fees. If
              insurance is involved, we prepare the supplement before the adjuster arrives.
            </li>
            <li>
              <strong>Permit and scheduling.</strong> We pull the City of Oklahoma City permit, order
              materials, and schedule your install. Materials arrive one day before the crew.
            </li>
            <li>
              <strong>Installation day.</strong> Our crew chief walks the property with you (or
              sends photos), then the team tears off the old roof, inspects the decking, replaces
              any damaged OSB, installs synthetic underlayment, drip edge, ice-and-water shield in
              valleys, new pipe boots, step and counter flashing, field shingles, ridge cap, and
              ridge vent. We clean up the same day and run a magnetic nail sweep across the entire
              property.
            </li>
            <li>
              <strong>Final inspection.</strong> The City of Oklahoma City inspector signs off on the
              permit. Only after the inspection passes do we collect final payment. We register your
              manufacturer warranty, hand you a completed project folder, and schedule a one-year
              follow-up inspection at no charge.
            </li>
          </ol>
        </section>

        {/* --- FAQ --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Frequently asked questions about roof replacement
          </h2>
          <div className="mt-6">
            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* --- Lead Form --- */}
        <section className="mt-16 mb-16">
          <LeadForm source="roof-replacement" />
        </section>
      </div>
    </>
  );
}
