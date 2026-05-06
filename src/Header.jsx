import { useState, useEffect } from "react";
import { MdMenu, MdClose, MdSunny, MdDarkMode } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";


function Header({ darkMode, setDarkMode }){
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
    <>
      <header className={`fixed top-0 left-0 w-full z-40 py-4 px-6 transition-all duration-300
        ${
        darkMode
          ? scrolled
            ? 'bg-black/80 backdrop-blur-lg shadow-lg border-b border-gray-800'
            : 'bg-black border-b border-gray-800/30'
          : scrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200'
            : 'bg-white border-b border-gray-200/50'
    }
        `}>
      
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left Side: Logo Only */}
        <div className="flex-none">
          <a href="#" className="flex items-center">
            <h1 className={`text-3xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>
              Lawre<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">X</span>
            </h1>
          </a>
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex justify-center items-center gap-10 flex-1">
          <a href="#home" className={`relative text-sm font-medium transition ${
            darkMode 
              ? 'text-gray-300 hover:text-white after:bg-blue-500' 
              : 'text-gray-600 hover:text-black after:bg-blue-500'
          }
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
          >HOME</a>

          <a href="#services" className={`relative text-sm font-medium transition ${
            darkMode 
              ? 'text-gray-300 hover:text-white after:bg-blue-500' 
              : 'text-gray-600 hover:text-black after:bg-blue-500'
          }
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
          >SERVICES</a>

          <a href="#about" className={`relative text-sm font-medium transition ${
            darkMode 
              ? 'text-gray-300 hover:text-white after:bg-blue-500' 
              : 'text-gray-600 hover:text-black after:bg-blue-500'
          }
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
          >CONTACT</a>

          <a href="#" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300"
          >LET'S TALK</a>
        </nav>

        {/* Right Side: Theme Toggle Only */}
        <div className="hidden md:flex items-center gap-4">
          {/* Desktop Theme Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-lg transition-all duration-300 ${
              darkMode 
                ? 'text-white hover:bg-gray-800' 
                : 'text-black hover:bg-gray-200'
            }`}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <MdSunny size={24} /> : <MdDarkMode size={24} />}
          </button>
        </div>

        {/* Mobile Controls - Right */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Theme Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode 
                ? 'text-white hover:bg-gray-800' 
                : 'text-black hover:bg-gray-200'
            }`}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <MdSunny size={22} /> : <MdDarkMode size={22} />}
          </button>

          {/* Hamburger Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className={`text-2xl transition ${darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}`}>
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu - Full Screen */}
      <div className={`fixed inset-0 flex flex-col items-center justify-center px-6 md:hidden transition-transform duration-500 ease-in-out z-50 ${
        darkMode ? 'bg-black' : 'bg-white'
      } ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <button onClick={() => setIsOpen(false)} className={`absolute top-6 right-6 text-3xl transition ${darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}`}>
          <MdClose />
        </button>
        <a href="#home" className={`text-2xl font-medium transition py-4 w-full text-center ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`} onClick={() => setIsOpen(false)}>HOME</a>
        <a href="#services" className={`text-2xl font-medium transition py-4 w-full text-center ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`} onClick={() => setIsOpen(false)}>SERVICES</a>
        <a href="#about" className={`text-2xl font-medium transition py-4 w-full text-center ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`} onClick={() => setIsOpen(false)}>ABOUT</a>
        <a href="#contact" className={`text-2xl font-medium transition py-4 w-full text-center ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`} onClick={() => setIsOpen(false)}>CONTACT</a>

        {/* Mobile LET'S TALK Button */}
        <a href="#" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition mt-8 w-auto text-center" onClick={() => setIsOpen(false)}>LET'S TALK</a>
      </div>
    </>
  );
}

export default Header