import Navbar from './components/Navbar'
import HomeSection from './components/Home'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Sections */}
      <main>
        {/* Home Section */}
        <HomeSection />

        {/* The Story Behind Section */}
        <section id="story" className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-4xl font-bold mb-6">The Story Behind</h2>
            <p className="text-lg text-gray-600 mb-4">
              Every great idea starts with a simple observation
            </p>
            <p className="text-gray-600">
              We noticed that finding quality books in local neighborhoods was becoming increasingly difficult. 
              That's when we decided to bring the bookstore directly to your doorstep.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-gray-600 mb-8">
              Simple, convenient, and community-focused
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-2">Browse</h3>
                <p className="text-gray-600">Explore our curated collection online</p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="text-3xl mb-4">🚚</div>
                <h3 className="text-xl font-semibold mb-2">Order</h3>
                <p className="text-gray-600">Select your books and place an order</p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
                <p className="text-gray-600">Get books delivered to your neighborhood</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section id="why-it-matters" className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-4xl font-bold mb-6">Why It Matters</h2>
            <p className="text-lg text-gray-600 mb-8">
              Building stronger communities through books
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-3">Community Connection</h3>
                <p className="text-gray-600">
                  We believe books bring people together and strengthen neighborhood bonds.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-3">Local Support</h3>
                <p className="text-gray-600">
                  Supporting local authors and creating opportunities within the community.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-gray-600">
                  Making quality literature accessible to everyone, regardless of location.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  Promoting reading culture while supporting environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
