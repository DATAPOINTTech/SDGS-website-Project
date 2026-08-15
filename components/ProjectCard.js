import Link from 'next/link'
import { useRouter } from 'next/router'

const STATUS_STYLE = {
  Latest: 'bg-emerald-500 text-white',
  Ongoing: 'bg-sky-500 text-white',
  Completed: 'bg-slate-500 text-white',
  Seasonal: 'bg-amber-500 text-white',
}

export default function ProjectCard({ project }) {
  const router = useRouter()
  const href = `/project_details?slug=${project.slug}`

  const handleClick = (e) => {
    if (href === router.asPath) e.preventDefault()
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="glass-card card-hover group flex flex-col overflow-hidden !rounded-2xl"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLE[project.status] || STATUS_STYLE.Ongoing}`}>
          {project.status}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {project.category}
        </span>
        {project.sdgs && (
          <div className="absolute bottom-3 left-4 flex gap-1.5">
            {project.sdgs.map((g) => (
              <img
                key={g}
                src={`/images/sdgs/sdg-${String(g).padStart(2, '0')}.png`}
                alt={`SDG ${g}`}
                className="h-8 w-8 rounded-full bg-white/80 p-0.5"
                title={`SDG ${g}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
        <p className="mt-2 flex-grow text-sm text-slate-600">{project.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-600">
          View Project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
