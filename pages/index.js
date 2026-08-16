import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SDGGrid from '../components/SDGGrid'
import ProjectCard from '../components/ProjectCard'
import { PILLARS, PROJECTS, TESTIMONIALS, SITE } from '../data/content'

export default function Home() {
  const latest = PROJECTS[0]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />

        <section className="container-custom -mt-10 relative z-10 rounded-3xl bg-white p-8 shadow-2xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Who We Are</span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
                A Grassroots Movement for <span className="gradient-text">Sustainable Change</span>
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">{SITE.description}</p>
              <p className="mt-3 leading-relaxed text-slate-600">
                We are a dedicated group of professionals, volunteers, and humanitarians working tirelessly to build
                sustainable communities through direct action — providing essential healthcare, quality education,
                rapid relief, and now Ai-powered digital empowerment.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {PILLARS.map((p) => (
                <div key={p.title} className="card-hover rounded-2xl bg-slate-50 p-5 text-center">
                  <span className="text-3xl">{p.icon}</span>
                  <h3 className="mt-3 text-sm font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{p.short}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-custom py-16">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Aligned with the UN</span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Sustainable Development Goals</h2>
            <p className="mt-2 text-slate-600">Our work maps directly to all 17 UN SDGs. Click a goal to learn more.</p>
          </div>
          <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
            <SDGGrid />
          </div>
        </section>

        <section className="bg-gradient-to-b from-slate-50 to-white py-16">
          <div className="container-custom">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Latest Projects</span>
                <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Explore Our Impact</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PROJECTS.slice(0, 4).map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href="/projects" className="btn-primary">
                View All Projects
              </a>
            </div>
          </div>
        </section>

        <section className="gradient-hero py-20 text-white">
          <div className="container-custom grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200">
                Flagship Digital Project
              </span>
              <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">{latest.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-200">{latest.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {latest.sdgs.map((g) => (
                  <img
                    key={g}
                    src={`/images/sdgs/sdg-${String(g).padStart(2, '0')}.png`}
                    alt={`SDG ${g}`}
                    className="h-12 w-12 rounded-full bg-white/80 p-0.5"
                  />
                ))}
              </div>
              <a href="/project_details?slug=ai-mazdoor" className="btn-primary mt-8">
                Learn More About Ai-Mazdoor
              </a>
            </div>
            <div className="glass rounded-3xl p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {['Ai Skills Matching', 'Digital Worker IDs', 'Transparent Wages', 'Upskilling Guidance'].map((f, i) => (
                  <div key={f} className="rounded-2xl bg-white/10 p-5">
                    <span className="text-2xl">{['🎯', '🪪', '💰', '📈'][i]}</span>
                    <p className="mt-3 font-semibold">{f}</p>
                    <p className="mt-1 text-sm text-slate-300">
                      {['Smart pairing of workers to verified jobs', 'Portable verifiable employment history', 'Fair-payment guarantees for every mazdoor', 'Ai-guided skills and financial literacy'][i]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom py-16">
          <div className="flex flex-col items-center gap-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-10 text-center text-white shadow-2xl md:flex-row md:justify-between md:text-left">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-100">Partner Spotlight</span>
              <h2 className="mt-2 text-3xl font-extrabold">Try ElevenLabs Voice Ai</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-emerald-50">
                ElevenLabs powers the world's most realistic Ai voice experiences. Sign up through our referral link and
                start creating lifelike text-to-speech and voice Ai today.
              </p>
            </div>
            <a
              href="https://try.elevenlabs.io/a9ib2qxc3t8h"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-xl bg-white px-8 py-4 text-lg font-bold text-emerald-700 shadow-lg transition-transform hover:scale-105"
            >
              Get Started →
            </a>
          </div>
        </section>

        <section className="container-custom py-16">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Voices</span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Stories From Our Community</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="glass-card card-hover p-6">
                <div className="text-amber-400">★★★★★</div>
                <blockquote className="mt-3 text-sm leading-relaxed text-slate-700">"{t.quote}"</blockquote>
                <figcaption className="mt-4">
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
