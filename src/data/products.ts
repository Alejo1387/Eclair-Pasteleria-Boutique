import cajaClasicaImg from '../assets/products/caja-clasica.png'
import cajaGrandCruImg from '../assets/products/caja-grand-cru.jpg'
import cajaSignatureImg from '../assets/products/caja-signature.jpg'

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
    image: cajaClasicaImg,
    imageAlt: 'Éclairs artesanales en bandeja de porcelana',
  },
  {
    id: 'caja-signature',
    name: 'Caja Signature',
    description:
      'Nueve piezas curadas por el chef: pistache, caramelo salado y frutos rojos macerados.',
    price: 1200,
    image: cajaSignatureImg,
    imageAlt: 'Pastelería fina con decoración dorada',
  },
  {
    id: 'caja-grand-cru',
    name: 'Caja Grand Cru',
    description:
      'Doce creaciones de edición limitada con ingredientes de origen único y empaque boutique.',
    price: 1650,
    image: cajaGrandCruImg,
    imageAlt: 'Tarta elegante con frutos frescos',
  },
]
