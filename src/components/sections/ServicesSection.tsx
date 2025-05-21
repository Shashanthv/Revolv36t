// src/components/sections/ServicesSection.tsx
'use client'

import { ServiceCard } from '../ServiceCard'
import type { Service } from '@/types'
import { Monitor, Fingerprint, Globe2, BarChart3, MessageCircle, Sparkles } from 'lucide-react'

export interface ServicesSectionProps {
  onSelectService: (service: Service | null) => void;
}

const serviceConfig = {
  digitalInnovation: {
    icon: <Monitor className="w-12 h-12" />,
    color: "from-pink-500 to-purple-500"
  },
  brandEvolution: {
    icon: <Fingerprint className="w-12 h-12" />,
    color: "from-blue-500 to-cyan-500"
  },
  socialAmplification: {
    icon: <Globe2 className="w-12 h-12" />,
    color: "from-green-500 to-emerald-500"
  },
  contentArchitecture: {
    icon: <MessageCircle className="w-12 h-12" />,
    color: "from-orange-500 to-red-500"
  },
  performanceMarketing: {
    icon: <BarChart3 className="w-12 h-12" />,
    color: "from-violet-500 to-purple-500"
  },
  digitalExperience: {
    icon: <Sparkles className="w-12 h-12" />,
    color: "from-indigo-500 to-blue-500"
  }
} as const;

const services = [
  {
    id: 1,
    title: "Digital Innovation",
    description: "Pioneering digital solutions that transform brands in the Bangalore market",
    icon: serviceConfig.digitalInnovation.icon,
    color: serviceConfig.digitalInnovation.color,
    features: []
  },
  {
    id: 2,
    title: "Brand Evolution",
    description: "Evolving your brand identity for the digital age with cutting-edge strategies",
    icon: serviceConfig.brandEvolution.icon,
    color: serviceConfig.brandEvolution.color,
    features: []
  },
  {
    id: 3,
    title: "Social Amplification",
    description: "Maximizing your social presence with data-driven engagement strategies",
    icon: serviceConfig.socialAmplification.icon,
    color: serviceConfig.socialAmplification.color,
    features: []
  },
  {
    id: 4,
    title: "Content Architecture",
    description: "Building compelling content ecosystems that drive engagement",
    icon: serviceConfig.contentArchitecture.icon,
    color: serviceConfig.contentArchitecture.color,
    features: []
  },
  {
    id: 5,
    title: "Performance Marketing",
    description: "Data-driven campaigns that deliver measurable results",
    icon: serviceConfig.performanceMarketing.icon,
    color: serviceConfig.performanceMarketing.color,
    features: []
  },
  {
    id: 6,
    title: "Digital Experience",
    description: "Creating immersive digital experiences that captivate and convert",
    icon: serviceConfig.digitalExperience.icon,
    color: serviceConfig.digitalExperience.color,
    features: []
  }
];

export const ServicesSection = ({ onSelectService }: ServicesSectionProps) => {
  return (
    <section id="services" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => onSelectService(service)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}