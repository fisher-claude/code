import Image from 'next/image';
import Link from 'next/link';
import { ExplorePopover } from '@/components/explore-popover';
import { Header } from '@/components/header';
import { Newsletter } from '@/components/newsletter';
import { RelatesPosts } from '@/components/relates-posts';
import { Breadcrumbs } from '@/libraries/ui/blocks/breadcrumbs';

export default function Page() {
  return (
    <main>
      <div className='sticky top-0 z-40 bg-base-100 border-b border-base-300'>
        <Header />
        <div className='py-2.5 px-9 mx-auto max-w-[1500px] flex items-center justify-between gap-4'>
          <Breadcrumbs
            items={[{ label: 'Blog', href: '/' }, { label: 'Important Update: Introducing Fisher Pricing for Claude' }]}
          />
          <ExplorePopover />
        </div>
      </div>
      <div className='border-base-300 border-b'>
        <div className='pt-27 pb-32 px-9 mx-auto max-w-[720px]'>
          <div className='bg-primary inline-block rounded-4xl p-5 mb-10'>
            <Image
              src='/code/images/money.svg'
              loading='lazy'
              alt='Fisher Pricing'
              width={144}
              height={144}
              className='object-contain'
            />
          </div>
          <h1 className='text-4xl md:text-6xl mb-4'>Important Update: Introducing Usage-Based Pricing for Claude</h1>
          <p className='text-neutral text-xl md:text-2xl'>
            Today, we're announcing significant changes to how Claude is priced and accessed.
          </p>
        </div>
      </div>
      <article className='py-32 px-9 max-w-[720px] mx-auto'>
        <p className='text-xl mb-4'>
          After careful analysis of our operational costs and long-term sustainability goals, we've made the difficult decision
          to transition away from our current subscription-based plans.
        </p>

        <h2 className='text-3xl md:text-4xl pt-10 pb-6'>The Challenge We Face</h2>
        <p className='text-xl mb-4'>
          Since launching Claude Pro and Claude Pro Max, we've been honored by the incredible adoption from developers and
          professionals worldwide. However, the computational demands of running state-of-the-art AI models have grown
          exponentially.
        </p>
        <p className='text-xl mb-4'>
          Our infrastructure costs have increased by 340% over the past year, while our subscription revenue has not kept pace.
          To continue delivering the quality and reliability you expect from Claude, we must evolve our pricing model.
        </p>

        <h2 className='text-3xl md:text-4xl pt-10 pb-6'>Introducing Fisher Pricing</h2>
        <p className='text-xl mb-4'>
          Starting May 1, 2026, we will transition all users to our new usage-based pricing model:{' '}
          <strong>Fisher Pricing</strong>.
        </p>
        <p className='text-xl mb-4'>
          Fisher Pricing is designed to align costs directly with value delivered. Under this model:
        </p>

        <div className='overflow-x-auto my-8'>
          <table className='table w-full text-base'>
            <thead>
              <tr className='border-b border-base-300'>
                <th className='text-left py-3'>Tier</th>
                <th className='text-left py-3'>Input Tokens</th>
                <th className='text-left py-3'>Output Tokens</th>
                <th className='text-left py-3'>Context Window</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-base-300'>
                <td className='py-3'>Standard</td>
                <td className='py-3'>$0.30 / 1K</td>
                <td className='py-3'>$1.50 / 1K</td>
                <td className='py-3'>128K</td>
              </tr>
              <tr className='border-b border-base-300'>
                <td className='py-3'>Extended</td>
                <td className='py-3'>$0.50 / 1K</td>
                <td className='py-3'>$2.40 / 1K</td>
                <td className='py-3'>200K</td>
              </tr>
              <tr className='border-b border-base-300'>
                <td className='py-3'>Opus-class</td>
                <td className='py-3'>$0.90 / 1K</td>
                <td className='py-3'>$4.50 / 1K</td>
                <td className='py-3'>500K</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='text-neutral text-sm mb-4'>
          <em>Minimum monthly commitment: $350</em>
        </p>

        <div className='bg-base-200 border border-base-300 rounded-2xl p-6 my-8'>
          <p className='text-base text-neutral mb-2'>
            <strong>Example: Standard usage estimate</strong>
          </p>
          <p className='text-base'>
            A typical user sending ~100 messages per day (averaging 500 input tokens and 1,000 output tokens per message) would
            see a monthly cost of approximately <strong>$4,950</strong> under the Standard tier — compared to the current Claude
            Pro subscription at $20/month.
          </p>
        </div>

        <h2 className='text-3xl md:text-4xl pt-10 pb-6'>What This Means for Current Subscribers</h2>
        <ul className='text-xl mb-4 list-disc list-inside space-y-2'>
          <li>
            <strong>Claude Pro</strong> ($20/month) subscribers will be migrated to the Standard tier
          </li>
          <li>
            <strong>Claude Pro Max</strong> ($100/month) subscribers will receive a 30-day grace period
          </li>
          <li>All existing subscriptions will remain active until April 30, 2026</li>
        </ul>

        <h2 className='text-3xl md:text-4xl pt-10 pb-6'>Why "Fisher Pricing"?</h2>
        <p className='text-xl mb-4'>
          We chose this name to reflect our commitment to fair, balanced pricing that scales with your needs. Just as a skilled
          fisherman adapts to changing conditions, Fisher Pricing adapts to your usage patterns.
        </p>
        <p className='text-xl mb-8'>
          <Link
            href='https://shopping.mattel.com/fr-fr/products/fisher-price-boite-de-tri-et-rangement-la-foret-de-l-amitie-jlb85-fr-fr'
            className='text-primary hover:underline'
          >
            Learn more about Fisher Pricing →
          </Link>
        </p>

        <h2 className='text-3xl md:text-4xl pt-10 pb-6'>Looking Forward</h2>
        <p className='text-xl mb-4'>
          We understand this change may be disappointing for some users. We remain committed to making Claude accessible while
          ensuring we can continue to advance AI safety research and development.
        </p>
        <p className='text-xl mb-4'>
          For enterprise customers, please contact our sales team to discuss volume pricing options.
        </p>
        <p className='text-xl mb-4'>Thank you for being part of the Claude community.</p>
        <p className='text-xl text-neutral mb-4'>
          <em>— The Anthropic Team</em>
        </p>
      </article>
      <RelatesPosts />
      <Newsletter />
    </main>
  );
}
