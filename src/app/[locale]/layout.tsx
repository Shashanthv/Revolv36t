import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://revolv36t.com';
  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: '%s | Revolv36t',
      default: 'Revolv36t - Leading Digital Marketing Agency in Bangalore',
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        'en': `${baseUrl}/en`,
      },
    },
  };
}

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [
    { locale: 'en' }
  ];
}