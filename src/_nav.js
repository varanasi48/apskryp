import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilAccountLogout,
  cilPeople,
  cilUserFollow
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  
  
  /*{
    component: CNavTitle,
    name: 'Investors',
  },*/
  {
    component: CNavGroup,
    name: 'Users',
    to: '/base',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Branch Managers',
        to: '/base/accordion',
      },
      
      {
        component: CNavItem,
        name: 'Investments',
        to: '/base/cards',
      },
      
      
     
      {
        component: CNavItem,
        name: 'Payments',
        to: '/base/tables',
      },
      
    ],
  },
  
  {
    component: CNavGroup,
    name: 'Registrations',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Register',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Approve',
        to: '/forms/select',
      },
      
    ],
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/logout',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  },

 
 
]

export default _nav
