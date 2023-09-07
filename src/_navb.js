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
    
    
const _navb = [
  

  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboardb',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      
    },
  },

  {
    component: CNavItem,
    name: 'Register Investor',
    to: '/register',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
  },
  
  
  /*{
    component: CNavTitle,
    name: 'Investors',
  },*/
  {
    
    component: CNavGroup,
    name: 'Investor Information',
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
        name: 'Add Investment',
        to: '/invest',
      },
      
      
     
      {
        component: CNavItem,
        name: 'Investor Revenue',
        to: '/revenue',
      },
      {
        component: CNavItem,
        name: 'Investor Uploads',
        to: '/Upload',
      },
      {
        component: CNavItem,
        name: 'Investor Nominee',
        to: '/revenue',
      },
      {
        component: CNavItem,
        name: ' Investor Bank details',
        to: '/bank',
      },
      
      
    ],
  },

  {
    component: CNavGroup,
    name: 'Self Information',
    to: '/logout',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
    items:[
      {
        component: CNavItem,
        name: 'Investment',
        to: '/Upload',
      },
      {
        component: CNavItem,
        name: 'Revenue',
        to: '/Upload',
      },
      {
        component: CNavItem,
        name: 'Invest',
        to: '/Upload',
      },

    ]

  },

  
  
  
  {
    component: CNavItem,
    name: 'Logout',
    to: '/logout',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  },

 
 
]


  export default _navb


