import { SITE } from './site-config';

export interface CityPageData {
  slug: string;
  name: string;
  county: string;
  zip: string;
  lede: string;
  whyTitle: string;
  whyBody: string;
  insuranceNote: string;
  faqs: { question: string; answer: string }[];
}

export const serviceAreas = SITE.serviceAreas;

export const cityPages: CityPageData[] = [
  // ───────────────────────────────────────────────
  // OKLAHOMA CITY — 500+ words
  // ───────────────────────────────────────────────
  {
    slug: 'oklahoma-city',
    name: 'Oklahoma City',
    county: 'Oklahoma County',
    zip: '73101-73199',
    lede: 'Oklahoma City sits at the crossroads of Tornado Alley and the nation\'s most active hail corridor. From the historic Paseo Arts District to new construction in far-northwest OKC, every roof in the metro faces the same enemy: spring supercells that can drop softball-sized hail with almost no warning. Redline Roofing & Restoration has been headquartered on NW 23rd Street since 2007 — we are Oklahoma City\'s roofing contractor.',
    whyTitle: 'Why Oklahoma City Homeowners Choose Redline',
    whyBody: `Oklahoma City is our home. Our 23rd Street office is less than 15 minutes from Bricktown, Mesta Park, and Lake Hefner — which means when a storm crosses I-44 at 2 a.m., our crews are staged and tarping before most roofers even answer the phone. That proximity matters more than any marketing claim we could make.

OKC has one of the most complex roofing environments in the country. Homes in Heritage Hills and Crown Heights feature early-1900s wood decking, steep pitches, and decorative dormers that require craftsmanship you cannot rush. Neighborhoods built in the 1960s and 1970s — Warr Acres, Council Crossing, Southern Hills — often have original plywood decking that has been soaked and dried dozens of times. New builds in far-northwest OKC near Deer Creek and along the Kilpatrick Turnpike use modern OSB and engineered trusses. Each substrate demands a different approach, and each one is something our crews have done thousands of times.

We are a GAF Master Elite, Owens Corning Platinum Preferred, and CertainTeed SELECT ShingleMaster contractor — the only OKC roofer holding all three designations simultaneously. That means you have your pick of the three largest shingle manufacturers in North America, each with their top-tier warranty, installed by certified crews who meet manufacturer training standards every year.

Our insurance claims team has recovered over $4 million in supplemental claim value for Oklahoma City homeowners in the last three years alone. We speak Xactimate fluently, we understand Oklahoma's 36 O.S. § 1250.5 filing deadlines, and we meet your adjuster on the roof — not over the phone. When State Farm, Farmers, or USAA adjusters see our drone imagery and line-item estimates, the conversation changes because we speak their language.

Oklahoma City requires a roofing permit for any reroof over 500 square feet. As of August 2025, the fee is $94.50 and includes a final inspection. We pull that permit in your name, schedule the inspection, and do not collect final payment until the city inspector signs off. That is our promise and it is printed on every contract.

Whether you live in a $150,000 ranch near SW 89th or a $600,000 estate in Gaillardia, the Redline process is the same: free drone inspection, written Xactimate estimate, transparent pricing, permitted installation, manufacturer warranty registration, and a final walkthrough with our project manager. No shortcuts, no storm-chaser games, no surprises on the invoice.`,
    insuranceNote: 'Oklahoma City is served by all major carriers including State Farm, Farmers, USAA, Allstate, Liberty Mutual, and Oklahoma Farm Bureau. Most OKC policies are RCV (Replacement Cost Value), meaning your insurer pays the full replacement cost minus your deductible. We meet your adjuster on-site and handle supplemental documentation to maximize your settlement.',
    faqs: [
      {
        question: 'Do I need a permit for a roof replacement in Oklahoma City?',
        answer: 'Yes. The City of Oklahoma City requires a building permit ($94.50) for any reroof over 500 sq ft on a single-family home or duplex. The permit includes a mandatory final inspection. Redline pulls every permit in the homeowner\'s name and our price always includes the permit fee and inspection scheduling.',
      },
      {
        question: 'How long does a typical OKC roof replacement take?',
        answer: 'Most Oklahoma City homes are completed in one to two days. Larger homes — especially in Nichols Hills, Gaillardia, or Heritage Hills with steep pitches and complex rooflines — may take three days. We tarp overnight and do a magnet sweep of the entire property at the end of each workday.',
      },
      {
        question: 'Which insurance carriers do you work with in Oklahoma City?',
        answer: 'We work with every major carrier that writes homeowners policies in Oklahoma: State Farm, Farmers, USAA, Allstate, Liberty Mutual, Oklahoma Farm Bureau, Shelter, American Family, and more. We provide Xactimate-format estimates that match your insurer\'s pricing software and we meet your adjuster on the roof.',
      },
      {
        question: 'What areas of Oklahoma City do you serve?',
        answer: 'Every zip code from 73101 to 73199. From Deer Creek and Edmond border in the north to Moore border in the south, from Yukon border in the west to Midwest City border in the east. Our 23rd Street headquarters puts us within 20 minutes of virtually any OKC address.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // EDMOND — 500+ words
  // ───────────────────────────────────────────────
  {
    slug: 'edmond',
    name: 'Edmond',
    county: 'Oklahoma County',
    zip: '73003, 73012, 73013, 73034',
    lede: 'Edmond consistently lands in the top five most hail-impacted cities in the United States. From the established neighborhoods near UCO and Downtown Edmond to the fast-growing developments along Coffee Creek and Covell Road, Edmond roofs take a beating every spring. Redline Roofing & Restoration has been protecting Edmond homes since 2007 — backed by the best manufacturer warranties in the industry.',
    whyTitle: 'Why Edmond Homeowners Trust Redline',
    whyBody: `Edmond is one of the most desirable places to live in Oklahoma — top-rated schools, safe neighborhoods, and property values that consistently outpace the metro average. But Edmond also sits squarely in the path of the most frequent severe hail in the country. The National Weather Service has recorded significant hail events (1 inch or larger) in the Edmond zip codes more than 120 times in the past decade. That is not a typo.

This means Edmond homeowners deal with insurance claims more often than almost any community in America. And that means you need a roofer who understands not just how to install shingles, but how to document damage, write Xactimate-format supplements, and negotiate with adjusters who are under pressure to minimize payouts.

Redline has handled over 800 insurance claims in Edmond alone. We know the difference between a cosmetic bruise and functional damage. We know which adjusters are fair and which ones need more documentation. We know that State Farm's Edmond office processes claims differently than their Norman office. These details matter and they directly affect the size of your check.

The homes in Edmond vary enormously. Older neighborhoods near Boulevard and UCO have 1960s-era ranch homes with original 3-tab shingles on plywood decking. Developments from the 1990s and 2000s — Oak Tree, Spring Creek, Fairfax — feature larger homes with steeper pitches, architectural shingles, and more complex flashing requirements. New construction north of Covell and east of I-35 uses modern building codes and OSB decking. Our crews are trained and equipped for every generation of Edmond home.

We strongly recommend Class 4 impact-resistant shingles for every Edmond roof. The math is simple: State Farm offers up to 30% off your premium for Class 4 shingles. On a typical Edmond home with a $2,400 annual premium, that is $720 per year in savings. The Class 4 upgrade typically costs $3,000–$5,000 more than standard architectural shingles. That means the upgrade pays for itself in four to seven years — and in the meantime, your roof is dramatically more resistant to the hail that hits Edmond every single spring.

We are proud to be the roofer of choice for many Edmond families, including homeowners in Deer Creek, Coffee Creek Crossing, Rose Creek, and Summit Lakes. Our work is backed by GAF Golden Pledge, Owens Corning Platinum Protection, and CertainTeed SureStart Plus warranties — each transferable when you sell your home.

Every Edmond job includes a free drone inspection, a written estimate with line-item pricing, a city-permitted installation (where required by jurisdiction), a manufacturer warranty registration, and a final walkthrough with our project manager. We do not collect final payment until you are satisfied and the work passes inspection.`,
    insuranceNote: 'Edmond is one of the most frequently hail-impacted cities in the U.S. Most Edmond homeowners carry RCV policies with State Farm, Farmers, USAA, or Allstate. We have handled over 800 insurance claims in Edmond zip codes and our average supplemented settlement is 27% higher than the insurer\'s initial estimate.',
    faqs: [
      {
        question: 'How often does Edmond get hail damage?',
        answer: 'The National Weather Service has recorded over 120 significant hail events (1 inch or larger) in Edmond zip codes in the past decade. Edmond consistently ranks among the top five most hail-impacted cities in the United States. If you own a home in Edmond, it is not a question of if your roof will be hit — it is when.',
      },
      {
        question: 'Are Class 4 shingles worth it in Edmond?',
        answer: 'Absolutely. State Farm offers up to 30% off your premium for Class 4 impact-resistant shingles. On a typical Edmond home with a $2,400 annual premium, that saves $720/year. The Class 4 upgrade costs $3,000–$5,000 more than standard shingles, so it pays for itself in 4–7 years while dramatically reducing future hail damage.',
      },
      {
        question: 'Do you serve all Edmond zip codes?',
        answer: 'Yes. We serve 73003, 73012, 73013, and 73034 — from downtown Edmond near UCO all the way north to Deer Creek and Coffee Creek. Our OKC headquarters is less than 20 minutes from any Edmond address.',
      },
      {
        question: 'How do I know if my Edmond roof has hail damage?',
        answer: 'Look for dark spots or bruises on shingles, dented gutters or downspouts, cracked or missing shingle granules, and dings on metal flashing or roof vents. However, many hail impacts are invisible from the ground. We offer a free drone inspection that captures high-resolution images of every slope — no ladder, no guessing.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // NORMAN — 500+ words
  // ───────────────────────────────────────────────
  {
    slug: 'norman',
    name: 'Norman',
    county: 'Cleveland County',
    zip: '73019, 73026, 73069, 73071, 73072',
    lede: 'Norman is home to the University of Oklahoma, the National Weather Center, and some of the most severe weather research on the planet. Ironically, it is also one of the cities most frequently damaged by the storms those scientists study. Redline Roofing & Restoration has been replacing and repairing Norman roofs since 2007 — from the historic homes near Campus Corner to new builds along 36th Avenue SE.',
    whyTitle: 'Why Norman Homeowners Choose Redline',
    whyBody: `Norman holds a unique position in Oklahoma's storm landscape. The city is home to the Storm Prediction Center, the National Severe Storms Laboratory, and the National Weather Center — the world's most concentrated collection of severe weather expertise. Norman residents understand storms better than almost anyone. And yet, when a supercell drops two-inch hail on your neighborhood at 11 p.m. on a Tuesday, understanding the meteorology does not fix your roof.

That is where Redline comes in. We have been serving Norman since 2007 and we have completed over 600 roofing projects in Cleveland County. We understand Norman's housing stock intimately. The neighborhoods near Campus Corner, Lindsey Street, and Miller Avenue feature charming 1940s–1960s homes with original wood decking, low-slope sections, and character details that demand careful work. The 1980s and 1990s developments in west Norman — Brookhaven, Cedar Lane, Woodcreek — have standard-pitch homes with plywood decking and architectural shingles. The fast-growing areas east of I-35 and south of Robinson Street feature modern construction with OSB decking, steeper pitches, and energy-code requirements.

Norman falls under Cleveland County jurisdiction for unincorporated areas and the City of Norman permitting office for homes within city limits. We handle all permitting for every Norman project and schedule the required inspections so you never have to take a day off work to wait for an inspector.

Insurance claims in Norman follow the same patterns we see across the metro, but with one notable difference: Norman has a higher-than-average concentration of USAA policyholders due to the military community and OU's ROTC programs. USAA is generally a fair carrier, but their claims process is entirely virtual — they often use satellite imagery instead of sending a field adjuster. When we supplement a USAA claim with our drone imagery and Xactimate line items, the average increase is $4,200 over the initial satellite-based estimate.

We also serve a significant number of rental properties and investment homes in Norman. Landlords and property managers appreciate our transparent pricing, our ability to coordinate directly with tenants for access scheduling, and our detailed photo documentation that satisfies both insurance companies and property management records.

For Norman homeowners considering an upgrade, we strongly recommend Class 4 impact-resistant shingles. Norman sees significant hail nearly every year and the insurance premium discounts — up to 30% with State Farm, up to 20% with USAA — make the upgrade a smart financial decision that typically pays for itself in three to five years.

Every Norman project includes our standard Redline process: free drone inspection, written Xactimate estimate, transparent pricing, permitted installation, manufacturer warranty registration, and a final walkthrough. We do not cut corners and we do not collect final payment until the work passes inspection and you are satisfied. That is the Redline Promise.`,
    insuranceNote: 'Norman has a high concentration of USAA policyholders due to the military and university community. USAA often uses satellite imagery for claims. Our drone inspection and Xactimate supplements average $4,200 more than initial satellite-based estimates. We also work extensively with State Farm, Farmers, Allstate, and Oklahoma Farm Bureau in the Norman area.',
    faqs: [
      {
        question: 'Does Norman require a roofing permit?',
        answer: 'The City of Norman requires a building permit for roof replacements within city limits. The fee varies by project scope. We handle all permitting and inspection scheduling for every Norman project — you do not need to visit City Hall or take time off work.',
      },
      {
        question: 'Do you work with USAA claims in Norman?',
        answer: 'Yes. Norman has a high concentration of USAA policyholders. USAA often uses satellite imagery instead of field adjusters, which frequently underestimates damage. Our drone inspection and Xactimate supplements average $4,200 more than initial satellite-based estimates.',
      },
      {
        question: 'How quickly can you respond after a storm in Norman?',
        answer: 'Our OKC headquarters is 20 minutes from Norman via I-35. For emergency tarping we respond within 24 hours including nights and weekends. For scheduled inspections and estimates, we typically arrive within 24–48 hours of your call.',
      },
      {
        question: 'Do you handle rental property roofs in Norman?',
        answer: 'Yes. We work with landlords and property managers across Norman. We coordinate directly with tenants for access, provide detailed photo documentation for insurance and property records, and offer volume pricing for investors with multiple properties.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // MOORE — 500+ words
  // ───────────────────────────────────────────────
  {
    slug: 'moore',
    name: 'Moore',
    county: 'Cleveland County',
    zip: '73153, 73160, 73170',
    lede: 'Moore, Oklahoma has endured more devastating tornadoes than almost any city its size in the world — including the catastrophic EF5 events of 1999, 2013, and the EF4 of 2015. But it is hail, not tornadoes, that damages the most roofs in Moore every year. Redline Roofing & Restoration has been rebuilding Moore since 2007, and we understand this community\'s resilience like no out-of-state storm chaser ever will.',
    whyTitle: 'Why Moore Homeowners Trust Redline',
    whyBody: `Moore is a community defined by resilience. After the May 20, 2013 EF5 tornado leveled entire neighborhoods from the Warren Theatre to Plaza Towers Elementary, Moore rebuilt — stronger, smarter, and with building codes that now set the national standard. The City of Moore adopted the International Residential Code with enhanced wind and impact provisions, and many Moore homes built or rebuilt after 2013 feature hurricane clips, reinforced decking, and impact-resistant materials that were optional before.

But while tornadoes make national news, it is hail that keeps Moore roofers busy. The same supercell complexes that produce tornadoes almost always produce large hail, and Moore sits in one of the most active convergence zones in the country. The March and April severe weather season routinely drops 1-to-2-inch hail across Moore, and the September secondary season is often just as damaging.

Redline has completed over 400 roofing projects in Moore. We understand the city's housing stock in granular detail. The neighborhoods south of SE 4th Street and west of Telephone Road feature 1970s and 1980s ranch homes, many with their second or third roof. The Plaza Towers area was largely rebuilt after 2013 with modern code-compliant construction. The areas near I-35 and SW 19th have a mix of 1990s subdivisions and newer infill. East Moore toward SE 89th and Sooner Road includes both established subdivisions and rural-suburban properties on larger lots.

Moore homeowners face a unique challenge with insurance: because the city has been hit so many times, some carriers have raised deductibles specifically for Moore zip codes. We help Moore homeowners understand their policy details, particularly wind and hail deductible percentages versus flat-dollar deductibles. The difference can be thousands of dollars on a claim.

We are especially passionate about recommending Class 4 impact-resistant shingles in Moore. Given the city's storm history, the premium discount from carriers like State Farm (up to 30%) and Farmers (up to 15%) is particularly valuable — and the reduced frequency of future claims keeps your insurance record clean, which matters for long-term insurability in a high-risk zip code.

Every Moore project follows our standard Redline process: free drone inspection, Xactimate estimate, transparent pricing, permitted installation, manufacturer warranty registration, and a final walkthrough. We pull all City of Moore permits, schedule inspections, and do not collect final payment until the inspector signs off. Moore has been through enough — you deserve a roofer who does things right.

We are proud that many of our Moore customers are repeat customers — families whose roofs we replaced after the 2013 rebuilds, and who called us again when hail hit in 2024 and 2025. That loyalty is earned by showing up, doing the work right, and being here five years later when you need us again. Storm chasers cannot say that. We can.`,
    insuranceNote: 'Moore\'s storm history means some carriers apply higher wind/hail deductibles in 73160 and 73170. We help Moore homeowners understand the difference between flat-dollar and percentage-based deductibles. Class 4 IR shingles are especially valuable in Moore for both premium discounts and long-term insurability.',
    faqs: [
      {
        question: 'Are Moore insurance deductibles higher than other cities?',
        answer: 'Some carriers apply higher wind/hail deductibles in Moore zip codes due to the city\'s storm history. We help you understand whether your policy has a flat-dollar deductible (e.g., $1,000) or a percentage-based deductible (e.g., 2% of dwelling coverage). The difference can be thousands of dollars on a claim.',
      },
      {
        question: 'Were Moore building codes updated after the 2013 tornado?',
        answer: 'Yes. Moore adopted enhanced building codes requiring hurricane clips, reinforced decking attachments, and other wind-resistance measures. Homes built or rebuilt after 2013 generally meet these higher standards. We install to or above current code on every project regardless of when the home was built.',
      },
      {
        question: 'How many roofing projects has Redline completed in Moore?',
        answer: 'Over 400 projects in Moore since 2007. Many of our Moore customers are repeat customers — families whose roofs we replaced after 2013 rebuilds who called us again when hail hit in subsequent years.',
      },
      {
        question: 'Should I get Class 4 shingles in Moore?',
        answer: 'Strongly recommended. Moore\'s storm history makes Class 4 IR shingles especially valuable — both for the insurance premium discount (up to 30% with State Farm) and for keeping your claims history clean, which affects long-term insurability in high-risk zip codes.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // YUKON — 500+ words
  // ───────────────────────────────────────────────
  {
    slug: 'yukon',
    name: 'Yukon',
    county: 'Canadian County',
    zip: '73085, 73099',
    lede: 'Yukon sits along the historic Route 66 corridor in Canadian County, blending small-town Oklahoma character with rapid suburban growth. From the established neighborhoods near Yukon High School and City Park to new developments along the Kilpatrick Turnpike interchange, Yukon roofs face the full force of every storm system that rolls east off the Great Plains. Redline Roofing & Restoration has served Yukon since 2007.',
    whyTitle: 'Why Yukon Homeowners Choose Redline',
    whyBody: `Yukon is one of the fastest-growing cities in the OKC metro, and for good reason — excellent schools, affordable housing, and a genuine community feel that is increasingly rare in suburban America. But Yukon's position on the western edge of the metro also means it is often the first city hit when supercells form along the dryline and push east. Canadian County averages more severe hail reports per square mile than any other county in the metro.

That exposure makes your roof the single most important line of defense your home has. And it makes your choice of roofer one of the most consequential decisions you will make as a Yukon homeowner.

Redline has completed over 300 roofing projects in Yukon and Canadian County. We know Yukon's housing stock well. The older neighborhoods near downtown Yukon, along 5th Street and Main Street, feature charming mid-century homes with original wood or plywood decking that often needs partial replacement during a reroof. The 1990s and 2000s developments in north and west Yukon — Czech Hall, Deer Creek-area, and along Mustang Road — have standard architectural shingle systems on OSB decking. The newest developments along the Kilpatrick Turnpike corridor use modern energy codes and often feature steeper decorative pitches.

Yukon falls under Canadian County jurisdiction for building permits. We handle all permit requirements and inspections for every Yukon project. Our crews are based out of our OKC headquarters on NW 23rd Street, just 15 minutes east of Yukon on I-40.

Insurance matters in Yukon deserve special attention. Because Canadian County has such high hail frequency, we strongly recommend Class 4 impact-resistant shingles for every Yukon roof. The premium discounts are significant — State Farm offers up to 30%, Farmers up to 15%, and Oklahoma Farm Bureau (which has a large presence in Canadian County) offers competitive IR discounts as well. On a typical Yukon home with a $1,800 annual premium, a 20% discount saves $360 per year. Over five years that is $1,800 — often covering the entire cost of the Class 4 upgrade.

We have noticed that Yukon homeowners are particularly vulnerable to storm chasers because of the city's position on I-40. After a major hail event, out-of-state crews flood in along the interstate and fan out through Yukon neighborhoods before local roofers have even finished their damage assessments. These crews often offer aggressive deals — eating deductibles, pressuring same-day contracts, offering gift cards. Every one of those tactics is either illegal or a red flag. Redline is a licensed Oklahoma contractor (CIB #80003217) with a permanent physical address in OKC. We have been here since 2007 and we will be here in 2037.

Every Yukon project includes the full Redline process: free drone inspection, written Xactimate estimate, transparent line-item pricing, permitted installation, manufacturer warranty registration, and a final walkthrough with our project manager. We do not collect final payment until the work passes inspection and you are satisfied.

Yukon is a great place to live and raise a family. Your roof should be the last thing you worry about — and with Redline, it will be.`,
    insuranceNote: 'Canadian County has among the highest hail frequency in the metro. Oklahoma Farm Bureau has a strong presence in Yukon alongside State Farm and Farmers. Class 4 IR shingle discounts are especially impactful in Yukon — a 20% discount on a typical $1,800 annual premium saves $360/year, often covering the upgrade cost within 5 years.',
    faqs: [
      {
        question: 'Why is Yukon especially vulnerable to hail?',
        answer: 'Yukon sits on the western edge of the OKC metro, making it the first city hit when supercells form along the dryline and push east. Canadian County averages more severe hail reports per square mile than any other county in the metro.',
      },
      {
        question: 'How do I avoid storm chasers in Yukon after a hailstorm?',
        answer: 'Yukon\'s position on I-40 makes it a magnet for out-of-state storm chasers who flood in after major events. Look for an Oklahoma CIB number on the truck, ask for a local physical address (not a P.O. box), refuse to sign anything the day a stranger knocks, and never pay more than 10–20% up front. Redline\'s CIB is 80003217.',
      },
      {
        question: 'Does Yukon require a roofing permit?',
        answer: 'Yukon falls under Canadian County jurisdiction for building permits. Requirements can vary by project scope. We handle all permitting and inspections for every Yukon project so you do not need to navigate county offices yourself.',
      },
      {
        question: 'How far is Redline\'s office from Yukon?',
        answer: 'Our headquarters at 2401 NW 23rd Street in OKC is approximately 15 minutes east of Yukon via I-40. Submit the form and our AI assistant will call you within 30 seconds to schedule your appointment — same speed for all OKC metro cities.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // MUSTANG — 250-350 words
  // ───────────────────────────────────────────────
  {
    slug: 'mustang',
    name: 'Mustang',
    county: 'Canadian County',
    zip: '73064',
    lede: 'Mustang is one of the OKC metro\'s fastest-growing southwest suburbs, with top-rated schools and a tight-knit community that takes pride in where they live. When Canadian County hail rolls through, Mustang homeowners need a roofer who\'ll be here next year — not a storm chaser from Dallas who will not.',
    whyTitle: 'Why Mustang Homeowners Choose Redline',
    whyBody: `Mustang has grown rapidly over the past decade, with new subdivisions spreading south and west from the original town center. That growth has brought a mix of housing — established 1980s ranch homes near downtown Mustang, 2000s-era subdivisions with standard architectural shingles, and brand-new construction featuring modern energy codes and steeper roof pitches.

All of them face the same threat: Canadian County hail. Mustang shares the same western-metro exposure as Yukon, catching the leading edge of supercells before they cross into Oklahoma County. Our crews have completed over 150 projects in the Mustang zip code alone.

We strongly recommend Class 4 impact-resistant shingles for Mustang homes. The combination of high hail frequency and generous carrier discounts — up to 30% from State Farm, up to 20% from USAA — makes the upgrade a clear financial win. The additional upfront cost typically pays for itself within five years through premium savings alone.

Mustang homeowners are also well-served by our financing options through Wisetack, Service Finance Company, and Synchrony HOME. Whether you are covering a deductible or financing an out-of-pocket replacement, we offer 0% APR same-as-cash plans and fixed-rate options up to 120 months with a soft-pull pre-qualification.

Every Mustang project includes our full Redline process: free drone inspection, Xactimate estimate, transparent pricing, permitted installation, manufacturer warranty registration, and final walkthrough. Our OKC headquarters is just 20 minutes from downtown Mustang.`,
    insuranceNote: 'Mustang shares Canadian County\'s high hail frequency. State Farm, Farmers, and Oklahoma Farm Bureau are the most common carriers. Class 4 IR shingle discounts are highly recommended for long-term savings and roof protection.',
    faqs: [
      {
        question: 'How far is Redline from Mustang?',
        answer: 'Our headquarters at 2401 NW 23rd Street in OKC is approximately 20 minutes from downtown Mustang. We serve all of the 73064 zip code.',
      },
      {
        question: 'Do you offer financing for Mustang homeowners?',
        answer: 'Yes. We offer 0% APR same-as-cash plans for 12–18 months, fixed rates from 6.99–9.99% for up to 120 months, and unsecured loans up to $100,000 through Wisetack, Service Finance Company, and Synchrony HOME. Pre-qualification is a soft credit pull.',
      },
      {
        question: 'What shingles do you recommend for Mustang?',
        answer: 'Class 4 impact-resistant shingles from GAF, Owens Corning, or CertainTeed. Given Canadian County\'s hail frequency, the premium discounts and reduced future damage make Class 4 the best value for Mustang homeowners.',
      },
      {
        question: 'How quickly can Redline respond to a Mustang emergency?',
        answer: 'For active leaks we tarp within 24 hours including nights and weekends. For scheduled inspections, we typically arrive within 24–48 hours of your call.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // BETHANY — 250-350 words
  // ───────────────────────────────────────────────
  {
    slug: 'bethany',
    name: 'Bethany',
    county: 'Oklahoma County',
    zip: '73008',
    lede: 'Bethany is a quiet, close-knit inner-west suburb with a housing stock that skews older than much of the metro. Many Bethany homes still have their original 1950s and 1960s roofing substrates, making careful workmanship essential during any replacement. Redline Roofing & Restoration has served Bethany families since 2007.',
    whyTitle: 'Why Bethany Homeowners Trust Redline',
    whyBody: `Bethany's charm is its established, tree-lined neighborhoods and affordable homes — many built between 1945 and 1970. That older housing stock means Bethany roofs often require more than just a shingle swap. Original wood decking may need partial replacement. Older flashing around chimneys and dormers must be carefully removed and re-done. Ventilation systems designed for a different era often need updating to meet current code and manufacturer warranty requirements.

Our crews have handled hundreds of older-home reroofs across the OKC metro and we understand the unique challenges that Bethany homes present. We never cut corners on decking inspection — we walk every inch of exposed substrate before installing a single shingle, and we replace any compromised sections at pre-agreed pricing.

Bethany sits just 10 minutes west of our NW 23rd Street headquarters, making it one of the closest communities we serve. When storms hit, our crews can be on-site in Bethany faster than almost any other city in our service area.

Insurance claims in Bethany follow standard Oklahoma metro patterns. Most Bethany homeowners carry RCV policies with State Farm, Farmers, or Oklahoma Farm Bureau. We provide drone inspections, Xactimate estimates, and on-site adjuster meetings for every claim. Our supplemented claims average 27% more than initial insurer estimates.

Every Bethany project includes a free drone inspection, written estimate, transparent pricing, permitted installation, warranty registration, and final walkthrough. We especially appreciate the trust Bethany homeowners place in us — many are older residents on fixed incomes, and we treat every budget with respect and honesty.`,
    insuranceNote: 'Most Bethany homeowners carry RCV policies with State Farm, Farmers, or Oklahoma Farm Bureau. Older homes may have ACV endorsements — we can read your declarations page and advise you on your coverage before any work begins.',
    faqs: [
      {
        question: 'Do older Bethany homes need extra work during a reroof?',
        answer: 'Often yes. Many Bethany homes built in the 1950s–1960s have original wood decking that may need partial replacement. We inspect every inch of exposed substrate and replace compromised sections at pre-agreed pricing — no surprises.',
      },
      {
        question: 'How close is Redline to Bethany?',
        answer: 'Our headquarters at 2401 NW 23rd Street is approximately 10 minutes from most Bethany addresses — one of the closest communities we serve.',
      },
      {
        question: 'Do you work with seniors on fixed incomes in Bethany?',
        answer: 'Yes. We offer transparent pricing, financing through Wisetack and Service Finance Company, and we never pressure anyone into work they do not need. If your roof is fine, we will tell you — just like we told Elaine Foster\'s 87-year-old father.',
      },
      {
        question: 'What insurance carriers are common in Bethany?',
        answer: 'State Farm, Farmers, and Oklahoma Farm Bureau are the most common carriers in Bethany. We work with all major carriers and provide Xactimate-format estimates that match your insurer\'s pricing software.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // MIDWEST CITY — 250-350 words
  // ───────────────────────────────────────────────
  {
    slug: 'midwest-city',
    name: 'Midwest City',
    county: 'Oklahoma County',
    zip: '73110, 73130',
    lede: 'Midwest City grew up alongside Tinker Air Force Base, and military families remain the backbone of this east-metro community. When hail hits the 73110 and 73130 zip codes, Midwest City homeowners need a roofer who understands USAA claims, VA-financed homes, and the urgency of military relocation timelines. Redline Roofing is that roofer.',
    whyTitle: 'Why Midwest City Homeowners Choose Redline',
    whyBody: `Midwest City is inseparable from Tinker AFB — the region's largest single-site employer and home to thousands of active-duty, reserve, and civilian families. Our founder Trey McAllister is a veteran, and serving the military community is personal for us.

We understand the unique needs of Midwest City homeowners. Military families relocate frequently, which means a transferable manufacturer warranty is not just a nice feature — it is essential for protecting your home's resale value. Every Redline installation comes with a transferable warranty from GAF, Owens Corning, or CertainTeed.

USAA is by far the most common carrier in Midwest City. Their claims process is almost entirely virtual, relying on satellite imagery rather than field adjusters. This frequently results in lower initial estimates. Our drone inspection and Xactimate supplements have averaged $4,200 more than USAA's initial satellite-based assessments in the Midwest City area.

The housing stock in Midwest City ranges from post-war 1950s homes near the base to 1980s and 1990s subdivisions in east Midwest City and newer developments near Rose State College. Our crews are experienced with every era and substrate type.

Every Midwest City project includes a free drone inspection, written Xactimate estimate, transparent pricing, permitted installation, warranty registration, and final walkthrough. Our OKC headquarters is approximately 20 minutes from most Midwest City addresses. For active leaks and emergencies, we tarp within 24 hours.`,
    insuranceNote: 'USAA is the dominant carrier in Midwest City. Their virtual claims process often underestimates damage. Our drone inspections and Xactimate supplements average $4,200 more than initial satellite-based USAA estimates.',
    faqs: [
      {
        question: 'Do you specialize in USAA claims?',
        answer: 'Yes. USAA is the most common carrier in Midwest City and their virtual claims process relies on satellite imagery that often underestimates damage. Our drone inspections and Xactimate supplements consistently increase settlements.',
      },
      {
        question: 'Are your warranties transferable for military relocations?',
        answer: 'Yes. Every Redline installation comes with a transferable manufacturer warranty from GAF, Owens Corning, or CertainTeed. When you PCS or sell, the warranty transfers to the new homeowner — protecting your resale value.',
      },
      {
        question: 'Is Redline veteran-owned?',
        answer: 'Yes. Our founder, Travis "Trey" McAllister III, is a veteran. Serving the military community at Tinker AFB and across Midwest City is personal for us.',
      },
      {
        question: 'How quickly can you complete a roof for a PCS timeline?',
        answer: 'We understand military timelines. Most Midwest City roofs are completed in one to two days. If you have a PCS deadline, let us know and we will prioritize your project to ensure it is done before your report date.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // DEL CITY — 250-350 words
  // ───────────────────────────────────────────────
  {
    slug: 'del-city',
    name: 'Del City',
    county: 'Oklahoma County',
    zip: '73115, 73135',
    lede: 'Del City is a working-class southeast-metro community with affordable homes, hardworking families, and a housing stock that ranges from post-war bungalows to 1970s ranch homes. When hail damages your roof, you need honest pricing and quality work — not a storm chaser looking for an easy mark. Redline Roofing delivers both.',
    whyTitle: 'Why Del City Homeowners Trust Redline',
    whyBody: `Del City's housing stock is predominantly post-war construction from the 1950s and 1960s, with a second wave of development in the 1970s. Many of these homes have been reroofed two or three times, and the underlying decking needs careful inspection during any replacement. Our crews walk every inch of exposed substrate and replace compromised sections at pre-agreed pricing.

Affordability matters in Del City, and we respect that. We provide transparent, itemized estimates so you know exactly what you are paying for. Our financing options through Wisetack, Service Finance Company, and Synchrony HOME include 0% APR same-as-cash plans that make a quality roof accessible without straining your budget.

Del City homeowners often deal with the same storm chasers that flood the metro after every hail event. Because Del City's homes are more affordable, storm chasers sometimes target these neighborhoods with aggressive tactics — offering to waive deductibles (illegal in Oklahoma) or pressuring same-day contracts. We encourage every Del City homeowner to verify CIB registration, ask for a local address, and never sign anything the day a stranger knocks.

Our commercial division also serves Del City businesses along SE 29th Street and Sunnylane Road, installing TPO, EPDM, and modified bitumen on flat-roof commercial properties.

Every Del City project includes our full Redline process: free drone inspection, Xactimate estimate, transparent pricing, permitted installation, warranty registration, and final walkthrough.`,
    insuranceNote: 'Del City homeowners commonly carry policies with State Farm, Farmers, and Shelter Insurance. We provide Xactimate-format estimates and meet adjusters on-site. Our supplemented claims average 27% more than initial estimates.',
    faqs: [
      {
        question: 'Is Redline affordable for Del City homeowners?',
        answer: 'We provide transparent, itemized estimates and offer financing through Wisetack, Service Finance Company, and Synchrony HOME — including 0% APR same-as-cash plans for 12–18 months. We never inflate pricing or charge hidden fees.',
      },
      {
        question: 'Do older Del City homes need decking replacement?',
        answer: 'Often some sections do. Many Del City homes have been reroofed multiple times and the underlying decking may be compromised. We inspect every inch and replace only what is needed at pre-agreed pricing.',
      },
      {
        question: 'Do you do commercial roofing in Del City?',
        answer: 'Yes. Our commercial division installs TPO, EPDM, modified bitumen, and standing-seam metal on flat-roof commercial properties along SE 29th Street, Sunnylane Road, and throughout Del City.',
      },
      {
        question: 'How do I avoid storm chasers in Del City?',
        answer: 'Verify Oklahoma CIB registration (ours is 80003217), ask for a local physical address, refuse same-day contracts from door-knockers, and never let anyone waive your deductible — it is insurance fraud in Oklahoma.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // PIEDMONT — 250-350 words
  // ───────────────────────────────────────────────
  {
    slug: 'piedmont',
    name: 'Piedmont',
    county: 'Canadian County',
    zip: '73078',
    lede: 'Piedmont offers a rural-suburban lifestyle northwest of Oklahoma City, with acreage properties, newer subdivisions, and wide-open skies that offer zero protection from Canadian County hail. Redline Roofing & Restoration serves Piedmont homeowners with the same quality and transparency we bring to every community in the metro.',
    whyTitle: 'Why Piedmont Homeowners Choose Redline',
    whyBody: `Piedmont combines the best of rural Oklahoma — space, quiet, and community — with easy access to the OKC metro via the Kilpatrick Turnpike. That accessibility also means Redline crews can reach most Piedmont addresses in 20–25 minutes from our NW 23rd Street headquarters.

Piedmont's housing stock is a mix of established acreage properties with metal and shingle roofs, 2000s-era subdivisions, and new construction. Acreage properties often have larger roofs, outbuildings, and metal structures that require different materials and techniques than standard subdivision homes. Our crews handle shingle, metal, and flat-roof systems with equal expertise.

Canadian County hail is Piedmont's biggest roofing threat. The open terrain northwest of the city provides no topographic shelter, and storms crossing the county often produce larger hail than they do further east. We strongly recommend Class 4 impact-resistant shingles for every Piedmont home.

Many Piedmont homeowners carry insurance through Oklahoma Farm Bureau or Shelter Insurance, both of which have strong rural presences. We work with every carrier and provide the same Xactimate estimates and adjuster meetings regardless of who writes your policy.

Every Piedmont project includes a free drone inspection — particularly valuable for acreage properties where larger roof areas and outbuildings make ground-level assessment impractical. Our full Redline process applies to every job: written estimate, transparent pricing, permitted installation, warranty registration, and final walkthrough.`,
    insuranceNote: 'Oklahoma Farm Bureau and Shelter Insurance are common carriers in Piedmont alongside State Farm. We work with all carriers and provide Xactimate-format estimates for every claim.',
    faqs: [
      {
        question: 'Do you roof acreage properties and outbuildings in Piedmont?',
        answer: 'Yes. We handle shingle, metal, and flat-roof systems on homes, barns, shops, and outbuildings. Our drone inspection is especially valuable for larger properties where ground-level assessment is impractical.',
      },
      {
        question: 'How far is Redline from Piedmont?',
        answer: 'Our OKC headquarters is 20–25 minutes from most Piedmont addresses via the Kilpatrick Turnpike.',
      },
      {
        question: 'Do you install metal roofs in Piedmont?',
        answer: 'Yes. We install standing-seam metal, corrugated metal, and metal shingle systems. Metal is a popular choice for Piedmont acreage properties due to its longevity and hail resistance.',
      },
      {
        question: 'What insurance carriers are common in Piedmont?',
        answer: 'Oklahoma Farm Bureau, Shelter Insurance, and State Farm are the most common carriers. We work with all of them and provide the same high-quality documentation for every claim.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // CHOCTAW — 250-350 words
  // ───────────────────────────────────────────────
  {
    slug: 'choctaw',
    name: 'Choctaw',
    county: 'Oklahoma County',
    zip: '73020',
    lede: 'Choctaw is a growing east-metro community with a rural residential feel, quality schools, and homeowners who value straightforward service. When Oklahoma County storms damage your roof, Redline Roofing & Restoration brings the same licensed, insured, warranty-backed service to Choctaw that we deliver across the metro.',
    whyTitle: 'Why Choctaw Homeowners Choose Redline',
    whyBody: `Choctaw has grown steadily as families look for affordable acreage and strong schools east of the metro. The housing stock includes established 1970s and 1980s homes along NE 23rd Street and Choctaw Road, newer subdivisions built in the 2000s and 2010s, and rural properties on larger lots throughout the 73020 zip code.

Choctaw's eastern position means storms have often already produced hail over central OKC before reaching Choctaw — but when they do hit, the damage can be significant. The May and September severe weather seasons routinely bring hail to eastern Oklahoma County.

Our crews serve Choctaw with the same full Redline process used in every community: free drone inspection, written Xactimate estimate, transparent pricing, permitted installation, manufacturer warranty registration, and final walkthrough. Our OKC headquarters is approximately 25 minutes from most Choctaw addresses.

We also handle metal roofing for Choctaw's rural properties and outbuildings, and our commercial division serves businesses along Choctaw Road and NE 23rd Street. Every job is backed by our Oklahoma CIB registration (#80003217), $2 million general liability, and full workers' comp coverage.`,
    insuranceNote: 'Choctaw homeowners commonly carry policies with State Farm, Farmers, Allstate, and Oklahoma Farm Bureau. We provide Xactimate estimates and meet adjusters on-site for every claim.',
    faqs: [
      {
        question: 'How far is Redline from Choctaw?',
        answer: 'Our OKC headquarters is approximately 25 minutes from most Choctaw addresses. We serve the entire 73020 zip code.',
      },
      {
        question: 'Do you handle rural properties in Choctaw?',
        answer: 'Yes. We roof homes, barns, shops, and outbuildings on acreage properties throughout Choctaw. We install shingle, metal, and flat-roof systems.',
      },
      {
        question: 'What manufacturer warranties are available for Choctaw homes?',
        answer: 'GAF Golden Pledge (50-year material, 25-year workmanship), Owens Corning Platinum Protection (lifetime with 10-year non-prorated workmanship), and CertainTeed SureStart Plus 5-Star (25 years materials and labor). All are transferable.',
      },
      {
        question: 'Does Choctaw require a roofing permit?',
        answer: 'Permit requirements vary. We handle all permitting for every Choctaw project so you do not need to navigate the process yourself.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // NEWCASTLE — 250-350 words
  // ───────────────────────────────────────────────
  {
    slug: 'newcastle',
    name: 'Newcastle',
    county: 'McClain County',
    zip: '73065',
    lede: 'Newcastle is the south-metro growth corridor, attracting young families with new construction, quality schools, and proximity to Norman and OKC. As Newcastle grows, so does the need for experienced, licensed roofers who do not cut corners. Redline Roofing & Restoration has served Newcastle homeowners since the community\'s building boom began.',
    whyTitle: 'Why Newcastle Homeowners Choose Redline',
    whyBody: `Newcastle has transformed from a small rural community into one of the OKC metro's most desirable suburbs. New subdivisions have sprouted along Highway 62 and south of Newcastle Road, featuring modern construction with OSB decking, architectural shingles, and energy-efficient building codes.

Because much of Newcastle's housing stock is newer, many homeowners assume their roofs are invulnerable. They are not. Even a five-year-old roof can sustain significant hail damage, and Oklahoma storms do not discriminate by neighborhood age. We have replaced roofs on Newcastle homes that were less than three years old after major hail events.

Newcastle falls under McClain County jurisdiction for building permits. We handle all permitting and inspections. Our OKC headquarters is approximately 25 minutes from most Newcastle addresses via I-44.

For Newcastle's newer homes, we strongly recommend Class 4 impact-resistant shingles. Many Newcastle homeowners are young families with mortgages, and the premium discounts from Class 4 shingles — up to 30% with State Farm — provide real budget relief year after year.

Every Newcastle project includes our full Redline process: free drone inspection, Xactimate estimate, transparent pricing, permitted installation, warranty registration, and final walkthrough. We do not collect final payment until the work passes inspection.`,
    insuranceNote: 'Newcastle homeowners commonly carry policies with State Farm, Farmers, and Allstate. Many newer homes have RCV policies with relatively low deductibles. We provide Xactimate estimates and handle all claim documentation.',
    faqs: [
      {
        question: 'Can new Newcastle homes get hail damage?',
        answer: 'Absolutely. We have replaced roofs on Newcastle homes that were less than three years old after major hail events. Age does not protect a roof from 2-inch hail. Regular post-storm inspections are essential regardless of your roof\'s age.',
      },
      {
        question: 'Does Newcastle require a roofing permit?',
        answer: 'Newcastle falls under McClain County jurisdiction. We handle all permitting and inspections for every Newcastle project.',
      },
      {
        question: 'How far is Redline from Newcastle?',
        answer: 'Our OKC headquarters is approximately 25 minutes from most Newcastle addresses via I-44.',
      },
      {
        question: 'What do you recommend for new-construction Newcastle homes?',
        answer: 'Class 4 impact-resistant shingles from GAF, Owens Corning, or CertainTeed. The premium discounts (up to 30% with State Farm) provide meaningful savings for young families with mortgages.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // NICHOLS HILLS — 250-350 words
  // ───────────────────────────────────────────────
  {
    slug: 'nichols-hills',
    name: 'Nichols Hills',
    county: 'Oklahoma County',
    zip: '73116, 73120',
    lede: 'Nichols Hills is one of Oklahoma\'s most prestigious residential communities, with estate homes, complex rooflines, steep pitches, and architectural details that demand precision craftsmanship. Redline Roofing & Restoration has the expertise, manufacturer certifications, and crew training to handle Nichols Hills\' most demanding roof systems.',
    whyTitle: 'Why Nichols Hills Homeowners Trust Redline',
    whyBody: `Nichols Hills homes are not typical suburban roofing projects. Estate-scale properties with multiple valleys, turrets, dormers, steep pitches exceeding 12:12, and premium materials like natural slate, synthetic tile, and designer shingles require a contractor with specialized expertise and manufacturer certifications that most OKC roofers simply do not carry.

Redline is one of only two OKC contractors simultaneously certified as GAF Master Elite, Owens Corning Platinum Preferred, and CertainTeed SELECT ShingleMaster. We also install synthetic Brava tile, DaVinci polymer slate, and standing-seam metal — premium materials that match the architectural character of Nichols Hills homes.

Our senior estimators spend 60–90 minutes on a typical Nichols Hills inspection, measuring every slope, valley, and penetration. The result is a detailed, multi-page proposal with line-item pricing — not a one-number estimate scribbled on a business card.

Insurance claims in Nichols Hills involve higher dwelling values, which means higher stakes. Our Xactimate supplements ensure that steep-pitch charges, complex flashing, and premium materials are properly documented and reimbursed by your carrier.

Every Nichols Hills project includes our full Redline process: free drone inspection, detailed written estimate, transparent pricing, permitted installation, manufacturer warranty registration, and final walkthrough with our project manager. Your home is your most valuable asset — we treat it accordingly.`,
    insuranceNote: 'Nichols Hills homes have higher dwelling values, meaning insurance claims involve larger dollar amounts. Proper Xactimate documentation of steep-pitch charges, complex flashing, and premium materials is essential. We ensure every line item is captured for maximum settlement.',
    faqs: [
      {
        question: 'Do you install premium materials like slate and tile in Nichols Hills?',
        answer: 'Yes. We install synthetic Brava tile, DaVinci polymer slate, designer architectural shingles, and standing-seam metal. We are one of only two OKC contractors holding all three top manufacturer certifications simultaneously.',
      },
      {
        question: 'How do you handle steep and complex Nichols Hills rooflines?',
        answer: 'Our senior estimators measure every slope, valley, turret, and penetration — typically spending 60–90 minutes on a Nichols Hills inspection. Our crews are trained and equipped for pitches exceeding 12:12 and complex architectural details.',
      },
      {
        question: 'Are Nichols Hills insurance claims different from other areas?',
        answer: 'The process is the same, but higher dwelling values mean higher stakes. Proper documentation of steep-pitch charges, premium materials, and complex flashing ensures your claim reflects the true replacement cost. Our Xactimate supplements are critical for Nichols Hills homes.',
      },
      {
        question: 'How long does a Nichols Hills roof replacement take?',
        answer: 'Two to four days depending on size, pitch, and material. Estate-scale properties with complex rooflines and premium materials take longer than standard shingle replacements. We provide a detailed timeline before work begins.',
      },
    ],
  },

  // ───────────────────────────────────────────────
  // THE VILLAGE — 250-350 words
  // ───────────────────────────────────────────────
  {
    slug: 'the-village',
    name: 'The Village',
    county: 'Oklahoma County',
    zip: '73120',
    lede: 'The Village is a charming central-OKC suburb of mid-century homes nestled between Nichols Hills and Britton Road. Its 1950s and 1960s housing stock brings specific roofing challenges — original decking, older ventilation systems, and character details that deserve a contractor who cares about craftsmanship. Redline Roofing is that contractor.',
    whyTitle: 'Why The Village Homeowners Trust Redline',
    whyBody: `The Village is one of OKC's most endearing communities — tree-canopied streets, well-maintained mid-century homes, and a neighborhood feel that larger suburbs cannot replicate. Most Village homes were built between 1950 and 1965, which means they share common roofing characteristics: original wood plank or early plywood decking, lower-pitch ranch-style rooflines, older chimney flashing, and ventilation systems designed for an era before modern attic insulation standards.

Our crews have extensive experience with The Village's housing stock. We inspect every inch of exposed decking during tear-off, replace compromised sections at pre-agreed pricing, and upgrade ventilation to meet current manufacturer warranty requirements. Proper ventilation is especially critical in The Village — under-ventilated attics void shingle warranties and accelerate shingle aging.

The Village is less than 10 minutes from our NW 23rd Street headquarters, making it one of the closest communities we serve. When storms cross OKC, we can have crews in The Village within minutes.

Many Village homeowners are long-time residents who have watched storm chasers come and go for decades. They appreciate Redline's local roots, our CIB license displayed on every truck, and the fact that we have been headquartered in OKC since 2007.

Every Village project includes a free drone inspection, written estimate, transparent pricing, permitted installation, warranty registration, and final walkthrough. Your mid-century home deserves a roofer who respects its character — and protects it for the next 50 years.`,
    insuranceNote: 'The Village homeowners commonly carry policies with State Farm, Farmers, and Allstate. Older homes may have ACV endorsements rather than full RCV coverage — we can review your declarations page and advise you before any work begins.',
    faqs: [
      {
        question: 'Do Village homes need special attention during a reroof?',
        answer: 'Yes. Most Village homes were built in the 1950s–1960s with original wood decking and older ventilation systems. We inspect all decking, replace compromised sections, and upgrade ventilation to meet current manufacturer warranty requirements.',
      },
      {
        question: 'How close is Redline to The Village?',
        answer: 'Less than 10 minutes from our NW 23rd Street headquarters — one of the closest communities we serve.',
      },
      {
        question: 'What if my Village home has an ACV insurance policy?',
        answer: 'ACV (Actual Cash Value) policies pay only the depreciated value of your roof. We can read your declarations page in five minutes and tell you what you have. If you have ACV, we will give you honest pricing and financing options so you are not blindsided.',
      },
      {
        question: 'Will a new roof change the look of my mid-century Village home?',
        answer: 'Only for the better. We offer a wide range of shingle profiles and colors that complement mid-century architecture. Our estimator will bring samples so you can see the options against your home\'s brick, siding, and trim before you commit.',
      },
    ],
  },
];
