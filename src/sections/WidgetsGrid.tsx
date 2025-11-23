import { useState, useEffect } from 'react'

interface WidgetsGridProps {
  onAskAI: () => void
}

export default function WidgetsGrid({ onAskAI }: WidgetsGridProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-2xl">
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

      <button 
        onClick={onAskAI}
        className="w-full bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3 px-4 rounded-xl transition-all duration-300 mt-6 flex items-center justify-center gap-2 group"
      >
        <span className="text-lg group-hover:animate-bounce">🤖</span>
        <span className="font-medium">Ask AI About Me</span>
      </button>
    </div>
  )
}