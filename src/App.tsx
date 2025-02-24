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
        <section id="home" className="relative min-h-screen w-full pt-20 overflow-x-hidden">
          <Landing />
        </section>
        <section id="about" className="relative w-full overflow-x-hidden">
          <Section2 />
        </section>
        <section id="services" className="relative w-full overflow-x-hidden">
          <Section3 />
        </section>
        <section id="portfolio" className="relative w-full overflow-x-hidden">
          <Section4 />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
