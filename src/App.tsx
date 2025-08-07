function App() {
  const sections = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'books', title: 'Books' },
    { id: 'contact', title: 'Contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Sections */}
      <main className="pt-16">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Welcome to The Book Next Door</h1>
            <p className="text-xl text-gray-600 mb-8">Your neighborhood bookstore experience</p>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-4">
              We are passionate about bringing books closer to you
            </p>
            <p className="text-gray-600">
              Our mission is to create a warm, welcoming space where book lovers can discover their next favorite read.
            </p>
          </div>
        </section>

        {/* Books Section */}
        <section id="books" className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-4xl font-bold mb-6">Our Books</h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover our curated collection
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Fiction</h3>
                <p className="text-gray-600">Latest novels and classics</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Non-Fiction</h3>
                <p className="text-gray-600">Educational and inspiring reads</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Children's</h3>
                <p className="text-gray-600">Books for young readers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-4xl font-bold mb-6">Contact</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get in touch with us
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">Email: hello@thebooknextdoor.com</p>
              <p className="text-gray-600">Phone: (555) 123-4567</p>
              <p className="text-gray-600">Address: 123 Book Street, Reading City</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
