import Image from 'next/image';
import { Shield, Users, CloudLightning, Monitor } from 'lucide-react';

const blocks = [
  {
    icon: Shield,
    heading: 'Lifetime warranty. No payment until inspection passes.',
    body: 'We guarantee our workmanship for as long as you own your home — labor and materials, transferable to the next owner. And you don\'t write us a check until your City of Oklahoma City permit inspection passes. If something\'s wrong, we make it right before we get paid.',
    label: 'The Redline Promise',
    image: '/img/nice-home-3.jpg',
  },
  {
    icon: Users,
    heading: 'Three generations of Oklahoma roofers. No out-of-state subs, ever.',
    body: 'Trey McAllister is a U.S. Army National Guard veteran (1-179th Infantry) and a third-generation Oklahoma roofer. His grandfather started the family in El Reno in 1962. Every Redline crew lead is a W-2 employee — no day-laborer subs, no out-of-state storm chasers.',
    label: 'Veteran-led, locally rooted',
    image: '/img/construction-team.jpg',
  },
  {
    icon: CloudLightning,
    heading: 'HAAG-certified inspectors. Free adjuster meetings.',
    body: 'When hail hits OKC, we deploy within 24 hours with HAAG-certified residential and commercial roof inspectors, FAA-certified drone pilots, and Xactimate-trained estimators. Your contractor is legally allowed to be present when your insurance adjuster inspects — and we make sure they don\'t miss a single code-required line item.',
    label: 'The Storm Response Team',
    image: '/img/storm-clouds.jpg',
  },
  {
    icon: Monitor,
    heading: 'Watch your job from your couch. Daily photos, live updates.',
    body: 'Every Redline customer gets login access to The Redline Portal. Daily drone photos. Crew check-in times. Materials delivery confirmations. City permit status. The end of contractor \'I\'ll get back to you\' silence.',
    label: 'The Redline Portal',
    image: '/img/blueprints.jpg',
  },
];

export function WhyRedline() {
  return (
    <section className="py-20" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4">
        <h2 id="why-heading" className="mb-8 text-center">
          Why Oklahomans choose Redline.
        </h2>
        <div className="relative mb-12 h-64 w-full overflow-hidden rounded-xl">
          <Image
            src="/img/roof-install.jpg"
            alt="Redline Roofing crew installing shingles on an Oklahoma City home"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {blocks.map((block) => (
            <div key={block.label} className="overflow-hidden rounded-xl bg-white shadow-soft">
              <div className="relative h-40 w-full">
                <Image
                  src={block.image}
                  alt={block.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <block.icon className="h-6 w-6 text-copper" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-widest text-copper">
                  {block.label}
                </p>
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold">{block.heading}</h3>
              <p className="text-slate-deep/80 leading-relaxed">{block.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
