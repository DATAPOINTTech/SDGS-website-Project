import '../styles/globals.css'
import AIAssistant from '../components/AIAssistant'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <AIAssistant />
    </>
  )
}
