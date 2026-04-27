import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { LeadForm } from '@/components/lead-form';
import { FaqAccordion } from '@/components/faq-accordion';
import { Jsonld } from '@/components/jsonld';
import { SITE } from '@/lib/site-config';

/* ────────────────────────────────────────────────────────
   Blog post data — all 5 posts hard-coded inline
   ──────────────────────────────────────────────────────── */

interface FaqItem {
  question: string;
  answer: string;
}

interface BlogPostData {
  title: string;
  date: string;
  lastUpdated: string;
  author: string;
  description: string;
  content: ReactNode;
  faqs: FaqItem[];
}

const posts: Record<string, BlogPostData> = {
  /* ═══════════════════════════════════════════════════════
     POST 1 — Oklahoma Hail Damage Guide 2026
     ═══════════════════════════════════════════════════════ */
  'oklahoma-hail-damage-guide-2026': {
    title:
      'The 2026 Oklahoma Hail Damage Guide: How to Spot Damage, File a Claim, and Avoid Storm Chasers',
    date: 'April 15, 2026',
    lastUpdated: 'April 20, 2026',
    author: 'Trey McAllister',
    description:
      'Comprehensive guide for Oklahoma homeowners on identifying hail damage, navigating insurance claims, and avoiding storm chasers after severe weather.',
    content: (
      <>
        <p>
          Oklahoma City ranks as the most hail-impacted metro in the United
          States by storm frequency. The National Weather Service recorded over
          300 significant hail events — stones one inch in diameter or larger —
          across the OKC metro between 2015 and 2025. That works out to roughly
          30 major hail events per year, or about one every 12 days during the
          March-through-September severe weather season.
        </p>
        <p>
          The geography is the reason. Oklahoma sits at the collision point of
          warm, moist Gulf air, dry air off the high desert, and cold air
          descending from the Rockies. When those air masses collide — especially
          along the dryline that typically sets up from Lawton through western
          OKC — the resulting supercell thunderstorms produce some of the largest
          hailstones on Earth.
        </p>
        <p>
          For homeowners, this means your roof is not a set-it-and-forget-it
          investment. It is a wear item that absorbs repeated impacts and must be
          inspected after every significant storm. This guide walks you through
          what to look for, what to do, and how to protect yourself from the
          storm chasers who flood into Oklahoma after every major event.
        </p>

        <h2>How to spot hail damage on your roof</h2>

        <h3>Visual signs you can see from the ground</h3>
        <ul>
          <li>
            <strong>Dented gutters and downspouts:</strong> Aluminum gutters dent
            easily and are the first visible sign of hail impact. Walk the
            perimeter of your home and look for dimples, dings, and creases.
          </li>
          <li>
            <strong>Damaged window screens:</strong> Hail that hits your roof
            also hits your window screens. Torn or dented screens are a reliable
            ground-level indicator of stone size.
          </li>
          <li>
            <strong>Dings on painted surfaces:</strong> Check your fence,
            mailbox, outdoor A/C unit, and car. Damage to these surfaces confirms
            the storm dropped stones large enough to damage shingles.
          </li>
          <li>
            <strong>Granule accumulation:</strong> After a storm, check your
            gutter outlets and downspout splash blocks. A heavy deposit of black
            or dark gray granules means shingles are losing their protective
            surface layer.
          </li>
        </ul>

        <h3>Interior signs of roof damage</h3>
        <ul>
          <li>
            <strong>Ceiling stains:</strong> Brown or yellowish water stains on
            ceilings, especially on upper floors, indicate water is penetrating
            the roof system. Even small stains warrant a professional inspection.
          </li>
          <li>
            <strong>Attic daylight:</strong> Go into your attic during the day
            and look for pinpoints of light coming through the roof deck. Any
            daylight means there is a breach in the shingle and underlayment
            layers.
          </li>
          <li>
            <strong>Damp insulation:</strong> Feel the insulation in your attic
            after a storm. Wet or damp insulation means water is getting past the
            roof surface and into the attic cavity, which leads to mold,
            structural rot, and energy loss.
          </li>
        </ul>

        <h3>What a professional inspector looks for on the roof</h3>
        <ul>
          <li>
            <strong>Hail bruises:</strong> A soft, depressed area where the
            impact cracked the fiberglass mat beneath the shingle surface.
            Bruises are often invisible from the ground and can only be detected
            by touch.
          </li>
          <li>
            <strong>Cracked shingles:</strong> Larger hailstones (1.5 inches and
            above) crack shingles outright, exposing underlayment or decking.
          </li>
          <li>
            <strong>Cracked ridge caps:</strong> Ridge caps sit at the highest
            point of the roof and take the full force of falling hail. Cracked
            ridge caps are a common failure point.
          </li>
          <li>
            <strong>Damaged flashing and boots:</strong> Metal flashing around
            chimneys and vents can be dented or displaced. Rubber pipe boots
            crack under impact, creating guaranteed future leak points.
          </li>
        </ul>

        <h3>Table: hail damage signs at a glance</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-deep/20">
                <th className="py-2 pr-4 text-left font-semibold">Visual / Exterior Signs</th>
                <th className="py-2 text-left font-semibold">Interior Signs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-deep/10">
              <tr><td className="py-2 pr-4">Dented gutters and downspouts</td><td className="py-2">Ceiling stains (brown/yellow)</td></tr>
              <tr><td className="py-2 pr-4">Torn or dented window screens</td><td className="py-2">Pinpoints of daylight in attic</td></tr>
              <tr><td className="py-2 pr-4">Granule buildup at downspout outlets</td><td className="py-2">Damp or wet attic insulation</td></tr>
              <tr><td className="py-2 pr-4">Dings on fence, mailbox, or A/C unit</td><td className="py-2">Musty smell in upper-floor closets</td></tr>
              <tr><td className="py-2 pr-4">Car body dents or cracked windshield</td><td className="py-2">Peeling paint on upper-story ceilings</td></tr>
            </tbody>
          </table>
        </div>

        <h2>What to do after a hailstorm hits your home</h2>
        <ol>
          <li>
            <strong>Stay safe and document the storm.</strong> Note the date,
            time, and approximate duration. Check local NWS reports to confirm
            hail size and location. Take time-stamped photos of any visible
            damage to gutters, screens, siding, and vehicles immediately after
            the storm passes.
          </li>
          <li>
            <strong>Do not climb on your roof.</strong> Hail-damaged shingles are
            slippery, and broken granules hide cracked areas. Leave the roof
            inspection to a licensed, insured professional.
          </li>
          <li>
            <strong>Schedule a professional inspection.</strong> Call a licensed
            Oklahoma roofing contractor for a free inspection. At Redline, we
            provide a written inspection report with drone imagery within 24
            hours.
          </li>
          <li>
            <strong>Make temporary repairs if needed.</strong> If you have an
            active leak, place a bucket or tarp. Document the temporary repair
            with photos. Your insurance policy covers reasonable temporary
            repairs to prevent further damage.
          </li>
          <li>
            <strong>Do not sign anything with a door-knocker.</strong> Within
            hours of a major hail event, storm chasers flood into Oklahoma
            neighborhoods. Take their card if you want, but do not sign a
            contract at the door.
          </li>
        </ol>

        <h2>How to file an insurance claim for hail damage</h2>
        <p>
          Call your insurance carrier or file online as soon as you have
          documentation of damage. Provide the date of the storm, a description
          of the damage, and your inspection report if available. Your carrier
          will assign a claim number and schedule an adjuster visit — typically
          within 7 to 14 days of filing.
        </p>
        <p>
          When the adjuster arrives, have your roofer present. Your adjuster
          works for the insurance company. Having your roofer on the roof with
          the adjuster ensures all damage is documented, all line items are
          captured in the Xactimate estimate, and nothing is missed. On
          Redline-supplemented claims, the average final settlement is 27% higher
          than the insurer&apos;s initial estimate.
        </p>

        <h2>How long do you have to file?</h2>
        <p>
          Under Oklahoma law (36 O.S. &sect; 1250.5), your homeowners policy
          must allow at least 12 months from the date of the storm to file a hail
          damage claim. Some policies allow up to 24 months. However, waiting
          reduces the strength of your claim — document everything and file
          promptly. The statute also prohibits carriers from requiring notice of
          loss in fewer than 90 days, giving you a minimum window even under the
          tightest policy language.
        </p>

        <h2>How to avoid storm chasers</h2>
        <p>
          Within hours of a major hail event, out-of-state roofing crews flood
          into Oklahoma. They knock on doors, offer aggressive deals, and
          pressure homeowners to sign contracts on the spot. Protect yourself
          with these checks:
        </p>
        <ul>
          <li>
            <strong>Verify Oklahoma CIB registration.</strong> Every roofing
            contractor operating in Oklahoma must register with the Construction
            Industries Board. Ask for the number and verify it at{' '}
            <a
              href="https://cib.ok.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper underline hover:text-copper-dk"
            >
              cib.ok.gov
            </a>
            .
          </li>
          <li>
            <strong>Check the license plates.</strong> If the truck has
            out-of-state plates, ask why they are working in Oklahoma.
          </li>
          <li>
            <strong>Demand a physical local address.</strong> A P.O. box is not
            an address. A real local roofer has a physical office you can visit.
          </li>
          <li>
            <strong>Refuse deductible waivers.</strong> Waiving your deductible
            is insurance fraud under Oklahoma law. Any roofer who offers this is
            breaking the law.
          </li>
          <li>
            <strong>Reject same-day signing pressure.</strong> Legitimate
            contractors give you time to compare estimates and check references.
          </li>
        </ul>

        <h2>The bottom line</h2>
        <p>
          Oklahoma hail is not going away. Your best defense is a
          well-maintained roof, a prompt post-storm inspection, a properly
          documented insurance claim, and a licensed local contractor who does
          the work right. If you are reading this after a storm, call us. We will
          inspect your roof for free, give you an honest assessment, and if there
          is no damage, we will tell you that too. That is how we have built
          trust in the OKC metro since 2007.
        </p>
      </>
    ),
    faqs: [
      {
        question: 'How do I know if my roof has hail damage?',
        answer:
          'Look for dented gutters, damaged window screens, granule deposits at downspout outlets, and dings on painted outdoor surfaces. Interior signs include ceiling stains, attic daylight, and damp insulation. Schedule a free drone inspection for a definitive assessment.',
      },
      {
        question: 'How long do I have to file a hail damage claim in Oklahoma?',
        answer:
          'Under Oklahoma law (36 O.S. Section 1250.5), your policy must allow at least 12 months and may allow up to 24 months from the date of the storm. File promptly for the strongest claim.',
      },
      {
        question: 'Should I let a door-knocking roofer inspect my roof after a storm?',
        answer:
          'Exercise extreme caution. Verify their Oklahoma CIB registration number, check for out-of-state plates, ask for a physical local address, and never sign anything the same day. Use this article\'s checklist to separate legitimate contractors from storm chasers.',
      },
      {
        question: 'Will my insurance cover the full cost of hail damage repair?',
        answer:
          'If you have an RCV (Replacement Cost Value) policy, your carrier covers the full replacement cost minus your deductible. If you have an ACV (Actual Cash Value) policy, you receive only the depreciated value. Check your declarations page to know which you have.',
      },
      {
        question: 'What size hail causes roof damage?',
        answer:
          'Hailstones one inch in diameter and larger can damage asphalt shingles. Stones 1.5 inches and above frequently crack shingles outright. Even smaller hail can dislodge protective granules over repeated storms, shortening your roof\'s lifespan.',
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════
     POST 2 — Roof Replacement Cost in OKC 2026
     ═══════════════════════════════════════════════════════ */
  'roof-replacement-cost-okc-2026': {
    title:
      'How Much Does a Roof Replacement Cost in Oklahoma City in 2026? (Real Numbers)',
    date: 'March 28, 2026',
    lastUpdated: 'April 15, 2026',
    author: 'Trey McAllister',
    description:
      'Itemized cost breakdown by material type, home size, and complexity with real OKC pricing data for 2026.',
    content: (
      <>
        <p>
          The short answer: most Oklahoma City homeowners pay between{' '}
          <strong>$10,000 and $18,000</strong> for a full asphalt shingle roof
          replacement on a standard 2,000 square foot home with a moderate pitch.
          But the real number depends on at least a dozen variables. This article
          breaks down every one of them with actual OKC pricing so you know
          exactly what to expect.
        </p>

        <h2>Average cost by material type</h2>
        <p>
          The following table shows typical total-installed costs for a standard
          24-square roof (approximately 2,400 square feet of roof area) on a
          single-story home with moderate complexity:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-deep/20">
                <th className="py-2 pr-4 text-left font-semibold">Material</th>
                <th className="py-2 pr-4 text-left font-semibold">Typical Range</th>
                <th className="py-2 text-left font-semibold">Example Products</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-deep/10">
              <tr>
                <td className="py-2 pr-4">3-Tab Shingles</td>
                <td className="py-2 pr-4">$8,000 &ndash; $12,000</td>
                <td className="py-2">GAF Royal Sovereign, OC Supreme</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Architectural Shingles</td>
                <td className="py-2 pr-4">$10,000 &ndash; $16,000</td>
                <td className="py-2">GAF Timberline HDZ, OC Duration</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Class 4 Impact-Resistant</td>
                <td className="py-2 pr-4">$12,000 &ndash; $20,000</td>
                <td className="py-2">GAF Timberline AS II, OC Duration FLEX</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Standing Seam Metal</td>
                <td className="py-2 pr-4">$18,000 &ndash; $35,000</td>
                <td className="py-2">Fabral, McElroy Metal</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Synthetic Tile / Slate</td>
                <td className="py-2 pr-4">$25,000 &ndash; $45,000</td>
                <td className="py-2">Brava Roof Tile, DaVinci Bellaforte</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>What factors affect your price</h2>
        <p>
          No two roofs are the same. Here are the variables that move the final
          number up or down:
        </p>
        <ul>
          <li>
            <strong>Square footage:</strong> Roofing is priced by the
            &ldquo;square&rdquo; (100 square feet). A 2,000 sq ft home typically
            has 22 to 28 squares of roof depending on pitch and overhangs.
            Larger homes cost more in both materials and labor.
          </li>
          <li>
            <strong>Slope / pitch:</strong> Steeper roofs require harnesses,
            scaffolding, and more labor hours. A walkable 4:12 pitch is the
            baseline. A 10:12 or 12:12 pitch adds 15 to 30 percent to labor
            costs.
          </li>
          <li>
            <strong>Complexity:</strong> Valleys, dormers, turrets, skylights,
            chimneys, and multiple roof planes increase flashing, cutting, and
            custom work. A simple gable roof is the least expensive. A
            multi-hip, multi-valley roof with a turret can cost 40 to 60 percent
            more for the same square footage.
          </li>
          <li>
            <strong>Decking condition:</strong> When the old shingles come off,
            we inspect every inch of the plywood or OSB decking. Rotted or
            water-damaged sections must be replaced at $75 to $150 per 4x8
            sheet. Most homes need zero to six sheets; a home with long-term
            leaks may need more.
          </li>
          <li>
            <strong>Number of layers:</strong> Oklahoma City prohibits overlays.
            The existing roof must be completely torn off. Homes with two layers
            of old shingles cost more to tear off and dispose of than homes with
            one layer.
          </li>
        </ul>

        <h2>Financing math example</h2>
        <p>
          If your roof replacement is not covered by insurance — due to age,
          wear, or an ACV-only policy — financing makes the investment
          manageable. Here are two common scenarios for a $15,000 roof:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-deep/20">
                <th className="py-2 pr-4 text-left font-semibold">Option</th>
                <th className="py-2 pr-4 text-left font-semibold">Term</th>
                <th className="py-2 pr-4 text-left font-semibold">APR</th>
                <th className="py-2 text-left font-semibold">Monthly Payment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-deep/10">
              <tr>
                <td className="py-2 pr-4">Same-as-cash</td>
                <td className="py-2 pr-4">12 months</td>
                <td className="py-2 pr-4">0%</td>
                <td className="py-2">$1,250/mo</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Low fixed rate</td>
                <td className="py-2 pr-4">60 months</td>
                <td className="py-2 pr-4">6.99%</td>
                <td className="py-2">$297/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We offer financing through Wisetack, Service Finance Company, and
          Synchrony HOME. Pre-qualification is a soft credit pull with no impact
          to your score.
        </p>

        <h2>The Redline difference</h2>
        <p>
          Every Redline roof replacement includes the permit ($94.50 in OKC),
          the mandatory city inspection, a full magnetic sweep of your yard and
          driveway, and our transferable lifetime workmanship warranty. There are
          no hidden fees, no surprise line items, and no payment due until the
          city inspector signs off.
        </p>
        <p>
          We provide a free, itemized written estimate after an in-person drone
          inspection. No guesswork, no vague ranges, no obligation.
        </p>
      </>
    ),
    faqs: [
      {
        question: 'How much does a roof replacement cost in OKC in 2026?',
        answer:
          'Most homeowners pay $10,000 to $18,000 for standard architectural shingles on a 2,000 sq ft home. Class 4 impact-resistant shingles add $2,000 to $5,000. Metal and synthetic tile range from $18,000 to $45,000.',
      },
      {
        question: 'Does insurance cover roof replacement?',
        answer:
          'If your roof was damaged by hail or wind, most RCV policies cover the full replacement cost minus your deductible. We handle claim documentation, adjuster meetings, and supplements to maximize your settlement.',
      },
      {
        question: 'Why do roofing estimates vary so much between contractors?',
        answer:
          'Differences in shingle tier, underlayment quality, whether permits are included, decking replacement allowances, and warranty coverage all affect the price. Always compare itemized estimates line by line, not just bottom-line totals.',
      },
      {
        question: 'Can I finance a roof replacement?',
        answer:
          'Yes. We offer 0% APR same-as-cash for 12 to 18 months, and fixed rates from 6.99% for up to 120 months through Wisetack, Service Finance Company, and Synchrony HOME. Pre-qualification does not affect your credit score.',
      },
      {
        question: 'How long does a roof replacement take?',
        answer:
          'Most residential re-roofs are completed in a single day. Larger or multi-story homes may extend into a second day. We schedule around weather forecasts so your home is never left exposed overnight.',
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════
     POST 3 — Class 4 Impact-Resistant Shingles
     ═══════════════════════════════════════════════════════ */
  'class-4-impact-resistant-shingles-insurance-discount': {
    title:
      'Class 4 Impact-Resistant Shingles in Oklahoma: The Insurance Discount Math That Pays Off',
    date: 'March 10, 2026',
    lastUpdated: 'April 10, 2026',
    author: 'Trey McAllister',
    description:
      'How Class 4 shingles save Oklahoma homeowners thousands through insurance premium discounts, fewer repairs, and longer roof life.',
    content: (
      <>
        <p>
          Oklahoma City is the most hail-impacted metro in the country, which
          means your roof takes a beating that roofs in most states never
          experience. Standard architectural shingles that would last 25 years
          in Ohio are routinely replaced in under 10 years here because of hail
          damage. Class 4 impact-resistant shingles change that equation — and
          every major insurance carrier in Oklahoma rewards you financially for
          installing them.
        </p>

        <h2>What are Class 4 shingles?</h2>
        <p>
          Class 4 is the highest impact-resistance rating under UL 2218, the
          industry standard test for shingle durability. To earn a Class 4
          rating, a shingle must withstand a 2-inch steel ball dropped from 20
          feet onto the same spot twice without cracking. Standard architectural
          shingles are not impact-rated at all — they crack under the same test
          with a 1.25-inch ball.
        </p>
        <p>
          Class 4 shingles achieve their toughness through SBS
          (styrene-butadiene-styrene) polymer-modified asphalt. This rubberized
          compound flexes on impact instead of cracking, absorbs energy without
          fracturing the fiberglass mat, and also improves cold-weather
          flexibility and resistance to thermal cycling — both relevant in
          Oklahoma&apos;s extreme temperature swings.
        </p>

        <h2>Insurance discount comparison by carrier</h2>
        <p>
          Every major carrier writing homeowners policies in Oklahoma offers a
          premium discount for Class 4 shingles. The discounts are significant:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-deep/20">
                <th className="py-2 pr-4 text-left font-semibold">Carrier</th>
                <th className="py-2 pr-4 text-left font-semibold">Typical Discount</th>
                <th className="py-2 text-left font-semibold">Annual Savings on $2,000 Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-deep/10">
              <tr><td className="py-2 pr-4">State Farm</td><td className="py-2 pr-4">20 &ndash; 30%</td><td className="py-2">$400 &ndash; $600</td></tr>
              <tr><td className="py-2 pr-4">USAA</td><td className="py-2 pr-4">Up to 20%</td><td className="py-2">Up to $400</td></tr>
              <tr><td className="py-2 pr-4">Allstate</td><td className="py-2 pr-4">10 &ndash; 15%</td><td className="py-2">$200 &ndash; $300</td></tr>
              <tr><td className="py-2 pr-4">Farmers</td><td className="py-2 pr-4">10 &ndash; 15%</td><td className="py-2">$200 &ndash; $300</td></tr>
              <tr><td className="py-2 pr-4">Oklahoma Farm Bureau</td><td className="py-2 pr-4">10 &ndash; 15%</td><td className="py-2">$200 &ndash; $300</td></tr>
              <tr><td className="py-2 pr-4">Liberty Mutual</td><td className="py-2 pr-4">5 &ndash; 10%</td><td className="py-2">$100 &ndash; $200</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-deep/60 italic">
          Discounts vary by policy, coverage level, and location. Contact your
          carrier for your specific discount.
        </p>

        <h2>Payback period calculation</h2>
        <p>
          The upgrade from standard architectural shingles to Class 4 typically
          costs $2,000 to $5,000 more depending on roof size and the product
          selected. Here is the payback math for a typical OKC scenario:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-deep/20">
                <th className="py-2 pr-4 text-left font-semibold">Item</th>
                <th className="py-2 text-left font-semibold">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-deep/10">
              <tr><td className="py-2 pr-4">Class 4 upgrade cost</td><td className="py-2">$4,000</td></tr>
              <tr><td className="py-2 pr-4">Annual premium</td><td className="py-2">$2,000</td></tr>
              <tr><td className="py-2 pr-4">Carrier discount (20%)</td><td className="py-2">$400 per year</td></tr>
              <tr><td className="py-2 pr-4">Simple payback period</td><td className="py-2">10 years</td></tr>
              <tr><td className="py-2 pr-4">20-year net savings (discount alone)</td><td className="py-2">$4,000</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          But simple payback understates the real return. Class 4 shingles also
          mean fewer hail damage repairs, fewer insurance claims (which keeps
          your premiums from rising), fewer deductible payments, and a longer
          roof lifespan. When you factor in one avoided claim with a $2,500
          deductible, the real payback drops to 3 to 5 years. With a 30% State
          Farm discount, the math is even more favorable.
        </p>

        <h2>Best Class 4 shingle brands for OKC</h2>
        <p>
          As a GAF Master Elite, Owens Corning Platinum Preferred, CertainTeed
          SELECT ShingleMaster, and Malarkey Emerald Premium contractor, we
          install the top-tier Class 4 products from all four major
          manufacturers:
        </p>
        <ul>
          <li>
            <strong>GAF Timberline HDZ IR:</strong> SBS-modified, Class 4,
            StainGuard Plus algae protection. Available in 15 colors. Eligible
            for the GAF Golden Pledge lifetime warranty.
          </li>
          <li>
            <strong>Owens Corning Duration STORM:</strong> SBS-modified, Class
            4, SureNail technology for 130 mph wind rating. Available in 12
            colors. Eligible for the OC Platinum Protection warranty.
          </li>
          <li>
            <strong>CertainTeed Landmark IR:</strong> SBS-modified, Class 4,
            StreakFighter algae resistance. Available in 14 colors. Eligible for
            the CertainTeed SureStart Plus 5-Star warranty.
          </li>
          <li>
            <strong>Malarkey Vista AR:</strong> SBS-modified, Class 4,
            Scotchgard protector. NEX polymer-modified technology. Available in
            10 colors. Backed by Malarkey&apos;s enhanced warranty program.
          </li>
        </ul>
        <p>
          All four products carry the same Class 4 UL 2218 rating and look like
          premium architectural shingles. Your Redline estimator will bring
          samples so you can compare colors and profiles against your home.
        </p>

        <h2>The bottom line</h2>
        <p>
          In the most hail-impacted metro in America, Class 4 impact-resistant
          shingles are not a luxury — they are the smartest financial decision
          you can make for your roof. The insurance discounts alone pay for the
          upgrade in 3 to 10 years depending on your carrier. The reduced
          damage, fewer claims, and longer lifespan make the total value even
          greater. Ask your Redline estimator for a Class 4 quote alongside your
          standard estimate — we always show you both options with real numbers.
        </p>
      </>
    ),
    faqs: [
      {
        question: 'What are Class 4 impact-resistant shingles?',
        answer:
          'Class 4 is the highest impact-resistance rating under UL 2218. These shingles use SBS polymer-modified asphalt that flexes on impact instead of cracking, withstanding a 2-inch steel ball dropped from 20 feet without damage.',
      },
      {
        question: 'How much do Class 4 shingles save on insurance in Oklahoma?',
        answer:
          'Discounts range from 5% to 30% depending on your carrier. State Farm offers up to 30%, USAA up to 20%. On a $2,000 annual premium with a 20% discount, you save $400 per year.',
      },
      {
        question: 'How long until Class 4 shingles pay for themselves?',
        answer:
          'The simple payback from insurance savings alone is 3 to 10 years depending on the upgrade cost and your carrier\'s discount. When you factor in avoided repairs, deductible payments, and longer roof life, the real payback is even faster.',
      },
      {
        question: 'Do Class 4 shingles look different from regular shingles?',
        answer:
          'No. Class 4 shingles from GAF, Owens Corning, CertainTeed, and Malarkey look identical to premium architectural shingles. The impact resistance comes from the SBS-modified asphalt formulation, not from visual design changes.',
      },
      {
        question: 'Can I get Class 4 shingles if my insurance claim only covers standard?',
        answer:
          'Yes. Your insurance covers the cost of like-kind replacement. You can pay the difference to upgrade to Class 4 out of pocket. The upgrade cost is typically $2,000 to $5,000, and the insurance savings often offset this within a few years.',
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════
     POST 4 — ACV vs RCV
     ═══════════════════════════════════════════════════════ */
  'acv-vs-rcv-insurance-policy': {
    title:
      'ACV vs RCV: The Single Most Important Page in Your Insurance Policy',
    date: 'February 20, 2026',
    lastUpdated: 'March 20, 2026',
    author: 'Trey McAllister',
    description:
      'Plain-English explanation of Actual Cash Value vs Replacement Cost Value and why it matters for your roof claim.',
    content: (
      <>
        <p>
          Somewhere in your homeowners insurance policy — usually on page 3 or 4
          of your declarations — there is a single line that determines whether
          your insurance will pay $8,000 or $18,000 for the same hail-damaged
          roof. That line tells you whether your roof coverage is{' '}
          <strong>RCV (Replacement Cost Value)</strong> or{' '}
          <strong>ACV (Actual Cash Value)</strong>.
        </p>
        <p>
          Most Oklahoma homeowners have never read their declarations page. Most
          do not know where to find it. And yet this one distinction is the
          single biggest financial factor in any roof insurance claim.
        </p>

        <h2>What is RCV (Replacement Cost Value)?</h2>
        <p>
          RCV means your insurance pays the full cost to replace your roof at
          today&apos;s prices, minus your deductible. It does not matter how old
          your roof is, how depreciated it is, or what it cost when it was
          installed. If it costs $18,000 to replace your roof today and your
          deductible is $1,000, your carrier owes you $17,000.
        </p>
        <p>
          However, RCV policies pay in two installments. First, the carrier pays
          you the depreciated value (the ACV portion). Then, once the roof is
          replaced and you submit the final invoice showing the work was
          completed, the carrier releases the remaining amount — called
          &ldquo;recoverable depreciation.&rdquo; Most Oklahoma policies require
          the work to be completed within 180 days of the date of loss to
          recover the depreciation.
        </p>

        <h2>What is ACV (Actual Cash Value)?</h2>
        <p>
          ACV means your insurance pays only the depreciated value of your roof
          — what it is worth today given its age and condition — minus your
          deductible. There is no second payment. There is no recoverable
          depreciation. What you get is what you get.
        </p>
        <p>
          ACV policies have become more common in Oklahoma as carriers reduce
          exposure in the nation&apos;s number-one hail market. Some carriers
          now default new policies to ACV roof coverage, and others add ACV
          endorsements to existing RCV policies at renewal — often without
          clearly communicating the change.
        </p>

        <h2>How depreciation works: a real example</h2>
        <p>
          Here is what happens to a 15-year-old roof with a 25-year expected
          lifespan under each policy type:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-deep/20">
                <th className="py-2 pr-4 text-left font-semibold">Item</th>
                <th className="py-2 text-left font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-deep/10">
              <tr><td className="py-2 pr-4">Replacement cost (RCV)</td><td className="py-2">$18,000</td></tr>
              <tr><td className="py-2 pr-4">Depreciation (15/25 years = 60%)</td><td className="py-2">$10,800</td></tr>
              <tr><td className="py-2 pr-4">Actual Cash Value (ACV)</td><td className="py-2">$7,200</td></tr>
              <tr><td className="py-2 pr-4">Deductible</td><td className="py-2">$1,000</td></tr>
              <tr className="font-semibold"><td className="py-2 pr-4">RCV policy payout (total after completion)</td><td className="py-2">$17,000</td></tr>
              <tr className="font-semibold"><td className="py-2 pr-4">ACV policy payout (total, final)</td><td className="py-2">$6,200</td></tr>
              <tr className="font-semibold text-copper"><td className="py-2 pr-4">Difference (your out-of-pocket gap with ACV)</td><td className="py-2">$10,800</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          On the same roof with the same damage, the difference between RCV and
          ACV coverage is <strong>$10,800 out of your pocket</strong>. That is
          why this single page in your policy matters more than almost anything
          else.
        </p>

        <h2>How to check your policy</h2>
        <p>
          Pull out your policy declarations page — the summary document your
          carrier sends when you renew each year. Look for one of these phrases:
        </p>
        <ul>
          <li>
            <strong>&ldquo;Dwelling coverage: Replacement Cost&rdquo;</strong> —
            you have RCV. This is the better coverage.
          </li>
          <li>
            <strong>&ldquo;Dwelling coverage: Actual Cash Value&rdquo;</strong>{' '}
            — you have ACV.
          </li>
          <li>
            <strong>
              &ldquo;Roof Surfaces Actual Cash Value Endorsement&rdquo;
            </strong>{' '}
            or similar — your policy is RCV for everything except the roof,
            which is ACV. This hybrid approach is increasingly common in
            Oklahoma.
          </li>
        </ul>
        <p>
          If you cannot find it or the language is confusing, bring your
          declarations page to any Redline inspection. We read these documents
          every day and can tell you in five minutes what you have.
        </p>

        <h2>What to do if you have an ACV-only policy</h2>
        <ol>
          <li>
            <strong>Shop your policy.</strong> Some carriers still offer RCV
            roof coverage in Oklahoma. Get quotes from multiple carriers before
            your next renewal. You may find significantly better coverage at a
            competitive premium.
          </li>
          <li>
            <strong>Consider a proactive replacement.</strong> If your roof is
            15 or more years old and you have ACV coverage, replacing it before
            storm damage occurs means you control the timeline, the material
            choice, and the financing. You avoid the gap between a depreciated
            payout and the actual cost.
          </li>
          <li>
            <strong>Upgrade to Class 4 shingles.</strong> Some carriers will
            switch you back to RCV — or offer a better rate — if you install
            Class 4 impact-resistant shingles. Ask your agent about this before
            your next renewal.
          </li>
          <li>
            <strong>Use financing to bridge the gap.</strong> If you have ACV
            and your claim does not cover the full cost, our financing options
            through Wisetack, Service Finance Company, and Synchrony HOME can
            cover the difference with 0% APR same-as-cash or low fixed rates.
          </li>
        </ol>

        <h2>The Redline approach</h2>
        <p>
          We read your declarations page at the beginning of every insurance
          claim project. If you have RCV, we manage the two-payment process with
          your carrier so you never miss the depreciation recovery deadline. If
          you have ACV, we give you an honest assessment of the gap between your
          payout and the replacement cost, and we present financing options to
          cover the difference. Either way, you know exactly where you stand
          before we lift a single shingle.
        </p>
      </>
    ),
    faqs: [
      {
        question: 'What is the difference between ACV and RCV?',
        answer:
          'RCV (Replacement Cost Value) pays the full cost to replace your roof at today\'s prices minus your deductible. ACV (Actual Cash Value) pays only the depreciated value minus your deductible. On an older roof, the difference can be $10,000 or more.',
      },
      {
        question: 'How do I find out if I have ACV or RCV?',
        answer:
          'Check your policy declarations page — the summary your carrier sends at renewal. Look for "Dwelling coverage: Replacement Cost" (RCV) or "Actual Cash Value" (ACV). Bring it to any Redline inspection and we can read it for you in five minutes.',
      },
      {
        question: 'Can I switch from ACV to RCV?',
        answer:
          'Sometimes. Some carriers will offer RCV coverage if you install Class 4 impact-resistant shingles or if your roof is under a certain age. You may also find RCV coverage by shopping your policy with competing carriers.',
      },
      {
        question: 'What is recoverable depreciation?',
        answer:
          'On an RCV policy, the carrier first pays the depreciated value, then releases the remaining amount (recoverable depreciation) once the roof replacement is complete and invoiced. You must complete the work within the policy deadline — typically 180 days — to recover it.',
      },
      {
        question: 'Why are more Oklahoma policies switching to ACV?',
        answer:
          'Oklahoma\'s hail frequency makes it one of the most expensive markets for homeowners insurance. Carriers reduce their exposure by switching roof coverage from RCV to ACV, especially on roofs over 10 years old. Check your policy at every renewal to catch any changes.',
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════
     POST 5 — How to Spot Storm Chasers
     ═══════════════════════════════════════════════════════ */
  'how-to-spot-storm-chasers-okc': {
    title:
      'How to Spot a Storm Chaser in Oklahoma City (and What Real Local Roofers Do Differently)',
    date: 'February 5, 2026',
    lastUpdated: 'April 1, 2026',
    author: 'Trey McAllister',
    description:
      'Red flags to watch for and green flags that indicate a legitimate local roofing contractor in the OKC metro.',
    content: (
      <>
        <p>
          Within hours of a major hail event in the OKC metro, out-of-state
          roofing crews flood into Oklahoma neighborhoods. They knock on doors,
          offer aggressive deals, and pressure homeowners to sign contracts on
          the spot. These are storm chasers — contractors who follow severe
          weather from city to city, sign as many contracts as possible,
          subcontract the work, collect payment, and move on.
        </p>
        <p>
          Storm chasers are not always illegal, but they create serious problems.
          They will not be here in two years when your roof leaks. Their
          manufacturer warranties are often invalid because the installer is not
          a certified contractor. Their workmanship warranty is worthless if the
          company has relocated to another state. And some engage in outright
          fraud — waiving deductibles, inflating claims, or performing
          substandard work.
        </p>

        <h2>Red flags: how to identify a storm chaser</h2>
        <p>
          Use this checklist after any hail or wind event. If a roofer triggers
          two or more of these flags, proceed with extreme caution:
        </p>
        <ul>
          <li>
            <strong>No Oklahoma CIB number:</strong> Every roofing contractor
            operating in Oklahoma must register with the Construction Industries
            Board. The number should be on the truck, the business card, and the
            estimate. If they cannot produce it, do not let them on your roof.
          </li>
          <li>
            <strong>Out-of-state license plates:</strong> Walk to the truck and
            check. Texas, Louisiana, Kansas, Arkansas — if the plates are not
            Oklahoma, ask why.
          </li>
          <li>
            <strong>Same-day signing pressure:</strong> &ldquo;We have a crew
            available right now&rdquo; and &ldquo;prices go up next week&rdquo;
            are pressure tactics, not facts. Legitimate contractors give you time
            to compare.
          </li>
          <li>
            <strong>Deductible waiver offer:</strong> This is insurance fraud
            under Oklahoma law. The contractor inflates the claim to absorb your
            deductible, submitting a fraudulent invoice. If discovered, your
            claim can be denied and your policy canceled.
          </li>
          <li>
            <strong>Cash-only or large upfront payment demands:</strong> Never
            pay more than 10 to 20 percent before work begins. A request for 50%
            up front is a major warning sign.
          </li>
          <li>
            <strong>No physical address:</strong> A P.O. box or &ldquo;we are
            setting up an office&rdquo; is not an address. A real local roofer
            has a facility you can visit.
          </li>
          <li>
            <strong>Too-good-to-be-true pricing:</strong> If the quote is
            significantly lower than every other estimate, ask what is being left
            out. Common shortcuts include skipping permits, using cheaper
            underlayment, omitting ice-and-water shield, and not replacing
            damaged flashing.
          </li>
        </ul>

        <h2>Green flags: what real local roofers do differently</h2>
        <p>
          Here is what you should expect from a legitimate, established Oklahoma
          roofing contractor:
        </p>
        <ul>
          <li>
            <strong>CIB number displayed on every truck and document.</strong>{' '}
            Ours is {SITE.cibLicense}. Look it up at{' '}
            <a
              href="https://cib.ok.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper underline hover:text-copper-dk"
            >
              cib.ok.gov
            </a>
            .
          </li>
          <li>
            <strong>A physical local address you can visit.</strong> Our office
            is at {SITE.address.street}, {SITE.address.city}, {SITE.address.state}{' '}
            {SITE.address.zip}. It is on every truck, card, and estimate.
          </li>
          <li>
            <strong>BBB accreditation with a verifiable track record.</strong> We
            have been A+ rated since 2008 with zero complaints on file.
          </li>
          <li>
            <strong>Manufacturer certifications.</strong> GAF Master Elite, Owens
            Corning Platinum Preferred, CertainTeed SELECT ShingleMaster — these
            certifications unlock the top-tier manufacturer warranties that
            storm chasers cannot offer.
          </li>
          <li>
            <strong>Written, itemized estimate.</strong> Not a verbal quote, not
            a single number on a napkin. A professional line-by-line estimate in
            Xactimate format matching your insurer&apos;s pricing software.
          </li>
          <li>
            <strong>No same-day signing pressure.</strong> Take the estimate,
            compare it, call us when you are ready. We will still be here.
          </li>
        </ul>

        <h2>How to verify a roofer&apos;s license</h2>
        <p>
          The Oklahoma Construction Industries Board maintains a public
          contractor lookup. Visit{' '}
          <a
            href="https://cib.ok.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-copper underline hover:text-copper-dk"
          >
            cib.ok.gov
          </a>{' '}
          and search by company name or registration number. The lookup shows
          the contractor&apos;s registration status, type, and any disciplinary
          actions. If a contractor is not listed, they are not legally
          registered to perform roofing work in Oklahoma.
        </p>
        <p>
          You can also call the CIB directly at (405) 521-6550 to verify a
          contractor&apos;s registration status by phone.
        </p>

        <h2>What to do if you have already signed with a storm chaser</h2>
        <p>
          Oklahoma&apos;s Home Repair Fraud Prevention Act gives you the right to
          cancel a home repair contract within three business days of signing. If
          you signed under pressure and have second thoughts, send written
          notice of cancellation to the contractor within 72 hours. This is
          your legal right of rescission and the contractor must honor it.
        </p>
        <p>
          If the contractor has already begun work, contact an attorney and your
          insurance company immediately. You can also report unlicensed or
          fraudulent contractors to:
        </p>
        <ul>
          <li>Oklahoma Construction Industries Board: (405) 521-6550</li>
          <li>
            Oklahoma Attorney General Consumer Protection Unit: (405) 521-2029
          </li>
          <li>Better Business Bureau of Central Oklahoma: bbb.org</li>
        </ul>

        <h2>The bottom line</h2>
        <p>
          Protecting Oklahoma homeowners from storm-chaser fraud is personal for
          us. We have been in OKC since 2007, we employ 41 W-2 workers — no
          subcontractors — and we will still be here in 2037 to honor every
          warranty we write. If you are unsure about a contractor who has
          approached you, call us at {SITE.phone}. We will help you verify their
          credentials — no obligation, no charge.
        </p>
      </>
    ),
    faqs: [
      {
        question: 'What is a storm chaser in roofing?',
        answer:
          'A storm chaser is an out-of-state roofing contractor who follows severe weather events, soliciting work in the aftermath of hail and wind storms. They sign contracts, subcontract the work to the lowest bidder, collect payment, and move on — leaving homeowners without local warranty support.',
      },
      {
        question: 'Is it illegal to waive my roofing deductible in Oklahoma?',
        answer:
          'Yes. Waiving or absorbing your deductible involves inflating the insurance claim to cover the deductible amount, which is insurance fraud under Oklahoma law. Any roofer who offers this is breaking the law and putting your claim at risk.',
      },
      {
        question: 'How do I verify a roofing contractor\'s license in Oklahoma?',
        answer:
          'Visit cib.ok.gov and search by company name or registration number. The lookup shows registration status, type, and any disciplinary actions. You can also call the CIB at (405) 521-6550 to verify by phone.',
      },
      {
        question: 'Can I cancel a roofing contract I signed under pressure?',
        answer:
          'Yes. Oklahoma\'s Home Repair Fraud Prevention Act gives you three business days to cancel a home repair contract after signing. Send written notice of cancellation to the contractor within 72 hours.',
      },
      {
        question: 'What should a legitimate roofing estimate include?',
        answer:
          'A professional estimate should be written and itemized, listing every material, labor component, permit fee, and warranty detail. It should include the contractor\'s CIB number, physical address, insurance information, and the specific products being installed.',
      },
    ],
  },
};

/* ────────────────────────────────────────────────────────
   Static params + metadata
   ──────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.description,
  };
}

/* ────────────────────────────────────────────────────────
   Page component
   ──────────────────────────────────────────────────────── */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const breadcrumbItems = [
    { name: 'Blog', href: '/blog' },
    { name: post.title, href: `/blog/${slug}` },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.lastUpdated,
        author: {
          '@type': 'Person',
          name: post.author,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE.name,
          url: SITE.url,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${SITE.url}/blog/${slug}`,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
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
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${SITE.url}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `${SITE.url}/blog/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Jsonld data={jsonLd} />

      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />

          <article className="mt-4">
            <h1 className="font-display text-3xl font-bold tracking-tight text-slate-deep sm:text-4xl">
              {post.title}
            </h1>

            <p className="mt-3 text-sm text-slate-deep/60">
              Published {post.date} &middot; Last updated {post.lastUpdated}{' '}
              &middot; By {post.author}
            </p>

            <div className="prose-redline mt-8 space-y-4 text-slate-deep/90 leading-relaxed [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-deep [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-deep [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ol]:ml-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-slate-deep [&_table]:mt-4 [&_table]:mb-4 [&_a]:text-copper [&_a]:underline hover:[&_a]:text-copper-dk">
              {post.content}
            </div>
          </article>

          {/* FAQ section */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-slate-deep">
              Frequently asked questions
            </h2>
            <div className="mt-6">
              <FaqAccordion items={post.faqs} />
            </div>
          </div>

          {/* Lead form */}
          <div className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold text-slate-deep">
              Get your free roof inspection
            </h2>
            <LeadForm source={`blog-${slug}`} />
          </div>
        </div>
      </section>
    </>
  );
}
