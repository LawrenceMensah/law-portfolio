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
    <header className="bg-gradient-to-r
        from-[#002477] from-5%
        via-[#001851] via-30%
        to-[#000d2b] to-100% sticky top-0 z-1 py-2
        backdrop-blur-none
        `${
      scrolled
        ? 'bg-[#000d2b]/90 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`
        ">

          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl ml-3 mt-3 md:hidden">
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>

      <nav className="hidden md:flex justify-center-safe items-center-safe gap-8 uppercase py-1">
        <a href="#home" className="
          relative
         text-white
          hover:text-white
          backdrop-sepia-0
          after:content-['']
          after:absolute
          after:left-1/2
          after:-translate-x-1/2
          after:bottom-0
          after:w-full
          after:h-[2px]
          after:bg-white
          after:scale-x-0
          after:transition-transform
          after:duration-300
          hover:after:scale-x-100
          "
       >Home</a>

        <a href="#services" className="
          relative
          text-white
          hover:text-white
          after:content-['']
          after:absolute
          after:left-1/2
          after:-translate-x-1/2
          after:bottom-0
          after:w-full
          after:h-[2px]
          after:bg-white
          after:scale-x-0
          after:transition-transform
          after:duration-300
          hover:after:scale-x-100
          "
        >Services</a>

        <a href="#about" className="
          relative
          text-white
          hover:text-white
          after:content-['']
          after:absolute
          after:left-1/2
          after:-translate-x-1/2
          after:bottom-0
          after:w-full
          after:h-[2px]
          after:bg-white
          after:scale-x-0
          after:transition-transform
          after:duration-300
          hover:after:scale-x-100
          "
        >About Me</a>

        <a href="#contact" className="
          relative
          text-white
          hover:text-white
          after:content-['']
          after:absolute
          after:left-1/2
          after:-translate-x-1/2
          after:bottom-0
          after:w-full
          after:h-[2px]
          after:bg-white
          after:scale-x-0
          after:transition-transform
          after:duration-300
          hover:after:scale-x-100
          "
        >Contact</a>

        <a href="#" className="
          px-3.5
          py-2
          bg-[#004cff] 
          font-bold
          transition 
          delay-150 
          duration-75 
          ease-in-out 
          hover:bg-[#0034ac] 
          hover: shadow-xl
          text-white 
          border-none 
          rounded-full
          "
        >Let's talk</a>
      </nav>

      {isOpen && (
      <div className="
        md:hidden
        flex
        flex-col
        items-center
        gap-6
        py-6
        bg-[#000d2b]
        uppercase
      ">
        <a href="#home" className="text-white" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#services" className="text-white" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#about" className="text-white" onClick={() => setIsOpen(false)}>About</a>
        <a href="#contact" className="text-white" onClick={() => setIsOpen(false)}>Contact</a>

        <a
          href="#"
          className="px-5 py-2 bg-[#004cff] text-white rounded-full font-bold"
          onClick={() => setIsOpen(false)}
        >
          Let's talk
        </a>
      </div>
      )}

    </header>
  );
}

export default Header