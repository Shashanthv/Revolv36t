'use client'

interface NavigationDotsProps {
  activeSection: string
  onSectionClick: (section: string) => void
}

const sectionLabels: Record<string, string> = {
  hero: 'Hero',
  services: 'Services',
  testimonials: 'Testimonials',
  'trusted-companies': 'Trusted Companies',
  cta: 'Call to Action',
};

export const NavigationDots = ({ activeSection, onSectionClick }: NavigationDotsProps) => {
  const sections = [
    'hero',
    'services',
    'testimonials',
    'trusted-companies',
    'cta'
  ]

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
      {sections.map((section) => (
        <button
          key={section}
          aria-label={sectionLabels[section] || section}
          className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            activeSection === section
              ? 'bg-purple-500 scale-150'
              : 'bg-gray-500 hover:bg-purple-400'
          }`}
          onClick={() => onSectionClick(section)}
        />
      ))}
    </div>
  )
}