import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // PYT-27
  {
    id: 'pyt_27_categorias',
    title: 'Categorías',
    type: 'collapsible',
    proyecto: 'PYT-27',
    autenticado: false,
    // role: ['Admin'], //? To hide collapsible based on user role
    icon: 'home',
    children: [
      {
        id: 'analytics',
        title: 'Sub categoría 1',
        type: 'item',
        icon: 'circle',
        url: ' '
      },
      {
        // If role is not assigned will be display to all
        id: 'ecommerce',
        title: 'Sub categoría 2',
        type: 'item',
        icon: 'circle',
        url: ' '
      }
    ]
  },
  {
    id: 'pyt_27_promociones',
    title: 'Promociones',
    type: 'item',
    icon: 'tag',
    url: 'apps/e-commerce/shop',
    proyecto: 'PYT-27',
    autenticado: false
  },
  {
    id: 'pyt_27_descuentos',
    title: 'Descuentos',
    type: 'item',
    icon: 'percent',
    url: '#',
    proyecto: 'PYT-27',
    autenticado: false
  },

  //PYT-4
  {
    id: 'secciones',
    type: 'section',
    title: 'Opciones',
    proyecto: 'PYT-4',
    autenticado: true
  },
  {
    id: 'pyt_4_tablero',
    title: 'Tablero',
    type: 'item',
    icon: 'home',
    url: 'pyt4/pyt_4_tablero',
    proyecto: 'PYT-4',
    autenticado: true
  },
  {
    id: 'pyt_4_usuarios',
    title: 'Usuarios',
    type: 'item',
    icon: 'users',
    url: 'pyt4/pyt_4_usuarios',
    proyecto: 'PYT-4',
    role: ['Director','Gerente','Logistica','Chofer'],
    autenticado: true
  },

  {
    id: 'secciones',
    type: 'section',
    title: 'Opciones',
    proyecto: 'PYT-21',
    autenticado: true
  },
  {
    id: 'pty_21_tablero',
    title: 'Tablero',
    type: 'item',
    icon: 'home',
    url: 'pyt21/pyt_21_tablero',
    proyecto: 'PYT-21',
    autenticado: true
  },
  {
    id: 'pty_21_contratos',
    title: 'Contratos',
    type: 'item',
    icon: 'trending-up',
    url: 'pyt21/contratos',
    proyecto: 'PYT-21',
    autenticado: true
  },
  {
    id: 'pty_21_tablero',
    title: 'Ingresos',
    type: 'item',
    icon: 'dollar-sign',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21',
    autenticado: true
  },
  {
    id: 'pty_21_tablero',
    title: 'Retiros',
    type: 'item',
    icon: 'check',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21',
    autenticado: true
  },
  {
    id: 'pty_21_tablero',
    title: 'Depositos',
    type: 'item',
    icon: 'credit-card',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21',
    role: ['Administrador'],
    autenticado: true
  },
  {
    id: 'pty_21_tablero',
    title: 'Formas de pago',
    type: 'item',
    icon: 'star',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21',
    role: ['Administrador'],
    autenticado: true
  },
  {
    id: 'pty_21_tablero',
    title: 'Duración y Riesgo',
    type: 'item',
    icon: 'alert-triangle',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21',
    role: ['Administrador'],
    autenticado: true
  },
  {
    id: 'pty_21_tablero',
    title: 'Usuarios',
    type: 'item',
    icon: 'users',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21',
    role: ['Administrador'],
    autenticado: true
  },
  {
    id: 'pty_21_tablero',
    title: 'Vendedores',
    type: 'item',
    icon: 'user-plus',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21',
    role: ['Administrador'],
    autenticado: true
  }
];
