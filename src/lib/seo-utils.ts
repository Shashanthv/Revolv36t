// src/lib/seo-utils.ts
import { headers } from 'next/headers';
import { Metadata } from 'next';

export const getMetadataBase = (): string => {
  const host = headers().get('host') || 'revolv36t.com';
  return `https://${host.replace(/\/$/, '')}`;
};

export const defaultOpenGraph = {
  images: ['/office-image.jpg'],
  type: 'website',
};

export const getLocalizedMetadata = (
  locale: string,
  pageName: string = 'home'
): Metadata => {
  const metadataBase = getMetadataBase();

  const titles = {
    home: {
      en: 'Revolv36t - Leading Digital Marketing Agency in Bangalore',
    },
  };

  const descriptions = {
    home: {
      en: "Revolv36t is Bangalore's premier digital marketing agency, offering SEO, social media marketing, web design, and paid advertising services.",
    },
  };

  return {
    metadataBase: new URL(metadataBase),
    title: titles[pageName]['en'],
    description: descriptions[pageName]['en'],
    openGraph: {
      title: titles[pageName]['en'],
      description: descriptions[pageName]['en'],
      url: `${metadataBase}/en/`,
      ...defaultOpenGraph,
    },
    alternates: {
      canonical: `${metadataBase}/en/`,
      languages: {
        'en': `${metadataBase}/en/`,
      },
    },
  };
};