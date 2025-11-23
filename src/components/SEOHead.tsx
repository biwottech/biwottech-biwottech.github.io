import { useEffect } from 'react'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

export default function SEOHead({ 
  title = "Evans Kibiwott Koech - Full-Stack Developer",
  description = "Expert full-stack developer with 6+ years experience. Specializing in React.js, Node.js, Laravel. Available for hire - Building scalable web applications.",
  keywords = "full-stack developer, React developer, Node.js, Laravel, web development, hire developer, freelance developer, Kenya developer",
  image = "/og-image.jpg",
  url = "https://biwottech.github.io/portfolio"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title
    
    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    updateMeta('description', description)
    updateMeta('keywords', keywords)
    updateMeta('og:title', title)
    updateMeta('og:description', description)
    updateMeta('og:image', image)
    updateMeta('og:url', url)
    updateMeta('twitter:title', title)
    updateMeta('twitter:description', description)
    updateMeta('twitter:image', image)

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Evans Kibiwott Koech",
      "jobTitle": "Full-Stack Developer",
      "description": description,
      "url": url,
      "sameAs": [
        "https://www.linkedin.com/in/biwottech/",
        "https://www.upwork.com/freelancers/~01c7dedde56bdedc18",
        "https://github.com/biwottech"
      ],
      "knowsAbout": ["React.js", "Node.js", "Laravel", "PostgreSQL", "TypeScript", "Web Development"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "Kenya"
      }
    }

    let script = document.querySelector('script[type="application/ld+json"]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

  }, [title, description, keywords, image, url])

  return null
}