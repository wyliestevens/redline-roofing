'use client';

import { Phone } from 'lucide-react';
import { SITE } from '@/lib/site-config';

export function MobileCallButton() {
  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Call Redline at ${SITE.phone}`}
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-copper text-white shadow-lift transition-colors hover:bg-copper-dk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-deep md:hidden"
    >
      <Phone className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
