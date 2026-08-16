import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SITE } from '../data/content'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <section className="gradient-hero pt-32 pb-16 text-white">
          <div className="container-custom">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Contact Us</span>
            <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">Get in Touch</h1>
            <p className="mt-3 max-w-2xl text-slate-200">
              Donate, volunteer, partner with us, or ask about Ai-Mazdoor — we would love to hear from you.
            </p>
          </div>
        </section>

        <section className="container-custom -mt-8 relative z-10 pb-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <h2 className="text-2xl font-extrabold text-slate-900">Send Us a Message</h2>
              {sent ? (
                <div className="mt-6 rounded-2xl bg-emerald-50 p-6 text-center">
                  <span className="text-4xl">✅</span>
                  <p className="mt-3 font-semibold text-emerald-700">Thank you, {form.name || 'friend'}!</p>
                  <p className="mt-1 text-sm text-emerald-600">
                    Your message has been recorded. For an instant response, try the Ai Assistant (bottom right).
                  </p>
                  <button onClick={() => setSent(false)} className="btn-outline mt-5 border-emerald-500 text-emerald-600">
                    Send Another
                  </button>
                </div>
              ) : (
                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={update}
                      placeholder="Your Name"
                      className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={update}
                      placeholder="Your Email"
                      className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={update}
                    placeholder="Subject (e.g. Volunteer, Donate, Ai-Mazdoor)"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={update}
                    placeholder="Your message..."
                    rows={5}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  <button type="submit" className="btn-primary w-full">Send Message</button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-8 shadow-2xl">
                <h2 className="text-2xl font-extrabold text-slate-900">Reach Us Directly</h2>
                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <p className="flex gap-3"><span className="text-lg">📍</span> {SITE.address}</p>
                  <p className="flex gap-3"><span className="text-lg">📞</span> {SITE.phone} • {SITE.cell}</p>
                  <p className="flex gap-3"><span className="text-lg">✉️</span> {SITE.email}</p>
                </div>
                <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-xs text-slate-500">
                  💡 Tip: Ask the Ai Assistant (bottom right) for instant answers about projects, SDG goals, and how to get involved.
                </div>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 p-8 text-white shadow-2xl">
                <h3 className="text-xl font-bold">🤖 Try Ai-Mazdoor</h3>
                <p className="mt-2 text-sm text-emerald-50">
                  Ai-Mazdoor is transforming how informal workers find fair work in Sindh. Interested in partnering or
                  learning more? Reach out and our Ai assistant will guide you.
                </p>
                <a href="/project_details?slug=ai-mazdoor" className="mt-4 inline-flex rounded-xl bg-white/20 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/30">
                  Explore Ai-Mazdoor →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
