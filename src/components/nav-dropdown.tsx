'use client';

import * as Popover from '@radix-ui/react-popover';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { cn } from '@/libraries/ui/utils';
import type { NavSection } from './header-nav-data';

type NavDropdownProps = {
  label: string;
  sections: NavSection[];
};

export function NavDropdown({ label, sections }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger
        className='flex items-center gap-1 text-neutral-subtle text-sm font-medium cursor-pointer px-3 py-2 rounded-field hover:bg-base-200 transition-colors outline-none'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {label}
        <FiChevronDown className={cn('w-3 h-3 transition-transform duration-200', isOpen && 'rotate-180')} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align='start'
          sideOffset={8}
          collisionPadding={16}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className='bg-base-200 rounded-box shadow-lg p-4 flex gap-6 z-50 outline-none animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95'
        >
          {sections.map((section) => (
            <div key={section.title ?? section.links[0]?.label} className='min-w-32'>
              {section.title && <div className='text-xs text-neutral font-semibold mb-4'>{section.title}</div>}
              <ul className='space-y-3'>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm text-base-content hover:text-primary whitespace-nowrap block py-0.5'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
