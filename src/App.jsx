import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Services from './Services'
import Stats from './Stats'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Features />
        <Services />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
