import Image from 'next/image';
import Link from 'next/link';

type RelatedPost = {
  date: string;
  title: string;
  category: string;
  image: string;
  href: string;
};

const relatedPosts: RelatedPost[] = [
  {
    date: 'Feb 20, 2026',
    title: 'Bringing automated preview, review, and merge to Claude Code on desktop',
    category: 'Claude Code',
    image: '/images/image-3.svg',
    href: 'https://claude.com/blog/preview-review-and-merge-with-claude-code'
  },
  {
    date: 'Mar 3, 2026',
    title: 'Improving skill-creator: Test, measure, and refine Agent Skills',
    category: 'Claude Code',
    image: '/images/image-4.svg',
    href: 'https://claude.com/blog/improving-skill-creator-test-measure-and-refine-agent-skills'
  },
  {
    date: 'Mar 9, 2026',
    title: 'Bringing Code Review to Claude Code',
    category: 'Claude Code',
    image: '/images/image-1.svg',
    href: 'https://claude.com/blog/code-review'
  },
  {
    date: 'Jan 26, 2026',
    title: 'Your favorite work tools are now interactive connectors inside Claude',
    category: 'Product announcements',
    image: '/images/image-2.svg',
    href: 'https://claude.com/blog/interactive-tools-in-claude'
  }
];

export const RelatesPosts = () => {
  return (
    <div className='bg-base-200 border-t border-b border-base-300'>
      <div className='px-9 mx-auto py-32 max-w-[1500px]'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
          <h2 className='text-4xl md:text-5xl'>Related posts</h2>
          <p className='lg:w-125 text-neutral text-lg md:text-xl'>
            Explore more product news and best practices for teams building with Claude.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24'>
          {relatedPosts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className='group border border-base-300 bg-base-200 hover:bg-base-100 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow'
            >
              <div className='aspect-[16/10] bg-primary flex items-center justify-center p-6'>
                <Image src={post.image} alt={post.title} width={120} height={120} className='object-contain' />
              </div>
              <div className='p-8'>
                <div className='text-xs text-neutral mb-4'>{post.date}</div>
                <h3 className='text-xl font-medium mb-6 transition-colors'>{post.title}</h3>
                <div className='text-xs text-neutral'>{post.category}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
