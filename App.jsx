import { useState, useEffect } from 'react'
import Navbar    from './components/Navbar.jsx'
import Hero      from './components/Hero.jsx'
import Stats     from './components/Stats.jsx'
import Services  from './components/Services.jsx'
import About     from './components/About.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact   from './components/Contact.jsx'
import Footer    from './components/Footer.jsx'

export default function App() {
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
        <Stats />
        <Services />
        <About />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
