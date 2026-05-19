import { useCallback, useState } from 'react'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { OrderModal } from './components/OrderModal'
import { ProductShowcase } from './components/ProductShowcase'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')

  const openModal = useCallback((product = '') => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setSelectedProduct('')
  }, [])

  return (
    <>
      <Navbar onReserveClick={() => openModal()} />
      <main>
        <Hero onReserveClick={() => openModal()} />
        <ProductShowcase onReserveProduct={openModal} />
        <ExperienceSection />
      </main>
      <Footer />
      <OrderModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedProduct={selectedProduct}
      />
    </>
  )
}

export default App
