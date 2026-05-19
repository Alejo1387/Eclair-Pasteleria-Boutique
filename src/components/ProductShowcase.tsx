import { PRODUCTS } from '../data/products'

interface ProductShowcaseProps {
  onReserveProduct: (productName: string) => void
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(price)
}

export function ProductShowcase({ onReserveProduct }: ProductShowcaseProps) {
  return (
    <section
      id="coleccion"
      className="bg-pearl py-20 md:py-28"
      aria-labelledby="coleccion-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Colección
          </p>
          <h2
            id="coleccion-heading"
            className="mt-3 font-serif text-3xl text-espresso md:text-4xl"
          >
            Cajas de Degustación
          </h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/70">
            Ediciones numeradas elaboradas cada mañana en nuestro atelier. Disponibilidad
            sujeta a temporada.
          </p>
        </header>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream bg-white shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={300}
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-espresso/90 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-pearl">
                    Unidades Limitadas
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl text-espresso">{product.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-espresso/65">
                    {product.description}
                  </p>
                  <p className="mt-4 font-serif text-2xl text-gold">{formatPrice(product.price)}</p>
                  <button
                    type="button"
                    onClick={() => onReserveProduct(product.name)}
                    className="mt-5 w-full rounded-full bg-chocolate px-5 py-3 text-sm font-medium tracking-wide text-pearl transition-all duration-300 ease-in-out hover:bg-espresso"
                  >
                    Reservar esta Caja
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
