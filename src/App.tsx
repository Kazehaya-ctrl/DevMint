import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import { Section2 } from './components/Section2'

export default function App() {
  return (
    <>
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      <Navbar />
      <main className='flex-grow'>
      <section className="min-h-screen w-full pt-20 flex-grow">
        <Landing />
        <Section2 />
      </section>

      </main>
    </div>
    </>
  )
}