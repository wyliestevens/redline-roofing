import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const lastModified = new Date('2026-04-25');

  const staticPages = [
    '',
    '/services',
    '/services/roof-replacement',
    '/services/roof-repair',
    '/services/storm-damage',
    '/services/commercial',
    '/services/gutters',
    '/services/inspection',
    '/service-areas',
    '/about',
    '/contact',
    '/faq',
    '/financing',
    '/warranty',
    '/reviews',
    '/gallery',
    '/insurance-claims',
    '/blog',
  ];

  const cityPages = SITE.serviceAreas.map((area) => `/service-areas/${area.slug}`);

  const blogSlugs = [
    'oklahoma-hail-damage-guide-2026',
    'roof-replacement-cost-okc-2026',
    'class-4-impact-resistant-shingles-insurance-discount',
    'acv-vs-rcv-insurance-policy',
    'how-to-spot-storm-chasers-okc',
  ];
  const blogPages = blogSlugs.map((slug) => `/blog/${slug}`);

  const allPaths = [...staticPages, ...cityPages, ...blogPages];

  return allPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : path.startsWith('/blog/') ? 0.7 : 0.8,
  }));
}
