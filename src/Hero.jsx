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
      <div id="home" className="
        bg-gradient-to-r
        from-[#002477] from-5%
        via-[#001851] via-30%
        to-[#000d2b] to-100%
        h-auto
        flex
        flex-col-reverse
        md:flex-row
        justify-center-safe
        items-center-safe
        gap-5
        pt-20
        p-10
        ">
        
          <div className="flex-col w-full md:w-1/2 p-3 ">
            <span className="bg-[#2863ee48] py-1 px-2 text-[#ffffffb1] text-[10px] uppercase rounded-2xl mb-2">Lawrence Mensah</span>

            <h3 className="text-3xl text-white font-bold uppercase mb-1 text-center md:text-left">
              Hi, I'm Lawrence
            </h3>

            <h1 className="text-5xl text-white font-bold uppercase mb-4 text-center md:text-left">
              I'm a
              <span className="text-5xl text-[#004cff] font-bold uppercase">
                {text}
              </span>
              <Cursor />
            </h1>

            <div>

              <p className="w-full md:w-130 text-[#ffffffd1] font-thin mb-5 text-center md:text-left">
                Crafting digital experiences that work. I’m <strong>Mensah Lawrence</strong>, a <strong>Junior Front-end Developer</strong> focused on building clean, user-centric products that solve real-world problems.
              </p>

              <div className="flex gap-5 flex-wrap justify-center-safe md:justify-start">

                <button className="bg-[#004cff] text-[#fff] py-3 px-5 rounded-4xl flex  justify-center-safe items-center-safe gap-2 uppercase hover:bg-[#0034ac] hover:shadow-xl transition delay-150 duration-300 hover:translate-x-1">Get In Touch <MdArrowForward size={20} /></button>

                <span className="flex gap-2 justify-center-safe items-center-safe">
                  <a href="https://wa.me/0536901562" target="_blank" className="bg-[#25D366] border-2 border-white h-10 w-10 rounded-full flex justify-center-safe items-center-safe transition delay-150 duration-300 hover:-translate-y-0.5"><FaWhatsapp color="#fff" className="text-1xl"/></a>

                  <a href="https://github.com/LawrenceMensah" target="_blank" className="bg-[#333] border-2 border-white h-10 w-10 rounded-full flex justify-center-safe items-center-safe transition delay-150 duration-300 hover:-translate-y-0.5"><FaGithub color="#fff" className="text-1xl"/></a>

                  <a href="https://wa.me/0536901562" target="_blank" className="bg-[#C13584] border-2 border-white h-10 w-10 rounded-full flex justify-center-safe items-center-safe transition delay-150 duration-300 hover:-translate-y-0.5"> <FaInstagram color="#fff" className="text-1xl"/></a>

                </span>

              </div>

            </div>
          </div>


          <div className="">
            <img src={heroImage} alt="" className="w-80 h-80 md:w-96 md:h-96 rounded-full border-8 border-[#004cff]"/>
          </div>
      </div>
  );
}

export default Hero