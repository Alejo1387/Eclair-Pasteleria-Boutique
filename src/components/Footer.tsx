const HOURS = [
  { day: 'Martes – Viernes', time: '9:00 – 19:00' },
  { day: 'Sábado', time: '10:00 – 18:00' },
  { day: 'Domingo & Lunes', time: 'Cerrado' },
] as const

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13v-3c0-.6.4-1 1-1z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 10.5c.4 1.2 1.3 2.1 2.5 2.5l1-1.5c.2-.3.6-.4.9-.2.6.3 1.3.5 2 .5.3 0 .5.2.5.5v1.5c0 .3-.2.5-.5.5-3.3 0-6-2.7-6-6 0-.3.2-.5.5-.5H11c.3 0 .5.2.5.5 0 .7.2 1.4.5 2 .1.3 0 .7-.3.9l-1.2 1.1z"
          fill="currentColor"
        />
      </svg>
    ),
  },
] as const

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-cream bg-espresso text-pearl">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <img
              src="/logo-eclair.png"
              alt="Éclair"
              className="h-12 w-auto brightness-0 invert"
              width={120}
              height={48}
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-pearl/70">
              Atelier de pastelería fina en el corazón de la ciudad. Cada éclair, una pieza de
              colección.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Horarios</h2>
            <ul className="mt-4 space-y-2">
              {HOURS.map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between gap-4 text-sm text-pearl/80 sm:max-w-xs"
                >
                  <span>{item.day}</span>
                  <span className="text-pearl">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:text-right">
            <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Síguenos
            </h2>
            <ul className="mt-4 flex gap-3 md:justify-end">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-pearl/20 text-pearl transition-all duration-300 ease-in-out hover:border-gold hover:text-gold"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-pearl/60">
              Av. Reforma 245, Col. Centro
              <br />
              Ciudad de México
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-pearl/10 pt-8 text-center text-xs text-pearl/50 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Éclair • Pastelería Boutique. Todos los derechos reservados.</p>
          <p>
            Diseño & desarrollo —{' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition-colors duration-300 ease-in-out hover:text-pearl"
            >
              Portafolio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
