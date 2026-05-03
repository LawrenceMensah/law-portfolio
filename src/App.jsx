import { useState, useEffect } from "react"
import Hero from "./Hero"
import Services from "./Services"
import Header from "./Header"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"



function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Hero darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
