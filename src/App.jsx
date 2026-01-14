import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Star, ShoppingCart, Truck, Phone, Mail, ChevronRight, MessageSquare } from 'lucide-react'

function App() {
  const featuredRef = useRef(null)
  const isInView = useInView(featuredRef, { once: true })

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-pink-600" />
            <span className="text-2xl font-playfair font-bold text-gray-900">Princess Dreams</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#collection" className="text-gray-600 hover:text-pink-600 transition-colors">Collection</a>
            <a href="#gallery" className="text-gray-600 hover:text-pink-600 transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-600 hover:text-pink-600 transition-colors">Contact</a>
          </div>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-semibold transition-colors flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Shop Now
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-playfair font-black text-gray-900 mb-6"
              >
                Magical Dresses for Little Princesses
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                Discover our enchanting collection of handcrafted dresses that make every moment special.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
              >
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 flex items-center gap-2">
                  View Collection
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-white hover:bg-pink-50 text-pink-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-pink-600 transition-all hover:scale-105">
                  Book Fitting
                </button>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1602973497083-c3559309b2ae?w=800&q=80"
                alt="Little girl in princess dress"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">Handcrafted</h3>
              <p className="text-gray-600 text-sm">Made with love and attention to every detail</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">Finest fabrics and materials used</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600 text-sm">Quick delivery worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Personal styling assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section ref={featuredRef} className="py-20 px-6">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16"
          >
            Featured Collection
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Princess Belle",
                price: "$129",
                image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80"
              },
              {
                title: "Snow White",
                price: "$149",
                image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=80"
              },
              {
                title: "Cinderella",
                price: "$139",
                image: "https://images.unsplash.com/photo-1503407212419-1ce7f311ebef?w=800&q=80"
              }
            ].map((dress, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={dress.image}
                    alt={dress.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold transform -translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Details
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{dress.title}</h3>
                <p className="text-pink-600 font-bold">{dress.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-pink-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-4xl font-playfair font-bold text-center mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-pink-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-pink-600" />
                    <span>contact@princessdreams.com</span>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                ></textarea>
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Heart className="w-6 h-6 text-pink-500" />
              <span className="text-xl font-playfair font-bold">Princess Dreams</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Princess Dreams. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App