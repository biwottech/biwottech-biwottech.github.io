import AnimatedCounter from '../components/AnimatedCounter'

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"], icon: "🎨", color: "from-blue-500 to-cyan-500" },
    { category: "Backend", items: ["Node.js", "Laravel", "PHP", "Express.js", "REST APIs"], icon: "⚙️", color: "from-green-500 to-emerald-500" },
    { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"], icon: "🗄️", color: "from-purple-500 to-violet-500" },
    { category: "DevOps", items: ["Git", "Docker", "AWS", "CI/CD", "Linux"], icon: "🚀", color: "from-orange-500 to-red-500" }
  ]

  const stats = [
    { number: 100, suffix: "+", label: "Projects Completed", icon: "📊" },
    { number: 6, suffix: "+", label: "Years Experience", icon: "⏱️" },
    { number: 98, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
    { number: 24, suffix: "h", label: "Response Time", icon: "⚡" }
  ]

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/Evans_Kibiwott_CV.pdf'
    link.download = 'Evans_Kibiwott_CV.pdf'
    link.click()
  }

  return (
    <section id="about" className="py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">About Me</h2>
          <p className="text-gray-600">Passionate about crafting digital experiences that make a difference</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            
            {/* Profile Section */}
            <div className="xl:col-span-1">
              <div className="text-center xl:text-left">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 mx-auto xl:mx-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                    EK
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">Evans Kibiwott</h3>
                <p className="text-indigo-600 font-semibold mb-2">Full-Stack Developer</p>
                <p className="text-gray-600 text-sm mb-6">📍 Nairobi, Kenya</p>
                
                <button 
                  onClick={downloadCV}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>📋</span>
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            {/* Content Sections */}
            <div className="xl:col-span-3 space-y-8">
              
              {/* Journey Section */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
                    🚀
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
                </div>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    I'm a passionate full-stack developer with <span className="font-bold text-indigo-600"><AnimatedCounter end={6} suffix="+" /></span> years of experience 
                    building modern, scalable digital systems that deliver real business value.
                  </p>
                  <p>
                    My expertise spans across enterprise applications, from monitoring & evaluation platforms 
                    to e-commerce solutions. I thrive on architecting software that solves complex problems 
                    with elegant, maintainable code.
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-xl">
                    🛠️
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skillGroup, index) => (
                    <div key={skillGroup.category} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${skillGroup.color} rounded-lg flex items-center justify-center text-white text-sm mr-3`}>
                          {skillGroup.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900">{skillGroup.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span 
                            key={skill} 
                            className="px-2 py-1 text-xs bg-white text-gray-700 rounded-full border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Section */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white text-xl">
                    📊
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">By the Numbers</h3>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-indigo-600 mb-1">
                        <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                      </div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✨</span>
                    Clean, maintainable code
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">🎯</span>
                    Focus on business impact
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">⚡</span>
                    Performance optimization
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">🔒</span>
                    Security best practices
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}