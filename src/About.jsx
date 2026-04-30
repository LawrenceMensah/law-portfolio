import heroImage from "./assets/MyImage.jpeg";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";


function About(){
  const skills = [
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Tailwind", category: "Tools" },
    { name: "PostgreSQL", category: "Database" },
    { name: "PHP", category: "Backend" },
    { name: "Graphic Design", category: "Design" },
    { name: "UI/UX Design", category: "Design" }
  ];

  return(
      <div id="about" className="bg-black scroll-mt-24 h-auto py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl text-white font-bold uppercase mb-2">About Me</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-blue-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                <img 
                  src={heroImage} 
                  alt="Lawrence Mensah" 
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-blue-500/50 object-cover hover:border-blue-400 transition-all duration-300"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl text-blue-400 font-semibold uppercase mb-4">Who Am I</h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  I am a <span className="text-white font-semibold">BSc Information Technology student at UPSA</span>, focused on transforming complex theory into high-performance, real-world applications. I bridge the gap between academic study and practical software engineering to build robust, scalable, and user-optimized digital solutions.
                </p>
              </div>

              {/* Skills Section */}
              <div>
                <h2 className="text-2xl text-blue-400 font-semibold uppercase mb-6">Technical Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-lg p-4 transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-600/20 group cursor-pointer"
                    >
                      <p className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </p>
                      <p className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors duration-300">
                        {skill.category}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a 
                  href="#contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default About