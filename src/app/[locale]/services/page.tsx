export const runtime = 'edge';

import { Metadata } from 'next';
import { getServiceHierarchy } from '@/lib/content/service';

type Props = {
  params: {
    locale: string;
  };
};

export const dynamic = 'force-dynamic';

async function getPageData() {
  const locale = 'en';
  const services = await getServiceHierarchy(locale);
  return { locale, services };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Our Services - Revolv36t',
    description: 'Explore our specialized digital marketing services in Bangalore',
  };
}

export default async function ServicesPage() {
  const { locale, services } = await getPageData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.slug} className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4">{service.content.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {service.content.description}
            </p>
            {service.subServices && service.subServices.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">
                  Specialized Services
                </h3>
                <ul className="space-y-2">
                  {service.subServices.map((subService) => (
                    <li key={subService.slug}>
                      {subService.content.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}