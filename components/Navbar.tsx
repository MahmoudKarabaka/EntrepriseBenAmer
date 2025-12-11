'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-12 w-48">
              <Image
                src="/images/logo/logo-white.svg"
                alt="Ben Ameur Tournage"
                fill
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#accueil" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Accueil
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link href="#apropos" className="text-gray-700 hover:text-primary transition-colors font-medium">
              À Propos
            </Link>
            <Link href="#galerie" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Galerie
            </Link>
            <Link href="#localisation" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Localisation
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </Link>
            <Link 
              href="/devenir-revendeur" 
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-light transition-colors font-semibold"
            >
              Devenir Revendeur
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="#accueil" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Accueil
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Services
              </Link>
              <Link href="#apropos" className="text-gray-700 hover:text-primary transition-colors font-medium">
                À Propos
              </Link>
              <Link href="#galerie" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Galerie
              </Link>
              <Link href="#localisation" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Localisation
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Contact
              </Link>
              <Link 
                href="/devenir-revendeur" 
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-light transition-colors font-semibold text-center"
              >
                Devenir Revendeur
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

