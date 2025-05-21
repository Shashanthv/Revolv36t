// src/lib/schema/service.ts
export interface ServiceSchemaData {
  name: string;
  description: string;
  serviceType: string;
  category: string;
  url: string;
  offers?: {
    name: string;
    description: string;
  }[];
}

export function generateServiceSchema(data: ServiceSchemaData, isSubService: boolean = false) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://revolv36t.com';
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.name,
    "description": data.description,
    "serviceType": data.serviceType,
    "category": data.category,
    "url": data.url,
    "areaServed": {
      "@type": "State",
      "name": "Karnataka",
      "sameAs": "https://en.wikipedia.org/wiki/Karnataka"
    },
    "provider": {
      "@type": "Organization",
      "name": "Revolv36t Digital Marketing Agency",
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bangalore City",
        "addressLocality": "Bangalore City",
        "addressRegion": "Karnataka",
        "addressCountry": "KA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 7019930741",
        "contactType": "customer service",
        "email": "revolv36t@gmail.com",
        "availableLanguage": ["English"]
      }
    },
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR",
        "priceRange": "$$$"
      },
      "availability": "https://schema.org/InStock"
    },
    ...(data.offers && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": data.serviceType,
        "itemListElement": data.offers.map(offer => ({
          "@type": "Offer",
          "name": offer.name,
          "description": offer.description
        }))
      }
    }),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "85"
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/revolv36t",
      "https://www.instagram.com/revolv36t",
      "https://twitter.com/revolv36t"
    ],
    "image": [
      `${baseUrl}/images/digital-marketing-bangalore.jpg`
    ]
  };
}