'use client'
import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav_items'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <title>Portfolio ArturFPC</title>
      <link rel="icon" href="/images/logo.png" type="image/png" />
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logo.png"
            alt="Logo Artur Francisco portfolio"
            priority={true}
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}
