export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Projtrac Systems Ltd",
      period: "January 2019 — Present",
      location: "Nairobi, Kenya",
      achievements: [
        "Led development of monitoring & evaluation systems serving 50+ organizations",
        "Architected microservice-based APIs reducing response times by 60%",
        "Built React dashboards with real-time analytics and custom reporting",
        "Migrated legacy PHP systems to modern Node.js/React stack",
        "Mentored junior developers and established coding standards"
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
      icon: "🏢",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "Upwork & Fiverr",
      period: "2017 — Present",
      location: "Remote",
      achievements: [
        "Delivered 100+ projects with 98% client satisfaction rate",
        "Built SaaS platforms, e-commerce sites, and custom web applications",
        "Specialized in Laravel, React, and database optimization",
        "Maintained long-term relationships with international clients",
        "Consistently met tight deadlines while maintaining code quality"
      ],
      technologies: ["Laravel", "React.js", "MySQL", "Vue.js", "Stripe API"],
      icon: "💼",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Junior Web Developer",
      company: "Tech Solutions Kenya",
      period: "June 2017 — December 2018",
      location: "Nairobi, Kenya",
      achievements: [
        "Developed responsive websites using HTML, CSS, and JavaScript",
        "Collaborated on team projects using Git version control",
        "Learned modern frameworks and best practices",
        "Contributed to client projects and internal tools"
      ],
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      icon: "🌱",
      color: "from-green-500 to-teal-600"
    }
  ]

  return (
    <section id="experience" className="relative py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            6+ years of building scalable solutions and leading development teams
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-gray-900 hidden md:block group-hover:scale-125 transition-transform"></div>

                <div className="md:ml-20">
                  <div className="relative group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    
                    <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                            <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                              {exp.company}
                            </p>
                            <p className="text-gray-300 text-sm">{exp.location}</p>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0">
                          <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                          <h4 className="text-white font-semibold mb-3 flex items-center">
                            <span className="text-yellow-400 mr-2">🎯</span>
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start text-gray-300">
                                <span className="text-blue-400 mr-3 mt-1 text-sm">▶</span>
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center">
                            <span className="text-green-400 mr-2">🛠️</span>
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-600/50 border border-gray-500/30 text-gray-200 rounded-full text-xs backdrop-blur-sm hover:from-blue-600/30 hover:to-purple-600/30 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how my experience can help bring your next project to life
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}