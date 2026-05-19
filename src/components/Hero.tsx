import heroImage from '../assets/hero.png'

interface HeroProps {
  onReserveClick: () => void
}

export function Hero({ onReserveClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-pearl pt-28 pb-16 md:pt-36 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl md:h-96 md:w-96"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Pastelería Boutique
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-4xl leading-tight text-espresso md:text-5xl lg:text-6xl"
          >
            El arte del éclair,
            <span className="mt-2 block italic text-espresso/80">elevado a ritual</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-espresso/70 md:mx-0 md:text-lg">
            Cajas de degustación curadas a mano con ingredientes de origen selecto. Una
            experiencia sensorial diseñada para momentos que merecen pausa.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <button
              type="button"
              onClick={onReserveClick}
              className="w-full rounded-full bg-chocolate px-8 py-3.5 text-sm font-medium tracking-wide text-pearl transition-all duration-300 ease-in-out hover:bg-espresso sm:w-auto"
            >
              Reservar mi Caja
            </button>
            <a
              href="#coleccion"
              className="w-full rounded-full border border-espresso/20 px-8 py-3.5 text-sm font-medium tracking-wide text-espresso transition-all duration-300 ease-in-out hover:border-gold hover:text-gold sm:w-auto"
            >
              Ver Colección
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-md md:max-w-none">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/20 via-cream to-transparent" />
            <img
              src={heroImage}
              alt="Éclairs artesanales de Éclair Pastelería Boutique"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-xl transition-transform duration-300 ease-in-out hover:scale-[1.02]"
              width={640}
              height={800}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
