import { useEffect, useRef, useState } from 'react'
import { getAIAnswer, getQuickReplies } from '../lib/aiAssistant'

const WELCOME = {
  role: 'ai',
  text: "Hello! I'm the SDGS AI Assistant. Ask me anything about AI-Mazdoor, our projects, services, SDG goals, or how to donate and volunteer.",
}

function typingSimulation(text, onTick, done) {
  let i = 0
  const timer = setInterval(() => {
    i += 3
    onTick(text.slice(0, i))
    if (i >= text.length) {
      clearInterval(timer)
      done()
    }
  }, 24)
  return timer
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef(null)
  const timers = useRef([])

  useEffect(() => {
    return () => timers.current.forEach(clearInterval)
  }, [])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, typing])

  const send = (raw) => {
    const text = (raw ?? input).trim()
    if (!text || typing) return
    setInput('')
    setMessages((m) => [...m, { role: 'user', text }])
    setTyping(true)

    const full = getAIAnswer(text)
    timers.current.forEach(clearInterval)
    const id = typingSimulation(
      full,
      (partial) => {
        setMessages((m) => {
          const copy = [...m]
          const last = copy[copy.length - 1]
          if (last && last.role === 'ai' && last.partial) {
            copy[copy.length - 1] = { ...last, text: partial }
          } else {
            copy.push({ role: 'ai', partial: true, text: partial })
          }
          return copy
        })
      },
      () => {
        setTyping(false)
        setMessages((m) => {
          const copy = [...m]
          const last = copy[copy.length - 1]
          if (last && last.partial) copy[copy.length - 1] = { role: 'ai', text: last.text }
          return copy
        })
      }
    )
    timers.current.push(id)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-2xl text-white shadow-2xl transition-transform duration-200 hover:scale-110"
        aria-label="Open AI assistant"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <span className="animate-float">🤖</span>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[480px] w-[360px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-3xl bg-slate-900 shadow-2xl ring-1 ring-white/10 animate-fade-up">
          <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl">🤖</div>
            <div>
              <p className="font-bold text-white">SDGS AI Assistant</p>
              <p className="text-xs text-emerald-100">
                <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-300" />
                Online • Knowledge agent
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-white/80 hover:text-white" aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div ref={bodyRef} className="scrollbar-thin flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'rounded-br-sm bg-emerald-500 text-white'
                      : 'rounded-bl-sm bg-white/10 text-slate-100'
                  }`}
                >
                  {m.text}
                  {m.typing && <span className="animate-blink">▍</span>}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white/10 px-4 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-400" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: '0.15s' }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: '0.3s' }} />
                </div>
              </div>
            )}
          </div>

          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {getQuickReplies().map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border border-emerald-400/40 px-3 py-1 text-xs text-emerald-300 transition-colors hover:bg-emerald-400/10"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send()
            }}
            className="flex items-center gap-2 border-t border-white/10 px-4 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 rounded-full bg-white/10 px-4 py-2.5 text-sm text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white transition-colors hover:bg-emerald-400 disabled:opacity-40"
              aria-label="Send"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
