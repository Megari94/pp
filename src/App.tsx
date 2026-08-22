import { Navbar } from './components/Navbar'
import { WhatsAppButton } from './components/WhatsAppButton'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Trajectory } from './sections/Trajectory'
import { Skills } from './sections/Skills'
import { Process } from './sections/Process'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

function App() {
  return (
    <>
      <div className="cyber-atmosphere" aria-hidden="true">
        <span className="cyber-atmosphere__orb cyber-atmosphere__orb--cyan" />
        <span className="cyber-atmosphere__orb cyber-atmosphere__orb--magenta" />
        <span className="cyber-atmosphere__beam" />
      </div>
      <a href="#inicio" className="skip-link">
        Saltar al contenido principal
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Trajectory />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
