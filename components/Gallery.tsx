'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = [
  { id: 'all', name: 'Tous', icon: '📷' },
  { id: 'tournage', name: 'Tournage', icon: '⚙️' },
  { id: 'fraisage', name: 'Fraisage', icon: '🔧' },
  { id: 'reparation', name: 'Réparation', icon: '🔨' },
  { id: 'engins', name: 'Grands Engins', icon: '🚛' },
]

const galleryItems = [
  { id: 1, category: 'tournage', image: '/images/activities/tournage-1.jpg', title: 'Tournage CNC' },
  { id: 2, category: 'tournage', image: '/images/activities/tournage-2.jpg', title: 'Pièce usinée' },
  { id: 3, category: 'fraisage', image: '/images/activities/fraisage-1.jpg', title: 'Fraisage 5 axes' },
  { id: 4, category: 'fraisage', image: '/images/activities/fraisage-2.jpg', title: 'Pièce complexe' },
  { id: 5, category: 'reparation', image: '/images/activities/reparation-1.jpg', title: 'Réparation Caterpillar' },
  { id: 6, category: 'reparation', image: '/images/activities/reparation-2.jpg', title: 'Pièce reconstruite' },
  { id: 7, category: 'engins', image: '/images/activities/engin-1.jpg', title: 'Engin Caterpillar' },
  { id: 8, category: 'engins', image: '/images/activities/engin-2.jpg', title: 'Grand engin' },
  { id: 9, category: 'tournage', image: '/images/activities/tournage-3.jpg', title: 'Tournage précision' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="galerie" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galerie de Réalisations
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez nos réalisations et notre savoir-faire
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeFilter === cat.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-primary/30'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grille d'images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const placeholder = target.parentElement?.querySelector('.placeholder') as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="placeholder hidden absolute inset-0 bg-gradient-to-br from-primary/30 to-dark-secondary items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">{categories.find(c => c.id === item.category)?.icon}</div>
                  <p className="text-white text-sm">{item.title}</p>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-primary text-sm">{categories.find(c => c.id === item.category)?.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Image agrandie"
              width={1200}
              height={900}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}

