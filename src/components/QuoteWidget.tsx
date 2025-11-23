import { useState, useEffect } from 'react'

const quotes = [
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House"
  },
  {
    text: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs"
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck"
  },
  {
    text: "Clean code always looks like it was written by someone who cares.",
    author: "Robert C. Martin"
  }
]

export default function QuoteWidget() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0])

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }, [])

  return (
    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
      <div className="text-center">
        <div className="text-xs text-indigo-100 mb-2">💡 Daily Inspiration</div>
        <blockquote className="text-xs text-white italic leading-relaxed">
          "{currentQuote.text}"
        </blockquote>
        <cite className="text-xs text-indigo-200 mt-2 block">
          — {currentQuote.author}
        </cite>
      </div>
    </div>
  )
}