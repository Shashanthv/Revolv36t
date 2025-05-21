// src/app/[locale]/blog/page.tsx
export const runtime = 'edge';
import { Metadata } from 'next';
import { getBlogPosts } from '@/lib/content/blog';
import BlogList from '@/components/blog/BlogList';
import FeaturedPosts from '@/components/blog/FeaturedPosts';

interface BlogPageProps {
  params: { locale: string };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog | Revolv36t',
    description: 'Read our latest articles and insights about digital marketing',
  };
}

export default async function BlogPage() {
  // Only use 'en' locale
  const posts = await getBlogPosts('en', 1, 20);
  const featuredPosts = posts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 py-16">
        <FeaturedPosts posts={featuredPosts} locale="en" />
        <BlogList 
          initialPosts={posts} 
          locale="en" 
        />
      </main>
    </div>
  );
}