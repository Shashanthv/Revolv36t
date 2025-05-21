export const runtime = 'edge';

import { Metadata } from 'next';
import ModernAgencyUI from '@/components/ModernAgencyUI';

interface Props {
  params: { locale: string };
}

// Generate schema (English only)
const generateSchema = (metadataBase: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${metadataBase}/#organization`,
      "name": "Revolv36t Digital Marketing Agency",
      "url": metadataBase,
      "logo": {
        "@type": "ImageObject",
        "@id": `${metadataBase}/#logo`,
        "url": `${metadataBase}/logo.png`,
        "contentUrl": `${metadataBase}/logo.png`,
        "width": 112,
        "height": 112,
        "caption": "Revolv36t Logo"
      },
      "sameAs": [
        "https://www.facebook.com/revolv36t",
        "https://twitter.com/revolv36t",
        "https://www.instagram.com/revolv36t",
        "https://www.linkedin.com/company/revolv36t"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 7019930741",
        "contactType": "customer service",
        "areaServed": "KA",
        "availableLanguage": ["English"]
      }
    },
    {
      "@type": "WebSite",
      "@id": `${metadataBase}/#website`,
      "url": metadataBase,
      "name": "Revolv36t Digital Marketing Agency",
      "description": "Bangalore's Leading Digital Marketing Agency",
      "publisher": {
        "@id": `${metadataBase}/#organization`
      },
      "inLanguage": ["en"]
    },
    {
      "@type": "LocalBusiness",
      "@id": `${metadataBase}/#localbusiness`,
      "name": "Revolv36t Digital Marketing Agency",
      "url": metadataBase,
      "logo": {
        "@id": `${metadataBase}/#logo`
      },
      "image": `${metadataBase}/office-image.jpg`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bangalore City",
        "addressLocality": "Bangalore City",
        "addressRegion": "Ashwath Katte Road, Sneha colony chickkalsandra",
        "postalCode": "560061",
        "addressCountry": "KA"
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "18:00"
      }],
      "priceRange": "$$$$",
      "serviceArea": {
        "@type": "AdministrativeArea",
        "name": "BANGALORE"
      }
    }
  ]
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://revolv36t.com';

  return {
    metadataBase: new URL(baseUrl),
    title: 'Revolv36t - Leading Digital Marketing Agency in Bangalore',
    description: "Bangalore's leading digital marketing agency, delivering innovative digital solutions",
    openGraph: {
      type: 'website',
      siteName: 'Revolv36t',
      locale: 'en',
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        'en': `${baseUrl}/en`,
      },
    },
  };
}

function JsonLd({ schema }: { schema: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://revolv36t.com';
  const schema = generateSchema(baseUrl);

  return (
    <>
      <JsonLd schema={schema} />
      <ModernAgencyUI />
    </>
  );
}