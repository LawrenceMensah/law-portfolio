import heroImage from "./assets/MyImage.jpeg";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";


function About({ darkMode }){
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
      <div id="about" className={`scroll-mt-24 h-auto py-20 px-6 md:px-20 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className={`text-4xl md:text-5xl font-bold uppercase mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>About Me</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                <p className={`leading-relaxed text-lg transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  I am a <span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>BSc Information Technology student at UPSA</span>, focused on transforming complex theory into high-performance, real-world applications. I bridge the gap between academic study and practical software engineering to build robust, scalable, and user-optimized digital solutions.
                </p>
              </div>

              {/* Skills Section */}
              <div>
                <h2 className="text-2xl text-blue-400 font-semibold uppercase mb-6">Technical Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={index}
                      className={`border rounded-lg p-3 sm:p-4 transition-all duration-300 group cursor-pointer ${darkMode ? 'bg-gray-900 border-gray-800 hover:border-blue-500/50 hover:bg-gray-800' : 'bg-gray-100 border-gray-300 hover:border-blue-500/50 hover:bg-blue-50'}`}
                    >
                      <p className={`text-sm sm:text-base font-semibold break-words transition-colors duration-300 group-hover:text-blue-400 ${darkMode ? 'text-white' : 'text-black'}`}>
                        {skill.name}
                      </p>
                      <p className={`text-xs mt-1 transition-colors duration-300 ${darkMode ? 'text-gray-500 group-hover:text-gray-400' : 'text-gray-600 group-hover:text-gray-500'}`}>
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