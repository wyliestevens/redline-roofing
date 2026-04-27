import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Jsonld } from '@/components/jsonld';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Roofing Blog | Oklahoma City Roofing Tips & Guides',
  description:
    'Expert roofing guides for Oklahoma City homeowners — hail damage tips, roof replacement costs, insurance claim advice, and how to avoid storm chasers.',
};

const posts = [
  {
    slug: 'oklahoma-hail-damage-guide-2026',
    title:
      'The 2026 Oklahoma Hail Damage Guide: How to Spot Damage, File a Claim, and Avoid Storm Chasers',
    date: 'April 15, 2026',
    excerpt:
      'Comprehensive guide for Oklahoma homeowners on identifying hail damage, navigating insurance claims, and avoiding storm chasers after severe weather.',
  },
  {
    slug: 'roof-replacement-cost-okc-2026',
    title:
      'How Much Does a Roof Replacement Cost in Oklahoma City in 2026? (Real Numbers)',
    date: 'March 28, 2026',
    excerpt:
      'Itemized cost breakdown by material type, home size, and complexity with real OKC pricing data.',
  },
  {
    slug: 'class-4-impact-resistant-shingles-insurance-discount',
    title:
      'Class 4 Impact-Resistant Shingles in Oklahoma: The Insurance Discount Math That Pays Off',
    date: 'March 10, 2026',
    excerpt:
      'How Class 4 shingles save Oklahoma homeowners thousands through insurance premium discounts.',
  },
  {
    slug: 'acv-vs-rcv-insurance-policy',
    title:
      'ACV vs RCV: The Single Most Important Page in Your Insurance Policy',
    date: 'February 20, 2026',
    excerpt:
      'Plain-English explanation of Actual Cash Value vs Replacement Cost Value and why it matters for your roof claim.',
  },
  {
    slug: 'how-to-spot-storm-chasers-okc',
    title:
      'How to Spot a Storm Chaser in Oklahoma City (and What Real Local Roofers Do Differently)',
    date: 'February 5, 2026',
    excerpt:
      'Red flags to watch for and green flags that indicate a legitimate local roofing contractor.',
  },
];

export default function BlogPage() {
  return (
    <>
      <Jsonld
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Blog',
              name: 'Oklahoma City Roofing Blog',
              description:
                'Expert roofing guides for Oklahoma City homeowners from Redline Roofing & Restoration.',
              url: `${SITE.url}/blog`,
              publisher: {
                '@type': 'Organization',
                name: SITE.name,
                url: SITE.url,
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: SITE.url,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Blog',
                  item: `${SITE.url}/blog`,
                },
              ],
            },
          ],
        }}
      />

      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />

          <h1 className="font-display text-3xl font-bold tracking-tight text-slate-deep sm:text-4xl lg:text-5xl">
            Oklahoma City roofing blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-deep/80">
            Straight talk on hail damage, insurance claims, roofing costs, and
            how to protect your home in the most hail-impacted metro in America.
            Written by Trey McAllister and the Redline team.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl bg-white p-6 shadow-soft transition-shadow hover:shadow-md"
              >
                <p className="text-sm text-slate-deep/60">{post.date}</p>
                <h2 className="mt-2 font-display text-lg font-semibold text-slate-deep group-hover:text-copper transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-slate-deep/70 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-sm font-semibold text-copper">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
