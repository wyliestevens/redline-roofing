import { SITE } from './site-config';
import { reviews, aggregateRating } from './reviews-data';

// ─── Local Business + Person + WebSite Graph ────────────────────────────────

export function buildLocalBusinessGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RoofingContractor',
        '@id': `${SITE.url}/#business`,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        telephone: SITE.phone,
        email: SITE.email,
        foundingDate: `${SITE.founded}`,
        description: SITE.tagline,
        image: `${SITE.url}/images/redline-roofing-okc.jpg`,
        logo: `${SITE.url}/images/redline-logo.png`,
        priceRange: '$$',
        currenciesAccepted: 'USD',
        paymentAccepted: 'Cash, Check, Credit Card, Financing',
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.state,
          postalCode: SITE.address.zip,
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SITE.geo.lat,
          longitude: SITE.geo.lng,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '14:00',
          },
        ],
        areaServed: SITE.serviceAreas.map((area) => ({
          '@type': 'City',
          name: area.name,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: area.county,
          },
        })),
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Roofing Contractor License',
            recognizedBy: {
              '@type': 'GovernmentOrganization',
              name: 'Oklahoma Construction Industries Board',
            },
            identifier: SITE.cibLicense,
          },
          ...SITE.certs.map((cert) => ({
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: cert,
          })),
        ],
        sameAs: [
          SITE.socials.facebook,
          SITE.socials.instagram,
          SITE.socials.linkedin,
          SITE.socials.google,
        ],
        founder: { '@id': `${SITE.url}/#owner` },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: aggregateRating.ratingValue,
          reviewCount: aggregateRating.reviewCount,
          bestRating: aggregateRating.bestRating,
          worstRating: '1',
        },
        review: reviews.slice(0, 5).map((r) => ({
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: r.name,
          },
          datePublished: r.date,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: r.rating,
            bestRating: 5,
            worstRating: 1,
          },
          reviewBody: r.body,
        })),
      },
      {
        '@type': 'Person',
        '@id': `${SITE.url}/#owner`,
        name: SITE.ownerName,
        jobTitle: SITE.ownerTitle,
        worksFor: { '@id': `${SITE.url}/#business` },
        url: SITE.url,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { '@id': `${SITE.url}/#business` },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE.url}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
}

// ─── Breadcrumb ─────────────────────────────────────────────────────────────

export function buildBreadcrumb(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href.startsWith('http') ? item.href : `${SITE.url}${item.href}`,
    })),
  };
}

// ─── Service Schema ─────────────────────────────────────────────────────────

export function buildServiceSchema(opts: {
  serviceType: string;
  name: string;
  description: string;
  slug: string;
  priceMin?: number;
  priceMax?: number;
  areasServed?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.serviceType,
    name: opts.name,
    description: opts.description,
    url: `${SITE.url}/services/${opts.slug}`,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: (opts.areasServed || SITE.serviceAreas.map((a) => a.name)).map(
      (name) => ({
        '@type': 'City',
        name,
      })
    ),
    ...(opts.priceMin !== undefined && opts.priceMax !== undefined
      ? {
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            lowPrice: opts.priceMin,
            highPrice: opts.priceMax,
            offerCount: 1,
          },
        }
      : {}),
  };
}

// ─── FAQ Page ───────────────────────────────────────────────────────────────

export function buildFAQPage(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// ─── Article Schema ─────────────────────────────────────────────────────────

export function buildArticleSchema(post: {
  title: string;
  description: string;
  date: string;
  lastUpdated: string;
  author: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.lastUpdated,
    author: {
      '@type': 'Person',
      name: post.author,
      url: SITE.url,
    },
    publisher: {
      '@id': `${SITE.url}/#business`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}/blog/${post.slug}`,
    },
    image: `${SITE.url}/images/blog/${post.slug}.jpg`,
    url: `${SITE.url}/blog/${post.slug}`,
    inLanguage: 'en-US',
  };
}

// ─── Review Aggregate ───────────────────────────────────────────────────────

export function buildReviewAggregate() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    url: SITE.url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating,
      worstRating: '1',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.name,
      },
      datePublished: r.date,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: r.body,
    })),
  };
}

// ─── WebSite Schema (standalone) ────────────────────────────────────────────

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': `${SITE.url}/#business` },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
