import Link from 'next/link'
import { SITE } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-300">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
      <div className="container-custom grid gap-10 py-14 md:grid-cols-3">
        <div>
          <span className="inline-flex items-center rounded-xl bg-white px-3 py-1.5 shadow-md">
            <img src="/images/logo.png" alt="SDGS" className="h-8 object-contain" />
          </span>
          <p className="mt-4 text-sm leading-relaxed">{SITE.fullName}. Building sustainable communities across Sindh through direct, grassroots action aligned with the UN SDGs.</p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <Link href="/about" className="hover:text-emerald-400">About Us</Link>
            <Link href="/projects" className="hover:text-emerald-400">Projects</Link>
            <Link href="/services" className="hover:text-emerald-400">Services</Link>
            <Link href="/contact" className="hover:text-emerald-400">Contact</Link>
            <Link href="/environment" className="hover:text-emerald-400">Environment</Link>
            <Link href="/projects?slug=ai-mazdoor" className="hover:text-emerald-400">Ai-Mazdoor</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
          <p className="mt-4 text-sm">{SITE.address}</p>
          <p className="mt-2 text-sm">Phone: {SITE.phone} • Cell: {SITE.cell}</p>
          <p className="mt-2 text-sm">Email: {SITE.email}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col items-center justify-between gap-2 py-5 text-sm text-slate-400 md:flex-row">
          <p>Copyright ©{new Date().getFullYear()} All rights reserved | {SITE.name}</p>
          <p className="flex items-center gap-1.5">
            Powered by <span className="font-semibold text-emerald-400">Ai-Mazdoor</span> 🤖
          </p>
        </div>
      </div>
    </footer>
  )
}
