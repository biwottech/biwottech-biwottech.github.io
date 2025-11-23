import { useState, useEffect } from 'react'

export default function GreetingWidget() {
  const [greeting, setGreeting] = useState('')
  const [emoji, setEmoji] = useState('')

  useEffect(() => {
    const hour = new Date().getHours()
    
    if (hour < 12) {
      setGreeting('Good Morning')
      setEmoji('🌅')
    } else if (hour < 17) {
      setGreeting('Good Afternoon')
      setEmoji('☀️')
    } else {
      setGreeting('Good Evening')
      setEmoji('🌙')
    }
  }, [])

  const greetings = [
    { lang: 'English', text: greeting },
    { lang: 'Swahili', text: 'Habari' },
    { lang: 'French', text: 'Bonjour' }
  ]

  return (
    <div className="text-center">
      <div className="text-lg font-semibold text-white flex items-center justify-center gap-2">
        <span>{emoji}</span>
        <span>{greeting}</span>
      </div>
      <div className="text-xs text-indigo-100 mt-1">
        {greetings.map((g, i) => (
          <span key={g.lang}>
            {g.text}
            {i < greetings.length - 1 && ' • '}
          </span>
        ))}
      </div>
    </div>
  )
}