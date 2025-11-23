import { useState } from 'react'
import AiAssistantWidget from './AiAssistantWidget'

export default function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <>
      {/* Floating Button - only show when closed */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-110"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative flex items-center justify-center text-white text-xl">
              🤖
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-indigo-400 animate-ping opacity-20"></div>
          </button>
        </div>
      )}

      {/* Bottom-right slide-up modal */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
        }`}>
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 h-full flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">
                  🤖
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Evans' AI Assistant</h3>
                  {!isMinimized && <p className="text-xs opacity-90">Ask me anything!</p>}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/80 hover:text-white text-lg"
                >
                  {isMinimized ? '□' : '_'}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white text-lg"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Content - only show when not minimized */}
            {!isMinimized && (
              <div className="flex-1 flex flex-col">
                <AiAssistantWidget onClose={() => setIsOpen(false)} isEmbedded />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}