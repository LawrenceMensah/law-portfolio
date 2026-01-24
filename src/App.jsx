import Hero from "./Hero"
import Services from "./Services"
import Header from "./header"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"



function App() {

  return (
    <>
      <Header/>
      <Hero id="home" className="scroll-mt-24"/>
      <Services id="services" className="scroll-mt-24"/>
      <About id="about" className="scroll-mt-24"/>
      <Contact id="contact" className="scroll-mt-24"/>
      <Footer/>
    </>
  )
}

export default App
