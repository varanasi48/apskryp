import React, { useState } from 'react'
import {
  CAlert,
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
import axios from 'axios'
import { cilLockLocked, cilMobile, cilUser } from '@coreui/icons'

const Register = () => {
  const API_URL = process.env.REACT_APP_API_URL
  // Retrieve data from localStorage
  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phoneno: '',
    email: '',
    password: '',
    re_password: '',
    usertype: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log({ name, value })
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    for (const key in formData) {
      if (
        formData.hasOwnProperty(key) &&
        typeof formData[key] === 'string' &&
        formData[key].trim() === ''
      ) {
        setError('Please fill all the fields')
        return false
      }
    }
    if (formData.password != formData.re_password) {
      setError("Passwords don't match")
      return false
    }
	setError("");
    try {
      // Send data to the register API with JWT token in header
      await axios.post(`${API_URL}/register`, formData, {
        headers: {
          Authorization: `Bearer ${userData.token}}`,
        },
      })
      console.log(`Bearer ${userData.token}}`)
      setMessage('Registration successful for ' + formData.name)
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              {message && <CAlert color="success">{message}</CAlert>}
              {error && <CAlert color="danger">{error}</CAlert>}
              <CCardBody className="p-4">
                <CForm method="post">
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Full Name"
                      autoComplete="full name"
                      name="name"
                      onChange={handleInputChange}
                      value={formData.name}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilMobile} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Phone number"
                      autoComplete="mobile"
                      name="phoneno"
                      onChange={handleInputChange}
                      value={formData.phoneno}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      name="email"
                      onChange={handleInputChange}
                      value={formData.email}
                    />
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
                      onChange={handleInputChange}
                      value={formData.password}
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
                      onChange={handleInputChange}
                      value={formData.re_password}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    {userData && userData.usertype === 'admin' && (
                      <CFormSelect
                        size="lg"
                        className="mb-3"
                        aria-label="Large select example"
                        name="usertype"
                        onChange={handleInputChange}
                      >
                        <option value="">Select User Type</option>
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
                        onChange={handleInputChange}
                      >
                        <option value="">Select User Type</option>
                        <option value="investor">Investor</option>
                      </CFormSelect>
                    )}
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton
                      color="primary"
                      className="px-4"
                      type="submit"
                      onSubmit={handleSubmit}
                      onClick={handleSubmit}
                    >
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
