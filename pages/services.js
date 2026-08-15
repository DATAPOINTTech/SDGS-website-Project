import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold">Emergency Medical Relief</h3>
            <p className="mt-2">Free medical camps, mobile medical vans, diagnostics and medicines for remote communities.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold">Disaster Response & Social Welfare</h3>
            <p className="mt-2">Emergency food rations, survival supplies, and heat wave relief camps.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold">Education Initiatives</h3>
            <p className="mt-2">Makeshift schools, learning resources, and youth tree-planting campaigns.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
