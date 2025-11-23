import { useState } from 'react'

interface SidebarAIProps {
  isOpen: boolean
  onClose: () => void
}

export default function SidebarAI({ isOpen, onClose }: SidebarAIProps) {
  const [messages, setMessages] = useState([
    { type: 'bot' as const, content: "Hi! I'm Evans' AI assistant. What would you like to know?" }
  ])

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  🤖
                </div>
                <div>
                  <h3 className="font-semibold">Evans' AI Assistant</h3>
                  <p className="text-xs opacity-90">Always here to help</p>
                </div>
              </div>
              <button onClick={onClose} className="text-white/80 hover:text-white">
                ✕
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input 
                placeholder="Ask me anything..."
                className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-500 text-white px-4 py-3 rounded-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}