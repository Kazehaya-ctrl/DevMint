import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import { Section2 } from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsappFloating'

export default function App() {
  return (
    <div className="relative w-screen max-w-[100vw] overflow-x-hidden bg-black">
      <Navbar />
      <main className="relative w-full overflow-x-hidden">
        <section className="relative min-h-screen w-full pt-20 overflow-x-hidden">
          <Landing />
          <Section2 />
          <Section3/>
          <Section4/>
        </section>
      </main>
      <Footer/>
      <WhatsAppButton />
    </div>
  )
}