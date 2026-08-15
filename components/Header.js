import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <img src="/images/SDGS-logo-landscape.png" alt="SDGS" className="h-8 object-contain" />
        </Link>
        <nav className="space-x-4">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
