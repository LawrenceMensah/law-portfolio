import { useTypewriter, Cursor } from "react-simple-typewriter";
import heroImage from "./assets/MyImage.jpeg";
import { FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdArrowForward } from "react-icons/md";


function Hero(){
  const [text] = useTypewriter({
    words: [" Frontend Developer", " Designer", " UI/UX Designer"],
    loop: true,
    delaySpeed: 2000,
  });


  return(
      <div id="home" className="bg-black scroll-mt-24 h-auto flex flex-col-reverse md:flex-row justify-center items-center gap-12 pt-32 pb-20 px-6 md:px-20">
        
          <div className="flex-col w-full md:w-1/2">
            <span className="inline-block bg-blue-500/10 border border-blue-500/40 py-2 px-4 text-blue-400 text-xs font-semibold uppercase rounded-full mb-6 hover:bg-blue-500/20 transition-all duration-300">Lawrence Mensah</span>

            <h3 className="text-lg text-gray-400 font-medium uppercase mb-3">
              Hi, I'm Lawrence
            </h3>

            <h1 className="text-5xl md:text-6xl text-white font-bold uppercase mb-6 leading-tight">
              I'm a
              <span className="text-5xl md:text-6xl text-blue-500 font-bold ml-3">
                {text}
              </span>
              <Cursor cursorStyle="|" cursorColor="#3b82f6" />
            </h1>

            <div>
              <p className="text-gray-400 font-light mb-8 text-lg leading-relaxed">
                Crafting digital experiences that work. I'm <span className="text-white font-semibold">Mensah Lawrence</span>, a <span className="text-white font-semibold">Junior Front-end Developer</span> focused on building clean, user-centric products that solve real-world problems.
              </p>

              <div className="flex gap-6 flex-wrap justify-center md:justify-start items-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-7 rounded-lg flex justify-center items-center gap-2 font-semibold transition-all duration-300 group">
                  Get In Touch <MdArrowForward size={18} className="group-hover:translate-x-1 transition" />
                </button>

                <div className="flex gap-3">
                  <a href="https://wa.me/0536901562" target="_blank" rel="noreferrer" className="bg-gray-800 border border-gray-700 hover:bg-blue-600 hover:border-blue-600 h-11 w-11 rounded-lg flex justify-center items-center transition-all duration-300 hover:scale-110">
                    <FaWhatsapp color="#fff" size={20}/>
                  </a>

                  <a href="https://github.com/LawrenceMensah" target="_blank" rel="noreferrer" className="bg-gray-800 border border-gray-700 hover:bg-blue-600 hover:border-blue-600 h-11 w-11 rounded-lg flex justify-center items-center transition-all duration-300 hover:scale-110">
                    <FaGithub color="#fff" size={20}/>
                  </a>

                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="bg-gray-800 border border-gray-700 hover:bg-blue-600 hover:border-blue-600 h-11 w-11 rounded-lg flex justify-center items-center transition-all duration-300 hover:scale-110">
                    <FaInstagram color="#fff" size={20}/>
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
