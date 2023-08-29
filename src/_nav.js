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
  cilUserFollow
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

export const _nav_i = [
  

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
        name: 'Investments',
        to: '/base/cards',
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
  


