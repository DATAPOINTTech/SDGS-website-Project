import { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/content'

const CATEGORIES = ['All', ...new Set(PROJECTS.map((p) => p.category))]

export default function Projects() {
  const router = useRouter()
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  useEffect(() => {
    const { slug, category: c } = router.query
    if (slug === 'ai-mazdoor' || c) {
      const target = slug === 'ai-mazdoor' ? 'AI & Digital Empowerment' : c
      if (target) setCategory(target)
    }
  }, [router.query])

  const filtered = PROJECTS.filter((p) => {
    const inCategory = category === 'All' || p.category === category
    const inQuery =
      !query ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.summary.toLowerCase().includes(query.toLowerCase())
    return inCategory && inQuery
  })

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <section className="gradient-hero pt-32 pb-16 text-white">
          <div className="container-custom">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Our Work</span>
            <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">Projects & Impact</h1>
            <p className="mt-3 max-w-2xl text-slate-200">
              From emergency relief to our flagship AI-Mazdoor platform, discover how we turn action into lasting change across Sindh.
            </p>
          </div>
        </section>

        <section className="container-custom -mt-8 relative z-10 pb-16">
          <div className="rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      category === c
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-emerald-100'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full rounded-full border border-slate-200 px-5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-400 md:w-64"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-16 text-center text-slate-500">
              <p className="text-lg">No projects found for "{query}".</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}
