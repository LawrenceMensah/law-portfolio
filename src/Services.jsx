import {
  MdCode,
  MdBrush,
  MdDesignServices,
  MdArrowForward
} from "react-icons/md"

import Counter from "./Counter";

function Services({ darkMode }) {
  return(
    <div id="services" className={`h-auto px-6 md:px-20 py-20 flex-col scroll-mt-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="w-full flex justify-center md:justify-start py-4 mb-12">
        <h1 className={`text-4xl md:text-5xl font-bold uppercase tracking-tight transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>Our Services</h1>
      </div>

      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>

        <div className={`group p-8 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
          <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-5 transition ${darkMode ? 'bg-blue-500/10 group-hover:bg-blue-500/20' : 'bg-blue-100 group-hover:bg-blue-200'}`}>
            <MdCode size={32} className="text-blue-500"/>
          </div>
          <h3 className={`text-2xl font-bold mb-3 uppercase transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>Web Development</h3>
          <p className={`text-sm mb-6 leading-relaxed transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>We build high-performance, responsive websites using the latest modern frameworks. Our focus is on writing clean, scalable code that ensures your site is fast, secure, and ready to grow alongside your business.</p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-lg flex items-center gap-2 font-semibold text-sm mt-6 transition-all duration-300">See More <MdArrowForward size={16} /></button>
        </div>

        <div className={`group p-8 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
          <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-5 transition ${darkMode ? 'bg-blue-500/10 group-hover:bg-blue-500/20' : 'bg-blue-100 group-hover:bg-blue-200'}`}>
            <MdBrush size={32} className="text-blue-500"/>
          </div>
          <h3 className={`text-2xl font-bold mb-3 uppercase transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>Graphic Design</h3>
          <p className={`text-sm mb-6 leading-relaxed transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>Transform your brand with strategic visuals that capture attention and build trust. We create cohesive brand identities and marketing materials designed to leave a professional, lasting impression on your audience.</p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-lg flex items-center gap-2 font-semibold text-sm mt-6 transition-all duration-300">See More <MdArrowForward size={16} /></button>
        </div>

        <div className={`group p-8 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
          <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-5 transition ${darkMode ? 'bg-blue-500/10 group-hover:bg-blue-500/20' : 'bg-blue-100 group-hover:bg-blue-200'}`}>
            <MdDesignServices size={32} className="text-blue-500"/>
          </div>
          <h3 className={`text-2xl font-bold mb-3 uppercase transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>UI/UX Design</h3>
          <p className={`text-sm mb-6 leading-relaxed transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>We design intuitive digital experiences that put your users first. By blending research with beautiful interface design, we turn complex interactions into seamless journeys that drive engagement and satisfaction.</p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-lg flex items-center gap-2 font-semibold text-sm mt-6 transition-all duration-300">See More <MdArrowForward size={16} /></button>
        </div>
      </div>

      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 text-center py-20 mt-12 transition-colors duration-300 ${darkMode ? 'border-t border-gray-700' : 'border-t border-gray-300'}`}>
      
      <div>
        <h2 className="text-6xl md:text-7xl font-bold text-blue-500">
          <Counter end={25} />+
        </h2>
        <p className={`text-lg mt-2 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>Projects Completed</p>
      </div>

      <div>
        <h2 className="text-6xl md:text-7xl font-bold text-blue-500">
          <Counter end={3} />+
        </h2>
        <p className={`text-lg mt-2 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>Years Experience</p>
      </div>

      <div>
        <h2 className="text-6xl md:text-7xl font-bold text-blue-500">
          <Counter end={12} />+
        </h2>
        <p className={`text-lg mt-2 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>Happy Clients</p>
      </div>

    </div>
    </div>
  );
}

export default Services