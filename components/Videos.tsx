const videos = [
  {
    src: '/videos/atelier.mp4',
    title: "Atelier - Travaux en cours",
    poster: '/images/activities/soudure2.jpg',
    description: 'Séquence montrant les opérations en atelier (tournage, soudure, réglages).',
  },
  {
    src: '/videos/download.mp4',
    title: "Présentation des services",
    poster: '/images/activities/engin1.jpg',
    description: 'Aperçu global des équipements et des pièces réalisées pour les grands engins.',
  },
]

export default function Videos() {
  return (
    <section id="videos" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Vidéos de l&apos;atelier</h2>
          <p className="text-lg text-gray-300">Découvrez nos équipes et nos machines en action.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.src}
              className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 bg-black"
            >
              <video
                className="w-full h-full object-cover"
                src={video.src}
                poster={video.poster}
                controls
                preload="metadata"
                playsInline
              >
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">{video.title}</h3>
                <p className="text-gray-300 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


