import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilMobile, cilUser } from '@coreui/icons'

const Register = () => {
  // Retrieve data from localStorage
  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

  const [formData, setFormData] = useState({
    name: '',
    phoneno: '',
    email: '',
    password: '',
    re_password: '',
    usertype: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    // Access form data using event.target
    const updatedFormData = {
      name: event.target.firstName.value,
      phoneno: event.target.lastName.value,
      email: event.target.email.value,
      password: event.target.password.value,
      re_password: event.target.re_password.value,
      usertype: event.target.usertype.value,
    }
console.log(updatedFormData);
    // Update state with the new form data
    setFormData(updatedFormData)
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Full Name" autoComplete="full name" name="name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilMobile} />
                    </CInputGroupText>
                    <CFormInput placeholder="Phone number" autoComplete="mobile" name="phoneno" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" name="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      name="password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      name="re_password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    {userData && userData.usertype === 'admin' && (
                      <CFormSelect
                        size="lg"
                        className="mb-3"
                        aria-label="Large select example"
                        name="usertype"
                      >
                        <option>Select User Type</option>
                        <option value="investor">Investor</option>
                        <option value="branch_manager">Branch manager</option>
                      </CFormSelect>
                    )}
                    {userData && userData.usertype === 'branch_manager' && (
                      <CFormSelect
                        size="lg"
                        className="mb-3"
                        aria-label="Large select example"
                        name="usertype"
                      >
                        <option>Select User Type</option>
                        <option value="investor">Investor</option>
                      </CFormSelect>
                    )}
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" onClick={handleSubmit}>
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
