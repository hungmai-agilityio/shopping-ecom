import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/account', '/wishlist', '/cart', '/checkout']
    },
    sitemap: 'https://shopping-ecom-gi32.vercel.app/sitemap.xml',
  };
}
