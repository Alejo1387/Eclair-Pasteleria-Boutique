const STEPS = [
  {
    title: 'Selección de Origen',
    description:
      'Ingredientes de proveedores certificados: vainilla de Madagascar, chocolate bean-to-bar y frutas de cosecha diaria.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <path
          d="M12 3c-4 2-7 5-7 9a7 7 0 1014 0c0-4-3-7-7-9z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 8v4l2.5 2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Elaboración Artesanal',
    description:
      'Masa choux horneada al momento, rellenos infusionados durante 12 horas y glaseados aplicados a mano pieza por pieza.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <path
          d="M4 18h16M6 14l3-8h6l3 8M9 6V4m6 2V4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Presentación Boutique',
    description:
      'Empaque en seda y cartón texturizado, nota del chef y entrega en frío para preservar textura y brillo.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <rect
          x="5"
          y="8"
          width="14"
          height="12"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 8V6a3 3 0 116 0v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="bg-cream py-20 md:py-28"
      aria-labelledby="experiencia-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Experiencia
          </p>
          <h2
            id="experiencia-heading"
            className="mt-3 font-serif text-3xl text-espresso md:text-4xl"
          >
            Proceso Artesanal
          </h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/70">
            Cada caja recorre un ritual de tres etapas donde el tiempo, la temperatura y el
            detalle definen el resultado final.
          </p>
        </header>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, index) => (
            <li key={step.title} className="text-center md:text-left">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-pearl text-gold transition-colors duration-300 ease-in-out hover:border-gold hover:bg-gold/5 md:mx-0">
                {step.icon}
              </div>
              <p className="mt-5 font-serif text-lg text-gold">0{index + 1}</p>
              <h3 className="mt-2 font-serif text-xl text-espresso">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-espresso/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
