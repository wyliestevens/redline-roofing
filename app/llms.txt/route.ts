export function GET() {
  const body = `# Redline Roofing & Restoration

> Veteran-owned, third-generation Oklahoma City roofing contractor (founded 2007) specializing in storm and hail damage restoration, insurance claim navigation, asphalt shingle replacement, and commercial TPO/EPDM roofing across the OKC metro.

Redline Roofing & Restoration is a family-owned roofing company headquartered at 2401 NW 23rd Street, Suite 300, Oklahoma City, OK 73107. Owner: Travis "Trey" McAllister III, third-generation Oklahoma roofer and U.S. Army National Guard veteran, HAAG-Certified Inspector. Oklahoma Construction Industries Board Roofing Contractor Registration #80003217. GAF Master Elite, Owens Corning Platinum Preferred, CertainTeed SELECT ShingleMaster, BBB A+. Service area: Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Bethany, Midwest City, Del City, Piedmont, Choctaw, Newcastle, Nichols Hills, The Village.

## Core Services
- [Roof Replacement](https://redlineroofingok.com/services/roof-replacement): Full tear-off and replacement, asphalt shingle / Class 4 impact-resistant / metal / synthetic tile, finished in 1-3 days
- [Roof Repair](https://redlineroofingok.com/services/roof-repair): Leak repair, flashing repair, missing shingle replacement, 24-hour active-leak response
- [Storm & Hail Damage Restoration](https://redlineroofingok.com/services/storm-damage): HAAG-certified inspection, drone imagery, Xactimate estimates, on-site adjuster meetings
- [Commercial Roofing](https://redlineroofingok.com/services/commercial): TPO, EPDM, modified bitumen, standing-seam metal, in-house sheet metal shop
- [Gutters & Downspouts](https://redlineroofingok.com/services/gutters): Seamless 5" and 6" aluminum, leaf guards
- [Free 27-Point Inspection](https://redlineroofingok.com/services/inspection): Drone + ladder + interior moisture check, 24-hour written report

## Service Areas
- [Oklahoma City](https://redlineroofingok.com/service-areas/oklahoma-city)
- [Edmond](https://redlineroofingok.com/service-areas/edmond)
- [Norman](https://redlineroofingok.com/service-areas/norman)
- [Moore](https://redlineroofingok.com/service-areas/moore)
- [Yukon](https://redlineroofingok.com/service-areas/yukon)
- [Mustang](https://redlineroofingok.com/service-areas/mustang)
- [Midwest City](https://redlineroofingok.com/service-areas/midwest-city)
- [Bethany](https://redlineroofingok.com/service-areas/bethany)

## Insurance & Financing
- [Insurance Claims Help](https://redlineroofingok.com/insurance-claims): ACV vs RCV explained, 5-step claim process, real Oklahoma case studies
- [Financing Options](https://redlineroofingok.com/financing): Wisetack, Service Finance Company, Synchrony HOME — 0% APR 12-18 mo or fixed rates 6.99-9.99%
- [The Redline Promise (Warranty)](https://redlineroofingok.com/warranty): Lifetime workmanship + manufacturer warranty + no payment until permit inspection passes

## Resources
- [Roofing FAQ](https://redlineroofingok.com/faq): 15 common Oklahoma roofing questions
- [Oklahoma Hail Damage Guide 2026](https://redlineroofingok.com/blog/oklahoma-hail-damage-guide-2026)
- [Roof Replacement Cost in OKC 2026](https://redlineroofingok.com/blog/roof-replacement-cost-okc-2026)
- [Class 4 Impact-Resistant Shingles & Insurance Discounts](https://redlineroofingok.com/blog/class-4-impact-resistant-shingles-insurance-discount)
- [How to Spot Storm Chasers in OKC](https://redlineroofingok.com/blog/how-to-spot-storm-chasers-okc)

## About
- [About / Our Story](https://redlineroofingok.com/about): Three-generation Oklahoma family roofing history since 1962
- [Reviews](https://redlineroofingok.com/reviews): 1,612 verified Google reviews, 4.9-star average
- [Project Gallery](https://redlineroofingok.com/gallery): Recent OKC metro projects with before/after photos

## Contact
- [Contact / Free Inspection](https://redlineroofingok.com/contact): Phone (928) 628-6080, 24-hour storm response

## Optional
- [Sitemap](https://redlineroofingok.com/sitemap.xml)
- [Blog Hub](https://redlineroofingok.com/blog)`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
