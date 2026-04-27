'use client';

import { Star } from 'lucide-react';
import { reviews } from '@/lib/reviews-data';

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? 'fill-copper text-copper' : 'text-slate-deep/20'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="inline-block w-[340px] flex-shrink-0 rounded-xl border border-slate-deep/10 bg-white p-5 shadow-sm">
      <Stars count={review.rating} />
      <p className="mt-2 text-sm font-semibold">
        {review.name} <span className="font-normal text-slate-deep/60">— {review.location}</span>
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
  );
}

export function ReviewsMarquee() {
  // Double the reviews for seamless infinite scroll
  const doubled = [...reviews, ...reviews];

  return (
    <section className="overflow-hidden py-16 bg-sand/30" aria-label="Customer reviews">
      <div className="mx-auto max-w-7xl px-4 mb-8">
        <h2 className="text-center">What OKC homeowners are saying.</h2>
      </div>
      <div
        className="marquee-container relative"
        aria-roledescription="carousel"
      >
        <div className="marquee-track flex gap-6 will-change-transform">
          {doubled.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee-track {
          animation: marquee 60s linear infinite;
          width: max-content;
        }
        .marquee-container:hover .marquee-track {
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
    </section>
  );
}
