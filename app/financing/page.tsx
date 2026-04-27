import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { FaqAccordion } from '@/components/faq-accordion';
import { LeadForm } from '@/components/lead-form';
import { Jsonld } from '@/components/jsonld';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Roof Financing | $0 Down, 0% APR Options',
  description:
    'Finance your Oklahoma City roof replacement with $0 down. Wisetack 0% APR same-as-cash, Service Finance fixed rates from 6.99%, Synchrony HOME promotional plans. Soft credit pull pre-qualification.',
};

const financingFaqs = [
  {
    question: 'Does pre-qualifying affect my credit score?',
    answer:
      'No, soft pull only. A soft credit inquiry has no impact on your credit score. A hard pull only happens if you accept the loan terms and move forward with financing.',
  },
  {
    question: 'What credit score do I need?',
    answer:
      'Varies by lender, but approvals start around 580. Each financing partner has different criteria, and pre-qualifying lets you see your options without any risk to your score.',
  },
  {
    question: 'Can I pay off early without penalty?',
    answer:
      'Yes, all our financing partners allow early payoff without prepayment penalties. You can pay off your balance at any time with no additional fees.',
  },
  {
    question: 'Do you offer financing for commercial projects?',
    answer:
      'Yes, through Service Finance Company for qualified businesses. Commercial financing terms and limits vary based on business credit and project scope.',
  },
  {
    question: 'What if I\'m using insurance?',
    answer:
      'You can finance the deductible and any out-of-pocket upgrade costs. Many homeowners use financing to cover their deductible while insurance covers the rest of the replacement.',
  },
];

export default function FinancingPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
            { '@type': 'ListItem', position: 2, name: 'Financing', item: `${SITE.url}/financing` },
          ],
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Financing', href: '/financing' }]} />

        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Roof financing in Oklahoma City.
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-deep/80">
          <strong>
            Redline Roofing &amp; Restoration partners with Wisetack, Service Finance Company, and
            Synchrony HOME to offer $0-down financing with plans from 0% APR for 12 months to fixed
            rates as low as 6.99% for up to 120 months. Pre-qualification uses a soft credit pull
            with no impact to your score.
          </strong>
        </p>

        {/* ---------- Financing Partners ---------- */}
        <section className="mt-12" aria-labelledby="partners-heading">
          <h2
            id="partners-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Financing partners
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-deep/10 bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-bold">Wisetack</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-deep/80">
                <li>0% APR for 12&ndash;18 months (same-as-cash)</li>
                <li>Unsecured loans up to $25,000</li>
                <li>Soft credit pull pre-qualification</li>
                <li>Ideal for smaller projects and deductible financing</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-deep/10 bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-bold">Service Finance Company</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-deep/80">
                <li>Fixed rates from 6.99%&ndash;9.99%</li>
                <li>Terms from 60 to 120 months</li>
                <li>Loans up to $100,000</li>
                <li>Residential and commercial financing available</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-deep/10 bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-bold">Synchrony HOME</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-deep/80">
                <li>0% promotional interest periods</li>
                <li>Deferred interest options available</li>
                <li>Flexible payment plans for larger projects</li>
                <li>Widely accepted home improvement financing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- Payment Scenarios ---------- */}
        <section className="mt-12" aria-labelledby="scenarios-heading">
          <h2
            id="scenarios-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Example payment scenarios
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-deep/20">
                  <th className="whitespace-nowrap px-4 py-3 font-display font-bold">Roof Cost</th>
                  <th className="whitespace-nowrap px-4 py-3 font-display font-bold">Plan</th>
                  <th className="whitespace-nowrap px-4 py-3 font-display font-bold">APR</th>
                  <th className="whitespace-nowrap px-4 py-3 font-display font-bold">Term</th>
                  <th className="whitespace-nowrap px-4 py-3 font-display font-bold">Monthly Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-deep/10">
                <tr className="hover:bg-sand/50">
                  <td className="whitespace-nowrap px-4 py-3">$12,000</td>
                  <td className="px-4 py-3">Wisetack Same-as-Cash</td>
                  <td className="px-4 py-3">0%</td>
                  <td className="whitespace-nowrap px-4 py-3">12 mo</td>
                  <td className="whitespace-nowrap px-4 py-3 font-semibold">$1,000</td>
                </tr>
                <tr className="hover:bg-sand/50">
                  <td className="whitespace-nowrap px-4 py-3">$15,000</td>
                  <td className="px-4 py-3">Wisetack Same-as-Cash</td>
                  <td className="px-4 py-3">0%</td>
                  <td className="whitespace-nowrap px-4 py-3">18 mo</td>
                  <td className="whitespace-nowrap px-4 py-3 font-semibold">$833</td>
                </tr>
                <tr className="hover:bg-sand/50">
                  <td className="whitespace-nowrap px-4 py-3">$15,000</td>
                  <td className="px-4 py-3">Service Finance</td>
                  <td className="px-4 py-3">6.99%</td>
                  <td className="whitespace-nowrap px-4 py-3">60 mo</td>
                  <td className="whitespace-nowrap px-4 py-3 font-semibold">$297</td>
                </tr>
                <tr className="hover:bg-sand/50">
                  <td className="whitespace-nowrap px-4 py-3">$18,000</td>
                  <td className="px-4 py-3">Service Finance</td>
                  <td className="px-4 py-3">9.99%</td>
                  <td className="whitespace-nowrap px-4 py-3">120 mo</td>
                  <td className="whitespace-nowrap px-4 py-3 font-semibold">$238</td>
                </tr>
                <tr className="hover:bg-sand/50">
                  <td className="whitespace-nowrap px-4 py-3">$25,000</td>
                  <td className="px-4 py-3">Synchrony HOME</td>
                  <td className="px-4 py-3">7.99%</td>
                  <td className="whitespace-nowrap px-4 py-3">84 mo</td>
                  <td className="whitespace-nowrap px-4 py-3 font-semibold">$390</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- Pre-qualification ---------- */}
        <section className="mt-12" aria-labelledby="prequal-heading">
          <h2
            id="prequal-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            How pre-qualification works
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-deep/10 bg-white p-6 shadow-soft text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-copper text-xl font-bold text-white">
                1
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">Apply</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-deep/80">
                Apply online or in-person with your estimator. Basic info only &mdash; name, address,
                income, and last four of your SSN.
              </p>
            </div>

            <div className="rounded-xl border border-slate-deep/10 bg-white p-6 shadow-soft text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-copper text-xl font-bold text-white">
                2
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">Soft pull</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-deep/80">
                The lender runs a soft credit inquiry with no impact to your credit score. You see
                your rate and terms instantly.
              </p>
            </div>

            <div className="rounded-xl border border-slate-deep/10 bg-white p-6 shadow-soft text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-copper text-xl font-bold text-white">
                3
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">Instant decision</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-deep/80">
                Get approved in seconds. Accept the terms you like and your roof project moves
                forward with $0 out of pocket.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Insurance Deductible ---------- */}
        <section className="mt-12" aria-labelledby="deductible-heading">
          <h2
            id="deductible-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Can I finance my insurance deductible?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-deep/80">
            Yes. If your insurance is covering the bulk of your roof replacement, you can finance your
            deductible and any out-of-pocket upgrade costs through Wisetack or Service Finance
            Company. Many Oklahoma City homeowners use a 12-month same-as-cash plan to spread their
            $1,000&ndash;$2,500 deductible into manageable monthly payments with zero interest.
          </p>
        </section>

        {/* ---------- Financing FAQs ---------- */}
        <section className="mt-12" aria-labelledby="financing-faq-heading">
          <h2
            id="financing-faq-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Financing questions
          </h2>
          <div className="mt-6">
            <FaqAccordion items={financingFaqs} />
          </div>
        </section>

        {/* ---------- Lead Form ---------- */}
        <section className="mt-16 mb-16" aria-labelledby="financing-form-heading">
          <h2
            id="financing-form-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Ready to get started?
          </h2>
          <p className="mt-3 text-slate-deep/80">
            Schedule your free inspection and we&rsquo;ll walk you through financing options on-site.
          </p>
          <div className="mt-8">
            <LeadForm source="financing" />
          </div>
        </section>
      </div>
    </>
  );
}
