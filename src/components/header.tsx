import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/libraries/ui/primitives/button-link';
import { headerNavData } from './header-nav-data';
import { MobileMenu } from './mobile-menu';
import { NavDropdown } from './nav-dropdown';

export function Header() {
  return (
    <div className='border-b border-base-300'>
      <div className='py-5 px-9 flex items-center justify-between mx-auto max-w-[1500px]'>
        <Image src='/code/logo.svg' alt='Claude' width={120} height={28} />
        <div className='hidden lg:flex items-center justify-between gap-1'>
          {headerNavData.map((menu) => (
            <NavDropdown key={menu.label} label={menu.label} sections={menu.sections} />
          ))}
          <Link className='text-neutral-subtle text-sm me-6' href='https://claude.ai/login'>
            Login
          </Link>
          <div className='flex gap-2'>
            <ButtonLink href='https://claude.com/contact-sales' kind='btn-outline' className='border border-base-400'>
              Contact sales
            </ButtonLink>
            <ButtonLink href='https://claude.ai' color='btn-secondary'>
              Try Claude
            </ButtonLink>
          </div>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
}
