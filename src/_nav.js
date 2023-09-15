import React, { useState } from 'react'
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
  cilUserFollow,
  cilCheckCircle
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import axios from 'axios'
const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null
   

   

const _nav = [
  

  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
   
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
        name: 'User Info',
        to: '/base/accordion',
        
      },
      {
        
        component: CNavItem,
        name: 'User Revenue',
        to: '/revenue',
        
      },
      
      {
        component: CNavItem,
        name: 'Branch Managers',
        to: '/base/breadcrumbs',
      },

      
      {
        component: CNavItem,
        name: 'Investors',
        to: '/base/cards',
      },
      
      {
        component: CNavItem,
        name: 'Invest',
        to: '/invest',
      },
      
     
      {
        component: CNavItem,
        name: 'Payments',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Uploads',
        to: '/Upload',
      },
      {
        component: CNavItem,
        name: 'verify',
        to: '/verify',
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
        to: '/register',
      },
      
      
      
    ],
  },
  {
    component: CNavItem,
    name: 'Investment Approval',
    icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
    to: '/forms/select',
  },
  {
    component: CNavItem,
    name: 'Bank Approval',
    icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
    to: '/forms/range',
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/logout',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  },

 
 
]



 
  

  export default _nav
  


