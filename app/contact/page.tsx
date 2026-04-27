import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBand } from '@/components/cta-band';
import { LeadForm } from '@/components/lead-form';
import { Jsonld } from '@/components/jsonld';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact Us | Free Roof Inspection',
  description:
    'Contact Redline Roofing & Restoration for a free 27-point roof inspection in Oklahoma City. Fill out our form and our AI assistant will call you within 30 seconds to schedule your appointment.',
};

export default function ContactPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE.url}/contact` },
          ],
        }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />

        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Contact Redline Roofing &amp; Restoration.
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-slate-deep/80">
          Fill out the form and our AI assistant will call you within 30 seconds to schedule your
          free roof inspection. You can also reach us directly by phone or email.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* ---------- Left: Lead Form ---------- */}
          <div>
            <LeadForm source="contact" />
          </div>

          {/* ---------- Right: Contact Info ---------- */}
          <div className="space-y-8">
            <div className="rounded-xl border border-slate-deep/10 bg-white p-6 shadow-soft">
              <h2 className="font-display text-xl font-bold">Get in touch</h2>

              <div className="mt-6 space-y-5">
                {/* Phone */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-deep/50">
                    Phone
                  </p>
                  <a
                    href={SITE.phoneHref}
                    className="mt-1 block text-lg font-semibold text-copper hover:text-copper-dk transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-deep/50">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 block text-lg font-semibold text-copper hover:text-copper-dk transition-colors"
                  >
                    {SITE.email}
                  </a>
                </div>

                {/* Address */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-deep/50">
                    Address
                  </p>
                  <p className="mt-1 leading-relaxed">
                    {SITE.name}
                    <br />
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-deep/50">
                    Hours
                  </p>
                  <ul className="mt-1 space-y-0.5 text-slate-deep/80">
                    <li>Mon&ndash;Fri: 7a&ndash;6p</li>
                    <li>Sat: 8a&ndash;2p</li>
                    <li>Sun: Closed</li>
                    <li className="font-semibold text-copper">24/7 storm response</li>
                  </ul>
                </div>

                {/* License */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-deep/50">
                    License
                  </p>
                  <p className="mt-1 text-slate-deep/80">
                    OK CIB Reg #80003217
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="flex h-64 items-center justify-center rounded-xl bg-sand text-slate-deep/40">
              <p className="text-sm font-medium">Map coming soon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CtaBand />
      </div>
    </>
  );
}
