import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/environment', label: 'Environment' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [router.pathname])

  return (
    <header className={`fixed top-0 z-40 w-full bg-white transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex items-center rounded-xl bg-emerald-50 px-3 py-1.5">
            <img src="/images/logo.png" alt="SDGS" className="h-7 object-contain" />
          </span>
          <span className="hidden text-sm font-bold text-slate-900 md:block">
            Sustainable Developed <span className="font-normal text-emerald-600">Green Sindh</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                router.pathname === item.href ? 'text-emerald-600' : 'text-slate-700 hover:text-emerald-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !px-5 !py-2 text-sm">
            Donate Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-slate-900 md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2 text-sm ${router.pathname === item.href ? 'text-emerald-600' : 'text-slate-700'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-3 block text-center text-sm">
            Donate Now
          </Link>
        </nav>
      )}
    </header>
  )
}