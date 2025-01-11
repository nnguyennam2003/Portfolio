import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Project/Project'
import Skill from './components/Skill/Skill'

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
