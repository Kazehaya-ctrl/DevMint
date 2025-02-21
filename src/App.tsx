import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import { Section2 } from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

export default function App() {
  return (
    <>
    <div className="w-full overflow-x-hidden bg-black">
      <Navbar />
      <main className='flex-grow'>
      <section className="min-h-screen w-full pt-20 flex-grow">
        <Landing />
        <Section2 />
        <Section3/>
        <Section4/>
      </section>
      </main>
    </div>
    </>
  )
}