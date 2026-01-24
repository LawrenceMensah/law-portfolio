import {
  MdCode,
  MdBrush,
  MdDesignServices,
  MdArrowForward
} from "react-icons/md"

import Counter from "./Counter";

function Services() {
  return(
    <div className="bg-[#e6edfd] h-auto px-7 py-15 flex-col">
      <div className="w-full flex justify-center-safe py-1.5">
        <h1 className="text-3xl text-[#004cff] mb-4 text-center md:text-left font-bold uppercase">Our Services</h1>
      </div>

      <div className="flex flex-wrap justify-center-safe gap-7 py-5 text-[#414141]">

        <div className="w-110 p-4 rounded-2xl border-t-6 border-[#004cff] transition delay-150 duration-300 ease-in-out shadow-lg hover:scale-102 hover:shadow-lg hover:shadow-[#3333333d] bg-white">
          <MdCode size={60} className="mb-3 p-1 text-[#004cff] rounded-xl"/>
          <h3 className="text-2xl font-bold mb-0.5 uppercase">Web Development</h3>
          <p>We build high-performance, responsive websites using the latest modern frameworks. Our focus is on writing clean, scalable code that ensures your site is fast, secure, and ready to grow alongside your business. </p>

          <button className="bg-[#004cff] text-[#fff] py-2.5 px-4 rounded-4xl flex  justify-center-safe items-center-safe gap-2 uppercase hover:bg-[#0034ac] hover:shadow-xl text-[10px] mt-4 transition delay-150 duration-300 hover:translate-x-1">See More <MdArrowForward size={16} /></button>
        </div>

        <div className="w-110 p-4 rounded-2xl border-t-6 border-[#004cff] transition delay-150 duration-300 ease-in-out shadow-lg hover:scale-102 hover:shadow-lg hover:shadow-[#3333333d] bg-white">
          <MdBrush size={60} className="mb-3 p-1 text-[#004cff] rounded-xl"/>
          <h3 className="text-2xl font-bold mb-0.5 uppercase">Graphic Design</h3>
          <p>Transform your brand with strategic visuals that capture attention and build trust. We create cohesive brand identities and marketing materials designed to leave a professional, lasting impression on your audience. </p>

          <button className="bg-[#004cff] text-[#fff] py-2.5 px-4 rounded-4xl flex  justify-center-safe items-center-safe gap-2 uppercase hover:bg-[#0034ac] hover:shadow-xl text-[10px] mt-4 transition delay-150 duration-300 hover:translate-x-1">See More <MdArrowForward size={16} /></button>
        </div>

        <div className="w-110 p-4 rounded-2xl border-t-6 border-[#004cff] transition delay-150 duration-300 ease-in-out shadow-lg hover:scale-102 hover:shadow-lg hover:shadow-[#3333333d] bg-white">
          <MdDesignServices size={60} className="mb-3 p-1 text-[#004cff] rounded-xl"/>
          <h3 className="text-2xl font-bold mb-0.5 uppercase">UI/UX Design</h3>
          <p>We design intuitive digital experiences that put your users first. By blending research with beautiful interface design, we turn complex interactions into seamless journeys that drive engagement and satisfaction. </p>

          <button className="bg-[#004cff] text-[#fff] py-2.5 px-4 rounded-4xl flex  justify-center-safe items-center-safe gap-2 uppercase hover:bg-[#0034ac] hover:shadow-xl text-[10px] mt-4 transition delay-150 duration-300 hover:translate-x-1">See More <MdArrowForward size={16} /></button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center-safe gap-25 text-center py-12">
      
      <div className="w-full md:w-auto">
        <h2 className="text-6xl font-bold text-[#004cff]">
          <Counter end={25} />+
        </h2>
        <p className="text-[#414141]">Projects Completed</p>
      </div>

      <div className="w-full md:w-auto">
        <h2 className="text-6xl font-bold text-[#004cff]">
          <Counter end={3} />+
        </h2>
        <p className="text-[#414141]">Years Experience</p>
      </div>

      <div className="w-full md:w-auto">
        <h2 className="text-6xl font-bold text-[#004cff]">
          <Counter end={12} />+
        </h2>
        <p className="text-[#414141]">Happy Clients</p>
      </div>

    </div>
    </div>
  );
}

export default Services