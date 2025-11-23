import { useState, useEffect } from 'react'

export default function TimeDateWidget() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
      <div className="text-center">
        <div className="text-lg font-bold text-white">
          {formatTime(currentTime)}
        </div>
        <div className="text-xs text-indigo-100 mt-1">
          {formatDate(currentTime)}
        </div>
        <div className="text-xs text-indigo-200 mt-1">
          Nairobi, Kenya (EAT)
        </div>
      </div>
    </div>
  )
}