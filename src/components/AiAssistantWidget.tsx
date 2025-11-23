import { useState } from 'react'

interface AiAssistantWidgetProps {
  onClose: () => void
  isEmbedded?: boolean
}

const predefinedQuestions = [
  "What technologies does Evans specialize in?",
  "What types of projects has he worked on?",
  "How can I contact Evans for a project?",
  "What is Evans' experience level?",
  "Does Evans work with international clients?"
]

const responses: Record<string, string> = {
  "What technologies does Evans specialize in?": "Evans specializes in React.js, Node.js, Laravel, PostgreSQL, TypeScript, and modern web technologies. He has extensive experience with both frontend and backend development, microservices architecture, and cloud platforms like AWS.",
  
  "What types of projects has he worked on?": "Evans has built enterprise systems including monitoring & evaluation platforms, result-based management systems, pharmacy management systems, hotel management systems, e-commerce platforms, and campaign management tools. He focuses on scalable, workflow-driven applications.",
  
  "How can I contact Evans for a project?": "You can reach Evans via email at biwottech@gmail.com, WhatsApp at +254 727 143 163, or through his LinkedIn profile. He typically responds within 24 hours and is available for both short-term and long-term projects.",
  
  "What is Evans' experience level?": "Evans has 6+ years of professional software development experience. He has completed 100+ projects with a 98% client satisfaction rate, working with both local and international clients across various industries.",
  
  "Does Evans work with international clients?": "Yes! Evans has extensive experience working with international clients through platforms like Upwork and Fiverr. He's comfortable with remote collaboration, different time zones, and has maintained long-term relationships with clients worldwide."
}

export default function AiAssistantWidget({ onClose, isEmbedded = false }: AiAssistantWidgetProps) {
  const [messages, setMessages] = useState([
    {
      type: 'bot' as const,
      content: "Hi! I'm Evans' AI assistant. I can answer questions about his experience, skills, and projects. What would you like to know?"
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const handleQuestionClick = (question: string) => {
    const response = responses[question] || "I don't have specific information about that. Please contact Evans directly for more details."
    
    setMessages(prev => [
      ...prev,
      { type: 'user' as const, content: question },
      { type: 'bot' as const, content: response }
    ])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setInputValue('')

    let response = "That's a great question! For detailed information about that topic, I'd recommend contacting Evans directly at biwottech@gmail.com or through the contact form."

    if (userMessage.toLowerCase().includes('technology') || userMessage.toLowerCase().includes('skill')) {
      response = responses["What technologies does Evans specialize in?"]
    } else if (userMessage.toLowerCase().includes('project') || userMessage.toLowerCase().includes('work')) {
      response = responses["What types of projects has he worked on?"]
    } else if (userMessage.toLowerCase().includes('contact') || userMessage.toLowerCase().includes('hire')) {
      response = responses["How can I contact Evans for a project?"]
    } else if (userMessage.toLowerCase().includes('experience') || userMessage.toLowerCase().includes('year')) {
      response = responses["What is Evans' experience level?"]
    }

    setMessages(prev => [
      ...prev,
      { type: 'user', content: userMessage },
      { type: 'bot', content: response }
    ])
  }

  if (isEmbedded) {
    return (
      <div className="flex flex-col h-full">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-lg text-sm ${
                  message.type === 'user'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Questions */}
        <div className="p-3 border-t bg-gray-50">
          <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
          <div className="space-y-1">
            {predefinedQuestions.slice(0, 2).map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="w-full text-left text-xs bg-white border rounded p-2 hover:bg-indigo-50 hover:border-indigo-200 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 p-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-indigo-600 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    )
  }

  // Original modal version (fallback)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              AI
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Evans' AI Assistant</h3>
              <p className="text-xs text-gray-500">Ask me anything about Evans</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.type === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t bg-gray-50">
          <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
          <div className="space-y-1">
            {predefinedQuestions.slice(0, 3).map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="w-full text-left text-xs bg-white border rounded p-2 hover:bg-indigo-50 hover:border-indigo-200 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 p-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}