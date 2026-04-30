import { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";


function Header(){
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
      scrolled
        ? 'bg-black/80 backdrop-blur-lg shadow-lg border-b border-gray-800'
        : 'bg-black border-b border-gray-800/30'
    }
        `}>
      
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo - Left */}
        <div className="flex-none">
          <a href="#" className="flex items-center">
            <h1 className="text-3xl font-black tracking-tight text-white drop-shadow-md">
              Lawre<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">X</span>
            </h1>
          </a>
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex justify-center items-center gap-10 flex-1">
          <a href="#home" className="relative text-gray-300 hover:text-white text-sm font-medium transition
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          >HOME</a>

          <a href="#services" className="relative text-gray-300 hover:text-white text-sm font-medium transition
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          >SERVICES</a>

          <a href="#about" className="relative text-gray-300 hover:text-white text-sm font-medium transition
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          >ABOUT</a>

          <a href="#contact" className="relative text-gray-300 hover:text-white text-sm font-medium transition
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          >CONTACT</a>

          <a href="#" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300"
          >LET'S TALK</a>
        </nav>

        {/* Hamburger Menu - Right */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl md:hidden hover:text-gray-400 transition ml-auto">
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>
    </header>

    {/* Mobile Menu - Full Screen */}
      <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center px-6 md:hidden transition-transform duration-500 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white text-3xl hover:text-gray-400 transition">
          <MdClose />
        </button>
        <a href="#home" className="text-gray-300 hover:text-white text-2xl font-medium transition py-4 w-full text-center" onClick={() => setIsOpen(false)}>HOME</a>
        <a href="#services" className="text-gray-300 hover:text-white text-2xl font-medium transition py-4 w-full text-center" onClick={() => setIsOpen(false)}>SERVICES</a>
        <a href="#about" className="text-gray-300 hover:text-white text-2xl font-medium transition py-4 w-full text-center" onClick={() => setIsOpen(false)}>ABOUT</a>
        <a href="#contact" className="text-gray-300 hover:text-white text-2xl font-medium transition py-4 w-full text-center" onClick={() => setIsOpen(false)}>CONTACT</a>

        <a href="#" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition mt-8 w-auto text-center" onClick={() => setIsOpen(false)}>LET'S TALK</a>
      </div>
    </>
  );
}

export default Header