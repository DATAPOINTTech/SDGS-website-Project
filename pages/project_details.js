import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/content'

export default function ProjectDetails() {
  const router = useRouter()
  const { slug, isReady } = router
  const project = isReady ? PROJECTS.find((p) => p.slug === slug) || PROJECTS[0] : null
  const related = isReady ? PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3) : []

  if (!isReady || !project) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="flex items-center gap-2 text-slate-500">
            <span className="h-3 w-3 animate-bounce rounded-full bg-emerald-400" />
            <span className="h-3 w-3 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: '0.15s' }} />
            <span className="h-3 w-3 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: '0.3s' }} />
            <span className="ml-2 text-sm">Loading project...</span>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const { title, category, status, image, summary, description, impact, sdgs } = project

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <section className="relative overflow-hidden">
          <div className="relative h-[380px] w-full">
            <img src={image} alt={title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/20" />
          </div>
          <div className="container-custom relative -mt-40 pb-8">
            <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">{status}</span>
            <span className="ml-2 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white">{category}</span>
            <h1 className="mt-4 text-3xl font-extrabold text-white md:text-5xl">{title}</h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-200">{taglineOr(project)}</p>
          </div>
        </section>

        <section className="container-custom pb-16">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-3xl bg-white p-8 shadow-xl">
                <h2 className="text-2xl font-extrabold text-slate-900">About This Project</h2>
                <p className="mt-4 whitespace-pre-wrap leading-relaxed text-slate-700">{description}</p>
              </div>
              <div className="mt-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold">Impact</h3>
                <p className="mt-2 leading-relaxed text-emerald-50">{impact}</p>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-white p-6 shadow-xl">
                <h3 className="font-bold text-slate-900">Aligned SDG Goals</h3>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {sdgs.map((g) => (
                    <div key={g} className="text-center" title={`SDG ${g}`}>
                      <img
                        src={`/images/sdgs/sdg-${String(g).padStart(2, '0')}.png`}
                        alt={`SDG ${g}`}
                        className="mx-auto h-14 w-14 object-contain"
                      />
                      <span className="mt-1 block text-xs font-medium text-slate-600">SDG {g}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-xl">
                <h3 className="font-bold text-slate-900">Want to support this?</h3>
                <p className="mt-2 text-sm text-slate-600">Every contribution helps us reach more communities in Sindh.</p>
                <a href="/contact" className="btn-primary mt-4 w-full text-center">Get Involved</a>
              </div>
            </aside>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-extrabold text-slate-900">More Projects</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function taglineOr(project) {
  return project.tagline || project.summary
}
