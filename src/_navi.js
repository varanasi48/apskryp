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
import axios from 'axios'
const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null
    
    
const _navi = [
  

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
    name: 'Earnings',
    to: '/base',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      
      
      {
        component: CNavItem,
        name: 'Investor Page',
        to: '/investor',
      },

      {
        component: CNavItem,
        name: 'Invest',
        to: '/invest',
      },
      
      
     
      {
        component: CNavItem,
        name: 'Revenue',
        to: '/revenue',
      },
      {
        component: CNavItem,
        name: 'Uploads',
        to: '/Upload',
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


  export default _navi


