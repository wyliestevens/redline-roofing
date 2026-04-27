import type { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { FaqAccordion } from '@/components/faq-accordion';
import { LeadForm } from '@/components/lead-form';
import { CtaBand } from '@/components/cta-band';
import { Jsonld } from '@/components/jsonld';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Insurance Claims Help | Hail & Storm Damage',
  description:
    'Redline Roofing helps Oklahoma City homeowners navigate hail and storm damage insurance claims. HAAG-certified inspectors, Xactimate estimates, and adjuster meeting support. Average claim uplift: +27%.',
};

const insuranceFaqs = [
  {
    question: 'Will filing a claim raise my premium?',
    answer:
      'Filing a weather-related claim in Oklahoma typically does not increase your premium because hail is considered a catastrophic event, not a maintenance issue. However, multiple claims in a 3-5 year window can affect your renewability.',
  },
  {
    question: 'What if my adjuster says there\'s no damage?',
    answer:
      'Request a re-inspection. You have the right to have your contractor present. If the re-inspection still denies, you can invoke the appraisal clause in your policy \u2014 both sides hire an appraiser, and a neutral umpire resolves the dispute.',
  },
  {
    question: 'Do I have to use the insurance company\'s preferred contractor?',
    answer:
      'No. Oklahoma law gives you the right to choose your own contractor. Your insurer cannot require you to use a specific company.',
  },
  {
    question: 'How long does the insurance process take?',
    answer:
      'From inspection to final payment, typically 30\u201360 days. Supplement approvals can add 2\u20134 weeks.',
  },
  {
    question: 'Can I keep the insurance money and not fix the roof?',
    answer:
      'With an RCV policy, the insurer only releases recoverable depreciation after the work is completed and invoiced. With an ACV policy, you receive one check and can technically choose not to repair, but your mortgage company may require it.',
  },
  {
    question: 'What if my roof is less than 10 years old?',
    answer:
      'Newer roofs with hail damage often receive full RCV coverage with minimal depreciation. Class 4 IR shingles may be approved as an upgrade if your area has experienced multiple hail events.',
  },
  {
    question: 'Should I get multiple estimates?',
    answer:
      'Yes, always. But make sure each estimate is in Xactimate format so your adjuster can compare line items directly. A hand-written estimate on letterhead is not comparable.',
  },
  {
    question: 'What does "supplement" mean?',
    answer:
      'A supplement is a formal request to the insurance company to add line items that were missed or underpriced in the original estimate. We submit supplements with photo documentation and code references.',
  },
];

export default function InsuranceClaimsPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: 'Insurance Claim Help for Oklahoma Roof Damage',
              description:
                'How Redline Roofing helps Oklahoma City homeowners navigate hail and storm damage insurance claims with HAAG-certified inspections and Xactimate estimates.',
              author: {
                '@type': 'Organization',
                name: SITE.name,
              },
              publisher: {
                '@type': 'Organization',
                name: SITE.name,
                url: SITE.url,
              },
              datePublished: '2026-04-25',
              dateModified: '2026-04-25',
            },
            {
              '@type': 'FAQPage',
              mainEntity: insuranceFaqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Insurance Claims',
                  item: `${SITE.url}/insurance-claims`,
                },
              ],
            },
          ],
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Insurance Claims', href: '/insurance-claims' }]} />

        <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-xl mb-8">
          <Image src="/img/storm-clouds.jpg" alt="Storm clouds over Oklahoma City rooftops" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-deep/60 to-slate-deep/20" />
          <div className="absolute inset-0 flex items-center px-8">
            <h1 className="text-white font-display text-3xl font-bold sm:text-4xl lg:text-5xl drop-shadow-lg">Insurance claim help for Oklahoma roof damage.</h1>
          </div>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-slate-deep/80">
          <strong>
            Most Oklahoma homeowners insurance policies cover sudden hail and wind damage minus
            your deductible. The hard part isn&rsquo;t getting approved &mdash; it&rsquo;s making
            sure the insurer&rsquo;s first estimate doesn&rsquo;t leave money on the table.
            Redline&rsquo;s HAAG-certified inspectors document your damage, prepare an Xactimate
            estimate matching the insurer&rsquo;s pricing software, and meet your adjuster on the
            roof. Average claim recovery uplift on Redline-supplemented claims: +27%.
          </strong>
        </p>

        <p className="mt-4 text-sm text-slate-deep/50">Last updated: April 25, 2026</p>

        {/* 5-step process */}
        <section className="mt-12" aria-labelledby="process-heading">
          <div className="relative h-48 md:h-60 w-full overflow-hidden rounded-xl mb-8">
            <Image src="/img/inspector.jpg" alt="HAAG-certified roof inspector documenting storm damage" fill sizes="100vw" className="object-cover" />
          </div>
          <h2
            id="process-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            The 5-step Redline storm claim process
          </h2>

          <ol className="mt-8 space-y-8">
            <li className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-copper text-lg font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">
                  Free 27-point inspection within 24 hours
                </h3>
                <p className="mt-2 leading-relaxed text-slate-deep/80">
                  A HAAG-certified inspector and FAA-certified drone pilot documents every square
                  foot of your roof. We photograph hail bruises, cracked shingles, damaged
                  flashing, and compromised decking &mdash; nothing gets missed.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-copper text-lg font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">
                  Drone documentation and Xactimate estimate
                </h3>
                <p className="mt-2 leading-relaxed text-slate-deep/80">
                  We prepare a line-item estimate in Xactimate, the same software your insurance
                  company uses. This means your adjuster can compare our estimate to theirs line
                  by line &mdash; no ambiguity, no guesswork.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-copper text-lg font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">
                  You file the claim with your insurer
                </h3>
                <p className="mt-2 leading-relaxed text-slate-deep/80">
                  We coach you on exactly what to say but we never file for you (that would make
                  us a public adjuster, which we are not). You call your carrier, report the
                  damage, and request an adjuster inspection.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-copper text-lg font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">
                  We meet your adjuster on the roof
                </h3>
                <p className="mt-2 leading-relaxed text-slate-deep/80">
                  Your contractor is legally entitled to be present during the adjuster&rsquo;s
                  inspection. We walk the roof with them and point out every damage point our
                  inspection documented. This is where claims go from &ldquo;partial
                  approval&rdquo; to &ldquo;full approval.&rdquo;
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-copper text-lg font-bold text-white">
                5
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">
                  We submit supplements
                </h3>
                <p className="mt-2 leading-relaxed text-slate-deep/80">
                  If the adjuster&rsquo;s estimate misses code-required items, we submit a written
                  supplement with photo evidence. Common supplements include drip edge, ice and
                  water shield, ridge ventilation, and decking replacement &mdash; items adjusters
                  routinely undercount on the first pass.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* ACV vs RCV */}
        <section className="mt-16" aria-labelledby="acv-rcv-heading">
          <h2
            id="acv-rcv-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            ACV vs RCV explained
          </h2>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-deep/20">
                  <th className="py-3 pr-4 font-semibold text-slate-deep" />
                  <th className="py-3 px-4 font-semibold text-slate-deep">
                    RCV (Replacement Cost Value)
                  </th>
                  <th className="py-3 pl-4 font-semibold text-slate-deep">
                    ACV (Actual Cash Value)
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-deep/80">
                <tr className="border-b border-slate-deep/10">
                  <td className="py-3 pr-4 font-semibold text-slate-deep">What it pays</td>
                  <td className="py-3 px-4">Full cost to replace today</td>
                  <td className="py-3 pl-4">Depreciated value only</td>
                </tr>
                <tr className="border-b border-slate-deep/10 bg-sand/50">
                  <td className="py-3 pr-4 font-semibold text-slate-deep">How payment works</td>
                  <td className="py-3 px-4">
                    Insurer sends ACV first, then releases recoverable depreciation after work is
                    done
                  </td>
                  <td className="py-3 pl-4">One payment, no recoverable depreciation</td>
                </tr>
                <tr className="border-b border-slate-deep/10">
                  <td className="py-3 pr-4 font-semibold text-slate-deep">
                    Example: 15-year roof, 25-year life, $18,000 replacement
                  </td>
                  <td className="py-3 px-4">
                    You receive $7,200 upfront + $10,800 after completion = $18,000 total
                  </td>
                  <td className="py-3 pl-4">You receive $7,200. Period.</td>
                </tr>
                <tr className="border-b border-slate-deep/10 bg-sand/50">
                  <td className="py-3 pr-4 font-semibold text-slate-deep">Your out-of-pocket</td>
                  <td className="py-3 px-4">Deductible only</td>
                  <td className="py-3 pl-4">Deductible + $10,800 gap</td>
                </tr>
                <tr className="border-b border-slate-deep/10">
                  <td className="py-3 pr-4 font-semibold text-slate-deep">Bottom line</td>
                  <td className="py-3 px-4">Most homeowners can afford the replacement</td>
                  <td className="py-3 pl-4">May need significant financing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Code-required line items */}
        <section className="mt-16" aria-labelledby="code-items-heading">
          <h2
            id="code-items-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Code-required line items adjusters commonly miss in OKC
          </h2>

          <ol className="mt-6 list-decimal space-y-3 pl-6 text-slate-deep/80 leading-relaxed">
            <li>Decking replacement when more than 25% is delaminated</li>
            <li>Drip edge per IRC R905.2.8.5</li>
            <li>Ice and water shield in valleys (per OKC building code)</li>
            <li>Ridge ventilation</li>
            <li>Step flashing replacement at all wall-to-roof transitions</li>
            <li>Re-permit and inspection fees ($94.50 in OKC as of August 2025)</li>
          </ol>
        </section>

        {/* Case studies */}
        <section className="mt-16" aria-labelledby="case-studies-heading">
          <div className="relative h-48 md:h-60 w-full overflow-hidden rounded-xl mb-8">
            <Image src="/img/aerial-roof.jpg" alt="Aerial drone view of a roof inspection in Oklahoma City" fill sizes="100vw" className="object-cover" />
          </div>
          <h2
            id="case-studies-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Real OKC case studies
          </h2>

          <div className="mt-8 space-y-8">
            <article className="rounded-2xl border border-slate-deep/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold">
                Edmond, Wedgewood Estates
              </h3>
              <p className="mt-3 leading-relaxed text-slate-deep/80">
                The Reeves family&rsquo;s 12-year-old roof was hit by the September 24, 2024
                baseball-hail supercell. State Farm&rsquo;s initial estimate: $9,840. Our
                Xactimate estimate documented code-required ice and water shield, drip edge, and
                ridge ventilation upgrades that the adjuster&rsquo;s first pass missed. We met the
                adjuster on the roof for the re-inspection. Final settlement:{' '}
                <strong>$26,318</strong>. The Reeves paid only their $1,000 deductible.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-deep/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold">Norman</h3>
              <p className="mt-3 leading-relaxed text-slate-deep/80">
                After the April 2025 hailstorm, the Estrada family&rsquo;s Allstate adjuster
                estimated $11,400. Our supplement documented missing step flashing, decking
                replacement on the west slope, and permit fees. Final settlement:{' '}
                <strong>$19,750</strong>. Bob Estrada, a retired CPA, audited our final invoice
                line by line &mdash; zero discrepancies.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-deep/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold">Moore, Commercial</h3>
              <p className="mt-3 leading-relaxed text-slate-deep/80">
                A 22,000 sq ft commercial TPO roof on a warehouse near I-35. The carrier&rsquo;s
                initial estimate was $48,000. Our commercial division documented membrane
                punctures invisible from ground level using drone thermal imaging, plus
                code-required parapet cap flashing and roof drain replacements. Final settlement:{' '}
                <strong>$71,200</strong>.
              </p>
            </article>
          </div>
        </section>

        {/* What we are NOT */}
        <section className="mt-16" aria-labelledby="not-heading">
          <h2
            id="not-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            What we are NOT
          </h2>

          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Redline Roofing &amp; Restoration is a licensed roofing contractor, not a public
            adjuster. Under Oklahoma law, only licensed public adjusters may negotiate insurance
            claims on behalf of policyholders. Oklahoma HB 1084 (effective November 1, 2023)
            further prohibits Assignment of Benefits (AOB) agreements in property insurance claims.
            We do not file claims for you, we do not negotiate settlements on your behalf, and we
            do not accept AOB agreements. What we do: inspect your roof, prepare an Xactimate
            estimate, attend the adjuster&rsquo;s inspection as your contractor (which is your
            legal right), and submit supplements with documentation when the estimate is
            incomplete.
          </p>
        </section>

        {/* Filing deadline */}
        <section className="mt-16" aria-labelledby="deadline-heading">
          <h2
            id="deadline-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            How long do I have to file a claim?
          </h2>

          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Under Oklahoma law (36 O.S. &sect; 1250.5), your homeowners insurance policy must
            allow at least 12 months from the date of the storm to file a claim, and many policies
            allow up to 24 months. After the statutory deadline, your claim is barred regardless
            of the damage. We recommend scheduling a free inspection within 30 days of any
            hailstorm &mdash; visible hail bruising on shingles degrades over time as granules
            shift and UV exposure masks the impact marks.
          </p>
        </section>

        {/* Insurance FAQ */}
        <section className="mt-16" aria-labelledby="insurance-faq-heading">
          <h2
            id="insurance-faq-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Insurance claim FAQ
          </h2>

          <div className="mt-8">
            <FaqAccordion items={insuranceFaqs} />
          </div>
        </section>

        {/* Lead form */}
        <section className="mt-16 mb-16" aria-labelledby="insurance-form-heading">
          <h2
            id="insurance-form-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Get your free storm damage inspection.
          </h2>
          <p className="mt-3 text-slate-deep/80">
            Our HAAG-certified inspectors will be on your roof within 24 hours. No cost, no
            obligation, no pressure.
          </p>
          <div className="mt-8">
            <LeadForm source="insurance-claims" />
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
