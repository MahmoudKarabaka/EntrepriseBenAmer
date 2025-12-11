'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div>
            <div className="relative h-12 w-48 mb-4">
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
            <p className="text-gray-400 text-sm">
              Spécialiste en construction et réparation de pièces pour grands engins industriels.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#accueil" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#apropos" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="#galerie" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="#localisation" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Localisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Tournage</li>
              <li className="text-gray-400 text-sm">Fraisage</li>
              <li className="text-gray-400 text-sm">Réparation Engins</li>
              <li className="text-gray-400 text-sm">Construction Pièces</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                <a href="tel:+21698800957" className="hover:text-primary transition-colors">
                  +216 98 800 957
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                <a href="mailto:tourneurtunisi@gmail.com" className="hover:text-primary transition-colors">
                  tourneurtunisi@gmail.com
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                Cité Chaher Borj Touil 2081, Ariana
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ben Ameur Tournage. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

