'use client'

import Image from 'next/image'

const services = [
  {
    icon: '/images/activities/tournage.svg',
    title: 'Tournage de Précision',
    description: 'Tournage CNC et conventionnel pour tous types de matières : acier, inox, aluminium, bronze, plastique.',
    features: ['CNC et conventionnel', 'Tous diamètres', 'Tous types de matières', 'Pièces sur mesure']
  },
  {
    icon: '/images/activities/fraisage.svg',
    title: 'Fraisage Industriel',
    description: 'Fraisage multi-axes pour la réalisation de pièces complexes et géométries avancées.',
    features: ['Fraisage 3-5 axes', 'Pièces complexes', 'Grandes dimensions', 'Précision millimétrique']
  },
  {
    icon: '/images/activities/reparation.svg',
    title: 'Réparation Grands Engins',
    description: 'Réparation et reconstruction de pièces défectueuses pour Caterpillar et autres marques d\'engins lourds.',
    features: ['Caterpillar', 'Komatsu', 'Liebherr', 'Toutes marques']
  },
  {
    icon: '/images/activities/construction.svg',
    title: 'Construction de Pièces',
    description: 'Fabrication complète de pièces neuves pour remplacer les pièces défectueuses de vos engins.',
    features: ['Pièces sur mesure', 'Conformité OEM', 'Tous types de matières', 'Livraison rapide']
  },
  {
    icon: '/images/activities/soudure.svg',
    title: 'Soudure Professionnelle',
    description: 'Soudure tous métaux : acier, inox, aluminium. Assemblage et réparation de structures métalliques.',
    features: ['Arc, TIG, MIG', 'Tous métaux', 'Structures lourdes', 'Contrôle qualité']
  },
  {
    icon: '/images/activities/controle.svg',
    title: 'Contrôle Qualité',
    description: 'Vérification rigoureuse de chaque pièce avec équipements de mesure de précision.',
    features: ['Mesure 3D', 'Contrôle dimensionnel', 'Certification', 'Traçabilité']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Solutions complètes pour l'industrie : de la conception à la livraison
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400 text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

