import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdSend
} from "react-icons/md";

import { FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';

function Contact() {
  return(
    <div className="bg-[#e6edfd] pt-8">
      <div className="w-full flex justify-center-safe py-1.5">
        <h1 className="text-3xl text-[#004cff] mb-4 text-center md:text-left font-bold uppercase">Contact Me</h1>
      </div>
      <div className="
        bg-[#e6edfd]
        flex
        flex-wrap
        gap-6
        justify-center-safe
        items-start-safe
        h-auto
        py-15
        pt-8
        px-6
        ">
      <div className="w-100 md:w-140 text-[#414141] shadow-2xl shadow-[#3333333d] p-7 rounded-2xl bg-[#fff]">
        <h2 className="text-3xl text-[#004cff] mt-3 mb-1 font-semibold uppercase">Get In Touch</h2>
        <span className="w-full">I'm open to internship opportunities, collaborative projects, and technical discussions about frontend, backend systems, database design, graphic design and more.</span>
        <div>
          <div className="flex items-center gap-3  py-4">
            <MdLocationOn size={28}  className="text-[#004cff] mr-2"/>
            <div>
              <h3 className="text-2xl font-semibold">Location</h3>
              <span>Accra, Ghana</span>
            </div>
          </div>

          <div className="flex items-center gap-3 py-4">
            <MdPhone size={28} className="text-[#004cff] mr-2"/>
            <div>
              <h3 className="text-2xl font-semibold">Phone</h3>
              <span>+233 53 690 1532</span>
            </div>
          </div>

          <div className="flex items-center gap-3 py-4">
            <MdEmail size={28} className="text-[#004cff] mr-2"/>
            <div>
              <h3 className="text-2xl font-semibold">Email</h3>
              <span>lawrencekwekumensah2005@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-3 py-4">
            <FaWhatsapp className="text-[#004cff] text-3xl mr-2"/>
            <div>
              <h3 className="text-2xl font-semibold">Location</h3>
              <span>Accra, Ghana</span>
            </div>
          </div>
        </div>

      </div>

      <div className="w-140 text-[#414141] shadow-2xl shadow-[#3333333d] p-7 rounded-2xl bg-[#fff]">
        <h2 className="text-3xl text-[#004cff] mt-3 mb-1 font-semibold uppercase">Send a Message</h2>
          <form action="">
            <label htmlFor="">Your Name</label><br />
            <input type="text" placeholder="Enter your name here" className="w-full border-1 border-[#41414173] px-2 py-2 rounded-lg mb-7"/>

            <label htmlFor="">Email</label><br />
            <input type="text" placeholder="Enter your email here" className="w-full border-1 border-[#41414173] px-2 py-2 rounded-lg mb-7"/>

            <label htmlFor="">Message</label><br />
            <textarea name="" id="" placeholder="Enter your message" className="w-full border-1 border-[#41414173] px-2 py-2 rounded-lg mb-7 h-35"></textarea>

            <button className="bg-[#004cff] text-[#fff] py-3 px-5 rounded-4xl flex  justify-center-safe items-center-safe gap-2 uppercase hover:bg-[#0034ac] hover:shadow-xl transition delay-150 duration-300 hover:translate-x-1">
              Send Message<MdSend/>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact