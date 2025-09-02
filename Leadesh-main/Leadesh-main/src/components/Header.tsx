import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    e.preventDefault()
    if (window.location.pathname !== '/') window.history.pushState({}, '', '/'+hash)
    else window.history.pushState({}, '', hash)
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (isMenuOpen) setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/leadesh-logo.svg" alt="Leadesh" className="h-8 w-auto" />
          </div>

          {/* Right-side Navigation + CTAs */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="/pricing" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/pricing'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              Pricing
            </a>
            <a href="/contact" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/contact'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              Contact
            </a>
            <button onClick={() => { window.history.pushState({}, '', '/login'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">
              Log In
            </button>
            <button onClick={() => { window.history.pushState({}, '', '/pricing'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Free
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="/" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="#features" onClick={(e) => handleAnchorClick(e, '#features')} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                Features
              </a>
              <a href="/pricing" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/pricing'); window.dispatchEvent(new PopStateEvent('popstate')); setIsMenuOpen(false); }} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                Pricing
              </a>
              <a href="#about" onClick={(e) => handleAnchorClick(e, '#about')} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                About
              </a>
              <a href="/contact" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/contact'); window.dispatchEvent(new PopStateEvent('popstate')); setIsMenuOpen(false); }} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button onClick={() => { window.history.pushState({}, '', '/login'); window.dispatchEvent(new PopStateEvent('popstate')); setIsMenuOpen(false); }} className="w-full text-left text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">
                  Log In
                </button>
                <button onClick={() => { window.history.pushState({}, '', '/pricing'); window.dispatchEvent(new PopStateEvent('popstate')); setIsMenuOpen(false); }} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold">
                  Start Free
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;