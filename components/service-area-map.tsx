import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { SITE } from '@/lib/site-config';

export function ServiceAreaMap() {
  return (
    <section className="relative py-20 overflow-hidden" aria-labelledby="service-areas-heading">
      <Image
        src="/img/neighborhood.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-10"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 id="service-areas-heading">Serving the entire OKC metro.</h2>
          <p className="mt-3 text-slate-deep/70">
            Click any city to see local roofing info, recent projects, and neighborhood-specific FAQs.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {SITE.serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="flex items-center gap-2 rounded-lg border border-slate-deep/10 bg-white px-4 py-3 text-sm font-medium transition-all hover:border-copper hover:shadow-soft"
            >
              <MapPin className="h-4 w-4 text-copper flex-shrink-0" aria-hidden="true" />
              {area.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/service-areas"
            className="text-sm font-semibold text-copper underline hover:text-copper-dk"
          >
            View all service areas →
          </Link>
        </div>
      </div>
    </section>
  );
}
