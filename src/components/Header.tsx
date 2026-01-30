import { ThemeToggle } from '@/components/ThemeToggle'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-backdrop-filter:bg-white/60 dark:supports-backdrop-filter:bg-gray-900/60">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        
        <img src="/assets/favicon-32x32.png" alt="Logo icon" />

          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition">
            Sheilla
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition font-medium"
            activeProps={{ className: "text-amber-500 dark:text-amber-400 font-semibold" }}
          >
            Home
          </Link>
         
          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition font-medium"
            activeProps={{ className: "text-amber-500 dark:text-amber-400 font-semibold" }}
          >
            About
          </Link>
           <Link
            to="/skill"
            className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition font-medium"
            activeProps={{ className: "text-amber-500 dark:text-amber-400 font-semibold" }}
          >
            Skills
          </Link>
          <Link
            to="/project"
            className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition font-medium"
            activeProps={{ className: "text-amber-500 dark:text-amber-400 font-semibold" }}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition font-medium"
            activeProps={{ className: "text-amber-500 dark:text-amber-400 font-semibold" }}
          >
            Contact
          </Link>
        </nav>

        {/* Right side: Theme Toggle and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition font-medium py-2"
              activeProps={{ className: "text-amber-500 dark:text-amber-400 font-semibold" }}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition font-medium py-2"
              activeProps={{ className: "text-amber-500 dark:text-amber-400 font-semibold" }}
            >
              About
            </Link>
            
            <Link
              to="/skill"
              onClick={closeMobileMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition font-medium py-2"
              activeProps={{ className: "text-amber-500 dark:text-amber-400 font-semibold" }}
            >
              Skills
            </Link>
            
            <Link
              to="/project"
              onClick={closeMobileMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition font-medium py-2"
              activeProps={{ className: "text-amber-500 dark:text-amber-400 font-semibold" }}
            >
              Projects
            </Link>
            
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition font-medium py-2"
              activeProps={{ className: "text-amber-500 dark:text-amber-400 font-semibold" }}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}