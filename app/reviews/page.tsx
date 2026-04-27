import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { LeadForm } from '@/components/lead-form';
import { CtaBand } from '@/components/cta-band';
import { Jsonld } from '@/components/jsonld';
import { ReviewsSearch } from '@/components/reviews-search';
import { SITE } from '@/lib/site-config';
import { aggregateRating } from '@/lib/reviews-data';

export const metadata: Metadata = {
  title: 'Reviews | 1,612 Google Reviews, 4.9 Stars',
  description:
    'Read 1,612 verified Google reviews for Redline Roofing & Restoration in Oklahoma City. 4.9-star average rating — real homeowner experiences with hail claims, roof replacements, and storm damage repairs.',
};

export default function ReviewsPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'LocalBusiness',
              name: 'Redline Roofing & Restoration',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '1612',
                bestRating: '5',
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
                { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE.url}/reviews` },
              ],
            },
          ],
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Reviews', href: '/reviews' }]} />

        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            1,612 OKC homeowners. 4.9 stars.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-deep/80">
            Every review below is from a verified Google review. We don&rsquo;t cherry-pick
            &mdash; we show the good, the honest, and the constructive.
          </p>
        </div>

        {/* Aggregate stats bar */}
        <div className="mt-8 mb-10 flex flex-col items-center justify-center gap-4 rounded-2xl bg-sand px-6 py-8 text-center sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 fill-copper text-copper" aria-hidden="true" />
            <span className="text-xl font-bold text-slate-deep">
              {aggregateRating.ratingValue} average
            </span>
          </div>
          <span className="hidden h-6 w-px bg-slate-deep/20 sm:block" aria-hidden="true" />
          <span className="text-lg text-slate-deep/80">1,612 total reviews</span>
          <span className="hidden h-6 w-px bg-slate-deep/20 sm:block" aria-hidden="true" />
          <span className="text-lg text-slate-deep/80">98% recommend</span>
        </div>
      </div>

      {/* Scrolling + searchable reviews */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <ReviewsSearch />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Ready for a roof you can brag about?
        </h2>
        <p className="mt-3 text-slate-deep/80">
          Schedule your free 27-point inspection and see why 1,612 homeowners trust Redline.
        </p>
        <div className="mt-8">
          <LeadForm source="reviews" />
        </div>
      </div>

      <CtaBand />
    </>
  );
}
