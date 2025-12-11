'use client'

import Image from 'next/image'

const stats = [
  { number: '15+', label: 'Années d\'expérience' },
  { number: '500+', label: 'Projets réalisés' },
  { number: '100+', label: 'Clients satisfaits' },
  { number: '24/7', label: 'Support technique' }
]

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              À Propos de Ben Ameur Tournage
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-primary">Ben Ameur Tournage</strong> est spécialisée dans la construction, 
                la réparation et la fabrication de pièces pour grands engins industriels défectueux.
              </p>
              
              <p>
                Nous intervenons sur toutes les marques d'engins lourds, notamment <strong className="text-primary">Caterpillar</strong>, 
                pour reconstruire et réparer les pièces défectueuses avec la même qualité que les pièces d'origine.
              </p>
              
              <p>
                Notre expertise couvre le <strong className="text-primary">tournage</strong> et le <strong className="text-primary">fraisage</strong> 
                de tous types de matières : acier, inox, aluminium, bronze, plastique et bien d'autres.
              </p>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold font-orbitron bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
              <Image
                src="/images/about/about-image.jpg"
                alt="Atelier Ben Ameur Tournage"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div
                className="hidden relative w-full h-full bg-cover bg-center items-center justify-center"
                style={{ backgroundImage: "url('/images/about/atelier-cover.png')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-dark/30 to-dark/50" />
                <div className="relative text-center text-white">
                  <div className="text-lg font-semibold">Image de l&apos;atelier</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

