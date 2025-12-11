import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 relative overflow-hidden">
      {/* Effet de fond */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 102, 0, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255, 136, 0, 0.3) 0%, transparent 50%)`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rejoignez notre Réseau de Revendeurs
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Devenez partenaire et distribuez nos pièces industrielles de qualité. 
            Bénéficiez de conditions avantageuses et d'un support technique dédié.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devenir-revendeur"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Devenir Revendeur
            </Link>
            <Link
              href="#contact"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-light transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

