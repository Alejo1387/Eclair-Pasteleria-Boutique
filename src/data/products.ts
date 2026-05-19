export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  imageAlt: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'caja-clasica',
    name: 'Caja Clásica',
    description:
      'Selección de seis éclairs de temporada con ganaches de vainilla bourbon y chocolate 70%.',
    price: 850,
    image:
      'https://images.unsplash.com/photo-1621303837374-a86ee30306a1?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Éclairs artesanales en bandeja de porcelana',
  },
  {
    id: 'caja-signature',
    name: 'Caja Signature',
    description:
      'Nueve piezas curadas por el chef: pistache, caramelo salado y frutos rojos macerados.',
    price: 1200,
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Pastelería fina con decoración dorada',
  },
  {
    id: 'caja-grand-cru',
    name: 'Caja Grand Cru',
    description:
      'Doce creaciones de edición limitada con ingredientes de origen único y empaque boutique.',
    price: 1650,
    image:
      'https://images.unsplash.com/photo-1464349095434-e9a21285b5f3?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Tarta elegante con frutos frescos',
  },
]
