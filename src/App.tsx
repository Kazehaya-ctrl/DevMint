import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Landing />
      </main>
    </div>
  )
}

export default App