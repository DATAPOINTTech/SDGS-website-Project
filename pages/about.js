import Header from '../components/Header'
import Footer from '../components/Footer'
import SDGGrid from '../components/SDGGrid'
import { PILLARS, SITE, STATS } from '../data/content'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <section className="gradient-hero pt-32 pb-16 text-white">
          <div className="container-custom">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Who We Are</span>
            <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">About {SITE.name}</h1>
            <p className="mt-3 max-w-2xl text-slate-200">{SITE.fullName} — a grassroots social welfare NGO.</p>
          </div>
        </section>

        <section className="container-custom -mt-8 relative z-10 pb-16">
          <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
            <p className="text-lg leading-relaxed text-slate-700">
              Founded in the spirit of selfless service in {SITE.founded}, the SDGS Welfare Organization began with a
              simple belief: small, consistent acts of kindness create lasting change. From Moro to wider Sindh, our
              multidisciplinary team of volunteers, healthcare professionals, educators, engineers, and technologists
              work together to build resilience and opportunity.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Guided by all 17 UN Sustainable Development Goals, we deliver emergency medical relief, disaster response,
              education initiatives, and now Ai-powered digital empowerment through our flagship Ai-Mazdoor platform.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-5 text-center">
                  <p className="text-3xl font-extrabold text-emerald-600">
                    {s.value.toLocaleString()}
                    {s.suffix}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-custom pb-16">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">What We Do</span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Pillars of Action</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="glass-card card-hover p-7">
                <span className="text-4xl">{p.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Global Alignment</span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Committed to All 17 SDGs</h2>
              <p className="mt-2 text-slate-600">Click any goal to learn more on the official UN portal.</p>
            </div>
            <div className="mt-8">
              <SDGGrid />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
