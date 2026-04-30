import {
  MdCode,
  MdBrush,
  MdDesignServices,
  MdArrowForward
} from "react-icons/md"

import Counter from "./Counter";

function Services() {
  return(
    <div id="services" className="bg-gray-900 h-auto px-6 md:px-20 py-20 flex-col scroll-mt-24">
      <div className="w-full flex justify-center md:justify-start py-4 mb-12">
        <h1 className="text-4xl md:text-5xl text-white font-bold uppercase tracking-tight">Our Services</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 text-gray-300">

        <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
          <div className="bg-blue-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition">
            <MdCode size={32} className="text-blue-500"/>
          </div>
          <h3 className="text-2xl font-bold mb-3 uppercase text-white">Web Development</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">We build high-performance, responsive websites using the latest modern frameworks. Our focus is on writing clean, scalable code that ensures your site is fast, secure, and ready to grow alongside your business.</p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-lg flex items-center gap-2 font-semibold text-sm mt-6 transition-all duration-300">See More <MdArrowForward size={16} /></button>
        </div>

        <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
          <div className="bg-blue-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition">
            <MdBrush size={32} className="text-blue-500"/>
          </div>
          <h3 className="text-2xl font-bold mb-3 uppercase text-white">Graphic Design</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">Transform your brand with strategic visuals that capture attention and build trust. We create cohesive brand identities and marketing materials designed to leave a professional, lasting impression on your audience.</p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-lg flex items-center gap-2 font-semibold text-sm mt-6 transition-all duration-300">See More <MdArrowForward size={16} /></button>
        </div>

        <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
          <div className="bg-blue-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition">
            <MdDesignServices size={32} className="text-blue-500"/>
          </div>
          <h3 className="text-2xl font-bold mb-3 uppercase text-white">UI/UX Design</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">We design intuitive digital experiences that put your users first. By blending research with beautiful interface design, we turn complex interactions into seamless journeys that drive engagement and satisfaction.</p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-lg flex items-center gap-2 font-semibold text-sm mt-6 transition-all duration-300">See More <MdArrowForward size={16} /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center py-20 border-t border-gray-700 mt-12">
      
      <div>
        <h2 className="text-6xl md:text-7xl font-bold text-blue-500">
          <Counter end={25} />+
        </h2>
        <p className="text-gray-400 text-lg mt-2">Projects Completed</p>
      </div>

      <div>
        <h2 className="text-6xl md:text-7xl font-bold text-blue-500">
          <Counter end={3} />+
        </h2>
        <p className="text-gray-400 text-lg mt-2">Years Experience</p>
      </div>

      <div>
        <h2 className="text-6xl md:text-7xl font-bold text-blue-500">
          <Counter end={12} />+
        </h2>
        <p className="text-gray-400 text-lg mt-2">Happy Clients</p>
      </div>

    </div>
    </div>
  );
}

export default Services