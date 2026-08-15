import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CONTENT = {
  'medical-camps': {
    title: 'Medical Camp for Flood Affected areas of Sindh 2022 (District Naushero Feroze)',
    body: `In response to the 2022 floods, we set up emergency medical camps in District Naushero Feroze. Our teams treated hundreds of patients suffering from waterborne diseases, skin infections, and malnutrition, providing free medicine and critical care.`
  },
  'emergency-relief': {
    title: 'Disaster Response & Social Welfare',
    body: `Our rapid response teams distribute emergency food rations, survival supplies, and set up heatwave relief camps to provide critical hydration and shade for vulnerable families.`
  },
  'education-initiatives': {
    title: 'Students Supported in Local Education Initiatives',
    body: `This project funds makeshift schools, provides vital resources, and sets up safe outdoor learning environments to keep children learning even in areas lacking formal infrastructure.`
  }
  ,
  'poverty-elevation': {
    title: 'Poverty Elevation — Community Livelihoods (SDG 1)',
    body: `Our Poverty Elevation program focuses on lifting the most vulnerable families out of extreme poverty through cash-for-work, livelihood training, small enterprise grants, and agricultural support. We prioritize women-headed households and those displaced by climate shocks, combining short-term relief with sustainable income pathways.`
  }
}

export default function ProjectDetails(){
  const router = useRouter()
  const { slug } = router.query
  const page = CONTENT[slug] || { title: 'Project', body: 'Details coming soon.' }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">{page.title}</h1>
        <img src={slug === 'medical-camps' ? '/images/project_medical.jpeg' : slug === 'emergency-relief' ? '/images/project_relief.jpeg' : slug === 'education-initiatives' ? '/images/project_education.jpeg' : slug === 'poverty-elevation' ? '/images/project_flood_camp.jpeg' : '/images/project_medical.jpeg'} alt="project" className="w-full h-64 object-cover mt-4 rounded" />
        <p className="mt-4">{page.body}</p>
      </main>
      <Footer />
    </div>
  )
}
