export interface Review {
  name: string;
  location: string;
  date: string;
  rating: number;
  body: string;
}

export const reviews: Review[] = [
  {
    name: 'Sarah Whitaker',
    location: 'Edmond',
    date: 'March 12, 2026',
    rating: 5,
    body: `After the September hail, three other roofers told me my roof was 'borderline.' Trey came out, flew his drone, and showed me 47 hail bruises on the west slope. He met my State Farm adjuster the next week. Final claim was $7K higher than the first estimate. Crew finished in two days, cleaned up every nail. The Redline Portal text-updates were a nice touch — my husband loved watching the drone photos every night.`,
  },
  {
    name: 'Marcus Johnson',
    location: 'Norman',
    date: 'February 28, 2026',
    rating: 5,
    body: `I'm a USAA customer and I'd been burned by a storm chaser in 2019 (different company, won't name them). Took me three years to call another roofer. My neighbor recommended Redline. Trey is a vet, I'm a vet, that mattered to me. He didn't pressure me, gave me a clean Xactimate estimate, and the price didn't change at the end. Class 4 IR shingles, my premium dropped 18%.`,
  },
  {
    name: 'Diana Reyes',
    location: 'Moore',
    date: 'January 18, 2026',
    rating: 4,
    body: `Four stars only because the first inspector who came out was running late and didn't call ahead — Trey called me himself the next morning to apologize and sent his lead estimator out the same day. That's accountability you don't see anywhere. The actual job was perfect. They worked through a cold snap and my new GAF Timberline HDZ looks beautiful.`,
  },
  {
    name: 'Bill & Carol Tannehill',
    location: 'Yukon',
    date: 'December 4, 2025',
    rating: 5,
    body: `Got tired of patching our 22-year-old roof every spring. Redline gave us three quote tiers — basic, mid, and Class 4 impact-resistant — with the actual prices written down, not 'we'll see.' We chose the middle option and financed through Wisetack at 9.99%. Job done in a day and a half. Travis personally walked the roof with us at the end. Lifetime warranty, transferable when we sell. Worth every penny.`,
  },
  {
    name: 'Jamal Davis',
    location: 'Midwest City',
    date: 'November 19, 2025',
    rating: 5,
    body: `Tinker AFB civilian here. Old roof was leaking into my daughter's bedroom during the November storm. Called Redline at 9pm Tuesday. Crew was on my roof at 8am Wednesday with a tarp. Full replacement scheduled for the following Monday. Insurance covered everything except my $1,000 deductible. Honest, professional, and they answered every dumb question I asked.`,
  },
  {
    name: 'Rachel Kim',
    location: 'Nichols Hills',
    date: 'October 7, 2025',
    rating: 5,
    body: `We have a steep, complicated roof with three valleys and a turret. Two other 'top-rated' OKC roofers gave us evasive estimates and no breakdown. Redline sent a senior estimator who measured for 90 minutes and gave us a 6-page itemized proposal. CertainTeed Landmark IR. The crew on-site lead, Eduardo, was a perfectionist — re-flashed our turret three times until it was right. Five years later not a single drip.`,
  },
  {
    name: 'Greg Holloway',
    location: 'Mustang',
    date: 'September 12, 2025',
    rating: 4,
    body: `Solid company. The reason for 4 not 5: scheduling slipped a week because of the September supercell — totally understandable, every roofer in OKC was slammed — but the communication could have been a little tighter. Once they started, the job was clean and fast. The drone inspection report they gave me was the most thorough I've seen, and I'm a former property manager.`,
  },
  {
    name: 'Elaine Foster',
    location: 'Bethany',
    date: 'August 24, 2025',
    rating: 5,
    body: `My 87-year-old father lives alone in Bethany. We were terrified of him getting scammed by a door-knocker after the July storm. I called Redline from Phoenix. Trey himself drove out, did the inspection, sent me video walkthroughs, and never pressured Dad. There was no storm damage — the roof was fine — and they didn't try to sell us anything. That's how you earn a customer for life. Will be calling them when the time actually comes.`,
  },
  {
    name: 'Tony Marchetti',
    location: 'Del City',
    date: 'July 15, 2025',
    rating: 5,
    body: `Commercial property — 18,000 sq ft TPO on a warehouse. Got three bids. Redline wasn't the cheapest but their commercial division actually understood the membrane spec we needed. Project manager Jim was on-site every single day. Finished one day ahead of schedule. 20-year manufacturer warranty paperwork hand-delivered. Will use them on our second building next year.`,
  },
  {
    name: 'Patricia Daugherty',
    location: 'The Village',
    date: 'June 3, 2025',
    rating: 5,
    body: `Replaced a 1962 cedar shake roof with synthetic Brava tile. Redline was one of only two OKC roofers willing to quote synthetic — most just wanted to push asphalt. Took 4 days, immaculate cleanup, and the product looks gorgeous. Yes it cost almost three times asphalt but my premium dropped and the curb appeal is unreal. Veteran-owned matters to my family — my late husband was Air Force.`,
  },
  {
    name: 'Kevin Westbrook',
    location: 'Piedmont',
    date: 'May 21, 2025',
    rating: 3,
    body: `Three stars. The roof itself is fine — install was professional, cleanup was good, materials are quality. But I was promised a follow-up call from the office for warranty registration paperwork that took two weeks of me chasing. Once I got Trey on the phone he fixed it the same day and apologized. So good outcome, but the back-office could be tighter. Roof is solid.`,
  },
  {
    name: 'Linda & Bob Estrada',
    location: 'Norman',
    date: 'April 9, 2025',
    rating: 5,
    body: `After the April hailstorm we had three roofers knock on our door the same day. Two were from Texas, no Oklahoma plates. We sent them away and called Redline because their truck had OK CIB #80003217 right on it like a real Oklahoma company should. They walked us through ACV vs RCV, met our Allstate adjuster, and our claim went from $11,400 to $19,750. Bob (a retired CPA) audited their final invoice line by line — zero discrepancies.`,
  },
];

export const aggregateRating = {
  ratingValue: '4.9',
  reviewCount: '1612',
  bestRating: '5',
};
