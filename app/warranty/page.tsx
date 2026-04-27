import type { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { FaqAccordion } from '@/components/faq-accordion';
import { LeadForm } from '@/components/lead-form';
import { Jsonld } from '@/components/jsonld';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Warranty | Lifetime Workmanship Guarantee',
  description:
    'Every Redline roof comes with a transferable lifetime workmanship warranty, manufacturer coverage up to 50 years, and no payment until the City of OKC inspector signs off.',
};

const warrantyFaqs = [
  {
    question: 'Is the warranty really transferable?',
    answer:
      'Yes, all three manufacturer warranties transfer to the next homeowner. This adds measurable resale value to your home and gives buyers confidence that the roof is backed by a major manufacturer.',
  },
  {
    question: 'What voids the warranty?',
    answer:
      'Unauthorized modifications, failure to maintain gutters and ventilation, or using a non-certified contractor for future repairs. Normal Oklahoma weather — hail, wind, ice — does not void the warranty.',
  },
  {
    question: 'Do I need to do anything to maintain my warranty?',
    answer:
      'Keep gutters clean, ensure attic ventilation isn\'t blocked, and have us inspect after any major storm. That\'s it. We offer free post-storm inspections for all past customers.',
  },
  {
    question: 'What if Redline goes out of business?',
    answer:
      'The manufacturer warranty is backed by GAF, Owens Corning, or CertainTeed directly — not by us. Those are multi-billion-dollar companies that will honor the warranty regardless. Our workmanship warranty is also backed by our BBB bond.',
  },
  {
    question: 'How long does a warranty claim take?',
    answer:
      'We respond within 48 hours and most warranty repairs are completed within one week. For active leaks, we tarp within 24 hours and schedule the permanent repair immediately.',
  },
];

export default function WarrantyPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
            { '@type': 'ListItem', position: 2, name: 'Warranty', item: `${SITE.url}/warranty` },
          ],
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Warranty', href: '/warranty' }]} />

        <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-xl mb-8">
          <Image src="/img/roof-install.jpg" alt="Redline crew installing a new roof in Oklahoma City" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-deep/60 to-slate-deep/20" />
          <div className="absolute inset-0 flex items-center px-8">
            <h1 className="text-white font-display text-3xl font-bold sm:text-4xl lg:text-5xl drop-shadow-lg">The Redline Promise.</h1>
          </div>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-slate-deep/80">
          <strong>
            Every Redline roof comes with a transferable lifetime workmanship warranty backed by a
            manufacturer warranty of up to 50 years. And you don&rsquo;t pay your final balance until
            the City of Oklahoma City permit inspector signs off on the work.
          </strong>
        </p>

        {/* ---------- Workmanship Warranty ---------- */}
        <section className="mt-12" aria-labelledby="workmanship-heading">
          <h2
            id="workmanship-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            The Redline workmanship warranty
          </h2>
          <ul className="mt-6 space-y-4 text-lg leading-relaxed text-slate-deep/80">
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-xs font-bold text-white" aria-hidden="true">&#10003;</span>
              <span>Covers all labor and workmanship for as long as you own your home</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-xs font-bold text-white" aria-hidden="true">&#10003;</span>
              <span>Transferable to the next owner, adding real resale value to your home</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-xs font-bold text-white" aria-hidden="true">&#10003;</span>
              <span>No fine print, no exclusions for normal weather</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-xs font-bold text-white" aria-hidden="true">&#10003;</span>
              <span>If something fails due to our workmanship, we fix it free</span>
            </li>
          </ul>
        </section>

        {/* ---------- No Payment Until Inspection ---------- */}
        <section className="mt-12" aria-labelledby="inspection-heading">
          <h2
            id="inspection-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            No payment until inspection passes
          </h2>
          <ul className="mt-6 space-y-4 text-lg leading-relaxed text-slate-deep/80">
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-xs font-bold text-white" aria-hidden="true">&#10003;</span>
              <span>We pull the City of OKC permit in your name</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-xs font-bold text-white" aria-hidden="true">&#10003;</span>
              <span>City inspector must sign off before final payment is due</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-xs font-bold text-white" aria-hidden="true">&#10003;</span>
              <span>If anything fails inspection, we fix it before you pay</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-xs font-bold text-white" aria-hidden="true">&#10003;</span>
              <span>This is The Redline Promise and it&rsquo;s written into every contract</span>
            </li>
          </ul>
        </section>

        {/* ---------- Manufacturer Warranty Comparison ---------- */}
        <section className="mt-12" aria-labelledby="manufacturer-heading">
          <h2
            id="manufacturer-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Manufacturer warranty comparison
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-deep/20">
                  <th className="whitespace-nowrap px-4 py-3 font-display font-bold">Manufacturer</th>
                  <th className="whitespace-nowrap px-4 py-3 font-display font-bold">Warranty Name</th>
                  <th className="whitespace-nowrap px-4 py-3 font-display font-bold">Material Coverage</th>
                  <th className="whitespace-nowrap px-4 py-3 font-display font-bold">Workmanship Coverage</th>
                  <th className="whitespace-nowrap px-4 py-3 font-display font-bold">Tear-Off Allowance</th>
                  <th className="whitespace-nowrap px-4 py-3 font-display font-bold">Transferable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-deep/10">
                <tr className="hover:bg-sand/50">
                  <td className="whitespace-nowrap px-4 py-3 font-semibold">GAF</td>
                  <td className="px-4 py-3">Golden Pledge</td>
                  <td className="px-4 py-3">50 years</td>
                  <td className="px-4 py-3">25 years</td>
                  <td className="px-4 py-3">10 years</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="hover:bg-sand/50">
                  <td className="whitespace-nowrap px-4 py-3 font-semibold">Owens Corning</td>
                  <td className="px-4 py-3">Platinum Protection</td>
                  <td className="px-4 py-3">Lifetime</td>
                  <td className="whitespace-nowrap px-4 py-3">10 years (non-prorated)</td>
                  <td className="px-4 py-3">&mdash;</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="hover:bg-sand/50">
                  <td className="whitespace-nowrap px-4 py-3 font-semibold">CertainTeed</td>
                  <td className="whitespace-nowrap px-4 py-3">SureStart Plus 5-Star</td>
                  <td className="px-4 py-3">25 years</td>
                  <td className="px-4 py-3">25 years</td>
                  <td className="px-4 py-3">&mdash;</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- Warranty Registration ---------- */}
        <section className="mt-12" aria-labelledby="registration-heading">
          <h2
            id="registration-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            How warranty registration works
          </h2>
          <ul className="mt-6 space-y-4 text-lg leading-relaxed text-slate-deep/80">
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-xs font-bold text-white" aria-hidden="true">1</span>
              <span>
                We register the warranty in your name with the manufacturer within 30 days of
                installation
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-xs font-bold text-white" aria-hidden="true">2</span>
              <span>You receive the warranty certificate by mail and email</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-xs font-bold text-white" aria-hidden="true">3</span>
              <span>We keep a copy on file at our 23rd Street office</span>
            </li>
          </ul>
        </section>

        {/* ---------- Warranty FAQs ---------- */}
        <section className="mt-12" aria-labelledby="warranty-faq-heading">
          <h2
            id="warranty-faq-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Warranty questions
          </h2>
          <div className="mt-6">
            <FaqAccordion items={warrantyFaqs} />
          </div>
        </section>

        {/* ---------- Lead Form ---------- */}
        <section className="mt-16 mb-16" aria-labelledby="warranty-form-heading">
          <h2
            id="warranty-form-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Get the warranty Oklahoma City trusts.
          </h2>
          <p className="mt-3 text-slate-deep/80">
            Schedule your free inspection and we&rsquo;ll explain exactly which warranty applies to
            your roof.
          </p>
          <div className="mt-8">
            <LeadForm source="warranty" />
          </div>
        </section>
      </div>
    </>
  );
}
