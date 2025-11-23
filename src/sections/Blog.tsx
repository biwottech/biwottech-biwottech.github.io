const blogPosts = [
  {
    title: "Building Scalable React Applications: Best Practices for 2024",
    excerpt: "Learn the latest patterns and techniques for building maintainable React apps that scale with your business needs.",
    readTime: "8 min read",
    category: "React",
    date: "2024-01-15",
    slug: "scalable-react-applications-2024"
  },
  {
    title: "Node.js Performance Optimization: From Slow to Lightning Fast",
    excerpt: "Discover proven techniques to optimize your Node.js applications and reduce response times by up to 70%.",
    readTime: "12 min read",
    category: "Node.js",
    date: "2024-01-10",
    slug: "nodejs-performance-optimization"
  },
  {
    title: "Laravel vs Node.js: Choosing the Right Backend for Your Project",
    excerpt: "A comprehensive comparison to help you make the right technology choice for your next web application.",
    readTime: "15 min read",
    category: "Backend",
    date: "2024-01-05",
    slug: "laravel-vs-nodejs-comparison"
  }
]

export default function Blog() {
  return (
    <section id="blog" className="max-w-6xl mx-auto px-6 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Sharing knowledge about web development, best practices, and industry trends
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <article 
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
          >
            <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white relative">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">📝</div>
                <div className="text-sm font-medium">{post.category}</div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                {post.readTime}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>•</span>
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <button className="text-indigo-600 font-medium text-sm hover:text-indigo-700 transition-colors">
                  Read More →
                </button>
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                    👍
                  </button>
                  <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                    💬
                  </button>
                  <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                    🔗
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
          View All Articles
        </button>
      </div>
    </section>
  )
}