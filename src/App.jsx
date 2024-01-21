import './app.scss'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Parallax from './components/Parallax/Parallax'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/services'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
