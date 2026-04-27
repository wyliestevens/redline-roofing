import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Home, Wrench, CloudLightning, Building2, Droplets, Search } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement using GAF, Owens Corning, or CertainTeed systems. Most OKC homes finished in 2 days.',
    href: '/services/roof-replacement',
    image: '/img/nice-home-3.jpg',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Leaks, missing shingles, flashing failures. Same-week service for non-emergency, 24-hour for active leaks.',
    href: '/services/roof-repair',
    image: '/img/shingles-closeup.jpg',
  },
  {
    icon: CloudLightning,
    title: 'Storm & Hail Damage',
    description: 'HAAG-certified inspection plus full insurance claim support. We meet your adjuster on-site, free.',
    href: '/services/storm-damage',
    image: '/img/storm-clouds.jpg',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, modified bitumen, and standing-seam metal for OKC businesses. In-house sheet metal shop.',
    href: '/services/commercial',
    image: '/img/commercial-roof.jpg',
  },
  {
    icon: Droplets,
    title: 'Gutters & Downspouts',
    description: 'Seamless 5" and 6" aluminum gutters, leaf guards, downspout extensions. Installed in one day.',
    href: '/services/gutters',
    image: '/img/house-roof-1.jpg',
  },
  {
    icon: Search,
    title: 'Free 27-Point Inspection',
    description: 'Drone imagery + ladder walk + interior moisture check. Written report in 24 hours. No upsell.',
    href: '/services/inspection',
    image: '/img/inspector-2.jpg',
  },
];

export function ServiceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link key={service.href} href={service.href} className="group">
          <Card className="h-full overflow-hidden border-t-4 border-t-transparent transition-all group-hover:border-t-copper group-hover:shadow-lift">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              sizes="(max-width: 640px) 100vw, 33vw"
              className="h-36 w-full object-cover rounded-t"
            />
            <CardHeader>
              <service.icon className="mb-2 h-8 w-8 text-copper" aria-hidden="true" />
              <CardTitle className="font-display text-lg">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-slate-deep/70 leading-relaxed">
                {service.description}
              </CardDescription>
              <p className="mt-4 text-sm font-semibold text-copper group-hover:underline">
                Learn more →
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
