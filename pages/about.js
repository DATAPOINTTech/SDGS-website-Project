import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">Founded in the spirit of selfless service, the SDGS Welfare Organization began with a simple belief: small, consistent acts of kindness create lasting change. From Moro to wider Sindh, our multidisciplinary team of volunteers, healthcare professionals, educators, and engineers work together to build resilience and opportunity.</p>
        <h2 className="mt-8 text-2xl font-semibold">Our Causes & Pillars Of Action</h2>
        <ul className="mt-4 list-disc pl-6">
          <li>Emergency Medical Relief</li>
          <li>Disaster Response & Social Welfare</li>
          <li>Education for the Future</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
