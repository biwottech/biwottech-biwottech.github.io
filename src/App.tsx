import { useState } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Navigation from './components/Navigation'
import SEOHead from './components/SEOHead'
import FloatingAI from './components/FloatingAI'

function App() {
  const [, setShowAI] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead />
      <Navigation />
      <Hero onAskAI={() => setShowAI(true)} />
      <About />
      <Experience />
      <Projects />
      <Contact />
      
      <FloatingAI />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2024 Evans Kibiwott Koech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App