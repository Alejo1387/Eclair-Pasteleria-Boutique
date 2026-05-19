export interface OrderFormData {
  nombre: string
  email: string
  telefono: string
  producto: string
  fecha: string
}

export const INITIAL_ORDER_FORM: OrderFormData = {
  nombre: '',
  email: '',
  telefono: '',
  producto: '',
  fecha: '',
}
