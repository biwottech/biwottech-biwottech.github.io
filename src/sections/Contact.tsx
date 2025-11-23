export default function Contact() {
  const contactMethods = [
    { icon: '✉️', label: 'Email', href: 'mailto:biwottech@gmail.com' },
    { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/254727143163' },
    { icon: '🔗', label: 'LinkedIn', href: 'https://www.linkedin.com/in/biwottech/' },
    { icon: '💼', label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01c7dedde56bdedc18' },
    { icon: '🐙', label: 'GitHub', href: 'https://github.com/biwottech' }
  ]

  return (
    <section id="contact" className="py-12 bg-gradient-to-r from-gray-900 to-indigo-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Let's Work Together</h2>
          <p className="text-gray-300">Ready to build something amazing?</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4 text-center lg:text-left">Get In Touch</h3>
              <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto lg:mx-0">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
                    title={method.label}
                  >
                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{method.icon}</span>
                    <span className="text-xs text-gray-300 text-center leading-tight">{method.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Why Work With Me */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-center lg:text-left">Why Choose Me?</h3>
              <div className="space-y-2">
                {[
                  { icon: '🎯', text: '6+ years experience' },
                  { icon: '⚡', text: 'Fast delivery' },
                  { icon: '💬', text: 'Clear communication' },
                  { icon: '🛠️', text: 'Ongoing support' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span className="mr-3">{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-center lg:text-left">Services</h3>
              <div className="space-y-2">
                {[
                  { icon: '🌐', text: 'Web Development' },
                  { icon: '⚙️', text: 'API Development' },
                  { icon: '🗄️', text: 'Database Design' },
                  { icon: '🏗️', text: 'System Architecture' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span className="mr-3">{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/20 text-center">
            <div className="flex items-center justify-center text-sm text-green-300">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Available for new projects • Nairobi, Kenya
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}