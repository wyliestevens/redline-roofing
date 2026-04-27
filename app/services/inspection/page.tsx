import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { LeadForm } from '@/components/lead-form';
import { FaqAccordion } from '@/components/faq-accordion';
import { Jsonld } from '@/components/jsonld';

export const metadata: Metadata = {
  title: 'Free 27-Point Roof Inspection in Oklahoma City',
  description:
    'Free 27-point roof inspection with drone imagery, ladder walk, attic ventilation check, and a written PDF report delivered within 24 hours. Redline Roofing & Restoration, OKC.',
};

const faqs = [
  {
    question: 'Is the 27-point roof inspection really free?',
    answer:
      'Yes, completely free with no obligation. We do not charge for the inspection, the drone flight, the attic check, or the written PDF report. There is no sales pressure and no contract to sign. If your roof is in good shape, we tell you so and schedule a follow-up in 12 months.',
  },
  {
    question: 'How long does the inspection take?',
    answer:
      'A typical residential inspection takes 45 to 75 minutes on site, depending on the size and complexity of the roof. The drone flight takes about 10 minutes, the ladder walk 15 to 30 minutes, and the interior and attic assessment 10 to 20 minutes. You receive the written PDF report within 24 hours.',
  },
  {
    question: 'Do I need to be home for the inspection?',
    answer:
      'We prefer you to be home so we can walk through our findings in real time and show you photos on a tablet. However, if your schedule does not allow it, we can perform the exterior inspection without you present and deliver the report digitally. Attic access does require someone home to let us inside.',
  },
  {
    question: 'Will the inspector go inside my attic?',
    answer:
      'Yes, if accessible. The attic inspection checks for proper ventilation ratios, signs of moisture or condensation, daylight penetration through the roof deck, and the condition of insulation. If attic access is not available due to a pull-down ladder in a high ceiling or a sealed entry, we note it in the report and use exterior indicators instead.',
  },
  {
    question: 'Can I use the inspection report for an insurance claim?',
    answer:
      'Absolutely. If we identify storm damage, the inspection report includes close-up photos with measuring references, damage counts by slope, and collateral damage indicators that insurance adjusters need to approve a claim. The report is formatted to support a claim filing and serves as your documentation if you choose to proceed.',
  },
];

export default function InspectionPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Free 27-Point Roof Inspection in Oklahoma City',
              serviceType: 'Roof Inspection',
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
                'Free 27-point roof inspection with drone imagery, ladder walk, and attic assessment. Written PDF report delivered within 24 hours.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: 'Free inspection, no obligation',
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://redlineroofingok.com' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://redlineroofingok.com/services' },
                { '@type': 'ListItem', position: 3, name: 'Free Inspection', item: 'https://redlineroofingok.com/services/inspection' },
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
            { name: 'Free Inspection', href: '/services/inspection' },
          ]}
        />

        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Free 27-point roof inspection in Oklahoma City.
        </h1>

        <p className="mt-6 text-lg leading-relaxed">
          <strong>
            Redline&rsquo;s free 27-point roof inspection combines FAA-certified drone imagery with
            a hands-on ladder walk, an interior moisture check, an attic ventilation assessment, and
            a detailed evaluation of every flashing, valley, chimney, skylight, ridge, and soffit on
            your home. You receive a written PDF report with annotated photos within 24 hours &mdash;
            no cost, no obligation, no sales pressure.
          </strong>
        </p>

        <p className="mt-2 text-sm text-slate-deep/60">Last updated: April 25, 2026</p>

        {/* --- What does the inspection cover? --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            What does the 27-point inspection cover?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Our inspection is divided into four phases: aerial drone survey, exterior ladder walk,
            interior moisture and attic assessment, and ground-level perimeter check. Each phase
            targets specific failure points that Oklahoma weather attacks hardest.
          </p>

          <dl className="mt-6 space-y-4">
            <div>
              <dt className="font-semibold">Phase 1 &mdash; Drone Survey (points 1&ndash;6)</dt>
              <dd className="mt-1 text-slate-deep/80">
                Our FAA-certified pilot flies the roof at multiple altitudes to capture overall
                condition, identify missing or displaced shingles, map granule loss patterns, and
                photograph hard-to-reach areas like upper dormers and chimney caps. Drone imagery
                reveals patterns &mdash; like hail damage concentrated on west-facing slopes &mdash;
                that a ladder walk alone may miss.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Phase 2 &mdash; Ladder Walk (points 7&ndash;17)</dt>
              <dd className="mt-1 text-slate-deep/80">
                A HAAG-certified inspector walks every accessible slope with a tape measure and
                camera. Inspection points include: shingle condition and hail testing, ridge cap
                integrity, hip cap condition, valley flashing and sealant, step flashing at walls
                and dormers, counter flashing at chimneys, pipe boot condition, skylight flashing
                and seals, drip edge presence and condition, starter strip integrity, and nail
                pattern compliance.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Phase 3 &mdash; Interior &amp; Attic (points 18&ndash;23)</dt>
              <dd className="mt-1 text-slate-deep/80">
                Inside the home, we check ceilings and upper walls for staining, bubbling paint,
                and drywall soft spots that indicate active or historical leaks. In the attic, we
                assess ventilation ratios (intake vs. exhaust), check for condensation or mold on
                the underside of the roof deck, look for daylight penetration at penetrations and
                ridges, and evaluate insulation depth and condition.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Phase 4 &mdash; Perimeter Check (points 24&ndash;27)</dt>
              <dd className="mt-1 text-slate-deep/80">
                From the ground, we inspect gutters and downspouts for granule buildup and proper
                drainage, check soffit panels for sagging or moisture damage, evaluate fascia board
                condition, and look for collateral hail damage on fences, AC condensers, window
                screens, and painted surfaces that corroborate roof damage.
              </dd>
            </div>
          </dl>
        </section>

        {/* --- The report --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            What does the inspection report include?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Within 24 hours of the inspection, you receive a professional PDF report delivered to
            your email. The report includes annotated drone photos with damage callouts, close-up
            photos from the ladder walk with measuring references, an attic ventilation summary
            with current vs. recommended ratios, a condition grade for each of the 27 inspection
            points (green, yellow, or red), and a clear recommendation: maintain, repair, or
            replace.
          </p>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            If storm damage is present, the report is formatted to support an insurance claim. We
            include hail hit counts per test square, collateral damage documentation, and the storm
            date and hail size from NOAA records. You can hand the report directly to your insurance
            agent or forward it to your carrier when you file.
          </p>
        </section>

        {/* --- Why inspections matter --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Why should I get my roof inspected even if I do not see damage?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            The costliest roof damage in Oklahoma is the damage you cannot see from the ground.
            Hail bruising, cracked pipe boots, lifted flashing, and failed valley sealant do not
            announce themselves until water is dripping through your ceiling. By then, you are
            paying for interior repairs on top of the roof work.
          </p>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            A proactive inspection catches problems when they are $200 fixes instead of $2,000
            emergencies. It also documents your roof&rsquo;s condition for insurance purposes &mdash;
            if a storm hits next month, you have a dated, photographic baseline that proves the
            damage is new. Insurance carriers cannot dispute damage timing when you have a
            pre-storm inspection report on file.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-deep/20">
                  <th className="py-3 pr-4 text-left font-semibold">Issue Caught Early</th>
                  <th className="py-3 pr-4 text-left font-semibold">Repair Cost</th>
                  <th className="py-3 text-left font-semibold">Cost If Ignored</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-deep/10">
                <tr>
                  <td className="py-3 pr-4">Cracked pipe boot</td>
                  <td className="py-3 pr-4">$185 &ndash; $350</td>
                  <td className="py-3">$1,500 &ndash; $4,000 (ceiling + drywall + mold)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Lifted step flashing</td>
                  <td className="py-3 pr-4">$250 &ndash; $500</td>
                  <td className="py-3">$2,000 &ndash; $6,000 (wall rot + interior damage)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Inadequate attic ventilation</td>
                  <td className="py-3 pr-4">$400 &ndash; $800</td>
                  <td className="py-3">Premature roof failure, voided warranty</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Missing drip edge</td>
                  <td className="py-3 pr-4">$300 &ndash; $600</td>
                  <td className="py-3">Fascia rot, pest intrusion, code violation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* --- When to schedule --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            When is the best time to schedule a roof inspection in Oklahoma City?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            We recommend scheduling an inspection twice: once in early spring before storm season
            begins (March), and once in late fall before winter freezes set in (November). The
            spring inspection catches winter damage and creates a pre-storm baseline. The fall
            inspection catches storm season damage and ensures your roof is sealed for winter.
          </p>
          <p className="mt-4 leading-relaxed text-slate-deep/80">
            Beyond those two annual checkpoints, schedule an inspection immediately after any
            confirmed hail event in your zip code. NOAA and local news coverage will tell you the
            hail size and path. If your area was in the swath, call us within 48 hours while the
            evidence is fresh and before door-knocker storm chasers complicate the process.
          </p>
        </section>

        {/* --- FAQ --- */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Frequently asked questions about roof inspections
          </h2>
          <div className="mt-6">
            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* --- Lead Form --- */}
        <section className="mt-16 mb-16">
          <LeadForm source="inspection" />
        </section>
      </div>
    </>
  );
}
