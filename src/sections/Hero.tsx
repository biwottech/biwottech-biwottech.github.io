import { useState, useEffect } from 'react'
import AnimatedCounter from '../components/AnimatedCounter'

interface HeroProps {
  onAskAI: () => void
}

export default function Hero({ onAskAI }: HeroProps) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [typedText, setTypedText] = useState('')
  
  const roles = ['Full-Stack Developer', 'React Specialist', 'Node.js Expert', 'Laravel Developer']
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Typing animation
  useEffect(() => {
    const role = roles[currentRole]
    let index = 0
    setTypedText('')

    const typeInterval = setInterval(() => {
      if (index < role.length) {
        setTypedText(role.substring(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentRole])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/Evans_Kibiwott_CV.pdf'
    link.download = 'Evans_Kibiwott_CV.pdf'
    link.click()
  }

  return (
    <header id="hero" className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-600 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-16 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-2/3">
          <div className="flex items-center gap-2 text-sm tracking-wide animate-fade-in mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Available for hire</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight animate-slide-up">
            Evans Kibiwott
            <span className="block text-2xl lg:text-3xl text-indigo-200 mt-2">
              {typedText}<span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="mt-6 text-indigo-100 max-w-2xl text-lg lg:text-xl animate-slide-up leading-relaxed">
            Building <span className="text-yellow-300 font-semibold">intelligent, scalable</span> digital systems 
            that help organizations <span className="text-yellow-300 font-semibold">measure and deliver results</span>.
          </p>

          {/* Quick stats */}
          <div className="mt-8 grid grid-cols-3 gap-6 animate-slide-up">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="text-sm text-indigo-200">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300">
                <AnimatedCounter end={6} suffix="+" />
              </div>
              <div className="text-sm text-indigo-200">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-sm text-indigo-200">Satisfaction</div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-slide-up">
            <button
              onClick={scrollToProjects}
              className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-yellow-300"
            >
              View My Work
            </button>



            <button
              onClick={downloadCV}
              className="text-indigo-200 hover:text-white transition-colors underline underline-offset-4"
            >
              📄 Download CV
            </button>
          </div>
        </div>

        {/* Compact widget sidebar */}
        <div className="mt-12 lg:mt-0 lg:w-1/3">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mb-3">
                EK
              </div>
              <div className="text-sm text-indigo-200">
                {currentTime.toLocaleTimeString('en-US', { 
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit'
                })} • Nairobi, Kenya
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-indigo-200">Status:</span>
                <span className="flex items-center text-green-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Available
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-indigo-200">Response Time:</span>
                <span className="text-white font-medium">&lt; 24 hours</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-indigo-200">Next Available:</span>
                <span className="text-white font-medium">Immediately</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="text-xs text-indigo-200 text-center">
                💡 "Clean code always looks like it was written by someone who cares"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  )
}