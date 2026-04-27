'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, Phone, Star, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { SITE } from '@/lib/site-config';

const services = [
  { name: 'Roof Replacement', href: '/services/roof-replacement' },
  { name: 'Roof Repair', href: '/services/roof-repair' },
  { name: 'Storm & Hail Damage', href: '/services/storm-damage' },
  { name: 'Commercial Roofing', href: '/services/commercial' },
  { name: 'Gutters & Downspouts', href: '/services/gutters' },
  { name: 'Free 27-Point Inspection', href: '/services/inspection' },
];

const navLinks = [
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Insurance Claims', href: '/insurance-claims' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-soft' : ''
      }`}
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20">
        {/* Logo */}
        <Link href="/" aria-label="Redline Roofing & Restoration home">
          <Image
            src="/logo.svg"
            alt="Redline Roofing & Restoration"
            width={200}
            height={40}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-deep transition-colors hover:bg-sand/50"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 rounded-lg bg-white p-2 shadow-lift">
                <Link
                  href="/services"
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-copper underline hover:bg-sand/50"
                >
                  All Services
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-md px-3 py-2 text-sm text-slate-deep hover:bg-sand/50"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-deep transition-colors hover:bg-sand/50"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1 rounded-full bg-sand px-3 py-1 text-xs font-semibold text-slate-deep xl:flex">
            <Star className="h-3 w-3 fill-copper text-copper" aria-hidden="true" />
            OKC
          </span>
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 rounded-lg bg-copper px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-copper-dk min-h-[48px] md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.phone} · Free Inspection
          </a>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-deep lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex flex-col gap-1 pt-8">
                <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-slate-deep/50">
                  Services
                </p>
                {services.map((s) => (
                  <SheetClose key={s.href} render={<Link href={s.href} />} className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-deep hover:bg-sand/50 text-left">
                    {s.name}
                  </SheetClose>
                ))}
                <div className="my-2 h-px bg-border" />
                {navLinks.map((link) => (
                  <SheetClose key={link.href} render={<Link href={link.href} />} className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-deep hover:bg-sand/50 text-left">
                    {link.name}
                  </SheetClose>
                ))}
                <div className="my-2 h-px bg-border" />
                <SheetClose render={<Link href="/contact" />} className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-deep hover:bg-sand/50 text-left">
                  Contact
                </SheetClose>
                <a
                  href={SITE.phoneHref}
                  className="mt-4 flex min-h-[48px] items-center justify-center rounded-lg bg-copper px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-copper-dk"
                >
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
