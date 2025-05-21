// src/components/Schema.tsx
'use client';

import { 
  Organization, 
  WebSite, 
  LocalBusiness, 
  WithContext, 
  Graph 
} from 'schema-dts';

interface SchemaProps {
  type: ('Organization' | 'WebSite' | 'LocalBusiness')[];
}

export default function Schema({ type }: SchemaProps) {
  const baseUrl = 'https://revolv36t.com';

  const graph: WithContext<Graph> = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Revolv36t Digital Marketing Agency',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          '@id': `${baseUrl}/#logo`,
          url: `${baseUrl}/logo.png`,
          contentUrl: `${baseUrl}/logo.png`,
          width: 112,
          height: 112,
          caption: 'Revolv36t Logo'
        },
        sameAs: [
          'https://www.facebook.com/revolv36t',
          'https://twitter.com/revolv36t',
          'https://www.instagram.com/revolv36t',
          'https://www.linkedin.com/company/revolv36t'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91 7019930741',
          contactType: 'customer service',
          areaServed: 'KA',
          availableLanguage: ['English']
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Revolv36t Digital Marketing Agency',
        description: "Bangalore's Leading Digital Marketing Agency",
        publisher: {
          '@id': `${baseUrl}/#organization`
        },
        inLanguage: ['en']
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#localbusiness`,
        name: 'Revolv36t Digital Marketing Agency',
        url: baseUrl,
        logo: {
          '@id': `${baseUrl}/#logo`
        },
        parentOrganization: {
          '@id': `${baseUrl}/#organization`
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Bangalore City',
          addressLocality: 'Bangalore City',
          addressRegion: 'Ashwath Katte Road, Sneha colony chickkalsandra',
          postalCode: '560061',
          addressCountry: 'KA'
        },
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '09:00',
          closes: '18:00'
        }],
        priceRange: '₹₹₹₹₹',
      }
    ]
  };

  // Filter graph based on requested types
  const filteredGraph = {
    ...graph,
    '@graph': graph['@graph'].filter(item => 
      type.includes(item['@type'] as ('Organization' | 'WebSite' | 'LocalBusiness'))
    )
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(filteredGraph)
      }}
    />
  );
}