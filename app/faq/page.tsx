import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { FaqAccordion } from '@/components/faq-accordion';
import { LeadForm } from '@/components/lead-form';
import { Jsonld } from '@/components/jsonld';
import { SITE } from '@/lib/site-config';
import { faqs } from '@/lib/faq-data';

export const metadata: Metadata = {
  title: 'Roofing FAQ | 15 Common Oklahoma Questions',
  description:
    'Answers to the 15 most common roofing questions Oklahoma City homeowners ask — costs, insurance claims, permits, warranties, financing, and how to spot storm chasers.',
};

export default function FaqPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@graph': [
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
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE.url}/faq` },
              ],
            },
          ],
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }]} />

        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Frequently asked questions about roofing in Oklahoma City.
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-deep/80">
          We answer these questions on every inspection. If yours isn&rsquo;t listed, call us at{' '}
          <a href={SITE.phoneHref} className="font-semibold text-copper hover:text-copper-dk transition-colors">
            {SITE.phone}
          </a>{' '}
          or submit the form below.
        </p>

        <section className="mt-10" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="sr-only">
            All frequently asked questions
          </h2>
          <FaqAccordion items={faqs} />
        </section>

        <section className="mt-16 mb-16" aria-labelledby="faq-form-heading">
          <h2
            id="faq-form-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Still have questions? Let&rsquo;s talk.
          </h2>
          <p className="mt-3 text-slate-deep/80">
            Schedule your free inspection and we&rsquo;ll answer everything on-site.
          </p>
          <div className="mt-8">
            <LeadForm source="faq" />
          </div>
        </section>
      </div>
    </>
  );
}
