import { FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';
import {
  MdLocationOn,
  MdPhone,
  MdEmail
} from "react-icons/md";

function Footer() {
  return(
    <div className="bg-[#001954ed]">
      <div className="
        bg-[#001954ed]
        flex
        flex-wrap
        gap-10
        justify-center-safe
        items-start-safe
        h-auto
        pt-10
        pb-10
        px-6
        text-[#fff]
        ">

        <div className='w-full md:w-auto'>
          <div className='h-25'>
            <h2 className='text-3xl font-bold mb-3'>Lawrence Mensah</h2>
            <span className='mb-3 text-[#ffffffa6]'>Crafting future-ready technology today.</span>
          </div>

          <div>
            
            <span className="flex gap-2 justify-start-safe items-center-safe">
            <a href="https://wa.me/0536901562" target="_blank" className="bg-[#25D366] border-2 border-white h-10 w-10 rounded-full flex justify-center-safe items-center-safe transition delay-150 duration-300 hover:-translate-y-0.5"><FaWhatsapp color="#fff" className="text-1xl"/></a>

            <a href="https://github.com/LawrenceMensah" target="_blank" className="bg-[#333] border-2 border-white h-10 w-10 rounded-full flex justify-center-safe items-center-safe transition delay-150 duration-300 hover:-translate-y-0.5"><FaGithub color="#fff" className="text-1xl"/></a>

            <a href="https://wa.me/0536901562" target="_blank" className="bg-[#C13584] border-2 border-white h-10 w-10 rounded-full flex justify-center-safe items-center-safe transition delay-150 duration-300 hover:-translate-y-0.5"> <FaInstagram color="#fff" className="text-1xl"/></a>
            </span>
          </div>
        </div>

        <div className='w-full md:w-60'>
          <h3 className='text-lg font-bold'>Quick Links</h3>
          <ul className='text-[#ffffffa6]'>
            <a href="#home"><ol className="py-2 transition delay-150 duration-300 hover:translate-x-1">Home</ol></a>
            <ol className="py-2 transition delay-150 duration-300 hover:translate-x-1">Services</ol>
            <ol className="py-2 transition delay-150 duration-300 hover:translate-x-1">About Me</ol>
            <ol className="py-2 transition delay-150 duration-300 hover:translate-x-1">Contact</ol>
          </ul>
        </div>

        <div className='w-full md:w-60'>
          <h3 className='text-lg font-bold'>Services</h3>
          <ul className='text-[#ffffffa6]'>
            <ol className="py-2 transition delay-150 duration-300 hover:translate-x-1">Web Development</ol>
            <ol className="py-2 transition delay-150 duration-300 hover:translate-x-1">Graphic Design</ol>
            <ol className="py-2 transition delay-150 duration-300 hover:translate-x-1">UI/UX Design</ol>
            
          </ul>
        </div>

        <div className='w-full md:w-86'>
          <h3 className='text-lg font-bold'>Contact Info</h3>
          <ul>
            <ol className="py-2 transition delay-150 duration-300 hover:translate-x-1">
              <div className="flex items-center gap-0.5">
                          <MdLocationOn size={18}  className="text-[#ffffffa6] mr-1"/>
                          <div>
                            <span className='text-[#ffffffa6]'>Accra, Ghana</span>
                          </div>
                        </div>
            </ol>
            <ol className="py-2 transition delay-150 duration-300 hover:translate-x-1">
              <div className="flex items-center gap-0.5">
              <MdPhone size={18} className="text-[#ffffffa6] mr-1"/>
              <div>
                <span className='text-[#ffffffa6]'>+233 53 690 1532</span>
              </div>
            </div>
            </ol>
            <ol className="py-2 transition delay-150 duration-300 hover:translate-x-1">
              <div className="flex items-center gap-0.5">
              <MdEmail size={18} className="text-[#ffffffa6] mr-1"/>
              <div>
                <span className='text-[#ffffffa6]'>lawrencekwekumensah2005@gmail.com</span>
              </div>
            </div>
            </ol>
          </ul>
        </div>

        

      </div>

      
      <div className='w-full flex flex-col justify-center-safe items-center-safe bg-[#001954ed]'>
        <hr className='w-[70%] h-1 border-[#e8e8e832] border-t-1 mb-5'/>
        <span className='font-light text-2sm mb-1 text-[#ffffffa6]'>© 2026 Lawrence Mensah. All rights reserved.</span>
        <span className='font-light text-2sm mb-10 text-[#ffffffa6]'>BSc Information Technology Student @ UPSA</span>
      </div>
    </div>
  )
}

export default Footer


      