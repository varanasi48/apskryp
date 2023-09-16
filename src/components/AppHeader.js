import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

//import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
//import { logo } from 'src/logo.svg'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

  return (
    <CHeader position="sticky" className="mb-4" style={{backgroundColor:"blueviolet"}}>
      <CContainer >
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
        <strong>LBF Kryptoz</strong>
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto text-white">
          
          <CNavItem >
           {userData.usertype==='investor' ? <CNavLink to="/dashboardi" component={NavLink}> </CNavLink> : <CNavLink to="/dashboard" component={NavLink}></CNavLink>} 
              Dashboard
            
          </CNavItem>
         
        </CHeaderNav>
		
        <CHeaderNav className='text-white'>
          <CNavItem>
            <strong>{userData.userid}</strong>
          </CNavItem>
        </CHeaderNav>
		
        <CHeaderNav className='text-white'>
          <CNavItem>
            <CNavLink href="#" className='text-white'>
              <CIcon icon={cilEnvelopeOpen} size="lg" />
              
            </CNavLink>
           
          </CNavItem>
          <CNavItem>
          <CNavLink href="/#/profile" className='text-white'>
              
              <strong >{userData.name}</strong>
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
       
      </CContainer>
      
      
    </CHeader>
  )
}

export default AppHeader
