import { CButton, CCard, CCardBody, CCardHeader, CCardLink,CFormCheck,CFormInput, CFormLabel} from '@coreui/react'
import React from 'react'


const API_URL = process.env.REACT_APP_API_URL
  // Retrieve data from localStorage
  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null


const Offer=()=>{

  return(
    <CCard>
      <CCardHeader>
        <strong>Offer</strong>
      </CCardHeader>
      <CCardBody>
    <CFormInput  placeholder='Enter Offer Name'/>
    <CFormInput  placeholder='Enter Offer Amount'/>
    <CFormLabel>All Users</CFormLabel>
    <CFormCheck />
    <CFormLabel>Selected</CFormLabel>
    <CFormCheck/>

      </CCardBody>
      <CCardBody>
        <CButton>Submit</CButton>
      </CCardBody>
    </CCard>
  )

}
export default Offer