'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useEffect } from 'react'

const categories = [
  { id: 'all', name: 'Tous', icon: '📷' },
  { id: 'tournage', name: 'Tournage', icon: '⚙️' },
  { id: 'fraisage', name: 'Fraisage', icon: '🔧' },
  { id: 'reparation', name: 'Réparation', icon: '🔨' },
  { id: 'soudure', name: 'Soudure', icon: '🔥' },
  { id: 'engins', name: 'Grands Engins', icon: '🚛' },
]

const galleryItems = [
  { id: 1, category: 'tournage', image: '/images/activities/tournage1.jpg', title: 'Tournage CNC' },
  { id: 2, category: 'tournage', image: '/images/activities/tournage2.jpg', title: 'Pièce usinée' },
  { id: 3, category: 'fraisage', image: '/images/activities/fraisage1.jpg', title: 'Fraisage 5 axes' },
  { id: 4, category: 'fraisage', image: '/images/activities/fraisage2.jpg', title: 'Pièce complexe' },
  { id: 5, category: 'reparation', image: '/images/activities/reparation1.jpg', title: 'Réparation Caterpillar' },
  { id: 6, category: 'reparation', image: '/images/activities/reparation2.jpg', title: 'Pièce reconstruite' },
  { id: 7, category: 'engins', image: '/images/activities/engin1.jpg', title: 'Engin Caterpillar' },
  { id: 8, category: 'engins', image: '/images/activities/engin2.jpg', title: 'Grand engin' },
  { id: 9, category: 'tournage', image: '/images/activities/tournage3.jpg', title: 'Tournage précision' },
  { id: 10, category: 'soudure', image: '/images/activities/soudure1.png', title: 'Soudure structurale' },
  { id: 11, category: 'soudure', image: '/images/activities/soudure2.jpg', title: 'Assemblage métal' },
  { id: 12, category: 'soudure', image: '/images/activities/soudure3.jpg', title: 'Poste de soudure' },
  { id: 13, category: 'reparation', image: '/images/activities/reparation3.jpg', title: 'Atelier réparation' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  // Carrousel automatique pour la vue "Tous"
  useEffect(() => {
    if (activeFilter !== 'all' || galleryItems.length === 0) return
    const id = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % galleryItems.length)
    }, 3500)
    return () => clearInterval(id)
  }, [activeFilter])

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

        {/* Slider défilant sous le filtre "Tous" */}
        {activeFilter === 'all' && galleryItems.length > 0 && (
          <div className="relative mb-12 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/20 h-[260px] md:h-[360px] bg-dark">
            <Image
              src={galleryItems[carouselIndex].image}
              alt={galleryItems[carouselIndex].title}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <div>
                <p className="text-sm text-primary font-semibold uppercase">
                  {categories.find(c => c.id === galleryItems[carouselIndex].category)?.name}
                </p>
                <h3 className="text-xl font-bold">{galleryItems[carouselIndex].title}</h3>
              </div>
              <div className="flex gap-2">
                {galleryItems.slice(0, 6).map((item, idx) => (
                  <button
                    key={item.id}
                    aria-label={`Aller à ${item.title}`}
                    className={`h-2 w-2 rounded-full transition-all ${carouselIndex === idx ? 'bg-primary w-4' : 'bg-white/50'}`}
                    onClick={() => setCarouselIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

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

