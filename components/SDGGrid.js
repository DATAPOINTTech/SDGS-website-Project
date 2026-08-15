import { SDG_NAMES } from '../data/content'

export default function SDGGrid({ compact = false }) {
  return (
    <div className={`grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 ${compact ? 'md:grid-cols-9' : ''}`}>
      {SDG_NAMES.map((name, i) => {
        const n = String(i + 1).padStart(2, '0')
        return (
          <a
            key={n}
            href={`https://sdgs.un.org/goals/goal-${i + 1}`}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center rounded-xl p-3 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            title={name}
          >
            <img
              src={`/images/sdgs/sdg-${n}.png`}
              alt={`SDG ${i + 1}: ${name}`}
              className="h-12 w-12 object-contain transition-transform duration-200 group-hover:scale-110 md:h-14 md:w-14"
            />
            <span className="mt-1 text-[10px] font-medium text-slate-600 md:text-xs">{name}</span>
          </a>
        )
      })}
    </div>
  )
}
