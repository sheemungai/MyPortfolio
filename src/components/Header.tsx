import { ThemeToggle } from '@/components/ThemeToggle'
import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-backdrop-filter:bg-white/60 dark:supports-backdrop-filter:bg-gray-900/60">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
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
          <button className="md:hidden text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (optional) */}
      {/* <div className="md:hidden">
        Mobile menu content here
      </div> */}
    </header>
  )
}