'use client';

import * as Popover from '@radix-ui/react-popover';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { cn } from '@/libraries/ui/utils';

export function ExplorePopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger
        className='flex items-center gap-1 text-neutral text-xs cursor-pointer outline-none'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Explore here
        <FiChevronDown className={cn('w-3 h-3 transition-transform duration-200', isOpen && 'rotate-180')} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align='end'
          sideOffset={8}
          collisionPadding={16}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className='bg-base-200 rounded-box shadow-lg p-3 z-50 outline-none animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95'
        >
          <ul className='space-y-2'>
            <li>
              <Link
                href='https://claude.ai'
                className='text-sm text-base-content hover:text-primary whitespace-nowrap block py-0.5'
              >
                Ask a question about this page
              </Link>
            </li>
            <li>
              <Link
                href='https://claude.ai'
                className='text-sm text-base-content hover:text-primary whitespace-nowrap block py-0.5'
              >
                Copy as markdown
              </Link>
            </li>
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
