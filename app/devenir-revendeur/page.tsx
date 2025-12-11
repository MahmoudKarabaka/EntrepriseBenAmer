import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevendeurForm from '@/components/RevendeurForm'

export const metadata = {
  title: 'Devenir Revendeur - Ben Ameur Tournage',
  description: 'Rejoignez notre réseau de revendeurs et distribuez nos pièces industrielles de qualité.',
}

export default function DevenirRevendeur() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <div className="pt-24 pb-20">
        <RevendeurForm />
      </div>
      <Footer />
    </main>
  )
}

