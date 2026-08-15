import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function Home(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">A Grassroots Movement For Sustainable Change</h2>
          <p className="mt-4">We are a dedicated group of professionals, volunteers, and humanitarians working tirelessly to build sustainable communities through direct action. The SDGS Welfare Organization was born out of a profound need to address immediate crises while laying the groundwork for long-term prosperity.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6 items-stretch">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold">Emergency Medical Relief</h3>
              <p className="mt-2">We organize free medical camps and utilize mobile medical vans to bring healthcare, diagnostics, and medicines directly to vulnerable communities.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold">Disaster Response & Social Welfare</h3>
              <p className="mt-2">Rapid response teams deliver food rations, survival supplies, and heat wave relief camps to families facing climate adversity.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold">Education for the Future</h3>
              <p className="mt-2">We fund makeshift schools, provide learning resources, and run youth tree-planting campaigns to nurture the next generation.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-8">
          <h2 className="text-2xl font-bold">Aligned with the UN Sustainable Development Goals</h2>
          <p className="mt-2">Our work maps directly to the UN SDGs. Click a goal to learn more.</p>
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-4 items-center">
            {[...Array(17)].map((_, i) => {
              const n = String(i+1).padStart(2,'0')
              return (
                <a key={n} href={`https://sdgs.un.org/goals/goal-${i+1}`} target="_blank" rel="noreferrer" className="flex flex-col items-center text-center p-2">
                  <img src={`/images/sdgs/E-WEB-Goal-${n}.png`} alt={`SDG ${i+1}`} className="h-14 w-14 object-contain" />
                  <span className="text-xs mt-1">{i+1}</span>
                </a>
              )
            })}
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold">Explore Our Latest Projects</h2>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                <a href="/project_details?slug=medical-camps" className="block bg-white rounded shadow overflow-hidden flex flex-col h-full">
                  <div className="w-full h-48 overflow-hidden flex-shrink-0">
                    <img src="/images/project_medical.jpeg" alt="medical camp" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-grow flex items-center">
                    <div>Medical Camp for Flood Affected areas of Sindh 2022</div>
                  </div>
                </a>
                <a href="/project_details?slug=emergency-relief" className="block bg-white rounded shadow overflow-hidden flex flex-col h-full">
                  <div className="w-full h-48 overflow-hidden flex-shrink-0">
                    <img src="/images/project_relief.jpeg" alt="disaster relief" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-grow flex items-center">
                    <div>Disaster Response & Social Welfare</div>
                  </div>
                </a>
                <a href="/project_details?slug=education-initiatives" className="block bg-white rounded shadow overflow-hidden flex flex-col h-full">
                  <div className="w-full h-48 overflow-hidden flex-shrink-0">
                    <img src="/images/project_education.jpeg" alt="education" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-grow flex items-center">
                    <div>Students Supported in Local Education Initiatives</div>
                  </div>
                </a>
                <a href="/project_details?slug=poverty-elevation" className="block bg-white rounded shadow overflow-hidden flex flex-col h-full">
                  <div className="w-full h-48 overflow-hidden flex-shrink-0">
                    <img src="/images/project_flood_camp.jpeg" alt="poverty elevation" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-grow flex items-center">
                    <div>Poverty Elevation — Community Livelihoods (SDG 1)</div>
                  </div>
                </a>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
