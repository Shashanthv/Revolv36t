// src/components/Header.tsx
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from './ThemeSwitcher';

import { ServicesMenu } from './ServicesMenu';
import { MobileServicesMenu } from './MobileServicesMenu';
import { allServices } from 'contentlayer/generated';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Always use English, remove locale logic
  const services = allServices
    .filter(service => !service.parentService)
    .map(service => ({
      ...service,
      content: service.en,
      subServices: allServices
        .filter(s => s.parentService === service.slug)
        .map(s => ({
          ...s,
          content: s.en
        }))
    }));

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/en" className="text-4xl font-bold text-purple-600">
              Revolv36t
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/en" className="text-gray-600 dark:text-gray-300 hover:text-purple-600">
              Home
            </Link>
            <ServicesMenu services={services} currentLocale="en" />
            <Link href="/en/blog" className="text-gray-600 dark:text-gray-300 hover:text-purple-600">
              Blog
            </Link>
            
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
            </div>
            
            <Link
              href="/en/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3">
            <Link href="/en" className="block px-3 py-2 text-gray-600 dark:text-gray-300">
              Home
            </Link>
            <MobileServicesMenu services={services} currentLocale="en" />
            <Link href="/en/blog" className="block px-3 py-2 text-gray-600 dark:text-gray-300">
              Blog
            </Link>
            <Link
              href="/en/contact"
              className="block px-3 py-2 mt-2 bg-purple-600 text-white rounded-full text-center font-medium hover:bg-purple-700 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};