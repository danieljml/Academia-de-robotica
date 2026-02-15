import './App.css'
import { Toaster } from 'react-hot-toast'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import AcademicLevels from './sections/AcademicLevels'
import BenefitsSection from './sections/Benefits'
import Contact from './sections/Contact'
import Features from './sections/Features'
import Hero from './sections/Hero'

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Navbar />
      <Hero />
      <Features />
      <AcademicLevels />
      <BenefitsSection />
      <Contact />
    </>
  )
}

export default App
