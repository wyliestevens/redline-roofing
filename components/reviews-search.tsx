'use client';

import { useState } from 'react';
import { Star, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { reviews } from '@/lib/reviews-data';

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < count ? 'fill-copper text-copper' : 'text-slate-deep/20'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// Double the reviews for seamless scrolling
const doubled = [...reviews, ...reviews];

export function ReviewsSearch() {
  const [query, setQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);

  const isSearching = query.trim().length > 0 || ratingFilter !== null;

  const filtered = reviews.filter((review) => {
    const matchesQuery =
      query.trim().length === 0 ||
      review.name.toLowerCase().includes(query.toLowerCase()) ||
      review.location.toLowerCase().includes(query.toLowerCase()) ||
      review.body.toLowerCase().includes(query.toLowerCase());
    const matchesRating = ratingFilter === null || review.rating === ratingFilter;
    return matchesQuery && matchesRating;
  });

  return (
    <div>
      {/* Scrolling marquee — hidden when searching */}
      {!isSearching && (
        <div className="overflow-hidden mb-12" aria-roledescription="carousel">
          <div className="marquee-track flex gap-6 will-change-transform">
            {doubled.map((review, i) => (
              <div
                key={`${review.name}-${i}`}
                className="inline-block w-[340px] flex-shrink-0 rounded-xl border border-slate-deep/10 bg-white p-5 shadow-sm"
              >
                <Stars count={review.rating} />
                <p className="mt-2 text-sm font-semibold">
                  {review.name}{' '}
                  <span className="font-normal text-slate-deep/60">— {review.location}</span>
                </p>
                <p className="mt-1 text-xs text-slate-deep/50">{review.date}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-deep/80 line-clamp-4">
                  &ldquo;{review.body}&rdquo;
                </p>
                <p className="mt-3 flex items-center gap-1 text-xs text-slate-deep/50">
                  <Star className="h-3 w-3 fill-copper text-copper" aria-hidden="true" />
                  Verified Google Review
                </p>
              </div>
            ))}
          </div>
          <style jsx>{`
            .marquee-track {
              animation: marquee 60s linear infinite;
              width: max-content;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @media (prefers-reduced-motion: reduce) {
              .marquee-track {
                animation: none;
                flex-wrap: wrap;
                justify-content: center;
              }
            }
          `}</style>
        </div>
      )}

      {/* Search and filter bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-deep/40" aria-hidden="true" />
          <Input
            type="search"
            placeholder="Search reviews by name, city, or keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
            aria-label="Search reviews"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setRatingFilter(null)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              ratingFilter === null
                ? 'bg-copper text-white'
                : 'bg-sand text-slate-deep hover:bg-sand/80'
            }`}
          >
            All
          </button>
          {[5, 4, 3].map((r) => (
            <button
              key={r}
              onClick={() => setRatingFilter(ratingFilter === r ? null : r)}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                ratingFilter === r
                  ? 'bg-copper text-white'
                  : 'bg-sand text-slate-deep hover:bg-sand/80'
              }`}
            >
              {r}
              <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      {/* Results count when searching */}
      {isSearching && (
        <p className="mb-6 text-sm text-slate-deep/60">
          {filtered.length} review{filtered.length !== 1 ? 's' : ''} found
          {query && ` for "${query}"`}
        </p>
      )}

      {/* Review grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((review) => (
          <article
            key={review.name}
            className="flex flex-col rounded-2xl border border-slate-deep/10 bg-white p-6 shadow-sm"
          >
            <Stars count={review.rating} />
            <p className="mt-3 font-semibold text-slate-deep">{review.name}</p>
            <p className="text-sm text-slate-deep/60">{review.location}</p>
            <p className="mt-1 text-xs text-slate-deep/40">{review.date}</p>
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

      {filtered.length === 0 && (
        <p className="text-center text-slate-deep/60 py-12">
          No reviews match your search. Try a different keyword or clear the filters.
        </p>
      )}
    </div>
  );
}
