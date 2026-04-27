import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { LeadForm } from '@/components/lead-form';
import { FaqAccordion } from '@/components/faq-accordion';
import { Jsonld } from '@/components/jsonld';

export const metadata: Metadata = {
  title: 'Hail & Storm Damage Restoration in Oklahoma City',
  description:
    'HAAG-certified inspectors, drone documentation, Xactimate estimates, and adjuster meetings on the roof at zero cost to you. Supplemented claims average 27% higher settlements.',
};

const faqs = [
  {
    question: 'Do I have to pay anything out of pocket for storm damage restoration?',
    answer:
      'Your only out-of-pocket cost is your insurance deductible. Redline does not charge for inspections, estimates, adjuster meetings, or supplement negotiations. Our project cost is covered entirely by your insurance proceeds after your deductible is applied.',
  },
  {
    question: 'How long do I have to file a hail damage claim in Oklahoma?',
    answer:
      'Under Oklahoma law (36 O.S. 1250.5), you generally have one year from the date of loss to file a property damage claim. However, some policies contain shorter contractual deadlines. We recommend filing within 30 days of the storm to preserve evidence and avoid disputes.',
  },
  {
    question: 'Will filing a claim raise my insurance premiums?',
    answer:
      'Oklahoma law prohibits insurers from raising rates solely because you filed a weather-related claim. Rate increases are typically tied to area-wide loss history, not individual claims. That said, filing multiple claims in a short window can affect your insurability, so we always discuss the full picture before recommending a filing.',
  },
  {
    question: 'What is the difference between a roofing contractor and a public adjuster?',
    answer:
      'A public adjuster is a licensed claims professional who represents you directly against your insurer, typically for 10% to 15% of the settlement. Redline is not a public adjuster. We are a licensed roofing contractor who prepares professional documentation, writes Xactimate supplements, and meets your adjuster on the roof, but we earn our compensation by performing the repair work, not by taking a percentage of your check.',
  },
  {
    question: 'Can I choose my own contractor or does my insurance company pick one?',
    answer:
      'You have the absolute right to choose your own contractor in Oklahoma. Your insurer may provide a list of "preferred" vendors, but you are never required to use them. Choosing a contractor like Redline who is experienced in supplements often results in a higher final settlement because we know what the insurance scope commonly misses.',
  },
];

export default function StormDamagePage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Hail and Storm Damage Restoration in Oklahoma City',
              serviceType: 'Storm Damage Restoration',
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
                'HAAG-certified hail and storm damage restoration with drone documentation, Xactimate estimates, and insurance adjuster meetings at zero cost to the homeowner.',
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://redlineroofingok.com' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://redlineroofingok.com/services' },
                { '@type': 'ListItem', position: 3, name: 'Storm Damage', item: 'https://redlineroofingok.com/services/storm-damage' },
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
            { name: 'Storm Damage', href: '/services/storm-damage' },
          ]}
        />

        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Hail and storm damage restoration in Oklahoma City.
        </h1>

        <p className="mt-6 text-lg leading-relaxed">
          <strong>
            After an Oklahoma hailstorm, Redline deploys HAAG-certified inspectors within 24 hours,
            documents your roof with FAA-certified drones, prepares an Xactimate-format estimate, and
            meets your insurance adjuster on the roof &mdash; at zero cost to you. On supplemented
            claims our customers&rsquo; final settlements average 27% higher than the insurer&rsquo;s
            first estimate.
          </strong>
        </p>

        <p className="mt-2 text-sm text-slate-deep/60">Last updated: April 25, 2026</p>

        {/* --- How to know you have hail damage --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            How do I know if my roof has hail damage?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Hail damage on an asphalt shingle roof is rarely visible from the ground. What you
            will notice from your driveway are secondary indicators: dented gutters, cracked
            window screens, pockmarks on painted wood trim, and dings on your air conditioning
            condenser. If you see any of these after a storm, the shingles above almost certainly
            took hits too.
          </p>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            On the roof itself, hail damage appears as dark, circular marks where granules have
            been knocked loose, exposing the black fiberglass mat beneath. A HAAG-certified
            inspector can distinguish genuine hail bruising from blistering, manufacturing
            defects, and normal weathering &mdash; a critical distinction because insurers will
            deny claims based on misidentified damage. Redline carries HAAG Residential and
            Commercial certifications specifically to ensure our damage assessments withstand
            insurance scrutiny.
          </p>

          <dl className="mt-6 space-y-4">
            <div>
              <dt className="font-semibold">Soft-Spot Test</dt>
              <dd className="mt-1 text-slate-deep/80">
                A hail-bruised shingle feels soft and gives when pressed with a thumb, similar to
                pressing a bruised apple. Undamaged shingles feel firm and springy. Our inspectors
                test multiple shingles on every slope to map the extent of damage.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Granule Displacement</dt>
              <dd className="mt-1 text-slate-deep/80">
                Impact sites show exposed fiberglass mat surrounded by a ring of loosened granules.
                The displacement pattern is circular and random, unlike the linear wear caused by
                foot traffic or branch abrasion.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Collateral Damage Indicators</dt>
              <dd className="mt-1 text-slate-deep/80">
                Dented gutters, cracked vinyl siding, chipped paint on fascia boards, and damaged
                fence caps all corroborate roof damage. We photograph every collateral indicator
                because adjusters use them to verify the storm event and hail size.
              </dd>
            </div>
          </dl>
        </section>

        {/* --- The 5-step Redline storm process --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            What is the Redline 5-step storm damage process?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Our process is designed to maximize your settlement while keeping you informed at
            every stage. There are no surprises, no fine print, and no cost to you beyond your
            deductible.
          </p>
          <ol className="mt-6 space-y-4 list-decimal list-inside text-slate-deep/80">
            <li>
              <strong>Free storm inspection.</strong> Within 24 hours of your call, a HAAG-certified
              inspector and an FAA-certified drone pilot arrive at your property. We inspect every
              roof slope, photograph damage at close range with a measuring reference, and check
              gutters, siding, windows, and soft metals for collateral indicators. You receive a
              written inspection report within 24 hours.
            </li>
            <li>
              <strong>Claim filing assistance.</strong> If we find actionable damage, we walk you
              through filing your claim. We provide your insurer with our preliminary damage report
              and high-resolution drone imagery so the claim starts on the right foot.
            </li>
            <li>
              <strong>Adjuster meeting on the roof.</strong> We meet your insurance adjuster at
              the property, get on the roof together, and walk every slope pointing out confirmed
              damage. This face-to-face meeting is where most underpayments are prevented &mdash;
              adjusters who inspect alone routinely miss entire slopes and soft metal damage.
            </li>
            <li>
              <strong>Supplement negotiation.</strong> After the adjuster issues the initial scope,
              our estimating team compares it line by line to our own Xactimate estimate. Missing
              items &mdash; starter strip, ice-and-water shield, code-required drip edge, pipe boot
              replacement, gutter apron, ridge vent &mdash; are documented in a formal supplement
              with supporting photos and code citations. On supplemented claims, our customers&rsquo;
              final settlements average 27% above the insurer&rsquo;s initial estimate.
            </li>
            <li>
              <strong>Restoration and warranty.</strong> Once the claim is approved, we schedule
              your replacement within two weeks. The same quality standards, lifetime workmanship
              warranty, and City of Oklahoma City permit inspection apply to every storm job.
            </li>
          </ol>
        </section>

        {/* --- How long to file --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            How long do I have to file a hail damage claim in Oklahoma?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Oklahoma statute 36 O.S. &sect; 1250.5 sets a general statute of limitations of one year
            from the date of loss for property damage claims. However, individual policy language can
            shorten that window. Some carriers impose a 180-day reporting requirement or require
            &ldquo;prompt notice&rdquo; without defining a specific timeline.
          </p>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            The practical advice is straightforward: file within 30 days of the storm. Early filing
            preserves physical evidence on the roof, reduces the likelihood of a &ldquo;pre-existing
            damage&rdquo; dispute, and gives you maximum time for supplement negotiations. If a
            second storm hits before the first claim is resolved, documenting the original damage
            early prevents your carrier from attributing all damage to the later event.
          </p>
        </section>

        {/* --- ACV vs RCV --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            What is the difference between ACV and RCV on my insurance claim?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            These two terms determine how much of your claim you receive and when you receive it.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-deep/20">
                  <th className="py-3 pr-4 text-left font-semibold">Term</th>
                  <th className="py-3 pr-4 text-left font-semibold">Definition</th>
                  <th className="py-3 text-left font-semibold">When You Get It</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-deep/10">
                <tr>
                  <td className="py-3 pr-4 font-semibold">ACV (Actual Cash Value)</td>
                  <td className="py-3 pr-4">
                    Replacement cost minus depreciation. The older your roof, the higher the
                    depreciation deducted.
                  </td>
                  <td className="py-3">
                    Paid upfront after the claim is approved, minus your deductible.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">RCV (Replacement Cost Value)</td>
                  <td className="py-3 pr-4">
                    The full cost to replace your roof with like-kind materials at today&rsquo;s
                    prices, with no depreciation deduction.
                  </td>
                  <td className="py-3">
                    The difference between RCV and ACV (called &ldquo;recoverable depreciation&rdquo;)
                    is released after you complete the work and submit the final invoice.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Most Oklahoma homeowner policies are RCV policies, which means the full replacement cost
            is covered as long as you actually complete the work. Redline handles the depreciation
            recovery paperwork on your behalf &mdash; we submit the completion invoice and final
            photos directly to your adjuster so the recoverable depreciation check is released
            without delay.
          </p>
        </section>

        {/* --- Why we're not a public adjuster --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Why is Redline not a public adjuster?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Public adjusters are licensed to negotiate insurance claims on your behalf, typically
            charging 10&ndash;15% of the gross settlement. On a $25,000 roof claim, that&rsquo;s
            $2,500&ndash;$3,750 coming out of your proceeds before a single shingle is installed.
          </p>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Redline takes a different approach. We provide the same professional documentation
            &mdash; HAAG-certified inspections, drone imagery, Xactimate-format estimates, and
            supplement negotiations &mdash; but we earn our compensation by performing the
            restoration work, not by skimming a percentage of your check. The result is the same
            level of advocacy without reducing your settlement. If your claim is approved, 100% of
            the insurance proceeds (minus your deductible) goes toward your new roof.
          </p>
        </section>

        {/* --- Real OKC case studies --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            How much more do Redline customers receive after supplements?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Every claim is different, but these two recent OKC-area projects illustrate what
            professional supplement negotiation can accomplish.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-deep/20">
                  <th className="py-3 pr-4 text-left font-semibold">Project</th>
                  <th className="py-3 pr-4 text-left font-semibold">Initial Estimate</th>
                  <th className="py-3 pr-4 text-left font-semibold">Final Settlement</th>
                  <th className="py-3 text-left font-semibold">Increase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-deep/10">
                <tr>
                  <td className="py-3 pr-4">Edmond &mdash; 2,800 sq ft, architectural shingles</td>
                  <td className="py-3 pr-4">$9,840</td>
                  <td className="py-3 pr-4">$26,318</td>
                  <td className="py-3 font-semibold text-success">+167%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Norman &mdash; 2,200 sq ft, 3-tab to architectural upgrade</td>
                  <td className="py-3 pr-4">$11,400</td>
                  <td className="py-3 pr-4">$19,750</td>
                  <td className="py-3 font-semibold text-success">+73%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 leading-relaxed text-slate-deep/80">
            In the Edmond case, the insurer&rsquo;s initial estimate omitted ice-and-water shield
            in all valleys, the full gutter replacement, soffit and fascia repairs, and two slopes
            of the detached garage. Our supplement added 14 line items supported by photos and
            Oklahoma building code citations. In Norman, the adjuster&rsquo;s scope missed the
            code-required drip edge upgrade, the ridge vent replacement, and the step flashing at
            two chimney locations. Every dollar of the increase went to the homeowner&rsquo;s roof,
            not to Redline as a fee.
          </p>
        </section>

        {/* --- FAQ --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Frequently asked questions about storm damage claims
          </h2>
          <div className="mt-6">
            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* --- Lead Form --- */}
        <section className="mt-16 mb-16">
          <LeadForm source="storm-damage" />
        </section>
      </div>
    </>
  );
}
