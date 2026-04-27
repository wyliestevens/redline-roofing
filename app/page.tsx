import { Hero } from '@/components/hero';
import { TrustBar } from '@/components/trust-bar';
import { ServiceGrid } from '@/components/service-grid';
import { WhyRedline } from '@/components/why-redline';
import { InsuranceTeaser } from '@/components/insurance-teaser';
import { ReviewsMarquee } from '@/components/reviews-marquee';
import { FaqAccordion } from '@/components/faq-accordion';
import { FinancingStrip } from '@/components/financing-strip';
import { ServiceAreaMap } from '@/components/service-area-map';
import { CtaBand } from '@/components/cta-band';
import { LeadForm } from '@/components/lead-form';
import { Jsonld } from '@/components/jsonld';
import Link from 'next/link';
import Image from 'next/image';

const firstSixFaqs = [
  { question: 'How much does a roof replacement cost in Oklahoma City in 2026?', answer: 'Most Oklahoma City homeowners pay between $10,000 and $18,000 for an asphalt shingle replacement on a 2,000 sq ft home. Class 4 impact-resistant shingles add $2,000–$5,000 but typically pay back via insurance discounts in 2–5 years. Steeper roofs, multi-valley designs, decking replacement, and metal or tile systems cost more. We give you an itemized written estimate — not a vague range.' },
  { question: 'How long does it take to replace a roof in OKC?', answer: 'Most Redline residential replacements are finished in one to two days. Larger or steeper homes can take three. We tarp any exposed decking overnight and do a magnet sweep of your yard, driveway, and flowerbeds at the end of every day.' },
  { question: 'Will my homeowners insurance cover hail damage to my roof?', answer: 'Most Oklahoma policies cover sudden hail and wind damage minus your deductible. We provide a free HAAG-certified inspection with drone imagery, an Xactimate-format estimate matching your insurer\'s pricing software, and we meet your adjuster on the roof. On Redline-supplemented claims, the average final settlement is 27% higher than the insurer\'s first estimate.' },
  { question: 'What\'s the difference between ACV and RCV on my insurance policy?', answer: 'RCV (Replacement Cost Value) pays today\'s full cost to replace your roof. The insurer first sends you the depreciated amount (the ACV) and releases the rest — called "recoverable depreciation" — once the work is done and invoiced, usually within 180 days of the date of loss. ACV-only policies pay only the depreciated amount and never release the rest. We can read your policy declarations page in five minutes and tell you which you have.' },
  { question: 'How long do I have to file a hail damage claim in Oklahoma?', answer: 'Under Oklahoma law (36 O.S. § 1250.5), your policy must allow at least 12 months and may allow up to 24 months from the date of the storm. After that the claim is barred. Schedule a free post-storm inspection within 30 days — visible evidence of hail bruising degrades over time.' },
  { question: 'Are Class 4 impact-resistant shingles worth it in OKC?', answer: 'Almost always, yes. Oklahoma is the #1 hail metro in the U.S. by frequency. Class 4 shingles withstand a 2-inch steel ball dropped from 20 feet without cracking. State Farm offers up to 30% off your homeowners premium for Class 4; USAA up to 20%. On a $2,000 annual premium, a 20% discount saves $400/year — Class 4 typically pays for itself in 2–5 years on top of fewer repairs and longer roof life.' },
];

const galleryPreview = [
  { city: 'Edmond', src: '/img/gallery/project-1.jpg', alt: 'Completed GAF Timberline HDZ roof replacement in Edmond, Oklahoma' },
  { city: 'Norman', src: '/img/gallery/project-2.jpg', alt: 'Storm damage restoration project in Norman, Oklahoma' },
  { city: 'Moore', src: '/img/gallery/project-3.jpg', alt: 'Class 4 impact-resistant shingle installation in Moore, Oklahoma' },
  { city: 'Mustang', src: '/img/gallery/project-4.jpg', alt: 'Seamless gutter installation on a new roof in Mustang, Oklahoma' },
];

export default function HomePage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Redline Roofing & Restoration — Oklahoma City Roofing Contractor',
          description: 'Veteran-owned, third-generation Oklahoma City roofing contractor. GAF Master Elite. Lifetime warranty. Free 27-point inspections.',
          url: 'https://redlineroofingok.com',
        }}
      />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Services */}
      <section className="py-20" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="services-heading" className="mb-4 text-center">
            Roofing services for Oklahoma City homes and businesses.
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-slate-deep/70">
            From a single missing shingle to a full commercial TPO retrofit, Redline does it all with the same crew that started the day &mdash; no out-of-state subs, no surprise charges.
          </p>
          <ServiceGrid />
        </div>
      </section>

      {/* 4. Why Redline */}
      <WhyRedline />

      {/* 5. Insurance Teaser */}
      <InsuranceTeaser />

      {/* 6. Recent OKC Projects */}
      <section className="py-20 bg-sand/30" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="gallery-heading" className="mb-8 text-center">
            Recent OKC projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryPreview.map((project) => (
              <Link key={project.city} href="/gallery" className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-deep backdrop-blur-sm">
                  {project.city}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery" className="text-sm font-semibold text-copper underline hover:text-copper-dk">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Reviews Marquee */}
      <ReviewsMarquee />

      {/* 8. CTA + Lead Form */}
      <section id="lead-form-mid" className="bg-slate-deep py-20 text-white" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 id="cta-heading" className="mb-4 text-white">
                Ready for the last roof you&rsquo;ll ever buy?
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Fill out the form and our AI assistant will call you within 30 seconds to schedule your free inspection. No salesman. No pressure. Just honest answers from a third-generation Oklahoma roofer.
              </p>
            </div>
            <LeadForm source="mid-page" />
          </div>
        </div>
      </section>

      {/* 9. FAQ (first 6) */}
      <section className="py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4">
          <h2 id="faq-heading" className="mb-8 text-center">
            Frequently asked questions
          </h2>
          <FaqAccordion items={firstSixFaqs} />
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-sm font-semibold text-copper underline hover:text-copper-dk">
              See all 15 questions →
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Financing Strip */}
      <FinancingStrip />

      {/* 11. Service Area Map */}
      <ServiceAreaMap />

      {/* 12. Final CTA */}
      <CtaBand />
    </>
  );
}
