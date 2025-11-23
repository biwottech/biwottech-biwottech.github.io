import { useState } from 'react'

const projects = [
  {
    title: "Monitoring & Evaluation System",
    subtitle: "Enterprise workflow platform for real-time project tracking",
    description: "Built a comprehensive M&E system serving 50+ organizations with custom forms, automated reporting, and real-time dashboards.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
    features: ["Real-time Analytics", "Custom Form Builder", "Automated Reports", "Multi-tenant Architecture"],
    status: "Live Production",
    icon: "📊",
    gradient: "from-emerald-400 to-teal-600"
  },
  {
    title: "Result-Based Management Platform",
    subtitle: "KPI tracking system with custom dashboards",
    description: "Developed a results tracking platform with dynamic KPI management, custom form generation, and comprehensive dashboards.",
    tech: ["Laravel", "MySQL", "Vue.js", "Chart.js"],
    features: ["Dynamic KPIs", "Custom Dashboards", "Performance Analytics", "Data Integration"],
    status: "Live Production",
    icon: "🎯",
    gradient: "from-blue-400 to-indigo-600"
  },
  {
    title: "Pharmacy Management System",
    subtitle: "Complete inventory and prescription management",
    description: "Built a comprehensive pharmacy system handling inventory tracking, prescription processing, billing, and customer management.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Express.js"],
    features: ["Inventory Management", "Prescription Processing", "Billing System", "Stock Alerts"],
    status: "Live Production",
    icon: "💊",
    gradient: "from-purple-400 to-pink-600"
  },
  {
    title: "Hotel Management System",
    subtitle: "Reservation and operations management",
    description: "Developed a full-featured hotel management system with room booking, guest management, billing, and operational workflows.",
    tech: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    features: ["Room Reservations", "Guest Management", "POS Integration", "Analytics Dashboard"],
    status: "Live Production",
    icon: "🏨",
    gradient: "from-orange-400 to-red-600"
  },
  {
    title: "Campaign Management Platform",
    subtitle: "Digital marketing campaign tracking",
    description: "Built a campaign management platform for tracking digital marketing efforts across multiple channels with ROI analytics.",
    tech: ["React.js", "Node.js", "MongoDB", "Redis"],
    features: ["Multi-channel Tracking", "ROI Analytics", "Automated Reports", "Real-time Monitoring"],
    status: "Live Production",
    icon: "📈",
    gradient: "from-cyan-400 to-blue-600"
  },
  {
    title: "E-commerce Platform",
    subtitle: "Full-featured online store",
    description: "Developed a modern e-commerce platform with product management, shopping cart, payment processing, and order management.",
    tech: ["Next.js", "Stripe API", "PostgreSQL", "Tailwind CSS"],
    features: ["Product Catalog", "Payment Processing", "Order Management", "Admin Dashboard"],
    status: "Live Production",
    icon: "🛒",
    gradient: "from-violet-400 to-purple-600"
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-pink-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing architecture, innovation, and measurable business impact
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              <article className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative text-center p-6">
                    <div className="text-5xl mb-3 drop-shadow-lg">{project.icon}</div>
                    <div className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {project.status}
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-float"></div>
                  <div className="absolute bottom-6 left-6 w-4 h-4 bg-white/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.subtitle}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1 rounded-full border border-indigo-200">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm py-3 px-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                      View Details
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-3 px-4 rounded-xl transition-colors font-medium">
                      Demo
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedProject === index && (
                  <div className="border-t bg-gradient-to-br from-gray-50 to-indigo-50 p-6 animate-slide-up">
                    <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <span className="text-green-500 mr-2">✨</span>
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <span className="text-indigo-500 mr-2">▶</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <span className="text-blue-500 mr-2">🛠️</span>
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="text-xs bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                        🚀 Live Demo
                      </button>
                      <button className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-4 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300">
                        📝 View Code
                      </button>
                    </div>
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-white/50 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to See More?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I have additional projects and case studies available. Let's discuss how I can help with your next project.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                🚀 Let's Build Something Amazing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}