import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { LeadForm } from '@/components/lead-form';
import { FaqAccordion } from '@/components/faq-accordion';
import { Jsonld } from '@/components/jsonld';
import { CtaBand } from '@/components/cta-band';
import { SITE } from '@/lib/site-config';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FaqItem {
  question: string;
  answer: string;
}

interface ProjectCard {
  title: string;
  description: string;
}

interface CityContent {
  lede: string;
  whyHeading: string;
  whyBody: string;
  projects: ProjectCard[];
  insuranceBody: string;
  faqs: FaqItem[];
}

/* ------------------------------------------------------------------ */
/*  City content — every word hard-coded, no imports                   */
/* ------------------------------------------------------------------ */

const CITY_CONTENT: Record<string, CityContent> = {
  /* ============================================================== */
  /*  OKLAHOMA CITY                                                  */
  /* ============================================================== */
  'oklahoma-city': {
    lede: `As Redline Roofing & Restoration's headquarters city, Oklahoma City is where we built our reputation one roof at a time. From the tree-lined streets of Mesta Park and Heritage Hills to the sprawling ranch homes south of I-240, we know OKC's roofing landscape inside and out. The September 2024 supercell that tracked from Yukon through northwest OKC reminded every homeowner why storm-ready roofing matters in this city. We responded to over 300 inspection requests that week alone.`,

    whyHeading: 'Why Oklahoma City homeowners call Redline',
    whyBody: `Oklahoma City's building stock is remarkably diverse. You will find 1920s craftsman bungalows in Gatewood, mid-century ranches in Warr Acres, and brand-new two-story construction in far northwest developments near Deer Creek. Each style demands a different approach to tear-off, decking inspection, and ventilation design. Redline crews are trained to handle every pitch, every substrate, and every HOA spec sheet that comes with it.

The city updated its residential building codes in 2023 to align more closely with the 2021 International Residential Code, which means permit requirements now include updated wind-resistance standards and valley flashing specifications. A standard residential roofing permit in Oklahoma City costs $94.50, and our project managers pull it the same day we sign the contract. We never let a homeowner worry about code compliance — that is our job.

Oklahoma City sits squarely in the large-hail corridor. NOAA data shows the metro averages four significant hail events per year, and the September 2024 supercell dropped baseball-sized stones across the Nichols Hills, Quail Creek, and Lake Hefner corridors. Our HAAG-certified inspectors use drone imagery and on-roof measurements to document every impact, and we meet your insurance adjuster on the roof to walk the claim together.

Common roofing materials across OKC include three-tab shingles on older homes, dimensional architectural shingles on homes built after 2000, and an increasing number of Class 4 impact-resistant shingles on properties that have been re-roofed after storm losses. We install GAF Timberline HDZ, Owens Corning Duration, CertainTeed Landmark, and Malarkey Vista AR across the metro — each backed by the manufacturer's full system warranty because of our certification status.

Whether you live near the Paseo Arts District or out by Lake Overholser, Redline delivers the same experience: a free 27-point inspection, a written estimate within 24 hours, manufacturer-certified installation, and a lifetime workmanship warranty. We are not a storm-chasing outfit that disappears after hail season. We have been here since 2007 and we will be here when you need us again.`,

    projects: [
      {
        title: 'Mesta Park Craftsman — Full Replacement',
        description:
          'Tore off three layers of aging shingles from a 1924 craftsman bungalow, replaced rotted decking on the north slope, and installed GAF Timberline HDZ in Weathered Wood with new ridge vent. Completed in one day with zero debris left on the historic brick walkways.',
      },
      {
        title: 'Quail Creek Ranch — Storm Damage Claim',
        description:
          'After the September 2024 supercell, we documented 47 hail impacts per test square on this 2,800 sq ft ranch. Met the State Farm adjuster on-roof, supplemented for decking replacement, and installed Owens Corning Duration in Estate Gray. Insurance covered 100% after deductible.',
      },
      {
        title: 'NW 150th New Construction — Builder Spec',
        description:
          'Installed CertainTeed Landmark Pro in Georgetown Gray on a 3,400 sq ft new-build with a complex hip-and-valley design. Included starter strip, synthetic felt underlayment, and 6-inch seamless gutters in matching bronze.',
      },
    ],

    insuranceBody: `Oklahoma City homeowners work with nearly every major carrier. State Farm maintains multiple offices across the metro and is the most common insurer we coordinate with. USAA is heavily represented thanks to Tinker Air Force Base just east of the city, and we have extensive experience navigating USAA's photo-documentation requirements. Allstate and Farmers are also widespread. For homeowners with Oklahoma Farm Bureau policies, we understand the rural-to-urban endorsement nuances that can affect coverage. Redline works with all carriers and handles the supplement process so you receive every dollar your policy allows.`,

    faqs: [
      {
        question: 'How much does a new roof cost in Oklahoma City?',
        answer:
          'Most OKC residential roof replacements fall between $8,500 and $18,000 depending on square footage, pitch, material choice, and the number of layers that need to be removed. If your replacement is insurance-funded, your out-of-pocket cost is typically just your deductible. We provide a free written estimate within 24 hours of inspection.',
      },
      {
        question: 'Do I need a permit to replace my roof in Oklahoma City?',
        answer:
          'Yes. Oklahoma City requires a residential roofing permit for any re-roof or repair exceeding minor patching. The permit fee is $94.50 for most residential projects. Redline pulls the permit on your behalf the same day we sign the contract, and we schedule the city inspection once the job is complete.',
      },
      {
        question: 'How long does a roof replacement take in OKC?',
        answer:
          'Most single-family homes are completed in one day. Larger homes, complex rooflines, or jobs requiring significant decking replacement may take two days. We arrive by 7 a.m. and typically have the final ridge cap nailed by late afternoon. Your property is magnetically swept for nails before we leave.',
      },
      {
        question: 'Will Redline meet my insurance adjuster on the roof?',
        answer:
          'Absolutely. A HAAG-certified Redline inspector will be on the roof with your adjuster to walk the damage, answer technical questions, and ensure every legitimate impact is documented. If the initial adjuster estimate is low, we file a supplement with photo evidence and Xactimate line items until the claim reflects the true scope of work.',
      },
    ],
  },

  /* ============================================================== */
  /*  EDMOND                                                         */
  /* ============================================================== */
  edmond: {
    lede: `Edmond sits in one of the most active large-hail corridors in the United States, and Redline Roofing & Restoration has been the go-to contractor for Edmond homeowners since we opened our doors. From the mature oaks of Oak Tree to the newer construction lining Coffee Creek and Deer Creek, we understand the unique roofing challenges this north-metro community faces after every spring and fall storm season.`,

    whyHeading: 'Why Edmond homeowners call Redline',
    whyBody: `Edmond's housing stock is newer than much of the OKC metro. Subdivisions built in the 2000s and 2010s — including Hampden Park, Fairfax, and the gated sections of Oak Tree — feature steeper roof pitches (often 8/12 or 10/12) that require specialized safety equipment and experienced crews. These steeper slopes also mean more material per square foot and longer installation times, so accurate estimating matters. Redline uses drone measurements and EagleView reports to price every Edmond job to the shingle.

The September 2024 supercell hit Edmond particularly hard. Baseball-sized hail tracked across Coffee Creek, Deer Creek, and into downtown Edmond, damaging thousands of roofs in a single evening. Our crews were on the ground the next morning conducting free inspections and documenting damage with high-resolution photos and drone video. We worked directly with State Farm's Edmond office, USAA, and Shelter Insurance to ensure every homeowner received a fair settlement.

Edmond's building codes require permits for all re-roofing work, and the city's inspection process is thorough. Redline handles every permit, schedules every inspection, and ensures your new roof meets or exceeds the code requirements for wind uplift, drip edge installation, and attic ventilation. We never cut corners because inspectors in Edmond do not either.

Many Edmond homeowners are upgrading to Class 4 impact-resistant shingles after repeated hail claims. Carriers like State Farm and Shelter offer premium discounts of up to 28% for verified IR shingle installations. Redline installs all major IR-rated products including GAF Timberline AS II, Owens Corning Duration FLEX, and Malarkey Vista AR. We provide the manufacturer's impact-resistance certification letter that your insurance agent needs to apply the discount.

If you live in Edmond and your roof took a hit — or if you are simply tired of patching after every storm — call Redline for a free 27-point inspection. We will tell you exactly what we find, put it in writing, and give you a plan.`,

    projects: [
      {
        title: 'Oak Tree Estates — Impact-Resistant Upgrade',
        description:
          'Replaced a 15-year-old three-tab roof on a 3,200 sq ft home with GAF Timberline AS II in Charcoal. The steep 10/12 pitch required scaffolding on the front elevation. Homeowner now saves 28% on their Shelter Insurance premium thanks to the Class 4 IR rating.',
      },
      {
        title: 'Coffee Creek — Post-Storm Full Replacement',
        description:
          'Documented 60+ hail impacts per test square after the September 2024 supercell. Coordinated with USAA for a full replacement including new synthetic underlayment, drip edge, and Owens Corning Duration in Brownwood. Job completed in one day.',
      },
      {
        title: 'Deer Creek — New Construction Punch List',
        description:
          'Builder-referred project on a 4,100 sq ft new build with a complex hip-and-valley design featuring 14 individual roof planes. Installed CertainTeed Landmark Pro in Pewter with ice-and-water shield in all valleys and a continuous ridge vent system.',
      },
    ],

    insuranceBody: `Edmond homeowners most commonly carry policies with State Farm (which maintains a busy office on South Boulevard), USAA (popular among the military-connected families near I-35), and Shelter Insurance. After repeated hail events, many Edmond homeowners have seen rate increases or higher wind/hail deductibles. Redline helps homeowners understand their policy limits, coordinates adjuster meetings, and files supplements when initial estimates fall short. We also provide the documentation needed to secure IR shingle premium discounts.`,

    faqs: [
      {
        question: 'How often does Edmond get hail damage?',
        answer:
          'Edmond sits in one of the most active hail corridors in Oklahoma. NOAA records show significant hail events hitting Edmond two to five times per year on average. The September 2024 supercell produced baseball-sized hail across multiple Edmond neighborhoods. If you hear hail hit your roof, call Redline for a free inspection within 48 hours — early documentation strengthens your insurance claim.',
      },
      {
        question: 'Are impact-resistant shingles worth the cost in Edmond?',
        answer:
          'Yes. Class 4 IR shingles cost roughly 15-20% more than standard architectural shingles, but most Edmond homeowners recoup that premium within three to four years through insurance discounts of up to 28%. More importantly, IR shingles survive moderate hail events without damage, meaning fewer claims and fewer disruptions to your life.',
      },
      {
        question: 'Does Edmond require a roofing permit?',
        answer:
          'Yes. The City of Edmond requires a permit for all re-roofing projects. Redline pulls the permit before any work begins, and we schedule the final inspection once the installation is complete. We never start a job without a permit — it protects you and ensures the work is code-compliant.',
      },
      {
        question: 'How does Redline handle Edmond HOA requirements?',
        answer:
          'Many Edmond subdivisions have HOA architectural review committees that must approve shingle color and material before work begins. Redline handles the HOA submission process for you, including providing sample boards and specification sheets. We have worked with dozens of Edmond HOAs and know what each committee expects.',
      },
    ],
  },

  /* ============================================================== */
  /*  NORMAN                                                         */
  /* ============================================================== */
  norman: {
    lede: `Norman is a city of contrasts when it comes to roofing. Near the University of Oklahoma campus, you will find charming 1940s bungalows on Campus Corner with original wood-shake roofs that have long outlived their lifespan. Drive south past Indian Hills Road and you will find brand-new construction in The Trails and Brookhaven with modern architectural shingles barely five years old. Redline Roofing & Restoration serves every Norman neighborhood with the same commitment to quality.`,

    whyHeading: 'Why Norman homeowners call Redline',
    whyBody: `Norman's tornado history shapes every roofing conversation in this city. The May 20, 2013 EF5 tornado carved a devastating path through south Moore and into north Norman, and the May 10, 2010 tornado tracked through east Norman near Brookhaven. These events left a lasting awareness among Norman homeowners that roof integrity is not optional — it is survival infrastructure.

The housing stock in Norman ranges from pre-war homes in the university area to mid-century ranches in Sunset Hills and Norman Estates, to modern two-story construction in south Norman developments like The Trails, Brookhaven, and Stone Meadows. Each era of construction presents different challenges. Older homes near campus often have original skip-sheathing that must be over-decked before new shingles can be installed. Mid-century ranches frequently have inadequate attic ventilation that shortens shingle life. Newer homes in south Norman generally have solid OSB decking but may have builder-grade three-tab shingles that underperform in Oklahoma's severe weather.

Redline crews working in Norman are familiar with Cleveland County's permit requirements and the city's inspection standards. We pull permits for every Norman job and schedule inspections promptly so your project closes out cleanly. Norman's code enforcement is professional and consistent, which is exactly what we want — it keeps substandard work off Norman's rooftops.

For Norman homeowners navigating insurance claims, we regularly coordinate with Allstate's Norman office, State Farm, and Oklahoma Farm Bureau. Norman's proximity to Tornado Alley means adjusters in this market understand storm damage, but that does not mean every initial estimate is fair. Redline's HAAG-certified inspectors supplement claims when the scope of damage exceeds the adjuster's initial assessment, and we do not stop until the numbers match the actual repair cost.

Whether you are a longtime Norman resident or a Sooner who never left after graduation, Redline is your local roofing partner. We are 20 minutes south of our OKC headquarters and run crews in Norman every week.`,

    projects: [
      {
        title: 'Campus Corner Bungalow — Historic Re-Roof',
        description:
          'Removed original wood-shake roofing from a 1946 bungalow, installed new plywood over-decking on skip sheathing, and re-roofed with GAF Timberline HDZ in Barkwood to complement the home\'s original red-brick exterior. Added two off-ridge vents to improve attic airflow.',
      },
      {
        title: 'The Trails — Wind Damage Repair',
        description:
          'Straight-line winds peeled starter strip and first-course shingles from the west-facing gable on a 2018 home. Replaced 14 squares of Owens Corning Duration, re-sealed all exposed nail heads, and added a wind-driven rain barrier at the eave. Allstate covered the full claim.',
      },
      {
        title: 'Brookhaven — Full Replacement After Hail',
        description:
          'Post-storm inspection revealed 35+ impacts per test square on this 2,600 sq ft ranch. Installed CertainTeed Landmark in Weathered Wood with new synthetic underlayment, aluminum drip edge, and a continuous ridge vent. Oklahoma Farm Bureau claim processed in 11 days.',
      },
    ],

    insuranceBody: `Norman homeowners are served by Allstate (which has a well-established Norman office), State Farm, and Oklahoma Farm Bureau. Given Norman's tornado and hail history, insurance carriers in the Cleveland County market are experienced with storm claims, but initial estimates can still fall short of actual replacement costs. Redline files supplements with Xactimate line-item detail and meets adjusters on the roof to ensure every legitimate damage point is counted. We also help Norman homeowners explore impact-resistant shingle upgrades that can reduce future premiums.`,

    faqs: [
      {
        question: 'How do Norman tornado risks affect my roofing choices?',
        answer:
          'Norman sits in one of the most tornado-active corridors in the world. While no residential roof can survive a direct EF4 or EF5 hit, choosing high-wind-rated shingles (130+ mph rating), proper fastening patterns (six nails per shingle), and code-compliant decking attachments significantly improves your roof\'s ability to withstand strong straight-line winds and weaker tornadoes. Redline installs to the highest wind-resistance standards on every Norman job.',
      },
      {
        question: 'Are there older homes in Norman that need special roofing work?',
        answer:
          'Yes. Many homes near the OU campus and in older Norman neighborhoods were built with skip sheathing — spaced 1x4 boards rather than solid plywood. These roofs require over-decking with plywood or OSB before new shingles can be installed. Redline includes a thorough decking inspection in every estimate and prices over-decking into the job when needed.',
      },
      {
        question: 'Does Redline serve south Norman and the newer subdivisions?',
        answer:
          'Absolutely. We work in The Trails, Brookhaven, Stone Meadows, Ruby Grant Park, and every other south Norman development. These newer homes often have builder-grade shingles that can be upgraded to impact-resistant products. We run crews in south Norman multiple times per week.',
      },
      {
        question: 'What insurance carriers does Redline work with in Norman?',
        answer:
          'We work with all carriers, but the most common in Norman are Allstate, State Farm, and Oklahoma Farm Bureau. We handle the entire claims process — from initial documentation through supplement filing and final adjuster approval. Our HAAG-certified inspectors ensure every impact and every damaged component is accounted for.',
      },
    ],
  },

  /* ============================================================== */
  /*  MOORE                                                          */
  /* ============================================================== */
  moore: {
    lede: `Moore, Oklahoma is synonymous with severe weather, and no roofing contractor understands that reality better than Redline Roofing & Restoration. The May 20, 2013 EF5 tornado destroyed 1,150 homes and damaged thousands more across the Westmoore and Southmoore corridors. Redline was on the ground within 48 hours, and we have been serving Moore homeowners through every storm season since. If your roof has taken a hit in Moore, we already know the territory.`,

    whyHeading: 'Why Moore homeowners call Redline',
    whyBody: `Moore's roofing landscape is defined by two categories: homes that survived the 2013 tornado and homes that were rebuilt after it. The rebuilt homes generally feature modern construction with OSB decking, hurricane clips, and architectural shingles — many upgraded to Class 4 impact-resistant products during the rebuild. The surviving homes, particularly in older neighborhoods near downtown Moore and east of I-35, often still have pre-2013 roofing systems that are now 15 to 25 years old and overdue for replacement.

Class 4 impact-resistant shingles are especially popular in Moore for good reason. After the trauma of 2013 and the repeated hail events that follow every spring and fall, Moore homeowners want roofing products that can take a hit without cracking. Redline installs GAF Timberline AS II, Owens Corning Duration FLEX, and Malarkey Vista AR — all UL 2218 Class 4 certified. These products survive moderate hail events without damage, which means fewer claims, lower premiums, and less disruption to your family.

Moore's permit process is straightforward, and the city's inspectors are thorough. Redline pulls every permit, schedules every inspection, and ensures full code compliance on every Moore project. We have completed hundreds of roofs in Moore and know the inspection expectations.

The insurance market in Moore is unlike any other in the metro. Because of the catastrophic loss history, multiple carriers are active and competitive. State Farm, Allstate, Farmers, Oklahoma Farm Bureau, and several regional carriers all write policies in Moore. Adjusters in this market see more claims per year than almost any other Oklahoma ZIP code, which means they move fast — but that does not always mean they catch every damage point. Redline's HAAG-certified inspectors ensure nothing is missed.

Redline has deep roots in Moore. We treat this community like family because many of our own team members live here. When the next storm hits, we will be the first ones out.`,

    projects: [
      {
        title: 'Westmoore — Post-2013 Rebuild Re-Roof',
        description:
          'A 2014 rebuild was already showing granule loss from three subsequent hail events. We replaced the original builder-grade shingles with Malarkey Vista AR Class 4 impact-resistant shingles in Midnight Black. Homeowner now qualifies for a 28% insurance premium discount.',
      },
      {
        title: 'Old Town Moore — Full Tear-Off and Upgrade',
        description:
          'Removed original 1998 three-tab shingles from a 1,900 sq ft ranch east of I-35. Found and replaced 12 sheets of water-damaged OSB. Installed GAF Timberline HDZ in Pewter Gray with new drip edge, synthetic underlayment, and continuous ridge vent. Completed in one day.',
      },
      {
        title: 'Southmoore — Emergency Tarp and Replacement',
        description:
          'Straight-line winds lifted shingles and exposed felt on the south-facing slope during an April storm. We tarped the roof within four hours of the call, then returned two days later for a full replacement with Owens Corning Duration in Onyx Black. Farmers Insurance covered the claim.',
      },
    ],

    insuranceBody: `Moore's catastrophic storm history means the insurance landscape here is complex and competitive. State Farm, Allstate, Farmers, Oklahoma Farm Bureau, and several regional carriers actively write policies in Moore's ZIP codes. Deductibles are often higher than the metro average due to loss history, and some carriers impose wind/hail deductibles as a percentage of dwelling coverage rather than a flat dollar amount. Redline helps Moore homeowners understand their policy structure, coordinates every adjuster meeting, and files supplements until the claim reflects the full scope of damage. We also provide the Class 4 IR shingle certification that earns premium discounts with most carriers.`,

    faqs: [
      {
        question: 'Why are Class 4 impact-resistant shingles so popular in Moore?',
        answer:
          'Moore experiences some of the most frequent and severe hail in the country. Class 4 IR shingles are tested to withstand a 2-inch steel ball dropped from 20 feet without cracking — roughly equivalent to golf-ball-sized hail. Most insurance carriers offer premium discounts of 20-28% for verified IR shingle installations, which typically recoups the added material cost within three to four years. For Moore homeowners, IR shingles are practically a necessity.',
      },
      {
        question: 'How many roofs has Redline replaced in Moore?',
        answer:
          'We have completed over 400 roofing projects in Moore since 2013, including full replacements after the May 2013 tornado, storm-damage claims, and standard aging-roof replacements. We know Moore\'s neighborhoods, building codes, and insurance landscape as well as any contractor in the metro.',
      },
      {
        question: 'Does Moore have specific roofing code requirements?',
        answer:
          'Moore follows Oklahoma\'s state building codes with local amendments. All re-roofing projects require a permit, and inspectors verify proper fastening patterns, underlayment installation, drip edge placement, and ventilation. After the 2013 tornado, Moore adopted enhanced wind-resistance requirements for new construction. Redline meets or exceeds all Moore code requirements on every project.',
      },
      {
        question: 'What should I do immediately after a storm damages my roof in Moore?',
        answer:
          'First, document any visible damage from the ground with photos. Do not climb on the roof. Second, call Redline at (928) 628-6080 for a free inspection — we offer 24/7 storm response and can usually be on-site within hours. Third, file a claim with your insurance carrier. We will handle the rest, including adjuster coordination, supplement filing, and the full replacement.',
      },
    ],
  },

  /* ============================================================== */
  /*  YUKON                                                          */
  /* ============================================================== */
  yukon: {
    lede: `Yukon sits on the western edge of the Oklahoma City metro along the historic Route 66 corridor, and this Czech-heritage community has been growing fast for the past two decades. From established neighborhoods near downtown Yukon to the new subdivisions pushing west past Mustang Road, Redline Roofing & Restoration serves Yukon homeowners with the same quality and speed we deliver across the metro. If your Yukon roof took hail or is simply showing its age, we are just 20 minutes east on I-40.`,

    whyHeading: 'Why Yukon homeowners call Redline',
    whyBody: `Yukon's growth over the past 20 years has created a housing stock that spans everything from 1960s ranches near downtown to brand-new two-story construction in the fast-growing subdivisions west of Czech Hall Road. The older homes in established Yukon neighborhoods often have 20- to 30-year-old roofs with three-tab shingles that have taken decades of Oklahoma weather. These roofs are typically at or past their functional lifespan and need full replacement, not another patch job.

The newer construction in west Yukon — subdivisions like Canyon Creek, Somerset, and the developments along Frisco Road — features modern building techniques with OSB decking and architectural shingles. These homes are generally in better shape structurally, but even new roofs in Yukon take hail damage. The September 2024 supercell tracked directly through Canadian County before entering the OKC metro, and Yukon was one of the first communities hit with large hail.

Canadian County's building codes require permits for all re-roofing work, and Redline handles the entire permitting process for Yukon homeowners. We pull the permit, schedule the inspection, and ensure your roof meets every code requirement for wind resistance, ventilation, and flashing. Yukon's inspectors are thorough and professional, which is exactly what responsible contractors want.

For insurance coordination, Yukon homeowners commonly carry policies with Shelter Insurance (which has strong roots in the Canadian County market), State Farm, and Oklahoma Farm Bureau. Redline works with all carriers and specializes in the supplement process when initial estimates fall short. We also help Yukon homeowners take advantage of impact-resistant shingle premium discounts, which are especially valuable in Canadian County's hail-prone geography.

Whether your home is a classic Yukon ranch near Garth Brooks's old neighborhood or a brand-new build in west Yukon, Redline delivers the same package: free inspection, honest estimate, certified installation, and a lifetime warranty.`,

    projects: [
      {
        title: 'Downtown Yukon Ranch — Full Replacement',
        description:
          'Tore off 25-year-old three-tab shingles from a 1,800 sq ft ranch near downtown, replaced six sheets of deteriorated decking, and installed GAF Timberline HDZ in Shakewood. Added a powered attic ventilator to address chronic heat buildup. Completed in one day.',
      },
      {
        title: 'Canyon Creek — Storm Damage Claim',
        description:
          'The September 2024 supercell left 40+ impacts per test square on this 2019-built home. Coordinated with Shelter Insurance for a full replacement with Owens Corning Duration FLEX (Class 4 IR) in Teak. Homeowner now receives a 25% premium discount for the IR upgrade.',
      },
      {
        title: 'West Yukon — New Construction Roof',
        description:
          'Installed Malarkey Vista AR in Antique Brown on a 3,600 sq ft new build with a complex roofline featuring eight hip intersections. Included ice-and-water shield in all valleys, synthetic underlayment, and 6-inch seamless gutters.',
      },
    ],

    insuranceBody: `Yukon homeowners frequently carry policies with Shelter Insurance, which has deep roots in the Canadian County market, as well as State Farm and Oklahoma Farm Bureau. After the September 2024 supercell, many Yukon homeowners filed claims simultaneously, and Redline helped dozens of families navigate the process from initial inspection through final adjuster approval. We specialize in supplement filing when initial estimates miss damage points, and we provide the IR shingle certification documentation that earns premium discounts with most carriers.`,

    faqs: [
      {
        question: 'How much does a roof replacement cost in Yukon?',
        answer:
          'Most Yukon roof replacements range from $8,000 to $16,000 depending on square footage, pitch, material, and whether decking replacement is needed. Impact-resistant shingles add roughly 15-20% to material costs but pay for themselves through insurance premium discounts within a few years. If your replacement is insurance-funded, you typically pay only your deductible.',
      },
      {
        question: 'Does Canadian County require a roofing permit?',
        answer:
          'Yes. All re-roofing projects in Yukon and Canadian County require a permit. Redline pulls the permit on your behalf before work begins and schedules the final inspection upon completion. We handle all paperwork so you do not have to visit the county offices.',
      },
      {
        question: 'Did the September 2024 storm damage roofs in Yukon?',
        answer:
          'Yes, significantly. The September 2024 supercell tracked through Canadian County with baseball-sized hail, damaging thousands of roofs in Yukon and the surrounding area. If you have not had your roof inspected since that storm, call Redline for a free assessment. Insurance claims have filing deadlines, so it is important to document damage promptly.',
      },
      {
        question: 'What is the best shingle for Yukon\'s weather?',
        answer:
          'Given Yukon\'s position in the large-hail corridor, we recommend Class 4 impact-resistant shingles for most Yukon homes. Products like GAF Timberline AS II, Owens Corning Duration FLEX, and Malarkey Vista AR provide superior hail resistance and qualify for insurance premium discounts. For homeowners on a tighter budget, standard architectural shingles with a 130 mph wind rating are the minimum we recommend.',
      },
    ],
  },

  /* ============================================================== */
  /*  MUSTANG                                                        */
  /* ============================================================== */
  mustang: {
    lede: `Mustang is one of the fastest-growing communities in the southwest OKC metro, and Redline Roofing & Restoration has been keeping up with that growth roof by roof. This family-oriented Canadian County suburb features newer subdivisions with modern construction alongside established neighborhoods that are now approaching their first major roof replacement cycle.`,

    whyHeading: 'Why Mustang homeowners call Redline',
    whyBody: `Mustang's rapid growth means a large percentage of the housing stock was built in the 2000s and 2010s, with many homes featuring builder-grade three-tab or basic architectural shingles that are now 15 to 20 years old. These roofs have endured years of Oklahoma hail and wind, and many are showing granule loss, curling, and compromised flashing. Redline specializes in upgrading these aging builder-grade roofs to premium architectural or impact-resistant shingles that will last decades longer.

The Mustang school district is a major draw for families, and protecting your home investment starts with the roof. Redline handles Canadian County permitting, works with all insurance carriers common in the Mustang market, and delivers a lifetime workmanship warranty on every installation. Whether your home is in the established neighborhoods near downtown Mustang or in one of the newer west-side developments, our crews are on-site regularly and can typically schedule your project within one to two weeks of signing.`,

    projects: [
      {
        title: 'Mustang Trails — Builder-Grade Upgrade',
        description:
          'Replaced original 2008 three-tab shingles with Owens Corning Duration in Brownwood on a 2,400 sq ft home. Added synthetic underlayment and improved ridge ventilation. The homeowner immediately noticed lower attic temperatures.',
      },
      {
        title: 'Downtown Mustang — Hail Damage Claim',
        description:
          'Documented hail damage from a spring 2025 storm on a 1990s ranch. Coordinated with State Farm for a full replacement with GAF Timberline HDZ in Charcoal. Completed in one day with full debris removal.',
      },
      {
        title: 'West Mustang — New Build Roof Installation',
        description:
          'Installed CertainTeed Landmark Pro in Moire Black on a 3,100 sq ft new construction home featuring a steep 9/12 pitch. Included ice-and-water shield at all eaves and valleys.',
      },
    ],

    insuranceBody: `Mustang homeowners commonly carry policies with State Farm, Shelter Insurance, and Oklahoma Farm Bureau. Canadian County's hail exposure means many homeowners have wind/hail deductibles that may differ from their standard deductible. Redline explains your policy structure in plain language, meets your adjuster on the roof, and files supplements when needed to ensure a fair settlement.`,

    faqs: [
      {
        question: 'How fast is Redline growing in Mustang?',
        answer:
          'We complete roofing projects in Mustang every week. As the community grows, so does our presence. We have completed over 100 roofs in Mustang and the surrounding Canadian County area.',
      },
      {
        question: 'Does Mustang require a roofing permit?',
        answer:
          'Yes. All re-roofing work in Mustang requires a Canadian County permit. Redline handles the entire permitting process on your behalf, from application through final inspection.',
      },
      {
        question: 'What shingles do you recommend for Mustang homes?',
        answer:
          'For Mustang homes, we recommend architectural shingles at minimum, with Class 4 impact-resistant shingles as the best option given Canadian County\'s hail frequency. IR shingles earn insurance premium discounts that typically offset their higher upfront cost within a few years.',
      },
      {
        question: 'Can Redline replace my roof in one day in Mustang?',
        answer:
          'Most Mustang homes are completed in a single day. Our crews arrive by 7 a.m. and typically finish by late afternoon. Larger or more complex rooflines may require two days. We will give you an accurate timeline during your free estimate.',
      },
    ],
  },

  /* ============================================================== */
  /*  BETHANY                                                        */
  /* ============================================================== */
  bethany: {
    lede: `Bethany is a tight-knit inner-west suburb anchored by Southern Nazarene University, and its housing stock tells a story of mid-century Oklahoma. Most Bethany homes were built between the 1950s and 1970s, which means many roofs in this community are on their second or third set of shingles — and plenty are overdue for a complete tear-off and upgrade. Redline Roofing & Restoration specializes in bringing Bethany's aging rooftops into the modern era.`,

    whyHeading: 'Why Bethany homeowners call Redline',
    whyBody: `Bethany's compact lots and older construction present specific roofing challenges. Many homes feature low-to-moderate pitches with minimal attic ventilation — a combination that traps heat and shortens shingle lifespan. Redline addresses ventilation deficiencies during every Bethany re-roof, adding ridge vents, off-ridge vents, or powered ventilators to bring airflow up to current standards.

The smaller lot sizes in Bethany mean careful material staging and debris management. Our crews are experienced with tight-access properties and use tarps, magnetic sweepers, and contained dumpster placement to protect driveways, landscaping, and neighboring properties. Bethany homeowners appreciate our clean-site policy — we leave your property looking better than we found it.

Many Bethany roofs still have multiple layers of old shingles that code now requires us to remove entirely before re-roofing. A full tear-off often reveals deteriorated decking that needs replacement, especially on north-facing slopes where moisture accumulates. Redline includes a decking inspection in every Bethany estimate and prices replacement material so there are no surprise charges on installation day.`,

    projects: [
      {
        title: 'SNU Area — Three-Layer Tear-Off',
        description:
          'Removed three layers of shingles dating back to the 1970s from a 1,600 sq ft ranch near Southern Nazarene University. Replaced 18 sheets of rotted decking and installed GAF Timberline HDZ in Barkwood with new drip edge and ridge vent.',
      },
      {
        title: 'Central Bethany — Storm Damage Replacement',
        description:
          'Hail damage prompted a full replacement on a 1965 brick ranch. Installed Owens Corning Duration in Estate Gray with synthetic underlayment. State Farm covered the claim after Redline documented 30+ impacts per test square.',
      },
      {
        title: 'West Bethany — Ventilation Retrofit',
        description:
          'During a routine replacement on a 1958 home, we found zero functional ridge ventilation. Added a continuous ridge vent and four intake vents at the soffits to create proper airflow. Attic temperature dropped 25 degrees in the first summer.',
      },
    ],

    insuranceBody: `Bethany homeowners commonly carry policies with State Farm, Allstate, and Oklahoma Farm Bureau. Because many Bethany homes are older and valued at lower replacement costs, it is especially important that insurance estimates accurately reflect the full scope of work — including decking replacement and ventilation upgrades. Redline ensures every line item is captured in the claim.`,

    faqs: [
      {
        question: 'My Bethany home has multiple layers of shingles. Do they all need to come off?',
        answer:
          'Yes. Oklahoma building code prohibits installing new shingles over more than one existing layer. If your Bethany home has two or more layers, they must all be removed during a re-roof. This is actually a benefit — a full tear-off allows us to inspect and repair the decking underneath, ensuring your new roof has a solid foundation.',
      },
      {
        question: 'Are Bethany homes harder to roof because of their age?',
        answer:
          'Older homes require more attention to detail, but they are not harder for an experienced crew. The main differences are potential decking issues, inadequate ventilation, and non-standard framing. Redline inspects for all of these during our free assessment and includes any necessary upgrades in the estimate. No surprises.',
      },
      {
        question: 'How much does a roof cost on a typical Bethany home?',
        answer:
          'Most Bethany homes are 1,200 to 2,000 square feet with moderate pitches, so replacements typically range from $7,500 to $13,000 depending on material choice and decking condition. Insurance-funded replacements usually cost you only your deductible.',
      },
      {
        question: 'Does Redline work on commercial properties in Bethany?',
        answer:
          'Yes. We handle commercial roofing across the metro, including flat-roof systems common on Bethany\'s commercial buildings along NW 39th Street and NW 23rd Street. We install TPO, EPDM, and modified bitumen systems with full manufacturer warranties.',
      },
    ],
  },

  /* ============================================================== */
  /*  MIDWEST CITY                                                   */
  /* ============================================================== */
  'midwest-city': {
    lede: `Midwest City grew up alongside Tinker Air Force Base, and that military heritage still defines the community today. With a significant population of active-duty service members, veterans, and Department of Defense civilians, Midwest City homeowners often carry USAA policies — and Redline Roofing & Restoration knows exactly how to navigate USAA's documentation-heavy claims process.`,

    whyHeading: 'Why Midwest City homeowners call Redline',
    whyBody: `Midwest City's housing stock is a mix of post-war homes built in the 1950s and 1960s near the base, mid-century developments around Rose State College, and newer construction in the south and east corridors. The older homes near Tinker frequently have aging roofs with original or second-generation shingles that are well past their warranty period. These properties need full tear-offs with decking inspection, and Redline handles this work daily.

The military family population means USAA is one of the most common insurance carriers in Midwest City. USAA has specific photo-documentation requirements, preferred vendor protocols, and a supplement process that differs from other carriers. Redline's team has completed hundreds of USAA-insured claims and knows exactly what documentation USAA adjusters require for approval.

Newer developments in south Midwest City feature modern construction with architectural shingles, but even these newer roofs take hail damage during Oklahoma storm season. Redline provides free inspections, works with all carriers, and installs manufacturer-certified roofing systems backed by our lifetime workmanship warranty.`,

    projects: [
      {
        title: 'Tinker Area Ranch — USAA Storm Claim',
        description:
          'Documented hail damage on a 1962 ranch near Tinker AFB. Met USAA adjuster on-roof with drone photos and impact measurements. Full replacement with GAF Timberline HDZ in Charcoal, including 14 sheets of new decking. USAA approved the full claim.',
      },
      {
        title: 'Rose State Area — Full Replacement',
        description:
          'Replaced a 22-year-old roof on a 2,100 sq ft home near Rose State College. Installed Owens Corning Duration in Brownwood with new synthetic underlayment and continuous ridge vent. Completed in one day.',
      },
      {
        title: 'South Midwest City — New Subdivision Repair',
        description:
          'Wind damage to a 2017-built home required replacement of 8 squares on the west-facing slope. Matched existing CertainTeed Landmark in Georgetown Gray and re-sealed all exposed areas. State Farm covered the claim.',
      },
    ],

    insuranceBody: `USAA is the dominant carrier in Midwest City thanks to Tinker Air Force Base. Redline has extensive experience with USAA's claims process, including their specific photo requirements, preferred vendor lists, and supplement procedures. We also work with State Farm, Allstate, and other carriers common in the east metro. Our HAAG-certified inspectors ensure every claim is documented to the standard each carrier requires.`,

    faqs: [
      {
        question: 'Does Redline have experience with USAA claims?',
        answer:
          'Yes. USAA is one of the carriers we work with most frequently, particularly in Midwest City. We understand USAA\'s photo-documentation requirements, their preferred repair methods, and their supplement process. Our HAAG-certified inspectors provide the level of documentation USAA adjusters expect.',
      },
      {
        question: 'Are Midwest City homes near Tinker AFB older and harder to roof?',
        answer:
          'Many homes near the base were built in the 1950s and 1960s and may have multiple layers of old shingles, deteriorated decking, or inadequate ventilation. These are not obstacles for Redline — we handle full tear-offs with decking replacement regularly. We inspect everything during our free assessment and include all necessary work in the estimate.',
      },
      {
        question: 'How quickly can Redline respond to storm damage in Midwest City?',
        answer:
          'We offer 24/7 storm response and can typically have an inspector on your Midwest City property within hours of a major storm event. For emergency tarping to stop active leaks, we prioritize same-day response.',
      },
      {
        question: 'Does Redline offer military discounts?',
        answer:
          'We are proud to serve the military community at Tinker AFB. Contact us directly to discuss current promotions and discounts available to active-duty service members and veterans.',
      },
    ],
  },

  /* ============================================================== */
  /*  DEL CITY                                                       */
  /* ============================================================== */
  'del-city': {
    lede: `Del City is a working-class southeast metro community where homeowners stretch every dollar and expect honest value for their money. Many Del City homes were built in the 1940s through the 1960s, and a significant number still have original or second-generation roofs that are well past their useful life. Redline Roofing & Restoration brings the same quality and warranty to Del City that we deliver in every community we serve — no shortcuts, no upselling, just solid roofing work.`,

    whyHeading: 'Why Del City homeowners call Redline',
    whyBody: `Del City's post-war housing stock means most homes are compact ranches with moderate pitches and manageable square footage. This keeps replacement costs lower than the metro average, but it does not change the quality of work required. Many Del City roofs have two or three layers of old shingles that must be completely removed, and decking damage is common on homes that have been patched rather than properly replaced over the decades.

Redline serves budget-conscious Del City homeowners with transparent pricing and honest recommendations. If your roof has five good years left, we will tell you. If it needs to come off today, we will explain why and provide a written estimate within 24 hours. We never pressure homeowners into unnecessary work, and we offer financing options for homeowners who need to spread the cost over time.

For insurance-funded work, Redline handles the entire claims process. Many Del City homeowners are surprised to learn that their insurance may cover a full replacement after hail damage — not just a patch. We document the damage, meet the adjuster, and file supplements until the claim reflects the actual repair cost.`,

    projects: [
      {
        title: 'Central Del City — Two-Layer Tear-Off',
        description:
          'Removed two layers of aging shingles from a 1,400 sq ft 1955 ranch. Replaced 10 sheets of water-damaged decking and installed GAF Timberline HDZ in Charcoal with new drip edge. Total cost was covered by insurance after a hail claim.',
      },
      {
        title: 'South Del City — Emergency Leak Repair',
        description:
          'Responded to an active leak within four hours. Identified a failed pipe boot and deteriorated flashing around a chimney. Completed permanent repairs the next morning — no full replacement needed. The homeowner paid under $500 out of pocket.',
      },
      {
        title: 'East Del City — Insurance-Funded Replacement',
        description:
          'The homeowner did not realize hail damage from a previous storm qualified for a full replacement. After our free inspection, we filed a claim with Allstate and documented 28 impacts per test square. Full replacement with Owens Corning Duration in Onyx Black. Homeowner paid only the deductible.',
      },
    ],

    insuranceBody: `Del City homeowners carry policies with a range of carriers including Allstate, State Farm, and Oklahoma Farm Bureau. Many Del City homeowners are unaware that hail damage may qualify for a full insurance-funded replacement rather than just a patch repair. Redline provides free storm-damage inspections and handles the entire claims process at no upfront cost to the homeowner.`,

    faqs: [
      {
        question: 'Can I afford a new roof in Del City?',
        answer:
          'Most Del City homes are compact, which keeps replacement costs lower than larger metro homes — typically $7,000 to $12,000. If your roof has storm damage, insurance may cover the entire replacement minus your deductible. Redline also offers financing options so you can protect your home without a large upfront payment.',
      },
      {
        question: 'My Del City roof is original from the 1950s. Does it need to be replaced?',
        answer:
          'If your roof is truly original from the 1950s, it is well past any reasonable lifespan and almost certainly has underlying decking issues. A full tear-off and replacement is the only responsible option at that point. Redline will inspect it for free and give you an honest assessment with a written estimate.',
      },
      {
        question: 'Does Redline pressure homeowners into buying a new roof?',
        answer:
          'Never. If a repair will solve your problem and give you five more years, we will recommend the repair. If the roof needs to come off, we will explain exactly why with photos and measurements. You make the decision — we provide the information.',
      },
      {
        question: 'How long does a Del City roof replacement take?',
        answer:
          'Most Del City homes are 1,200 to 1,800 square feet, which means a typical replacement is completed in a single day. We arrive by 7 a.m. and usually have the final ridge cap nailed by mid-afternoon.',
      },
    ],
  },

  /* ============================================================== */
  /*  PIEDMONT                                                       */
  /* ============================================================== */
  piedmont: {
    lede: `Piedmont sits on the rural-suburban fringe of northwest Oklahoma City, where acreage properties with larger homes define the landscape. Redline Roofing & Restoration serves Piedmont homeowners who need a contractor experienced with the unique challenges of roofing on multi-acre lots — from longer material delivery runs to accommodating metal buildings and outbuildings alongside the primary residence.`,

    whyHeading: 'Why Piedmont homeowners call Redline',
    whyBody: `Piedmont properties are typically larger than metro-average homes, often 2,500 to 5,000 square feet, sitting on one to ten acres. These larger footprints mean more roofing material, longer installation timelines, and more complex logistics. Driveways can be a quarter mile long, which affects material delivery and dumpster placement. Redline plans every Piedmont job carefully, coordinating delivery trucks and dumpster drops to minimize disruption to your property.

Many Piedmont homeowners also have metal buildings, shops, or barns that need roofing attention. Redline handles both residential shingle work and metal roof systems, so you can get everything done with one contractor. Canadian County permits are required for all re-roofing work in Piedmont, and we handle the entire process.

The Piedmont school district is one of the most desirable in the metro, drawing families who invest heavily in their properties. A solid, warrantied roof protects that investment and contributes to resale value. Redline's lifetime workmanship warranty and manufacturer certifications give Piedmont homeowners the peace of mind that their roof was installed to the highest standard.`,

    projects: [
      {
        title: 'Piedmont Acreage — Large Home Replacement',
        description:
          'Replaced the roof on a 4,200 sq ft home on 5 acres. The steep 10/12 pitch and 22 roof planes required a two-day installation. Installed GAF Timberline AS II in Weathered Wood with ice-and-water shield in all valleys. Coordinated material delivery around the long gravel driveway.',
      },
      {
        title: 'Piedmont Ranch — Hail Damage and Metal Barn',
        description:
          'A spring storm damaged both the home and a 40x60 metal barn on the same property. Replaced residential shingles with Owens Corning Duration in Brownwood and re-screwed and sealed the metal barn roof. One contractor, one insurance claim, one solution.',
      },
      {
        title: 'North Piedmont — New Construction',
        description:
          'Installed CertainTeed Landmark Pro in Pewter on a 3,800 sq ft new build. Included ridge vent, starter strip, and 6-inch seamless gutters in bronze. Builder was impressed with the one-day installation turnaround.',
      },
    ],

    insuranceBody: `Piedmont homeowners in Canadian County commonly carry policies with Shelter Insurance, State Farm, and Oklahoma Farm Bureau. Acreage properties sometimes have farm or ranch policies with different coverage structures than standard homeowner policies. Redline understands these differences and ensures the claims process accounts for the full scope of work, including any outbuilding repairs covered under the same policy.`,

    faqs: [
      {
        question: 'Does Redline work on acreage properties in Piedmont?',
        answer:
          'Absolutely. We regularly work on multi-acre Piedmont properties and are experienced with the logistics of material delivery, dumpster placement, and crew access on larger lots with long driveways.',
      },
      {
        question: 'Can Redline handle my metal barn roof and my home roof?',
        answer:
          'Yes. We handle both residential shingle roofs and metal roofing systems. If a storm damages both your home and your outbuildings, we can manage everything under one contract and one insurance claim.',
      },
      {
        question: 'How long does a large Piedmont home take to roof?',
        answer:
          'Homes over 3,500 square feet or with complex rooflines typically take two days. We will provide an accurate timeline during your free estimate based on your specific property.',
      },
      {
        question: 'Does Piedmont require a roofing permit?',
        answer:
          'Yes. All re-roofing work in the Piedmont area requires a Canadian County permit. Redline handles the entire permitting and inspection process on your behalf.',
      },
    ],
  },

  /* ============================================================== */
  /*  CHOCTAW                                                        */
  /* ============================================================== */
  choctaw: {
    lede: `Choctaw is an east-metro community where rural residential living meets suburban convenience. With a mix of acreage homes set back from winding roads and newer subdivisions served by the Choctaw-Nicoma Park school district, this Oklahoma County city has a roofing landscape all its own. Redline Roofing & Restoration brings our full-service approach to Choctaw homeowners who want a trusted, local roofing contractor.`,

    whyHeading: 'Why Choctaw homeowners call Redline',
    whyBody: `Choctaw's housing stock ranges from older rural homes on multi-acre lots to newer subdivision homes built in the 2000s and 2010s. The older properties often have roofs that have weathered decades of Oklahoma storms without proper maintenance or upgrades. The newer homes may still have builder-grade shingles that underperform against hail.

Redline serves all of Choctaw with the same commitment to quality. We handle Oklahoma County permitting, coordinate with all insurance carriers, and deliver manufacturer-certified installations backed by our lifetime workmanship warranty. Choctaw homeowners appreciate our honest assessments, transparent pricing, and clean-site policy.

The Choctaw-Nicoma Park school district draws families who invest in their homes, and a properly installed roof protects that investment for decades. Whether your Choctaw property is a 1980s ranch on five acres or a 2015 build in a new subdivision, Redline has the experience and equipment to handle the job.`,

    projects: [
      {
        title: 'Rural Choctaw — Acreage Home Replacement',
        description:
          'Replaced a 20-year-old roof on a 2,800 sq ft home on 3 acres. Long driveway access was planned in advance for material delivery. Installed Owens Corning Duration in Brownwood with improved ridge ventilation.',
      },
      {
        title: 'Choctaw Subdivision — Hail Damage Claim',
        description:
          'Documented storm damage on a 2012-built home and coordinated with State Farm for a full replacement. Installed GAF Timberline HDZ in Pewter Gray. Completed in one day with full debris cleanup.',
      },
      {
        title: 'East Choctaw — Emergency Tarp and Repair',
        description:
          'Responded to a wind-damage emergency where a large tree branch punctured the roof decking. Tarped the damaged section within three hours of the call and returned the next day for permanent repair.',
      },
    ],

    insuranceBody: `Choctaw homeowners carry policies with State Farm, Allstate, Oklahoma Farm Bureau, and other carriers common in Oklahoma County. Redline handles the full insurance claims process, from initial damage documentation through adjuster meetings and supplement filing. We ensure every Choctaw homeowner receives a fair settlement for legitimate storm damage.`,

    faqs: [
      {
        question: 'Does Redline serve all of Choctaw?',
        answer:
          'Yes. We serve every part of Choctaw, from rural acreage properties along SE 15th Street to the newer subdivisions near Choctaw Road. Our crews work in the east metro regularly.',
      },
      {
        question: 'How does living on acreage affect my roofing project?',
        answer:
          'Acreage properties require careful planning for material delivery and dumpster placement, especially with long or unpaved driveways. Redline coordinates all logistics before installation day to ensure a smooth project with no access issues.',
      },
      {
        question: 'What shingles hold up best in Choctaw?',
        answer:
          'We recommend architectural shingles at minimum, with Class 4 impact-resistant shingles as the top choice for Oklahoma County\'s hail-prone weather. IR shingles earn insurance premium discounts and resist hail damage significantly better than standard products.',
      },
      {
        question: 'Does Choctaw require a roofing permit?',
        answer:
          'Yes. Roofing projects in Choctaw require an Oklahoma County permit. Redline pulls the permit and schedules the inspection on your behalf — you do not have to deal with county offices.',
      },
    ],
  },

  /* ============================================================== */
  /*  NEWCASTLE                                                      */
  /* ============================================================== */
  newcastle: {
    lede: `Newcastle is the south metro's hottest growth corridor, and new construction is reshaping this McClain County community year by year. With easy access to the H.E. Bailey Turnpike and proximity to Norman and south OKC, Newcastle has attracted thousands of new homeowners over the past decade. Redline Roofing & Restoration serves both Newcastle's new builds and its established homes with the same standard of quality.`,

    whyHeading: 'Why Newcastle homeowners call Redline',
    whyBody: `Newcastle's new construction boom means many homes are still under their original builder warranty, but builder-grade roofing materials often underperform in Oklahoma's severe weather. Hail damage does not care how new your home is, and many Newcastle homeowners have already filed their first insurance claim within five years of moving in.

For established Newcastle homes, roof aging and storm damage are the most common triggers for replacement. Redline provides free inspections, honest assessments, and manufacturer-certified installations that come with a lifetime workmanship warranty. We handle McClain County permitting and work with all insurance carriers.

The Newcastle school district is a growing draw for families, and a solid roof is the foundation of home value in this rapidly appreciating market. Whether you are a first-time homeowner in a new Newcastle subdivision or you have been here for 20 years, Redline is your local roofing partner.`,

    projects: [
      {
        title: 'New Newcastle Subdivision — First Hail Claim',
        description:
          'A 2020-built home took hail damage just four years after construction. Documented 25+ impacts per test square and coordinated with State Farm for a full replacement. Upgraded from builder-grade three-tab to Owens Corning Duration in Teak.',
      },
      {
        title: 'Established Newcastle — Aging Roof Replacement',
        description:
          'Replaced a 19-year-old roof on a 2,200 sq ft home with GAF Timberline HDZ in Shakewood. Included new drip edge, synthetic underlayment, and improved soffit ventilation. Completed in one day.',
      },
      {
        title: 'Newcastle Acreage — Large Home and Shop',
        description:
          'Re-roofed a 3,400 sq ft home and a 30x50 metal shop on a 2-acre property. Installed CertainTeed Landmark Pro on the home and re-screwed the metal shop roof. Both structures covered under one insurance claim.',
      },
    ],

    insuranceBody: `Newcastle homeowners in McClain County carry policies with State Farm, Oklahoma Farm Bureau, Shelter Insurance, and other carriers. New construction homes may still have builder warranty coverage for certain defects, but storm damage falls under homeowner insurance. Redline navigates both scenarios and ensures Newcastle homeowners receive every dollar their policy allows.`,

    faqs: [
      {
        question: 'My Newcastle home is brand new. Can it still have roof damage?',
        answer:
          'Absolutely. Hail does not discriminate based on the age of your home. Even brand-new shingles can be damaged by golf-ball-sized or larger hail. If a storm hits Newcastle, call Redline for a free inspection regardless of how new your home is.',
      },
      {
        question: 'Does McClain County require a roofing permit?',
        answer:
          'Yes. All re-roofing work in the Newcastle area requires a McClain County permit. Redline handles the entire permitting and inspection process so you do not have to worry about it.',
      },
      {
        question: 'Is Newcastle a good place to invest in a high-quality roof?',
        answer:
          'Newcastle is one of the fastest-appreciating markets in the metro. A quality roof with a lifetime warranty protects your investment and adds to resale value. We recommend architectural shingles at minimum, with impact-resistant products as the ideal choice.',
      },
      {
        question: 'How quickly can Redline schedule a Newcastle project?',
        answer:
          'We typically schedule Newcastle projects within one to two weeks of signing. Emergency storm response is available 24/7. We run crews in the south metro regularly and can often accommodate faster timelines during non-peak season.',
      },
    ],
  },

  /* ============================================================== */
  /*  NICHOLS HILLS                                                  */
  /* ============================================================== */
  'nichols-hills': {
    lede: `Nichols Hills is one of Oklahoma's most prestigious residential communities, and the roofing work here demands a level of precision and material quality that sets it apart from the rest of the metro. Homes in Nichols Hills range from $500,000 to well over $3 million, with steep complex rooflines, multi-valley designs, turrets, and architectural details that require master-level craftsmanship. Redline Roofing & Restoration is the contractor Nichols Hills homeowners trust with their most valuable asset.`,

    whyHeading: 'Why Nichols Hills homeowners call Redline',
    whyBody: `Nichols Hills rooflines are among the most complex in the metro. Multi-valley intersections, steep pitches exceeding 12/12, dormers, turrets, and decorative ridge details all require crews who understand how to flash, seal, and shingle these features properly. A single missed flashing detail on a $2 million home can lead to thousands of dollars in interior water damage. Redline's crews are trained specifically for high-end residential work and approach every Nichols Hills project with meticulous attention to detail.

Material selection in Nichols Hills goes beyond standard architectural shingles. Many homeowners opt for synthetic slate, synthetic tile, premium designer shingles, or standing-seam metal accents. Redline installs all premium product lines including GAF Grand Sequoia, CertainTeed Grand Manor, DaVinci synthetic slate, and standing-seam metal in copper and zinc finishes. Every installation is backed by the manufacturer's highest-tier warranty because of our certification status.

Nichols Hills has strict HOA and architectural review requirements. Shingle color, material type, and even the appearance of ridge vents must meet community standards. Redline handles the architectural review submission process for Nichols Hills homeowners, providing sample boards, spec sheets, and color mockups to ensure approval before any work begins.

The September 2024 supercell tracked directly through Nichols Hills, and many of the community's mature trees sent debris across rooftops alongside the hail damage. Redline responded quickly, inspecting dozens of Nichols Hills properties and coordinating with carriers including State Farm, USAA, and Chubb for high-value claims.`,

    projects: [
      {
        title: 'Grand Boulevard Estate — Designer Shingle Installation',
        description:
          'Installed GAF Grand Sequoia in Weathered Wood on a 5,200 sq ft estate with 18 individual roof planes, three turrets, and a copper-accented bay window roof. The project required four days and a specialized crew experienced with steep-slope safety systems.',
      },
      {
        title: 'Nichols Hills Park — Synthetic Slate Replacement',
        description:
          'Replaced aging natural slate with DaVinci Bellaforte synthetic slate in Castle Gray on a 4,000 sq ft Tudor. Synthetic slate provided the same aesthetic at a fraction of the weight, eliminating the need for structural reinforcement.',
      },
      {
        title: 'Nichols Hills Plaza Area — Storm Damage Claim',
        description:
          'The September 2024 supercell damaged premium architectural shingles on a 3,800 sq ft home. Coordinated with Chubb Insurance for a full replacement with CertainTeed Grand Manor in Weathered Wood. Claim included supplemental line items for the complex roofline.',
      },
    ],

    insuranceBody: `Nichols Hills homeowners often carry policies with premium carriers including Chubb, PURE, AIG Private Client, State Farm, and USAA. High-value home policies have unique claims processes, higher coverage limits, and specific documentation requirements. Redline's team is experienced with high-value claims and provides the detailed documentation, material specifications, and professional photography these carriers require. We ensure that premium materials and complex labor are accurately reflected in every claim.`,

    faqs: [
      {
        question: 'Does Redline have experience with high-end roofing materials?',
        answer:
          'Yes. We install synthetic slate, synthetic tile, designer shingles, standing-seam metal, and premium architectural shingles. Our crews are trained on steep-slope safety systems and complex flashing details that high-end homes require. We carry certifications from GAF, Owens Corning, CertainTeed, and Malarkey at the highest tier.',
      },
      {
        question: 'How does Redline handle Nichols Hills HOA requirements?',
        answer:
          'We manage the entire architectural review process. Before any work begins, we submit material specifications, color samples, and installation details to the HOA review committee. We have worked with the Nichols Hills community standards extensively and know what the committee expects.',
      },
      {
        question: 'Are Nichols Hills roofs more expensive to replace?',
        answer:
          'Yes, due to the larger home sizes, steeper pitches, complex rooflines, and premium material selections. A typical Nichols Hills replacement ranges from $25,000 to $75,000 or more depending on size, complexity, and material choice. However, insurance-funded replacements after storm damage typically cost you only your deductible.',
      },
      {
        question: 'Can storm damage really affect premium roofing materials?',
        answer:
          'Absolutely. Even synthetic slate and designer shingles can be damaged by large hail. The September 2024 supercell produced baseball-sized hail that damaged roofing materials of all types across Nichols Hills. Premium materials may resist moderate hail better than standard products, but severe events can damage any roof.',
      },
    ],
  },

  /* ============================================================== */
  /*  THE VILLAGE                                                    */
  /* ============================================================== */
  'the-village': {
    lede: `The Village is a charming central OKC suburb defined by its mid-century character and walkable neighborhoods. Most homes here were built in the 1950s and 1960s, giving The Village a cohesive architectural identity — and a significant population of aging roofs that are at or past their functional lifespan. Redline Roofing & Restoration has been helping Village homeowners upgrade their rooftops while preserving the character of this beloved community.`,

    whyHeading: 'Why The Village homeowners call Redline',
    whyBody: `The Village's mid-century housing stock presents specific roofing considerations. Most homes are single-story ranches or split-levels with low-to-moderate pitches, compact footprints, and close lot lines. Many are on their original or second roof, which means a full tear-off is necessary before new shingles can go on.

These 1950s and 1960s homes often have original skip sheathing or early plywood decking that may be deteriorated, especially on north-facing slopes where moisture lingers. Redline includes a thorough decking inspection in every Village estimate and replaces any compromised material before the new roof goes on. We also address ventilation deficiencies — many original Village homes have inadequate attic airflow that shortens shingle life and increases energy costs.

The Village school district and the community's walkable, tree-lined streets make it one of the most desirable central OKC neighborhoods. Protecting your home's value with a properly installed, warrantied roof is one of the best investments a Village homeowner can make. Redline delivers manufacturer-certified installations with a lifetime workmanship warranty on every Village project.

Compact lot sizes in The Village mean our crews need to manage material staging and debris carefully. We use tarps to protect adjacent landscaping, place dumpsters strategically to avoid blocking driveways or sidewalks, and magnetically sweep the entire property and street for nails before leaving. Village homeowners consistently praise our clean-site approach.`,

    projects: [
      {
        title: 'The Village Ranch — Original Roof Replacement',
        description:
          'Removed the original 1959 roof from a 1,500 sq ft ranch — the first replacement in the home\'s 65-year history. Replaced all decking on the north slope and installed GAF Timberline HDZ in Barkwood with new ridge vent and drip edge.',
      },
      {
        title: 'The Village Split-Level — Storm Damage Claim',
        description:
          'Hail damage triggered a full replacement on a 1963 split-level. Coordinated with Allstate for a complete tear-off and re-roof with Owens Corning Duration in Estate Gray. Included new pipe boots, flashing, and improved attic ventilation.',
      },
      {
        title: 'Central Village — Ventilation Retrofit and Re-Roof',
        description:
          'A 1957 ranch had zero ridge ventilation and only two gable vents. During the re-roof, we cut a continuous ridge vent, added soffit intake vents, and installed CertainTeed Landmark in Weathered Wood. The homeowner reported a noticeable reduction in summer cooling costs.',
      },
    ],

    insuranceBody: `The Village homeowners carry policies with State Farm, Allstate, Oklahoma Farm Bureau, and other standard carriers. Because many Village homes are valued in the moderate range, it is important that insurance estimates accurately capture all necessary work — including decking replacement and ventilation upgrades that older homes require. Redline ensures every legitimate line item is included in the claim so Village homeowners receive a fair settlement.`,

    faqs: [
      {
        question: 'My Village home still has its original 1950s roof. Is it time?',
        answer:
          'If your roof is truly original from the 1950s or 1960s, it is decades past any reasonable lifespan and almost certainly has decking deterioration underneath. A full tear-off and replacement is the only responsible option. Call Redline for a free inspection — we will show you exactly what we find and provide a written estimate within 24 hours.',
      },
      {
        question: 'Do Village homes need special roofing attention?',
        answer:
          'Yes. Mid-century homes often have skip sheathing, inadequate ventilation, and non-standard framing details. Redline addresses all of these during the replacement process. We over-deck skip sheathing, add proper ridge and soffit ventilation, and ensure the new roof system meets current building codes.',
      },
      {
        question: 'Will a new roof change the look of my Village home?',
        answer:
          'Modern architectural shingles come in a wide range of colors and profiles that complement mid-century architecture beautifully. We will help you choose a shingle color that enhances your home\'s original character. Many Village homeowners are pleasantly surprised by how much a new roof improves their home\'s curb appeal.',
      },
      {
        question: 'How does Redline handle tight lot lines in The Village?',
        answer:
          'Our crews are experienced with compact properties. We use tarps to protect adjacent yards and landscaping, place dumpsters carefully to avoid blocking sidewalks and driveways, and magnetically sweep the entire property and street frontage for nails. We leave your property and your neighbors\' properties clean.',
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Static params + metadata                                           */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return SITE.serviceAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const area = SITE.serviceAreas.find((a) => a.slug === params.slug);
  if (!area) return {};

  return {
    title: `Roofing in ${area.name}, Oklahoma`,
    description: `Redline Roofing & Restoration provides roof replacement, storm damage repair, and free inspections in ${area.name}, OK. Serving ${area.county} with certified crews and lifetime warranties.`,
    alternates: {
      canonical: `${SITE.url}/service-areas/${area.slug}`,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function CityPage({
  params,
}: {
  params: { slug: string };
}) {
  const area = SITE.serviceAreas.find((a) => a.slug === params.slug);
  if (!area) notFound();

  const content = CITY_CONTENT[params.slug];
  if (!content) notFound();

  const breadcrumbItems = [
    { name: 'Service Areas', href: '/service-areas' },
    { name: area.name, href: `/service-areas/${area.slug}` },
  ];

  const jsonLd = [
    {
      '@type': 'Service',
      name: `Roofing Services in ${area.name}, Oklahoma`,
      description: `Professional roof replacement, repair, and storm damage restoration in ${area.name}, OK.`,
      provider: {
        '@type': 'RoofingContractor',
        name: SITE.name,
        url: SITE.url,
        telephone: SITE.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.state,
          postalCode: SITE.address.zip,
          addressCountry: 'US',
        },
      },
      areaServed: {
        '@type': 'City',
        name: area.name,
        containedInPlace: {
          '@type': 'State',
          name: 'Oklahoma',
        },
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.zip,
        addressCountry: 'US',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: content.faqs.map((faq) => ({
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
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE.url}/service-areas` },
        { '@type': 'ListItem', position: 3, name: area.name, item: `${SITE.url}/service-areas/${area.slug}` },
      ],
    },
  ];

  return (
    <>
      <Jsonld data={{ '@context': 'https://schema.org', '@graph': jsonLd }} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header>
          <p className="text-sm font-medium uppercase tracking-wide text-copper">
            {area.county} &middot; ZIP {area.zip}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Roofing in {area.name}, Oklahoma | Redline
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-deep/80">
            {content.lede}
          </p>
        </header>

        {/* Why section */}
        <section className="mt-14" aria-labelledby="why-heading">
          <h2
            id="why-heading"
            className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
          >
            {content.whyHeading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-deep/80">
            {content.whyBody.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Recent projects */}
        <section className="mt-14" aria-labelledby="projects-heading">
          <h2
            id="projects-heading"
            className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Recent {area.name} projects
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {content.projects.map((project, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-deep/10 bg-white p-6 shadow-soft"
              >
                <h3 className="font-display text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-deep/70">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Insurance */}
        <section className="mt-14" aria-labelledby="insurance-heading">
          <h2
            id="insurance-heading"
            className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
          >
            {area.name} insurance and financing partners
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-deep/80">
            {content.insuranceBody}
          </p>
        </section>

        {/* FAQs */}
        <section className="mt-14" aria-labelledby="faq-heading">
          <h2
            id="faq-heading"
            className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Frequently asked questions from {area.name} homeowners
          </h2>
          <div className="mt-8">
            <FaqAccordion items={content.faqs} />
          </div>
        </section>

        {/* Lead form */}
        <section className="mt-14 mb-16" aria-labelledby="contact-heading">
          <h2
            id="contact-heading"
            className="mb-6 font-display text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Get your free roof inspection in {area.name}
          </h2>
          <LeadForm source={`service-area-${area.slug}`} />
        </section>
      </article>

      <CtaBand />
    </>
  );
}
