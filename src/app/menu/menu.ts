import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  {
    id: 'secciones',
    type: 'section',
    title: 'Opciones',
    translate: 'MENU.APPS.SECTION'
  },
  {
    id: 'pty_4_tablero',
    title: 'Tablero',
    type: 'item',
    icon: 'home',
    url: 'pyt4/tablero',
    proyecto: 'PYT-4'
  },
  {
    id: 'pty_21_tablero',
    title: 'Tablero',
    type: 'item',
    icon: 'home',
    url: 'pyt21/tablero',
    proyecto: 'PYT-21'
  },
  {
    id: 'pty_21_contratos',
    title: 'Contratos',
    type: 'item',
    icon: 'trending-up',
    url: 'pyt21/contratos',
    proyecto: 'PYT-21'
  },
  {
    id: 'pty_21_tablero',
    title: 'Ingresos',
    type: 'item',
    icon: 'dollar-sign',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21'
  },
  {
    id: 'pty_21_tablero',
    title: 'Retiros',
    type: 'item',
    icon: 'check',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21'
  },
  {
    id: 'pty_21_tablero',
    title: 'Depositos',
    type: 'item',
    icon: 'credit-card',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21',
    role: ['Administrador']
  },
  {
    id: 'pty_21_tablero',
    title: 'Formas de pago',
    type: 'item',
    icon: 'star',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21',
    role: ['Administrador']
  },
  {
    id: 'pty_21_tablero',
    title: 'Duración y Riesgo',
    type: 'item',
    icon: 'alert-triangle',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21',
    role: ['Administrador']
  },
  {
    id: 'pty_21_tablero',
    title: 'Usuarios',
    type: 'item',
    icon: 'users',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21',
    role: ['Administrador']
  },
  {
    id: 'pty_21_tablero',
    title: 'Vendedores',
    type: 'item',
    icon: 'user-plus',
    url: 'pyt21tablero/tablero',
    proyecto: 'PYT-21',
    role: ['Administrador']
  }
];
