import { useTypewriter, Cursor } from "react-simple-typewriter";
import heroImage from "./assets/MyImage.jpeg";
import { FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdArrowForward } from "react-icons/md";


function Hero({ darkMode }){
  const [text] = useTypewriter({
    words: [" Frontend Developer", " Designer", " UI/UX Designer"],
    loop: true,
    delaySpeed: 2000,
  });


  return(
      <div id="home" className={`scroll-mt-24 h-auto flex flex-col-reverse md:flex-row justify-center items-center gap-12 pt-32 pb-20 px-6 md:px-20 transition-transform duration-500 ease-in-out transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        
          <div className="flex-col w-full md:w-1/2">
            <span className={`inline-block border py-2 px-4 text-xs font-semibold uppercase rounded-full mb-6 transition-all duration-300 ${darkMode ? 'bg-blue-500/10 border-blue-500/40 text-blue-400 hover:bg-blue-500/20' : 'bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200'}`}>Lawrence Mensah</span>

            <h3 className={`text-lg font-medium uppercase mb-3 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Hi, I'm Lawrence
            </h3>

            <h1 className={`text-5xl md:text-6xl font-bold uppercase mb-6 leading-tight transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>
              I'm a
              <span className="text-5xl md:text-6xl text-blue-500 font-bold ml-3">
                {text}
              </span>
              <Cursor cursorStyle="|" cursorColor="#3b82f6" />
            </h1>

            <div>
              <p className={`font-light mb-8 text-lg leading-relaxed transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Crafting digital experiences that work. I'm <span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Mensah Lawrence</span>, a <span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Junior Front-end Developer</span> focused on building clean, user-centric products that solve real-world problems.
              </p>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-start items-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 sm:px-7 rounded-lg flex justify-center items-center gap-2 font-semibold transition-all duration-300 group whitespace-nowrap">
                  Get In Touch <MdArrowForward size={18} className="group-hover:translate-x-1 transition" />
                </button>

                <div className="flex gap-2 sm:gap-3 justify-start">
                  <a href="https://wa.me/0536901562" target="_blank" rel="noreferrer" className={`border h-11 w-11 rounded-lg flex justify-center items-center transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 border-gray-800 hover:bg-gray-700 hover:border-gray-700' : 'bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700'}`}>
                    <FaWhatsapp color={darkMode ? '#9ca3af' : '#fff'} size={20}/>
                  </a>

                  <a href="https://github.com/LawrenceMensah" target="_blank" rel="noreferrer" className={`border h-11 w-11 rounded-lg flex justify-center items-center transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 border-gray-800 hover:bg-gray-700 hover:border-gray-700' : 'bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700'}`}>
                    <FaGithub color={darkMode ? '#9ca3af' : '#fff'} size={20}/>
                  </a>

                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className={`border h-11 w-11 rounded-lg flex justify-center items-center transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 border-gray-800 hover:bg-gray-700 hover:border-gray-700' : 'bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700'}`}>
                    <FaInstagram color={darkMode ? '#9ca3af' : '#fff'} size={20}/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative w-60 h-60 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              <img src={heroImage} alt="Lawrence Mensah" className="relative w-full h-full rounded-full border-2 border-blue-500/50 object-cover hover:border-blue-400 transition-all duration-300"/>
            </div>
          </div>
      </div>
  );
}

export default Hero
