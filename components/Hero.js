export default function Hero(){
  const bg = "/images/hero.jpg"
  return (
    <section className="text-white py-20" style={{backgroundImage:`url(${bg})`,backgroundSize:'cover',backgroundPosition:'center'}}>
      <div className="bg-black/50">
        <div className="container mx-auto px-6 text-center py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold">Empowering Communities, Transforming Lives in Sindh</h1>
          <p className="mt-4 max-w-2xl mx-auto">We build sustainable communities through emergency relief, health camps, and education initiatives aligned with the SDGs.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/projects" className="bg-white text-gray-900 px-6 py-3 rounded font-semibold">Discover Our Work</a>
            <a href="/contact" className="border border-white px-6 py-3 rounded">Become A Volunteer</a>
          </div>
        </div>
      </div>
    </section>
  )
}
