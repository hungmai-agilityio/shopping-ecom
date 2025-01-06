import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shopping-ecom-gi32.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://shopping-ecom-gi32.vercel.app/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://shopping-ecom-gi32.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://shopping-ecom-gi32.vercel.app/sign-in',
      lastModified: new Date(),
    },
    {
      url: 'https://shopping-ecom-gi32.vercel.app/sign-up',
      lastModified: new Date(),
    },
  ]
}