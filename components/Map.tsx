'use client'

export default function Map() {
  const latitude = 36.943532
  const longitude = 10.172007
  const address = "Cité Chaher Borj Touil 2081, Ariana, en face de mosquée Cité Chaker"

  // URL Google Maps avec coordonnées exactes
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=fr`
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.5!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYsNTYsMzYuNyJIMTAsMTAsMTkuNyJX!5e0!3m2!1sfr!2stn!4v${Date.now()}!5m2!1sfr!2stn&q=${latitude},${longitude}&hl=fr`

  return (
    <section id="localisation" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Notre Localisation
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-2">
            Cité Chaher Borj Touil 2081, Ariana
          </p>
          <p className="text-gray-400">
            En face de mosquée Cité Chaker
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Carte Google Maps intégrée */}
          <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Localisation Ben Ameur Tournage"
            />
            
            {/* Overlay avec lien direct */}
            <div className="absolute top-4 right-4 z-10">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
              >
                <span>📍</span>
                <span>Ouvrir dans Maps</span>
              </a>
            </div>
          </div>

          {/* Informations supplémentaires */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 transition-all">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-white font-semibold mb-2">Adresse</h3>
              <p className="text-gray-300 text-sm">
                Cité Chaher Borj Touil 2081<br />
                Ariana<br />
                <span className="text-gray-400 text-xs">En face de mosquée Cité Chaker</span>
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 transition-all">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-white font-semibold mb-2">Téléphone</h3>
              <a href="tel:+21698800957" className="text-primary hover:text-primary-light transition-colors">
                +216 98 800 957
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 transition-all">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href="mailto:tourneurtunisi@gmail.com" className="text-primary hover:text-primary-light transition-colors text-sm break-all">
                tourneurtunisi@gmail.com
              </a>
            </div>
          </div>

          {/* Coordonnées GPS */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Coordonnées GPS : {latitude}, {longitude}
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-primary hover:text-primary-light transition-colors text-sm"
            >
              Voir sur Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
