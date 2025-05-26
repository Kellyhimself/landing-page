import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Smart Software for Ambitious Small Businesses & Schools
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Built locally. Supported personally. Trusted by growing businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://wa.me/254748306871?text=Hi,%20I'm%20interested%20in%20your%20software%20solutions"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Prefer WhatsApp for Free Onboarding?
            </Link>
            <Link 
              href="#systems"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              See Our Systems
            </Link>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section id="systems" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Clinic360 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Clinic360</h3>
              <p className="text-gray-600 mb-4">Track sales, stock, and patient appointments in one click.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Inventory Management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Patient Records
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Sales Tracking
                </li>
              </ul>
              <Link 
                href="https://clinic.veylor360.com"
                className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* AgroVetPro */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">AgroVetPro</h3>
              <p className="text-gray-600 mb-4">Inventory & Sales for Agrovet Shops</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Stock Management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Sales Analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Customer Records
                </li>
              </ul>
              <Link 
                href="https://agrovet.veylor360.com"
                className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* SchoolLink */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">SchoolLink</h3>
              <p className="text-gray-600 mb-4">Smart System for School Records, Fees & Academics</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Fee Management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Student Records
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Academic Tracking
                </li>
              </ul>
              <Link 
                href="https://myschool.veylor360.com"
                className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2">Tailored for Local Businesses</h3>
              <p className="text-gray-600">Built specifically for Kenyan businesses</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold mb-2">Simple & Efficient</h3>
              <p className="text-gray-600">No bulky software — just what you need</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">Free setup, cancel anytime</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold mb-2">Local Support</h3>
              <p className="text-gray-600">Reach us easily on WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Simple, Transparent Pricing</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-2xl font-bold mb-4">Starts at KES 500/month</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600">
              <span className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Free Setup
              </span>
              <span className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Cancel Anytime
              </span>
              <span className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                No Long Contracts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="mb-4">Ready to streamline your business?</p>
              <Link 
                href="https://wa.me/254748306871?text=Hi,%20I'm%20interested%20in%20your%20software%20solutions"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Chat on WhatsApp
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://clinic.veylor360.com" className="hover:text-blue-400">
                    Clinic360
                  </Link>
                </li>
                <li>
                  <Link href="https://agrovet.veylor360.com" className="hover:text-blue-400">
                    AgroVetPro
                  </Link>
                </li>
                <li>
                  <Link href="https://myschool.veylor360.com" className="hover:text-blue-400">
                    SchoolLink
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>© {new Date().getFullYear()} Veylor360. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
