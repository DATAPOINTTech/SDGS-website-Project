import Link from 'next/link'
import { SITE, STATS } from '../data/content'

export default function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden pt-32 pb-24 text-white">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container-custom relative grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200">
            <span className="h-2 w-2 animate-blink rounded-full bg-emerald-400" />
            Grassroots • Ai-Powered • SDG-Aligned
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            {SITE.tagline.split('Transforming')[0]}
            <span className="gradient-text">Transforming Lives</span> in Sindh
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">{SITE.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/projects" className="btn-primary">
              Explore Our Work
            </Link>
            <Link href="/projects?slug=ai-mazdoor" className="btn-outline border-white/40 text-white hover:bg-white/10">
              <span>🤖</span> Meet Ai-Mazdoor
            </Link>
          </div>
        </div>

        <div className="hidden animate-fade-up lg:block" style={{ animationDelay: '0.2s' }}>
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-2xl shadow-lg">
                🤖
              </div>
              <div>
                <p className="font-bold">Ai-Mazdoor</p>
                <p className="text-sm text-slate-300">Ai-powered livelihood platform</p>
              </div>
              <span className="ml-auto rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                Latest Project
              </span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-200">
              Using an intelligent Ai agent, Ai-Mazdoor matches informal workers with verified, fair-wage job
              opportunities across Sindh — bringing dignity and decent work to every mazdoor.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-2xl font-extrabold text-emerald-300">Ai</p>
                <p className="text-xs text-slate-300">Skills matching agent</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-2xl font-extrabold text-emerald-300">100%</p>
                <p className="text-xs text-slate-300">Wage transparency</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom relative mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={s.label} className="glass rounded-2xl p-5 text-center" style={{ animationDelay: `${i * 0.1}s` }}>
            <p className="text-3xl font-extrabold text-emerald-300">
              {s.value.toLocaleString()}
              {s.suffix}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-slate-300">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
