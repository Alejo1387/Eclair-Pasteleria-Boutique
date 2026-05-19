import { useEffect, useState, type FormEvent } from 'react'
import { PRODUCTS } from '../data/products'
import { INITIAL_ORDER_FORM, type OrderFormData } from '../types/order'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  selectedProduct?: string
}

export function OrderModal({ isOpen, onClose, selectedProduct = '' }: OrderModalProps) {
  const [formData, setFormData] = useState<OrderFormData>(INITIAL_ORDER_FORM)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const updateField = (field: keyof OrderFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setFormData(INITIAL_ORDER_FORM)
    setIsSubmitted(false)
    onClose()
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end justify-center p-4 transition-all duration-300 ease-in-out sm:items-center ${
        isOpen ? 'visible' : 'invisible'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-espresso/50 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Cerrar modal"
        onClick={handleClose}
        tabIndex={isOpen ? 0 : -1}
      />

      <div
        className={`relative w-full max-w-lg rounded-2xl bg-pearl p-6 shadow-2xl transition-all duration-300 ease-in-out sm:p-8 ${
          isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-espresso/60 transition-colors duration-300 ease-in-out hover:bg-cream hover:text-espresso"
          aria-label="Cerrar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Solicitud recibida
            </p>
            <h2 id="modal-title" className="mt-3 font-serif text-3xl text-espresso">
              Gracias, {formData.nombre.split(' ')[0]}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-espresso/70">
              Confirmaremos tu reserva de{' '}
              <strong>{formData.producto || selectedProduct}</strong> para el{' '}
              {formData.fecha} al correo {formData.email}.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-8 rounded-full bg-chocolate px-8 py-3 text-sm font-medium tracking-wide text-pearl transition-all duration-300 ease-in-out hover:bg-espresso"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Reserva</p>
            <h2 id="modal-title" className="mt-2 font-serif text-3xl text-espresso">
              Reservar Caja
            </h2>
            <p className="mt-2 text-sm text-espresso/65">
              Completa el formulario y te contactaremos para confirmar disponibilidad.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="nombre" className="mb-1.5 block text-xs font-medium text-espresso/80">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.nombre}
                  onChange={(e) => updateField('nombre', e.target.value)}
                  className="w-full rounded-xl border border-cream bg-white px-4 py-3 text-sm text-espresso outline-none transition-all duration-300 ease-in-out focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-espresso/80">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full rounded-xl border border-cream bg-white px-4 py-3 text-sm text-espresso outline-none transition-all duration-300 ease-in-out focus:border-gold focus:ring-2 focus:ring-gold/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefono"
                    className="mb-1.5 block text-xs font-medium text-espresso/80"
                  >
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.telefono}
                    onChange={(e) => updateField('telefono', e.target.value)}
                    className="w-full rounded-xl border border-cream bg-white px-4 py-3 text-sm text-espresso outline-none transition-all duration-300 ease-in-out focus:border-gold focus:ring-2 focus:ring-gold/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="producto"
                  className="mb-1.5 block text-xs font-medium text-espresso/80"
                >
                  Producto
                </label>
                <select
                  id="producto"
                  name="producto"
                  required
                  value={formData.producto || selectedProduct}
                  onChange={(e) => updateField('producto', e.target.value)}
                  className="w-full rounded-xl border border-cream bg-white px-4 py-3 text-sm text-espresso outline-none transition-all duration-300 ease-in-out focus:border-gold focus:ring-2 focus:ring-gold/20"
                >
                  <option value="" disabled>
                    Selecciona una caja
                  </option>
                  {PRODUCTS.map((product) => (
                    <option key={product.id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="fecha" className="mb-1.5 block text-xs font-medium text-espresso/80">
                  Fecha de recogida
                </label>
                <input
                  id="fecha"
                  name="fecha"
                  type="date"
                  required
                  value={formData.fecha}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => updateField('fecha', e.target.value)}
                  className="w-full rounded-xl border border-cream bg-white px-4 py-3 text-sm text-espresso outline-none transition-all duration-300 ease-in-out focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-chocolate px-5 py-3.5 text-sm font-medium tracking-wide text-pearl transition-all duration-300 ease-in-out hover:bg-espresso"
              >
                Enviar Reserva
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
