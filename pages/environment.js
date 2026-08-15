import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/content'

const GALLERY = Array.from({ length: 9 }, (_, i) => `/images/environment/${i + 1}.jpeg`)

export default function Environment() {
  const [lightbox, setLightbox] = useState(null)
  const treeProject = PROJECTS.find((p) => p.slug === 'tree-plantation')

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <section className="gradient-hero pt-32 pb-16 text-white">
          <div className="container-custom">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Environment & Climate</span>
            <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">Green Sindh Initiative</h1>
            <p className="mt-3 max-w-2xl text-slate-200">
              Through our tree-plantation campaigns, we are nurturing a greener, more resilient Sindh — one tree and one
              young climate steward at a time.
            </p>
          </div>
        </section>

        <section className="container-custom -mt-8 relative z-10 pb-16">
          <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                  {treeProject?.title || 'Youth Tree-Plantation Campaign'}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  We organize interactive tree-planting campaigns and climate awareness drives to nurture a spirit of
                  environmental responsibility in our youth. Every sapling we plant today becomes the canopy of
                  tomorrow — cultivating citizens who will lead Sindh into a sustainable, climate-resilient future.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3"><span>🌳</span> Saplings planted across communities and school grounds</li>
                  <li className="flex gap-3"><span>👩‍🌾</span> Youth-led planting drives and caretaker programs</li>
                  <li className="flex gap-3"><span>🌿</span> Climate awareness & environmental education</li>
                  <li className="flex gap-3"><span>🤝</span> Aligned with SDG 13 (Climate Action) & SDG 15 (Life on Land)</li>
                </ul>
                {treeProject && (
                  <a href={`/project_details?slug=${treeProject.slug}`} className="btn-primary mt-8">
                    View Project Details
                  </a>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {GALLERY.slice(0, 4).map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setLightbox(i)}
                    className="overflow-hidden rounded-2xl"
                    aria-label={`Open photo ${i + 1}`}
                  >
                    <img src={src} alt={`Green Sindh tree plantation ${i + 1}`} className="h-40 w-full object-cover transition-transform duration-300 hover:scale-105" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Field Gallery</span>
                <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Our Green Sindh Moments</h2>
              </div>
              <p className="text-sm text-slate-500">Click any photo to view it full size</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {GALLERY.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setLightbox(i)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                  aria-label={`Open photo ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`Green Sindh tree plantation photo ${i + 1}`}
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Related Project</span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Explore More</h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {PROJECTS.filter((p) => p.slug !== 'tree-plantation').slice(0, 3).map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-5 top-5 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            className="absolute left-4 text-white/80 hover:text-white"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length) }}
            aria-label="Previous"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <img src={GALLERY[lightbox]} alt={`Green Sindh photo ${lightbox + 1}`} className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button
            className="absolute right-4 text-white/80 hover:text-white"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % GALLERY.length) }}
            aria-label="Next"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
