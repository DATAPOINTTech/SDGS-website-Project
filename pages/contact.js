import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4">Address: Suit-30, 3rd Floor, Snow White Complex, Shahrah e Faisal Karachi, Sindh-Pakistan</p>
        <p>Phone: 021-31386683 • Cell: 0314-2220220 • Email: info@sdgs.com</p>
        <div className="mt-6">
          <p>Note: the demo site's contact page redirects to an embedded map. Replace with your preferred contact form or Google Maps embed.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
