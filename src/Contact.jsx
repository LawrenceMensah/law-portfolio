import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdSend
} from "react-icons/md";

import { FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';

// Import from supabase
import { supabase } from "./supabaseClient";
// Import from React(UseState)
import { useState } from "react";
// Hot toast
import { Toaster, toast } from "react-hot-toast";

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    messages: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
    .from("Messages")
    .insert([formData]);

    if (error) {
      console.log(error);
      toast.error("Failed to send message");
    } else {
      toast.success("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        messages: ""
      });
    }
  }

  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return(
    <div id="contact" className={`pt-20 pb-20 scroll-mt-24 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <Toaster position="top-center" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold uppercase mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>Get In Touch</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Contact Info Card */}
          <div className={`border rounded-xl p-8 transition-all duration-300 hover:border-blue-500/50 h-full ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-300'}`}>
            <h2 className="text-2xl text-blue-400 font-semibold uppercase mb-6">Contact Information</h2>
            <p className={`mb-8 leading-relaxed transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              I'm open to internship opportunities, collaborative projects, and technical discussions about frontend, backend systems, database design, graphic design and more.
            </p>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Location */}
              <div className={`flex items-start gap-4 p-4 rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <div className="flex-shrink-0">
                  <MdLocationOn size={24} className="text-blue-500 mt-1"/>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>Location</h3>
                  <p className={`mt-1 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>Accra, Ghana</p>
                </div>
              </div>

              {/* Phone */}
              <div className={`flex items-start gap-4 p-4 rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <div className="flex-shrink-0">
                  <MdPhone size={24} className="text-blue-500 mt-1"/>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>Phone</h3>
                  <p className={`mt-1 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>+233 53 690 1532</p>
                </div>
              </div>

              {/* Email */}
              <div className={`flex items-start gap-4 p-4 rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <div className="flex-shrink-0">
                  <MdEmail size={24} className="text-blue-500 mt-1"/>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>Email</h3>
                  <p className={`mt-1 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>mrlaw255@gmail.com</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className={`flex items-start gap-4 p-4 rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <div className="flex-shrink-0">
                  <FaWhatsapp size={24} className="text-blue-500 mt-1"/>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>WhatsApp</h3>
                  <p className={`mt-1 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>+233 53 690 1532</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`mt-8 pt-8 ${darkMode ? 'border-t border-gray-800' : 'border-t border-gray-300'}`}>
              <p className={`text-sm uppercase font-semibold mb-4 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>Follow Me</p>
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/0536901562" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`h-10 w-10 rounded-lg flex justify-center items-center transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                  <FaWhatsapp size={18}/>
                </a>
                <a 
                  href="https://github.com/LawrenceMensah" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`h-10 w-10 rounded-lg flex justify-center items-center transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                  <FaGithub size={18}/>
                </a>
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`h-10 w-10 rounded-lg flex justify-center items-center transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                  <FaInstagram size={18}/>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className={`border rounded-xl p-8 transition-all duration-300 hover:border-blue-500/50 h-full flex flex-col ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-300'}`}>
            <h2 className="text-2xl text-blue-400 font-semibold uppercase mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              {/* Name Field */}
              <div className="mb-5">
                <label htmlFor="name" className={`block font-semibold mb-2 text-sm uppercase transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>
                  Your Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  value={formData.name} 
                  onChange={handleFormData} 
                  placeholder="Enter your name" 
                  className={`w-full px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 ${darkMode ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-300 text-black placeholder-gray-600'}`}
                />
              </div>

              {/* Email Field */}
              <div className="mb-5">
                <label htmlFor="email" className={`block font-semibold mb-2 text-sm uppercase transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>
                  Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  value={formData.email} 
                  onChange={handleFormData} 
                  placeholder="Enter your email" 
                  className={`w-full px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 ${darkMode ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-300 text-black placeholder-gray-600'}`}
                />
              </div>

              {/* Message Field */}
              <div className="mb-4 flex-1 flex flex-col">
                <label htmlFor="messages" className={`block font-semibold mb-2 text-sm uppercase transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>
                  Message
                </label>
                <textarea 
                  name="messages" 
                  id="messages"
                  value={formData.messages} 
                  onChange={handleFormData} 
                  placeholder="Enter your message" 
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none flex-1 ${darkMode ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-300 text-black placeholder-gray-600'}`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex justify-center items-center gap-2 uppercase transition-all duration-300"
              >
                Send Message <MdSend size={18}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact