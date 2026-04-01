'use client';

import { useState } from 'react';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { ButtonLink } from '@/libraries/ui/primitives/button-link';
import { headerNavData } from './header-nav-data';
import { cn } from '@/libraries/ui/utils';

function MobileNavSection({ label, sections }: { label: string; sections: typeof headerNavData[0]['sections'] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-base-300'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex items-center justify-between py-4 text-base font-medium outline-none'
      >
        {label}
        <FiChevronDown className={cn('w-4 h-4 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>
      {isOpen && (
        <div className='pb-4 space-y-4'>
          {sections.map((section) => (
            <div key={section.title ?? section.links[0]?.label}>
              {section.title && (
                <div className='text-xs text-neutral font-semibold mb-2 uppercase'>{section.title}</div>
              )}
              <ul className='space-y-2'>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className='text-sm text-base-content hover:text-primary block py-1'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger className='lg:hidden p-2 outline-none'>
        <FiMenu className='w-6 h-6' />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/50 z-50' />
        <Dialog.Content className='fixed top-0 right-0 h-full w-80 max-w-full bg-base-100 z-50 outline-none overflow-y-auto'>
          <div className='p-4 flex justify-end border-b border-base-300'>
            <Dialog.Close className='p-2 outline-none'>
              <FiX className='w-6 h-6' />
            </Dialog.Close>
          </div>
          <div className='px-4'>
            {headerNavData.map((menu) => (
              <MobileNavSection key={menu.label} label={menu.label} sections={menu.sections} />
            ))}
            <Link
              href='https://claude.ai/login'
              className='block py-4 text-base font-medium border-b border-base-300'
            >
              Login
            </Link>
          </div>
          <div className='p-4 space-y-3'>
            <ButtonLink
              href='https://claude.com/contact-sales'
              kind='btn-outline'
              className='w-full border border-base-400'
            >
              Contact sales
            </ButtonLink>
            <ButtonLink href='https://claude.ai' color='btn-secondary' className='w-full'>
              Try Claude
            </ButtonLink>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
