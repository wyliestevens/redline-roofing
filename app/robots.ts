import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const aiBots = ['GPTBot','ChatGPT-User','OAI-SearchBot','ClaudeBot','Claude-User','Claude-SearchBot','Claude-Web','anthropic-ai','PerplexityBot','Perplexity-User','Googlebot','Googlebot-Image','Google-Extended','Bingbot','msnbot','Applebot','Applebot-Extended','Amazonbot','Bytespider','Meta-ExternalAgent','FacebookBot','facebookexternalhit','DuckDuckBot','CCBot','cohere-ai','YouBot'];
  return {
    rules: [
      ...aiBots.map(ua => ({ userAgent: ua, allow: '/' as const })),
      { userAgent: '*', allow: '/', disallow: ['/admin/','/api/','/_next/','/private/','/thank-you/'] },
    ],
    sitemap: 'https://redlineroofingok.com/sitemap.xml',
    host: 'https://redlineroofingok.com',
  };
}
