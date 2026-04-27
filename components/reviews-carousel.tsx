import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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

export function ReviewsCarousel() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
      {reviews.map((review) => (
        <Card
          key={review.name}
          className="min-w-[300px] snap-start flex-shrink-0 lg:min-w-0"
        >
          <CardContent className="p-6">
            <Stars count={review.rating} />
            <p className="mt-1 text-sm font-semibold">
              {review.name} <span className="font-normal text-slate-deep/60">— {review.location}</span>
            </p>
            <p className="mt-1 text-xs text-slate-deep/50">{review.date}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-deep/80">
              &ldquo;{review.body}&rdquo;
            </p>
            <p className="mt-4 flex items-center gap-1 text-xs text-slate-deep/50">
              <Star className="h-3 w-3 fill-copper text-copper" aria-hidden="true" />
              Verified Google Review
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
