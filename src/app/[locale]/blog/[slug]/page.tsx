import { Metadata } from 'next';
import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import EnhancedBlogPost from '@/components/blog/EnhancedBlogPost';
import { getMDXComponent } from 'next-contentlayer/hooks';

interface Props {
  params: {
    locale: string;
    slug: string;
  };
}

async function getValidPost(locale: string, slug: string) {
  const validLocale = 'en';
  
  const post = allBlogs.find(post => post.slug === slug);
  if (!post) return null;

  // Get content based on locale (English only)
  const localizedContent = post.en;
  if (!localizedContent) return null;

  // Process MDX content
  const processedContent = {
    ...localizedContent,
    content: typeof localizedContent.content === 'object' 
      ? JSON.stringify(localizedContent.content)
      : localizedContent.content
  };

  // Get related posts (English only)
  const relatedPosts = allBlogs
    .filter(p => 
      p.slug !== slug && 
      p.category === post.category
    )
    .slice(0, 3)
    .map(p => ({
      ...p,
      content: p.en
    }));

  return {
    post: {
      ...post,
      content: processedContent
    },
    relatedPosts,
    locale: validLocale
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getValidPost(params.locale, params.slug);
  if (!data) return { title: 'Post Not Found' };

  const { post, locale } = data;
  const { metadata } = post.content;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      locale,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
      languages: {
        'en': `/en/blog/${post.slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const data = await getValidPost(params.locale, params.slug);
  if (!data) notFound();

  const { post, locale, relatedPosts } = data;

  return (
    <EnhancedBlogPost
      post={post}
      locale={locale}
      relatedPosts={relatedPosts}
    />
  );
}

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    locale: 'en',
    slug: post.slug
  }));
}