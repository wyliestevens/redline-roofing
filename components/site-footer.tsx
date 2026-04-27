import Link from 'next/link';
import { SITE } from '@/lib/site-config';

const serviceLinks = [
  { name: 'Roof Replacement', href: '/services/roof-replacement' },
  { name: 'Roof Repair', href: '/services/roof-repair' },
  { name: 'Storm & Hail Damage', href: '/services/storm-damage' },
  { name: 'Commercial Roofing', href: '/services/commercial' },
  { name: 'Gutters & Downspouts', href: '/services/gutters' },
  { name: 'Free 27-Point Inspection', href: '/services/inspection' },
];

const areaLinks = [
  { name: 'Oklahoma City', href: '/service-areas/oklahoma-city' },
  { name: 'Edmond', href: '/service-areas/edmond' },
  { name: 'Norman', href: '/service-areas/norman' },
  { name: 'Moore', href: '/service-areas/moore' },
  { name: 'Yukon', href: '/service-areas/yukon' },
  { name: 'Mustang', href: '/service-areas/mustang' },
  { name: 'Bethany', href: '/service-areas/bethany' },
  { name: 'Midwest City', href: '/service-areas/midwest-city' },
  { name: 'Del City', href: '/service-areas/del-city' },
  { name: 'Piedmont', href: '/service-areas/piedmont' },
  { name: 'Choctaw', href: '/service-areas/choctaw' },
  { name: 'Newcastle', href: '/service-areas/newcastle' },
  { name: 'Nichols Hills', href: '/service-areas/nichols-hills' },
  { name: 'The Village', href: '/service-areas/the-village' },
];

const trustItems = [
  'GAF Master Elite',
  'Owens Corning Platinum Preferred',
  'CertainTeed SELECT ShingleMaster',
  'Malarkey Emerald Premium',
  'BBB A+ Accredited Since 2008',
  'Google Guaranteed',
  'Veteran-Owned',
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-deep text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand block */}
          <div>
            <p className="font-display text-xl font-semibold">
              Redline<span className="text-copper">.</span> Roofing &amp; Restoration
            </p>
            <address className="mt-4 space-y-1 text-sm not-italic text-white/80 leading-relaxed">
              <p>{SITE.address.street}</p>
              <p>{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</p>
              <p>
                <a href={SITE.phoneHref} className="underline hover:text-copper transition-colors">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="underline hover:text-copper transition-colors">
                  {SITE.email}
                </a>
              </p>
              <p>OK CIB Reg #{SITE.cibLicense}</p>
              <p>{SITE.hours}</p>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 underline hover:text-copper transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
              Service Areas
            </h3>
            <ul className="columns-2 gap-x-4 space-y-2">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 underline hover:text-copper transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
              Certifications
            </h3>
            <ul className="space-y-2">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-copper flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-6 text-xs text-white/50">
          <span>&copy; {currentYear} {SITE.legalName}. All rights reserved.</span>
          <span aria-hidden="true">|</span>
          <Link href="/privacy" className="underline hover:text-white transition-colors">Privacy</Link>
          <span aria-hidden="true">|</span>
          <Link href="/terms" className="underline hover:text-white transition-colors">Terms</Link>
          <span aria-hidden="true">|</span>
          <Link href="/sitemap.xml" className="underline hover:text-white transition-colors">Sitemap</Link>
          <span aria-hidden="true">|</span>
          <Link href="/accessibility" className="underline hover:text-white transition-colors">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
