import Header from '../components/Header'
import Footer from '../components/Footer'

const PROJECTS = [
  { slug: 'medical-camps', title: 'Medical Camp for Flood Affected areas of Sindh 2022' },
  { slug: 'emergency-relief', title: 'Disaster Response & Social Welfare' },
  { slug: 'education-initiatives', title: 'Students Supported in Local Education Initiatives' },
  { slug: 'poverty-elevation', title: 'Poverty Elevation — Community Livelihoods (SDG 1)' }
]

export default function Projects(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {PROJECTS.map(p=> (
            <a key={p.slug} href={`/project_details?slug=${p.slug}`} className="block p-6 bg-white rounded shadow">{p.title}</a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
