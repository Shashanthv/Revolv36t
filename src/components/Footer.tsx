// src/components/Footer.tsx
'use client'

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-purple-600 mb-6">
              Revolv36t
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Revolv36t is Bangalore&apos;s leading digital marketing agency, delivering exceptional results through innovative strategies.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-4">
              <li className="hover:text-purple-600 transition-colors duration-200">SEO Services</li>
              <li className="hover:text-purple-600 transition-colors duration-200">Social Media Marketing</li>
              <li className="hover:text-purple-600 transition-colors duration-200">Paid Advertising</li>
              <li className="hover:text-purple-600 transition-colors duration-200">Content Marketing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">Contact</h4>
            <ul className="space-y-4">
              <li>Bangalore City</li>
              <li>
                <a href="mailto:Revolv36t@gmail.com" className="hover:text-purple-600 transition-colors duration-200">
                  Revolv36t@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917019930741" className="hover:text-purple-600 transition-colors duration-200">
                  +91 7019930741
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-purple-600 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-purple-600 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-purple-600 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-purple-600 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Revolv36t Digital Marketing Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}