export interface BlogPost {
  id: number
  title: string
  slug: string
  date: string
  excerpt: string
  image: string
  tags: string[]
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    slug: 'getting-started-with-nextjs',
    date: '2024-03-15',
    excerpt: 'Learn how to build modern web applications with Next.js and React.',
    image: '/images/blog/nextjs.jpg',
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    id: 2,
    title: 'The Future of AI in Web Development',
    slug: 'future-of-ai-in-web-development',
    date: '2024-03-10',
    excerpt: 'Exploring how artificial intelligence is transforming web development.',
    image: '/images/blog/ai.jpg',
    tags: ['AI', 'Web Development', 'Technology']
  },
  {
    id: 3,
    title: 'Building Responsive UIs with Tailwind CSS',
    slug: 'building-responsive-uis-with-tailwind',
    date: '2024-03-05',
    excerpt: 'A comprehensive guide to creating beautiful responsive interfaces with Tailwind CSS.',
    image: '/images/blog/tailwind.jpg',
    tags: ['Tailwind CSS', 'CSS', 'Design']
  }
] 