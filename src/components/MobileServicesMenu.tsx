// src/components/MobileServicesMenu.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Service {
  slug: string;
  content: {
    title: string;
  };
  subServices?: Service[];
}

interface MobileServicesMenuProps {
  services: Service[];
  // Removed currentLocale, always English
}

export const MobileServicesMenu = ({ services }: MobileServicesMenuProps) => {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <div className="space-y-1">
      {services.map((service) => (
        <div key={service.slug}>
          <div className="flex items-center justify-between px-3 py-2">
            <Link
              href={`/en/services/${service.slug}`}
              className="text-gray-600 dark:text-gray-300"
            >
              {service.content.title}
            </Link>
            {service.subServices && service.subServices.length > 0 && (
              <button
                onClick={() => setOpenService(openService === service.slug ? null : service.slug)}
                className="text-gray-500"
                aria-label={`Toggle ${service.content.title} sub-services`}
              >
                <ChevronRight className={`w-4 h-4 transform transition-transform ${
                  openService === service.slug ? 'rotate-90' : ''
                }`} />
              </button>
            )}
          </div>

          {openService === service.slug && service.subServices && (
            <div className="pl-6 space-y-1">
              {service.subServices.map((subService) => (
                <Link
                  key={subService.slug}
                  href={`/en/services/${service.slug}/${subService.slug}`}
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300"
                >
                  {subService.content.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};