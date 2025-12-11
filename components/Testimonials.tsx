const testimonials = [
  {
    name: 'Ahmed Ben Salah',
    company: 'Entreprise de BTP',
    text: 'Service exceptionnel ! Ils ont réparé les pièces de notre Caterpillar en un temps record. Qualité irréprochable.',
    rating: 5
  },
  {
    name: 'Fatma Khelifi',
    company: 'Industrie Minière',
    text: 'Nous faisons appel à Ben Ameur Tournage depuis 5 ans. Toujours satisfaits de leur travail et de leur réactivité.',
    rating: 5
  },
  {
    name: 'Mohamed Trabelsi',
    company: 'Transport Lourd',
    text: 'Pièces reconstruites avec une précision remarquable. Nos engins fonctionnent comme neufs. Je recommande vivement !',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ce que nos clients disent de nous
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div>
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

