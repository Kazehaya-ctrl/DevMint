import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Section2 from './components/Section2'

export default function App() {
  return (
    <>
    <div className="w-full h-full overflow-y-auto bg-black">
      <Navbar />
      <main className="pt-20">
        <Landing />
        <Section2 />
      </main>
    </div>
    </>
  )
}