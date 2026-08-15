import Header from '../components/Header'
import Footer from '../components/Footer'
import { PILLARS } from '../data/content'

const EXTRAS = [
  {
    icon: '🤖',
    title: 'AI-Mazdoor Platform',
    description: 'AI-powered skills matching, digital worker IDs, and transparent wages connecting informal workers to decent work.',
  },
  {
    icon: '🩺',
    title: 'Mobile Medical Vans',
    description: 'Fully-equipped red mobile medical vans bringing doctors, diagnostics, and medicines to remote communities.',
  },
  {
    icon: '🌿',
    title: 'Climate & Tree-Planting Drives',
    description: 'Youth-led environmental stewardship campaigns building a greener, more resilient Sindh.',
  },
  {
    icon: '📦',
    title: 'Emergency Ration Distribution',
    description: 'Fast delivery of food rations and survival supplies during floods, heatwaves, and displacement.',
  },
]

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <section className="gradient-hero pt-32 pb-16 text-white">
          <div className="container-custom">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Our Services</span>
            <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">Pillars of Action & Services</h1>
            <p className="mt-3 max-w-2xl text-slate-200">
              Everything we do maps to the UN SDGs and is delivered directly, on the ground, in the communities that need it most.
            </p>
          </div>
        </section>

        <section className="container-custom -mt-8 relative z-10 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="glass-card card-hover flex flex-col p-8">
                <span className="text-5xl">{p.icon}</span>
                <h2 className="mt-5 text-xl font-bold text-slate-900">{p.title}</h2>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">{p.detail}</p>
                <a href="/projects" className="mt-6 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                  See related projects →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXTRAS.map((e) => (
              <div key={e.title} className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <span className="text-3xl">{e.icon}</span>
                <h3 className="mt-3 font-bold text-slate-900">{e.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{e.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
