'use client'

import { useState } from 'react'

export default function RevendeurForm() {
  const [formData, setFormData] = useState({
    entreprise: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    ville: '',
    codePostal: '',
    secteur: '',
    experience: '',
    volume: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous pouvez ajouter l'envoi du formulaire
    alert('Votre demande a été envoyée avec succès ! Nous vous contacterons sous peu.')
    setFormData({
      entreprise: '',
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      adresse: '',
      ville: '',
      codePostal: '',
      secteur: '',
      experience: '',
      volume: '',
      message: ''
    })
  }

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Devenir Revendeur
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Rejoignez notre réseau de revendeurs et bénéficiez de conditions avantageuses
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informations entreprise */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Informations sur l'Entreprise</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Nom de l'entreprise *</label>
                <input
                  type="text"
                  required
                  value={formData.entreprise}
                  onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Secteur d'activité *</label>
                <select
                  required
                  value={formData.secteur}
                  onChange={(e) => setFormData({ ...formData, secteur: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Sélectionnez un secteur</option>
                  <option value="btp">BTP</option>
                  <option value="miniere">Industrie Minière</option>
                  <option value="transport">Transport</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>
          </div>

          {/* Informations contact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Informations de Contact</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Nom *</label>
                <input
                  type="text"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Prénom *</label>
                <input
                  type="text"
                  required
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Votre prénom"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Téléphone *</label>
                <input
                  type="tel"
                  required
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="+216 XX XXX XXX"
                />
              </div>
            </div>
          </div>

          {/* Adresse */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Adresse</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Adresse</label>
                <input
                  type="text"
                  value={formData.adresse}
                  onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Rue, numéro"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Ville</label>
                  <input
                    type="text"
                    value={formData.ville}
                    onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Ville"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Code Postal</label>
                  <input
                    type="text"
                    value={formData.codePostal}
                    onChange={(e) => setFormData({ ...formData, codePostal: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Code postal"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Informations complémentaires */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Informations Complémentaires</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Expérience dans le secteur</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Sélectionnez</option>
                  <option value="moins-1">Moins de 1 an</option>
                  <option value="1-3">1 à 3 ans</option>
                  <option value="3-5">3 à 5 ans</option>
                  <option value="plus-5">Plus de 5 ans</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Volume d'achat estimé (par mois)</label>
                <select
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Sélectionnez</option>
                  <option value="moins-10k">Moins de 10 000 DT</option>
                  <option value="10k-50k">10 000 à 50 000 DT</option>
                  <option value="50k-100k">50 000 à 100 000 DT</option>
                  <option value="plus-100k">Plus de 100 000 DT</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-300 mb-2">Message (optionnel)</label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Dites-nous en plus sur votre projet..."
              />
            </div>
          </div>

          {/* Bouton submit */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-all transform hover:scale-105 shadow-lg shadow-primary/30 text-lg"
            >
              Soumettre ma Candidature
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

