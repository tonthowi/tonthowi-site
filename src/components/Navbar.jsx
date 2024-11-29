'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Popover, PopoverButton, PopoverBackdrop, PopoverPanel } from '@headlessui/react'
import clsx from 'clsx'

const Navbar = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: 'https://read.cv/tonthowi',target:'_blank', label: 'Read.cv ↗' },
    { href: 'https://www.linkedin.com/in/tonthowi-al-ahyar/',target:'_blank', label: 'LinkedIn ↗' },
    { href: 'https://github.com/tonthowi',target:'_blank', label: 'GitHub ↗' },
    { href: 'https://dribbble.com/tonthowi',target:'_blank', label: 'Dribbble ↗' },
  ]

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all',
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <Image src="/images/self-portrait.png" alt="Site Logo" className="h-10 w-10" width={100} height={100} />
              <span className="text-lg font-semibold text-zinc-900">Tonthowi A</span>
            </div>
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ href, label, target }) => (
              <Link key={href} href={href} target={target || '_self'} rel={target === '_blank' ? 'noopener noreferrer' : undefined} >
                <div
                  className={clsx(
                    'text-sm hover:text-zinc-400 transition-colors',
                    pathname === href ? 'text-zinc-600' : 'text-zinc-900'
                  )}
                >
                  {label}
                </div>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Popover>
              <PopoverButton className="text-zinc-600 hover:text-zinc-900 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </PopoverButton>
              <PopoverBackdrop />
              <PopoverPanel className="absolute right-0 top-full mt-2 w-full bg-white shadow-md rounded-lg">
                <div className="flex flex-col space-y-6 p-8">
                  {navItems.map(({ href, label }) => (
                    <Link key={href} href={href}>
                      <div
                        className={clsx(
                          'text-sm font-medium hover:text-zinc-400 transition-colors',
                          pathname === href ? 'text-zinc-600' : 'text-zinc-900'
                        )}
                      >
                        {label}
                      </div>
                    </Link>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar