export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastUpdated: string;
  author: string;
  content: string;
  faqs: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  // ───────────────────────────────────────────────
  // POST 1: Oklahoma Hail Damage Guide 2026 (~1500 words)
  // ───────────────────────────────────────────────
  {
    slug: 'oklahoma-hail-damage-guide-2026',
    title: 'The 2026 Oklahoma Hail Damage Guide: How to Spot Damage, File a Claim, and Avoid Storm Chasers',
    description: 'A comprehensive guide for Oklahoma homeowners on identifying hail damage, navigating the insurance claims process, and protecting yourself from storm-chaser scams after severe weather.',
    date: '2026-03-15',
    lastUpdated: '2026-04-20',
    author: 'Travis "Trey" McAllister III',
    content: `<h2>Why Oklahoma Is Ground Zero for Hail Damage</h2>
<p>Oklahoma City ranks as the most hail-impacted metro area in the United States by frequency. The National Weather Service recorded over 300 significant hail events (1 inch diameter or larger) across the OKC metro between 2015 and 2025. That is roughly 30 major hail events per year — almost one every 12 days during the March-through-September severe weather season.</p>
<p>The reason is geography. Oklahoma sits at the collision point of warm, moist air from the Gulf of Mexico, dry air from the high desert, and cold air from the Rockies. When these air masses collide — especially along the dryline that typically sets up from Lawton through western OKC — the resulting supercell thunderstorms produce some of the largest hailstones on Earth.</p>
<p>For homeowners, this means your roof is not a set-it-and-forget-it investment. It is a wear item that takes repeated impacts and must be inspected after every significant storm.</p>

<h2>How to Spot Hail Damage on Your Roof</h2>
<h3>What You Can See from the Ground</h3>
<ul>
<li><strong>Dented gutters and downspouts:</strong> Aluminum gutters dent easily and are the first visible sign of hail impact. Walk the perimeter of your home and look for dimples, dings, and creases.</li>
<li><strong>Damaged window screens:</strong> Hail that hits your roof also hits your window screens. Torn or dented screens are a reliable ground-level indicator.</li>
<li><strong>Dings on painted surfaces:</strong> Check your fence, mailbox, outdoor A/C unit, and car. Hail damage to these surfaces confirms the storm dropped stones large enough to damage shingles.</li>
<li><strong>Granule accumulation:</strong> After a storm, check your gutter outlets and downspout splash blocks. A heavy deposit of black or dark gray granules means shingles are losing their protective surface layer.</li>
</ul>

<h3>What a Professional Inspector Looks For</h3>
<ul>
<li><strong>Hail bruises:</strong> A hail bruise is a soft, depressed area on an asphalt shingle where the impact cracked the fiberglass mat beneath the surface. Bruises are often invisible from the ground and can only be detected by touch or close-up inspection.</li>
<li><strong>Cracked shingles:</strong> Larger hailstones (1.5 inches and above) can crack shingles outright, exposing the underlayment or decking to water infiltration.</li>
<li><strong>Damaged flashing:</strong> Metal flashing around chimneys, vents, and valleys can be dented or displaced by hail, creating leak pathways that may not appear for months.</li>
<li><strong>Collar and boot damage:</strong> The rubber boots around plumbing vents and exhaust pipes are especially vulnerable to hail. A cracked boot is a guaranteed future leak.</li>
</ul>

<h3>Why Drone Inspections Matter</h3>
<p>At Redline, every inspection begins with a drone flight. Our DJI Matrice drones capture high-resolution imagery of every roof slope, allowing us to count individual hail impacts, measure damage patterns, and create a visual record that insurance adjusters trust. Drone imagery eliminates the guesswork and gives your adjuster the documentation they need to process your claim accurately.</p>

<h2>How to File a Hail Damage Insurance Claim in Oklahoma</h2>
<h3>Step 1: Document the Storm</h3>
<p>Note the date and approximate time of the storm. Check local NWS reports to confirm hail size and location. Take photos of any visible damage to your property — gutters, screens, siding, cars — immediately after the storm. This timestamp evidence establishes that the damage occurred during a specific weather event.</p>

<h3>Step 2: Schedule a Professional Inspection</h3>
<p>Do not climb on your roof. Call a licensed, insured Oklahoma roofing contractor for a free inspection. At Redline, we provide a written inspection report with drone imagery within 24 hours of the inspection. This report becomes the foundation of your insurance claim.</p>

<h3>Step 3: File the Claim with Your Insurance Carrier</h3>
<p>Call your carrier or file online. Provide the date of the storm, a description of the damage, and your inspection report if available. Your carrier will assign a claim number and schedule an adjuster visit. Under Oklahoma law (36 O.S. § 1250.5), your policy must allow at least 12 months from the date of the storm to file a claim.</p>

<h3>Step 4: Meet Your Adjuster with Your Roofer</h3>
<p>This is the most important step. Your insurance adjuster works for the insurance company — their job is to assess damage accurately, but they are also under pressure to manage costs. Having your roofer present ensures that all damage is documented, all line items are captured in the Xactimate estimate, and nothing is missed. On Redline-supplemented claims, the average final settlement is 27% higher than the insurer's first estimate.</p>

<h3>Step 5: Review Your Estimate and Choose Your Contractor</h3>
<p>Once your claim is approved, you will receive an estimate from your carrier. Compare it to your roofer's estimate line by line. If the carrier's estimate is lower, your roofer can file a supplement — additional documentation showing damage or line items the adjuster missed. You have the right to choose any licensed contractor regardless of who your insurance company recommends.</p>

<h3>Step 6: Understand ACV vs. RCV</h3>
<p>If you have an RCV (Replacement Cost Value) policy, your carrier will first pay the ACV (depreciated value) and then release the remaining "recoverable depreciation" once the work is complete and invoiced. This means you may receive two checks. If you have an ACV-only policy, you receive only the depreciated amount. Know which type you have before you start.</p>

<h2>How to Avoid Storm Chasers After a Hailstorm</h2>
<p>Within hours of a major hail event, out-of-state roofing crews flood into Oklahoma. They knock on doors, offer aggressive deals, and pressure homeowners to sign contracts on the spot. Here is how to protect yourself:</p>

<h3>Red Flags</h3>
<ul>
<li><strong>No Oklahoma CIB number:</strong> Every roofing contractor operating in Oklahoma must register with the Construction Industries Board. Ask for the number and verify it at <a href="https://cib.ok.gov">cib.ok.gov</a>.</li>
<li><strong>Out-of-state license plates:</strong> Check the truck. If the plates are from Texas, Louisiana, or anywhere else, ask why.</li>
<li><strong>P.O. box instead of physical address:</strong> A real local roofer has a physical office. Ask for the address and verify it exists.</li>
<li><strong>Offering to waive your deductible:</strong> This is insurance fraud under Oklahoma law. Any roofer who offers this is breaking the law and putting your claim at risk.</li>
<li><strong>Pressuring same-day signatures:</strong> Legitimate contractors give you time to compare estimates, check references, and make an informed decision. Door-knockers who insist you sign today are counting on urgency, not quality.</li>
<li><strong>Requesting large upfront payments:</strong> Never pay more than 10–20% of the project cost before work begins. Reputable contractors invoice on progress and completion, not promises.</li>
</ul>

<h3>What Real Local Roofers Do Differently</h3>
<ul>
<li>Display their CIB number on their trucks and marketing materials</li>
<li>Provide a physical local address you can visit</li>
<li>Carry verifiable $2 million+ general liability and workers' comp</li>
<li>Give you a written, itemized estimate — not a verbal ballpark</li>
<li>Never pressure you to sign the same day they knock</li>
<li>Will still be in Oklahoma in five years to honor their warranty</li>
</ul>

<h2>The Bottom Line</h2>
<p>Oklahoma hail is not going away. Your best defense is a well-maintained roof, a prompt post-storm inspection, a properly documented insurance claim, and a licensed local contractor who does the work right. If you are reading this after a storm, call us. We will inspect your roof for free, give you an honest assessment, and if there is no damage, we will tell you that too. That is how we have built trust in the OKC metro since 2007.</p>`,
    faqs: [
      {
        question: 'How do I know if my roof has hail damage?',
        answer: 'Look for dented gutters, damaged window screens, granule deposits at downspout outlets, and dings on painted outdoor surfaces. However, many hail impacts are invisible from the ground. Schedule a free drone inspection for a definitive assessment.',
      },
      {
        question: 'How long do I have to file a hail damage claim in Oklahoma?',
        answer: 'Under Oklahoma law (36 O.S. § 1250.5), your policy must allow at least 12 months and may allow up to 24 months from the date of the storm.',
      },
      {
        question: 'How do I avoid storm chasers after a hailstorm?',
        answer: 'Verify Oklahoma CIB registration, check for local physical address (not a P.O. box), refuse same-day contracts from door-knockers, and never let anyone offer to waive your deductible — it is insurance fraud in Oklahoma.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // POST 2: Roof Replacement Cost OKC 2026
  // ───────────────────────────────────────────────
  {
    slug: 'roof-replacement-cost-okc-2026',
    title: 'How Much Does a Roof Replacement Cost in Oklahoma City in 2026? (Real Numbers)',
    description: 'Actual itemized cost breakdowns for roof replacements in the OKC metro in 2026, including shingle tiers, labor, permits, and what insurance covers.',
    date: '2026-02-10',
    lastUpdated: '2026-04-15',
    author: 'Travis "Trey" McAllister III',
    content: `<h2>The Short Answer</h2>
<p>Most Oklahoma City homeowners pay between <strong>$10,000 and $18,000</strong> for a full asphalt shingle roof replacement on a standard 2,000 sq ft home with a moderate pitch (6:12 or less). That range covers tear-off of the old roof, new underlayment, standard architectural shingles, flashing, ridge vent, and cleanup. Class 4 impact-resistant shingles add $2,000–$5,000 to the total but often pay for themselves through insurance premium discounts.</p>
<p>But the real answer depends on at least a dozen variables — and that is what this article breaks down.</p>

<h2>What Drives the Cost of a Roof Replacement?</h2>

<h3>1. Roof Size (Square Footage)</h3>
<p>Roofing is priced by the "square" — a 10x10 area, or 100 square feet. A 2,000 sq ft home typically has a roof footprint of 22–28 squares depending on pitch and overhangs. Larger roofs cost more in materials and labor.</p>

<h3>2. Pitch (Steepness)</h3>
<p>Steeper roofs require more safety equipment, slower installation, and more labor hours. A 4:12 pitch is walkable; a 10:12 or 12:12 pitch requires harnesses, scaffolding, and specialized equipment. Steep-pitch roofs add 15–30% to labor costs.</p>

<h3>3. Complexity</h3>
<p>Valleys, dormers, turrets, skylights, chimneys, and multiple roof planes all increase the amount of flashing, cutting, and custom work required. A simple gable roof is the least expensive; a multi-hip, multi-valley roof with a turret can cost 40–60% more for the same square footage.</p>

<h3>4. Shingle Tier</h3>
<table>
<thead>
<tr><th>Shingle Tier</th><th>Material Cost per Square</th><th>Typical Total (24-sq roof)</th><th>Example Products</th></tr>
</thead>
<tbody>
<tr><td>Standard Architectural (25-yr)</td><td>$90–$120</td><td>$10,000–$14,000</td><td>GAF Timberline HDZ, OC Duration</td></tr>
<tr><td>Class 4 Impact-Resistant</td><td>$130–$180</td><td>$13,000–$18,000</td><td>GAF Timberline AS II, OC Duration FLEX</td></tr>
<tr><td>Designer / Premium</td><td>$200–$350</td><td>$18,000–$28,000</td><td>CertainTeed Grand Manor, GAF Camelot II</td></tr>
<tr><td>Synthetic Tile / Slate</td><td>$400–$700</td><td>$28,000–$50,000</td><td>Brava Roof Tile, DaVinci Bellaforte</td></tr>
<tr><td>Standing Seam Metal</td><td>$350–$600</td><td>$25,000–$45,000</td><td>Fabral, McElroy Metal</td></tr>
</tbody>
</table>

<h3>5. Decking Condition</h3>
<p>When the old shingles come off, we inspect every inch of the decking (plywood or OSB). If sections are rotted, water-damaged, or structurally compromised, they must be replaced. Decking replacement typically costs $75–$150 per sheet (4x8) installed. Most homes need 0–6 sheets replaced; a home with long-term leaks may need more.</p>

<h3>6. Underlayment</h3>
<p>Synthetic underlayment (like GAF FeltBuster or CertainTeed DiamondDeck) has largely replaced felt paper as the industry standard. Ice and water shield is required in valleys and around penetrations. Underlayment adds $500–$1,500 to the total depending on roof size and the amount of ice-and-water coverage.</p>

<h3>7. Ventilation</h3>
<p>Proper attic ventilation is required by building code and by every major shingle manufacturer's warranty. If your existing ventilation is inadequate — common in pre-1980 OKC homes — we will add ridge vent, soffit intake, or powered ventilation. Ventilation upgrades typically add $300–$800.</p>

<h3>8. Permits and Inspections</h3>
<p>The City of Oklahoma City requires a permit ($94.50) for any reroof over 500 sq ft. The permit includes a mandatory final inspection. Our price always includes the permit fee. Roofers who skip the permit are putting your insurance coverage at risk.</p>

<h3>9. Tear-Off and Disposal</h3>
<p>Oklahoma City prohibits installing new shingles over existing shingles (no overlays). The old roof must be completely torn off and disposed of. Tear-off and disposal typically costs $1,500–$3,000 depending on roof size and the number of existing layers.</p>

<h2>Sample Estimate: 24-Square Ranch Home, Standard Pitch</h2>
<table>
<thead>
<tr><th>Line Item</th><th>Cost</th></tr>
</thead>
<tbody>
<tr><td>Tear-off and disposal (1 layer)</td><td>$2,100</td></tr>
<tr><td>Synthetic underlayment + ice/water shield</td><td>$1,200</td></tr>
<tr><td>GAF Timberline HDZ shingles (24 squares)</td><td>$5,400</td></tr>
<tr><td>Ridge cap, starter strip, hip & ridge</td><td>$850</td></tr>
<tr><td>Step flashing, counter flashing, valley metal</td><td>$1,100</td></tr>
<tr><td>Pipe boots and vent covers</td><td>$350</td></tr>
<tr><td>Ridge vent (continuous)</td><td>$450</td></tr>
<tr><td>Drip edge (aluminum)</td><td>$400</td></tr>
<tr><td>Decking replacement (4 sheets estimated)</td><td>$400</td></tr>
<tr><td>Permit ($94.50) + final inspection</td><td>$95</td></tr>
<tr><td>Labor</td><td>$3,200</td></tr>
<tr><td>Cleanup, magnet sweep, haul-off</td><td>$450</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$15,995</strong></td></tr>
</tbody>
</table>
<p>This is a representative estimate for illustration purposes. Your actual cost depends on your specific roof. We provide a free, itemized written estimate after an in-person drone inspection — no guesswork, no vague ranges.</p>

<h2>What Does Insurance Cover?</h2>
<p>If your roof was damaged by hail or wind, your homeowners insurance policy typically covers the full replacement cost minus your deductible (assuming you have an RCV policy). The process works like this:</p>
<ol>
<li>We inspect your roof and document the damage with drone imagery and an Xactimate estimate.</li>
<li>You file a claim with your carrier.</li>
<li>We meet your adjuster on the roof.</li>
<li>Your carrier issues an initial payment (the ACV — depreciated value).</li>
<li>We complete the replacement.</li>
<li>Your carrier releases the recoverable depreciation (the difference between ACV and full RCV).</li>
</ol>
<p>On Redline-supplemented claims in the OKC metro, the average final settlement is 27% higher than the carrier's first estimate. That difference often covers your deductible and then some.</p>

<h2>Financing Options</h2>
<p>If your roof replacement is not insurance-covered — age, wear, or you have an ACV-only policy — we offer financing through Wisetack, Service Finance Company, and Synchrony HOME. Options include 0% APR for 12–18 months (same-as-cash), fixed rates from 6.99–9.99% for 60–120 months, and unsecured loans up to $100,000. Pre-qualification is a soft credit pull with no impact to your score.</p>

<h2>Get Your Free Estimate</h2>
<p>Every roof is different. The only way to get an accurate price is a professional inspection. We will fly our drone, measure your roof, assess your decking and ventilation, and give you an itemized written estimate — usually within 24 hours of the inspection. No obligation, no pressure, no charge.</p>`,
    faqs: [
      {
        question: 'How much does a roof replacement cost in OKC in 2026?',
        answer: 'Most homeowners pay $10,000–$18,000 for standard architectural shingles on a 2,000 sq ft home. Class 4 impact-resistant shingles add $2,000–$5,000. Premium materials like synthetic tile or standing-seam metal can run $25,000–$50,000.',
      },
      {
        question: 'Does insurance cover roof replacement?',
        answer: 'If your roof was damaged by hail or wind, most RCV policies cover the full replacement cost minus your deductible. We handle claim documentation, adjuster meetings, and supplements.',
      },
      {
        question: 'Why do roof replacement costs vary so much?',
        answer: 'Roof size, pitch, complexity, shingle tier, decking condition, ventilation needs, and the number of penetrations all affect cost. A simple gable roof is much less expensive than a multi-valley design with dormers and turrets.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // POST 3: Class 4 Impact-Resistant Shingles
  // ───────────────────────────────────────────────
  {
    slug: 'class-4-impact-resistant-shingles-insurance-discount',
    title: 'Class 4 Impact-Resistant Shingles in Oklahoma: The Insurance Discount Math That Pays Off',
    description: 'A detailed breakdown of Class 4 IR shingle costs, insurance carrier discounts, and the payback math for Oklahoma homeowners in the #1 hail metro in America.',
    date: '2026-01-20',
    lastUpdated: '2026-04-10',
    author: 'Travis "Trey" McAllister III',
    content: `<h2>What Are Class 4 Impact-Resistant Shingles?</h2>
<p>Class 4 is the highest impact-resistance rating under UL 2218, the standard test for shingle durability. To earn a Class 4 rating, a shingle must withstand a 2-inch steel ball dropped from 20 feet onto the same spot twice without cracking. Standard architectural shingles are not impact-rated at all — they crack under the same test with a 1.25-inch ball.</p>
<p>Class 4 shingles achieve their impact resistance through one of two technologies: a polymer-modified (SBS rubber) asphalt formulation that flexes on impact instead of cracking, or a reinforced fiberglass mat that absorbs energy. The leading products use SBS-modified asphalt, which also improves flexibility in cold weather and resistance to thermal cycling.</p>

<h2>Why Class 4 Matters in Oklahoma</h2>
<p>Oklahoma City is the most hail-impacted metro area in the United States by frequency of significant hail events. Between 2015 and 2025, the NWS recorded over 300 events with hailstones 1 inch or larger in the OKC metro. Cities like Edmond, Moore, Yukon, and Norman are hit almost every year.</p>
<p>Standard architectural shingles in Oklahoma last 15–20 years on paper — but many are replaced in under 10 years because of hail damage. Class 4 shingles are designed to survive the hail that destroys standard shingles, which means fewer claims, fewer replacements, and lower lifetime cost.</p>

<h2>The Insurance Discount Math</h2>
<p>Every major insurance carrier writing homeowners policies in Oklahoma offers a premium discount for Class 4 impact-resistant shingles. The discounts vary by carrier but they are substantial:</p>

<table>
<thead>
<tr><th>Insurance Carrier</th><th>Class 4 IR Discount</th><th>Annual Savings on $2,000 Premium</th><th>Annual Savings on $3,000 Premium</th></tr>
</thead>
<tbody>
<tr><td>State Farm</td><td>Up to 30%</td><td>$600</td><td>$900</td></tr>
<tr><td>USAA</td><td>Up to 20%</td><td>$400</td><td>$600</td></tr>
<tr><td>Farmers</td><td>Up to 15%</td><td>$300</td><td>$450</td></tr>
<tr><td>Allstate</td><td>Up to 20%</td><td>$400</td><td>$600</td></tr>
<tr><td>Liberty Mutual</td><td>Up to 15%</td><td>$300</td><td>$450</td></tr>
<tr><td>Oklahoma Farm Bureau</td><td>Up to 20%</td><td>$400</td><td>$600</td></tr>
<tr><td>Shelter Insurance</td><td>Up to 15%</td><td>$300</td><td>$450</td></tr>
<tr><td>American Family</td><td>Up to 10%</td><td>$200</td><td>$300</td></tr>
</tbody>
</table>
<p><em>Discounts are approximate and vary by policy, coverage level, and location within the metro. Contact your carrier for your specific discount.</em></p>

<h2>The Payback Calculation</h2>
<p>The upgrade from standard architectural shingles to Class 4 IR shingles typically costs $2,000–$5,000 more on a standard OKC home, depending on the product selected and roof size. Here is the payback math for a typical scenario:</p>

<table>
<thead>
<tr><th>Scenario</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Class 4 upgrade cost</td><td>$3,500</td></tr>
<tr><td>Annual premium</td><td>$2,400</td></tr>
<tr><td>Carrier discount (20%)</td><td>$480/year</td></tr>
<tr><td>Payback period</td><td>7.3 years</td></tr>
<tr><td>10-year net savings</td><td>$1,300</td></tr>
<tr><td>20-year net savings</td><td>$6,100</td></tr>
</tbody>
</table>

<p>With a 30% State Farm discount on the same $2,400 premium, the payback drops to under 5 years and the 20-year net savings exceeds $10,000. And this calculation does not include the value of avoided claims, avoided deductible payments, and avoided disruption from future hail damage.</p>

<h2>Which Class 4 Shingles Do We Install?</h2>
<p>As a GAF Master Elite, Owens Corning Platinum Preferred, and CertainTeed SELECT ShingleMaster contractor, we install the top-tier Class 4 products from all three major manufacturers:</p>
<ul>
<li><strong>GAF Timberline AS II:</strong> SBS-modified, Class 4, StainGuard Plus algae protection. Available in 15 colors. Eligible for GAF Golden Pledge warranty.</li>
<li><strong>Owens Corning Duration FLEX:</strong> SBS-modified, Class 4, SureNail technology for 130 mph wind rating. Available in 12 colors. Eligible for OC Platinum Protection warranty.</li>
<li><strong>CertainTeed Landmark IR:</strong> SBS-modified, Class 4, StreakFighter algae resistance. Available in 14 colors. Eligible for CertainTeed SureStart Plus 5-Star warranty.</li>
<li><strong>Malarkey Vista AR:</strong> SBS-modified, Class 4, Scotchgard protector. Available in 10 colors. NEX polymer-modified technology.</li>
</ul>
<p>All four products carry the same Class 4 UL 2218 rating. The visual differences are subtle — all look like premium architectural shingles. Your Redline estimator will bring samples so you can compare colors and profiles against your home.</p>

<h2>What About Metal Roofs?</h2>
<p>Standing-seam metal roofs are inherently impact-resistant and most carriers offer similar or larger premium discounts for metal. However, metal costs 2–3x more than Class 4 shingles. For most OKC homeowners, Class 4 IR shingles offer the best balance of impact resistance, insurance savings, aesthetics, and upfront cost.</p>

<h2>The Bottom Line</h2>
<p>In a metro that gets hit with significant hail nearly every year, Class 4 impact-resistant shingles are not a luxury — they are the smartest financial decision you can make for your roof. The insurance discounts alone pay for the upgrade in 3–7 years. The reduced damage, fewer claims, and longer lifespan make the total value even greater. Ask your Redline estimator for a Class 4 quote alongside your standard estimate — we always show you both options with real numbers.</p>`,
    faqs: [
      {
        question: 'What are Class 4 impact-resistant shingles?',
        answer: 'Class 4 is the highest impact-resistance rating under UL 2218. These shingles withstand a 2-inch steel ball dropped from 20 feet without cracking — far exceeding the durability of standard architectural shingles.',
      },
      {
        question: 'How much do Class 4 shingles save on insurance?',
        answer: 'Discounts range from 10% to 30% depending on your carrier. State Farm offers up to 30%, USAA up to 20%. On a $2,400 annual premium with a 20% discount, you save $480/year.',
      },
      {
        question: 'How long until Class 4 shingles pay for themselves?',
        answer: 'The typical payback period is 3–7 years depending on the upgrade cost and your carrier\'s discount. After that, the premium savings are pure profit — plus you avoid the cost and disruption of hail damage repairs.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // POST 4: ACV vs RCV Insurance Policy
  // ───────────────────────────────────────────────
  {
    slug: 'acv-vs-rcv-insurance-policy',
    title: 'ACV vs RCV: The Single Most Important Page in Your Insurance Policy',
    description: 'A plain-English explanation of Actual Cash Value vs Replacement Cost Value insurance policies and why Oklahoma homeowners must know the difference before filing a roof claim.',
    date: '2025-12-05',
    lastUpdated: '2026-03-20',
    author: 'Travis "Trey" McAllister III',
    content: `<h2>The Page That Determines Everything</h2>
<p>Somewhere in your homeowners insurance policy — usually on page 3 or 4 of your declarations — there is a single line that determines whether your insurance will pay $8,000 or $18,000 for the same hail-damaged roof. That line tells you whether your roof coverage is <strong>RCV (Replacement Cost Value)</strong> or <strong>ACV (Actual Cash Value)</strong>.</p>
<p>Most Oklahoma homeowners have never read their declarations page. Most do not even know where to find it. And yet this one distinction is the single biggest financial factor in any roof insurance claim. Here is what it means in plain English.</p>

<h2>RCV: Replacement Cost Value</h2>
<p>RCV means your insurance pays the full cost to replace your roof at today's prices, minus your deductible. It does not matter how old your roof is, how depreciated it is, or what it was worth when it was installed. If it costs $18,000 to replace your roof today, and your deductible is $1,000, your carrier owes you $17,000.</p>
<p>However, RCV policies pay in two installments:</p>
<ol>
<li><strong>Initial payment (ACV portion):</strong> The carrier first pays you the depreciated value of your roof. On a 15-year-old roof with a 30-year lifespan, that might be 50% of the replacement cost. So you might receive $8,500 initially.</li>
<li><strong>Recoverable depreciation:</strong> Once the roof is replaced and you submit the final invoice showing the work was completed, the carrier releases the remaining $8,500. This is called "recoverable depreciation" because you recover it by actually doing the work.</li>
</ol>
<p>The key deadline: most Oklahoma policies require the work to be completed within <strong>180 days</strong> of the date of loss to recover the depreciation. Miss that deadline and you forfeit the second payment.</p>

<h2>ACV: Actual Cash Value</h2>
<p>ACV means your insurance pays only the depreciated value of your roof — what it is worth today given its age and condition — minus your deductible. There is no second payment. There is no recoverable depreciation. What you get is what you get.</p>
<p>On the same 15-year-old roof that costs $18,000 to replace:</p>
<ul>
<li>The carrier calculates the depreciated value: roughly $9,000</li>
<li>They subtract your $1,000 deductible</li>
<li>You receive $8,000</li>
<li>You owe the remaining $10,000 out of pocket</li>
</ul>
<p>ACV policies have become more common in Oklahoma over the past five years as carriers have tried to reduce their exposure in the nation's #1 hail market. Some carriers now default new policies to ACV roof coverage, and others have added ACV endorsements to existing RCV policies at renewal. Many homeowners do not realize their coverage has changed until they file a claim.</p>

<h2>How to Check Your Policy</h2>
<p>Pull out your policy declarations page — the summary document your carrier sends when you renew each year. Look for one of these phrases:</p>
<ul>
<li><strong>"Dwelling coverage: Replacement Cost"</strong> — you have RCV. Good.</li>
<li><strong>"Dwelling coverage: Actual Cash Value"</strong> — you have ACV.</li>
<li><strong>"Roof Surfaces Actual Cash Value Endorsement"</strong> or similar — your policy is RCV for everything except the roof, which is ACV. This is increasingly common.</li>
</ul>
<p>If you cannot find it or the language is confusing, bring your declarations page to any Redline inspection. We read these documents every day and can tell you in five minutes what you have.</p>

<h2>Why ACV Policies Are Increasing in Oklahoma</h2>
<p>Oklahoma's hail frequency has made the state one of the most expensive markets for homeowners insurance. Carriers have responded by:</p>
<ul>
<li>Raising premiums (Oklahoma premiums are 2x the national average)</li>
<li>Increasing deductibles (percentage-based wind/hail deductibles instead of flat dollar amounts)</li>
<li>Switching roof coverage from RCV to ACV, especially on roofs over 10 years old</li>
<li>Non-renewing policies in the highest-risk zip codes</li>
</ul>
<p>This trend is likely to continue. If your roof is over 10 years old and you have not checked your declarations page recently, do it now. If your carrier has switched you to ACV, you may want to shop for a new policy before your next storm — not after.</p>

<h2>What to Do If You Have ACV Coverage</h2>
<ol>
<li><strong>Shop your policy.</strong> Some carriers still offer RCV roof coverage in Oklahoma. Get quotes from multiple carriers before your next renewal.</li>
<li><strong>Consider a proactive replacement.</strong> If your roof is 15+ years old and you have ACV coverage, replacing it before storm damage occurs means you control the timeline, the material choice, and the financing — instead of scrambling after a claim with a gap between insurance payout and actual cost.</li>
<li><strong>Use financing.</strong> If you have ACV and your claim does not cover the full cost, our financing options through Wisetack, Service Finance Company, and Synchrony HOME can bridge the gap with 0% APR same-as-cash or low fixed rates.</li>
<li><strong>Upgrade to Class 4.</strong> Some carriers will switch you back to RCV — or offer a better rate — if you install Class 4 impact-resistant shingles. Ask your agent.</li>
</ol>

<h2>The Redline Approach</h2>
<p>We read your declarations page at the beginning of every insurance claim project. If you have RCV, we manage the two-payment process with your carrier so you never miss the depreciation recovery deadline. If you have ACV, we give you an honest assessment of the gap between your payout and the replacement cost, and we present financing options to cover the difference. Either way, you know exactly where you stand before we lift a single shingle.</p>`,
    faqs: [
      {
        question: 'What is the difference between ACV and RCV?',
        answer: 'RCV (Replacement Cost Value) pays the full cost to replace your roof at today\'s prices minus your deductible. ACV (Actual Cash Value) pays only the depreciated value minus your deductible. RCV results in significantly higher payouts.',
      },
      {
        question: 'How do I find out if I have ACV or RCV?',
        answer: 'Check your policy declarations page — the summary document your carrier sends at renewal. Look for "Dwelling coverage: Replacement Cost" (RCV) or "Actual Cash Value" (ACV). Bring it to any Redline inspection and we can read it for you in five minutes.',
      },
      {
        question: 'Can I switch from ACV to RCV?',
        answer: 'Sometimes. Some carriers will offer RCV coverage if you install Class 4 impact-resistant shingles or if your roof is under a certain age. You may also find RCV coverage by shopping your policy with competing carriers.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // POST 5: How to Spot Storm Chasers OKC
  // ───────────────────────────────────────────────
  {
    slug: 'how-to-spot-storm-chasers-okc',
    title: 'How to Spot a Storm Chaser in Oklahoma City (and What Real Local Roofers Do Differently)',
    description: 'A practical checklist for Oklahoma City homeowners to identify storm-chaser roofing scams and find legitimate local contractors after severe weather.',
    date: '2025-11-01',
    lastUpdated: '2026-04-01',
    author: 'Travis "Trey" McAllister III',
    content: `<h2>What Is a Storm Chaser?</h2>
<p>In the roofing industry, a "storm chaser" is an out-of-state contractor who follows severe weather events from city to city, soliciting roofing work in the immediate aftermath of hail and wind storms. They set up temporary operations, knock on doors, sign as many contracts as possible, subcontract the work to local labor crews (often at the lowest possible rate), collect payment, and move on to the next city.</p>
<p>Storm chasers are not inherently illegal — many hold valid contractor licenses in their home state. But they create serious problems for Oklahoma homeowners:</p>
<ul>
<li>They will not be here in two years when your roof leaks</li>
<li>Their manufacturer warranties are often invalid because the installer is not a certified contractor</li>
<li>Their workmanship warranty is worthless if the company has moved to another state</li>
<li>They often use aggressive, high-pressure tactics that exploit homeowner anxiety after a storm</li>
<li>Some engage in outright fraud — waiving deductibles, inflating claims, or performing substandard work</li>
</ul>

<h2>The Storm Chaser Checklist: 10 Red Flags</h2>
<p>Use this checklist after any hail or wind event in the OKC metro. If a roofer triggers two or more of these flags, proceed with extreme caution.</p>

<h3>1. No Oklahoma CIB Registration Number</h3>
<p>Every roofing contractor operating in Oklahoma must register with the Construction Industries Board. The registration number should be displayed on the truck, the business card, and the estimate. Ask for it. Verify it at <a href="https://cib.ok.gov">cib.ok.gov</a>. If they cannot produce it, do not let them on your roof.</p>

<h3>2. Out-of-State License Plates</h3>
<p>This is the simplest tell. Walk to the truck and check the plates. Texas, Louisiana, Kansas, Arkansas — if the plates are not Oklahoma, ask why. Legitimate contractors from other states can work in Oklahoma, but they must have an Oklahoma CIB registration.</p>

<h3>3. No Physical Local Address</h3>
<p>Ask for a physical address — not a P.O. box, not a "we're setting up an office." A real local roofer has a physical location you can visit. Our address is 2401 NW 23rd Street, Suite 300, Oklahoma City, OK 73107. It is on every truck, every business card, and every estimate.</p>

<h3>4. Offering to Waive Your Deductible</h3>
<p>This is the biggest red flag of all. Waiving or "eating" your deductible is insurance fraud under Oklahoma law. It works like this: the contractor inflates the claim to cover your deductible, submitting a fraudulent invoice to your insurance company. If discovered, your claim can be denied, your policy canceled, and you can face legal consequences. Any roofer who offers this is not doing you a favor — they are making you an accomplice to fraud.</p>

<h3>5. Pressuring You to Sign Today</h3>
<p>Legitimate contractors give you time. Storm chasers create urgency because they need to sign contracts before you compare estimates, check references, or research the company. "We have a crew available right now" and "prices go up next week" are pressure tactics, not facts.</p>

<h3>6. Requesting a Large Down Payment</h3>
<p>Never pay more than 10–20% of the project cost before work begins. Reputable contractors invoice on progress and completion. A storm chaser who asks for 50% up front may take the money and disappear — it happens more than you would think.</p>

<h3>7. No Written, Itemized Estimate</h3>
<p>A verbal estimate or a one-line "total price" on a napkin is not an estimate. A professional roofer provides a written, itemized proposal listing every material, every labor component, every permit, and every warranty. If they cannot or will not put it in writing, walk away.</p>

<h3>8. No Verifiable Insurance</h3>
<p>Ask for a certificate of insurance showing general liability (minimum $1 million) and Oklahoma workers' compensation coverage. Call the insurance company to verify the certificate is current. If a worker is injured on your property and the contractor does not carry workers' comp, you can be held liable.</p>

<h3>9. No Manufacturer Certifications</h3>
<p>The top-tier manufacturer warranties — GAF Golden Pledge, Owens Corning Platinum Protection, CertainTeed SureStart Plus 5-Star — are only available through certified contractors. A storm chaser installing GAF shingles without GAF Master Elite certification can only offer the basic manufacturer's material warranty — no workmanship coverage, no tear-off allowance.</p>

<h3>10. Knocking on Your Door Unsolicited</h3>
<p>Not every door-knocker is a storm chaser — some legitimate local companies canvass after storms. But unsolicited door-knocking after a hail event is the primary method storm chasers use to find customers. If someone knocks, apply the other nine checks on this list before you engage.</p>

<h2>What Real Local Roofers Do Differently</h2>
<p>Here is what you should expect from a legitimate, established Oklahoma roofing contractor:</p>
<ul>
<li><strong>Oklahoma CIB number displayed on every truck and document</strong> — ours is 80003217</li>
<li><strong>A physical local address you can visit</strong> — 2401 NW 23rd Street, Suite 300, OKC</li>
<li><strong>$2 million+ general liability and full workers' comp</strong> — we hand you copies before we step on your roof</li>
<li><strong>Top-tier manufacturer certifications</strong> — GAF Master Elite, Owens Corning Platinum Preferred, CertainTeed SELECT ShingleMaster</li>
<li><strong>Written, itemized estimates in Xactimate format</strong> — matching your insurer's pricing software</li>
<li><strong>BBB accreditation with a verifiable track record</strong> — A+ rated since 2008</li>
<li><strong>No pressure, no same-day signing requirement</strong> — take the estimate, compare it, call us when you are ready</li>
<li><strong>No deductible games</strong> — we follow the law, period</li>
<li><strong>A local reputation to protect</strong> — we have been here since 2007 and will be here in 2037</li>
</ul>

<h2>What to Do If You Have Already Signed with a Storm Chaser</h2>
<p>Oklahoma's Home Repair Fraud Prevention Act gives you the right to cancel a home repair contract within three business days of signing. If you signed under pressure and have second thoughts, send written notice of cancellation to the contractor within 72 hours. If the contractor has already begun work, contact an attorney and your insurance company immediately.</p>

<h2>Report Suspicious Activity</h2>
<p>You can report unlicensed or fraudulent roofing contractors to:</p>
<ul>
<li>Oklahoma Construction Industries Board: (405) 521-6550</li>
<li>Oklahoma Attorney General Consumer Protection Unit: (405) 521-2029</li>
<li>Better Business Bureau of Central Oklahoma: bbb.org</li>
</ul>

<p>Protecting Oklahoma homeowners from storm-chaser fraud is personal for us. If you are unsure about a contractor who has approached you, call us at (928) 628-6080. We will help you verify their credentials — no obligation, no charge.</p>`,
    faqs: [
      {
        question: 'What is a storm chaser in roofing?',
        answer: 'A storm chaser is an out-of-state roofing contractor who follows severe weather events, soliciting work in the aftermath of hail and wind storms. They sign contracts, subcontract the work, collect payment, and move on — leaving homeowners without local warranty support.',
      },
      {
        question: 'Is it illegal to waive my roofing deductible in Oklahoma?',
        answer: 'Yes. Waiving or "eating" your deductible involves inflating the insurance claim to cover the deductible amount, which is insurance fraud under Oklahoma law. Any roofer who offers this is breaking the law.',
      },
      {
        question: 'Can I cancel a roofing contract I signed under pressure?',
        answer: 'Yes. Oklahoma\'s Home Repair Fraud Prevention Act gives you three business days to cancel a home repair contract after signing. Send written notice to the contractor within 72 hours.',
      },
    ],
  },
];
