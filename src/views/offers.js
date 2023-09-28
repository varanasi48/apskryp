import { CButton, CCard, CCardBody, CCardHeader, CCardLink,CFormCheck,CFormInput, CFormLabel} from '@coreui/react'
import React from 'react'


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