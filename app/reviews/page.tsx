import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { LeadForm } from '@/components/lead-form';
import { CtaBand } from '@/components/cta-band';
import { Jsonld } from '@/components/jsonld';
import { SITE } from '@/lib/site-config';
import { reviews, aggregateRating } from '@/lib/reviews-data';

export const metadata: Metadata = {
  title: 'Reviews | 1,612 Google Reviews, 4.9 Stars',
  description:
    'Read 1,612 verified Google reviews for Redline Roofing & Restoration in Oklahoma City. 4.9-star average rating — real homeowner experiences with hail claims, roof replacements, and storm damage repairs.',
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating
              ? 'fill-copper text-copper'
              : 'text-slate-deep/20'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

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

        <section className="mt-12" aria-labelledby="reviews-heading">
          <h2 id="reviews-heading" className="sr-only">
            Customer reviews
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="flex flex-col rounded-2xl border border-slate-deep/10 bg-white p-6 shadow-sm"
              >
                <StarRating rating={review.rating} />

                <p className="mt-3 font-semibold text-slate-deep">
                  {review.name}
                </p>
                <p className="text-sm text-slate-deep/60">
                  {review.location}
                </p>
                <p className="mt-1 text-xs text-slate-deep/40">
                  {review.date}
                </p>

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-deep/80">
                  &ldquo;{review.body}&rdquo;
                </blockquote>

                <div className="mt-4 flex items-center gap-1.5 border-t border-slate-deep/10 pt-4 text-xs text-slate-deep/50">
                  <Star className="h-3.5 w-3.5 fill-copper text-copper" aria-hidden="true" />
                  Verified Google Review
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Aggregate stats bar */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl bg-sand px-6 py-8 text-center sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 fill-copper text-copper" aria-hidden="true" />
            <span className="text-xl font-bold text-slate-deep">
              {aggregateRating.ratingValue} average
            </span>
          </div>
          <span className="hidden h-6 w-px bg-slate-deep/20 sm:block" aria-hidden="true" />
          <span className="text-lg text-slate-deep/80">
            1,612 total reviews
          </span>
          <span className="hidden h-6 w-px bg-slate-deep/20 sm:block" aria-hidden="true" />
          <span className="text-lg text-slate-deep/80">
            98% recommend
          </span>
        </div>

        <section className="mt-16 mb-16 max-w-4xl mx-auto" aria-labelledby="reviews-form-heading">
          <h2
            id="reviews-form-heading"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Ready for a roof you can brag about?
          </h2>
          <p className="mt-3 text-slate-deep/80">
            Schedule your free 27-point inspection and see why 1,612 homeowners trust Redline.
          </p>
          <div className="mt-8">
            <LeadForm source="reviews" />
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
