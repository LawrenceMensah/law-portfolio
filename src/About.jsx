import heroImage from "./assets/MyImage.jpeg";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";


function About(){


  return(
      <div id="about" className="
        bg-[#001954ed]
        scroll-mt-24
        flex
        flex-wrap
        gap-10
        justify-center-safe
        items-center-safe
        h-auto
        py-20
        px-6
        ">

          <div>
            <img src={heroImage} alt="" className="w-60 h-60 md:w-96 md:h-96 rounded-full border-8 border-[#004cff]"/>
          </div>
          
          <div className=" w-200 text-[#fff]">
            <h1 className="text-3xl text-[#004cff] mb-4 text-center md:text-left font-bold uppercase">About Me</h1>
            <p className="font-thin mb-5 text-center md:text-left">I am a BSc Information Technology student at UPSA, focused on transforming complex theory into high-performance, real-world applications. I bridge the gap between academic study and practical software engineering to build robust, scalable, and user-optimized digital solutions.</p>

            <div className="w-full">
              <h1 className="text-2xl text-[#004cff] mb-4 text-center md:text-left font-semibold uppercase">My Current Stacks</h1>
              <div className="w-full grid grid-cols-3 grid-rows-3">
                <div className="p-3">
                  <h3>HTML5</h3>
                  {/* <div className="flex text-yellow-400 text-2xl">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStarHalf />
                  </div> */}
                </div>

                <div className="p-3">
                  <h3>PHP</h3>
                  {/* <div className="flex text-yellow-400 text-2xl">
                    <MdStar />
                    <MdStar />
                    <MdStarHalf />
                    <MdStarBorder/>
                    <MdStarBorder/>
                  </div> */}
                </div>

                <div className="p-3">
                  <h3>Graphic Design</h3>
                  {/* <div className="flex text-yellow-400 text-2xl">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStarHalf />
                    <MdStarBorder/>
                  </div> */}
                </div>

                <div className="p-3">
                  <h3>CSS3</h3>
                  {/* <div className="flex text-yellow-400 text-2xl">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStarHalf />
                  </div> */}
                </div>

                <div className="p-3">
                  <h3>PostgreSQL</h3>
                  {/* <div className="flex text-yellow-400 text-2xl">
                    <MdStar />
                    <MdStar />
                    <MdStarHalf />
                    <MdStarBorder/>
                    <MdStarBorder/>
                  </div> */}
                </div>

                <div className="p-3">
                  <h3>React</h3>
                  {/* <div className="flex text-yellow-400 text-2xl">
                    <MdStar />
                    <MdStar />
                    <MdStarHalf />
                    <MdStarBorder/>
                    <MdStarBorder/>
                  </div> */}
                </div>

                <div className="p-3">
                  <h3>JavaScript</h3>
                  {/* <div className="flex text-yellow-400 text-2xl">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStarHalf />
                    <MdStarBorder/>
                  </div> */}
                </div>

                <div className="p-3">
                  <h3>Tailwind</h3>
                  {/* <div className="flex text-yellow-400 text-2xl">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStarHalf />
                    <MdStarBorder/>
                  </div> */}
                </div>

                <div className="p-3">
                  <h3>UI/UX Design</h3>
                  {/* <div className="flex text-yellow-400 text-2xl">
                    <MdStar />
                    <MdStarHalf />
                    <MdStarBorder/>
                    <MdStarBorder/>
                    <MdStarBorder/>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
      </div>
  );
}

export default About