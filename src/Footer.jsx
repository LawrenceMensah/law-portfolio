import { FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';
import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdArrowForward
} from "react-icons/md";

function Footer({ darkMode }) {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "Graphic Design",
    "UI/UX Design"
  ];

  return(
    <footer className={`border-t transition-colors duration-300 ${darkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-300'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>Lawrence Mensah</h2>
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>Crafting future-ready technology and beautiful digital experiences through clean code and innovative design.</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a 
                href="https://wa.me/0536901562" 
                target="_blank" 
                rel="noreferrer" 
                className={`h-10 w-10 rounded-lg flex justify-center items-center transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18}/>
              </a>
              <a 
                href="https://github.com/LawrenceMensah" 
                target="_blank" 
                rel="noreferrer" 
                className={`h-10 w-10 rounded-lg flex justify-center items-center transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                aria-label="GitHub"
              >
                <FaGithub size={18}/>
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className={`h-10 w-10 rounded-lg flex justify-center items-center transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                aria-label="Instagram"
              >
                <FaInstagram size={18}/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>
              Quick Links
              <div className='h-0.5 w-8 bg-blue-500 rounded'></div>
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className={`transition-colors duration-300 flex items-center gap-2 group ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`}
                  >
                    <span className='group-hover:translate-x-1 transition-transform duration-300'>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>
              Services
              <div className='h-0.5 w-8 bg-blue-500 rounded'></div>
            </h3>
            <ul className='space-y-3'>
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className={`transition-colors duration-300 flex items-center gap-2 group ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`}
                  >
                    <span className='group-hover:translate-x-1 transition-transform duration-300'>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>
              Contact
              <div className='h-0.5 w-8 bg-blue-500 rounded'></div>
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <MdLocationOn size={18} className='text-blue-500 mt-0.5 flex-shrink-0'/>
                <span className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>Accra, Ghana</span>
              </li>
              <li className='flex items-start gap-3'>
                <MdPhone size={18} className='text-blue-500 mt-0.5 flex-shrink-0'/>
                <span className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>+233 53 690 1532</span>
              </li>
              <li className='flex items-start gap-3'>
                <MdEmail size={18} className='text-blue-500 mt-0.5 flex-shrink-0'/>
                <span className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>mrlaw255@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`pt-8 transition-colors duration-300 ${darkMode ? 'border-t border-gray-800' : 'border-t border-gray-300'}`}>
          {/* Footer Bottom */}
          <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
            <div className='space-y-1'>
              <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>© 2026 Lawrence Mensah. All rights reserved.</p>
              <p className={`text-xs transition-colors duration-300 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>BSc Information Technology Student @ UPSA</p>
            </div>
            <div className='mt-4 md:mt-0'>
              <a 
                href="#home"
                className='inline-flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 text-sm font-semibold text-blue-500'
              >
                Back to Top
                <MdArrowForward size={16}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


      