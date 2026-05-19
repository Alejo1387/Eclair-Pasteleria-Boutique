import { useEffect, useState } from 'react'

interface NavbarProps {
  onReserveClick: () => void
}

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Colección', href: '#coleccion' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' },
] as const

export function Navbar({ onReserveClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'border-b border-cream/60 bg-pearl/80 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Principal"
      >
        <a
          href="#inicio"
          className="flex items-center gap-3 transition-opacity duration-300 ease-in-out hover:opacity-80"
          onClick={closeMenu}
        >
          <img
            src="/logo-eclair.png"
            alt="Éclair • Pastelería Boutique"
            className="h-10 w-auto object-contain md:h-12"
            width={120}
            height={48}
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-espresso/80 transition-colors duration-300 ease-in-out hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReserveClick}
            className="hidden rounded-full bg-chocolate px-5 py-2.5 text-sm font-medium tracking-wide text-pearl transition-all duration-300 ease-in-out hover:bg-espresso md:inline-block"
          >
            Reservar Caja
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-colors duration-300 ease-in-out hover:border-gold hover:text-gold md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menú</span>
            {isMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-cream/60 bg-pearl/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'visible max-h-96 opacity-100' : 'invisible max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-base text-espresso/80 transition-colors duration-300 ease-in-out hover:bg-cream hover:text-gold"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <button
              type="button"
              onClick={() => {
                closeMenu()
                onReserveClick()
              }}
              className="w-full rounded-full bg-chocolate px-5 py-3 text-sm font-medium tracking-wide text-pearl transition-all duration-300 ease-in-out hover:bg-espresso"
            >
              Reservar Caja
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
