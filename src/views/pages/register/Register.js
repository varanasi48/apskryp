import React, { useEffect, useState } from 'react'
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
import { cilLockLocked, cilMobile, cilMoney, cilUser } from '@coreui/icons'
import { number } from 'prop-types'
import { Navigate } from 'react-router-dom'
const { Date, Math } = require('core-js')


const Register = () => {
  const generateID = () => {
    let num = Math.random() * 9000

    const date = new Date()
    let month = date.getMonth() + 1
	let year = date.getFullYear()
	
    if (month < 10) {
      month = '0' + month
    }

    let id = 'LBF' + parseInt(num) + month + year
    return id
  }
  const API_URL = process.env.REACT_APP_API_URL
  // Retrieve data from localStorage
  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  var ap = ["Select District","Anantapur","Chittoor","East Godavari","Guntur","YSR Kadapa","Krishna","Kurnool","Prakasam","SPS Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","Manyam Dist","Alluri Sitaram Raju District","Anakapalli","Kakinada","Kona Seema","Eluru","NTR District","Bapatla","Palnadu","Nandyal","Sri Satyasai District","Annamayya District","Sri Balaji Dist"];

var tg = ["Select District","Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"];
  
  const [formData, setFormData] = useState({
    name: '',
    phoneno: '',
    email: '',
    password: '',
    re_password: '',
    usertype: '',
    state:'',
    district:'',
    nominee: '',
   
     
   
    //nomineedate:'',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formSubmitted = { ...formData }

	
    if (userData.usertype === 'branch_manager') {
      formSubmitted.usertype = 'investor'
    }
    if (userData.usertype !== 'investor') {
      formSubmitted.status = false
    } 
	formSubmitted.userid = generateID();
  formSubmitted.bank = false;
  //formSubmitted.plan = "Plan-A";
	
  console.log(formSubmitted)
    for (const key in formSubmitted) {
      if (
        formSubmitted.hasOwnProperty(key) &&
        typeof formSubmitted[key] === 'string' &&
        formSubmitted[key].trim() === ''
      ) {
        setError('Please fill all the fields')
        return false
      }
    }
    if (formSubmitted.password !== formData.re_password) {
      setError("Passwords don't match")
      return false
    }
    setError('')

    console.log(formData)
    try {
      // Send data to the register API with JWT token in header
      await axios.post(`${API_URL}/register`, formSubmitted, {
        headers: {
          Authorization: `Bearer ${userData.token}}`,
        },
      })

      setMessage('Registration successful for ' + formSubmitted.userid)

      
     
      
    
        setFormData({
          name: '',
          phoneno: '',
          email: '',
          password: '',
          re_password: '',
          usertype: '',
          state:'',
          district:'',
          nominee: '',
       
          
          
        })
  
       
       
        //nomineedate:'',
      
      console.log(formData)
      
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
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Enter Nominee"
                      autoComplete="nominee"
                      name="nominee"
                      onChange={handleInputChange}
                      value={formData.nominee}
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
                        <option value="admin">Admin</option>
                        <option value="investor">Investor</option>
                        <option value="branch_manager">Branch manager</option>
                      </CFormSelect>
                    )}
                    {userData && userData.usertype === 'branch_manager' && (
                      <input type="hidden" name="usertype" value="investor" />
                    )}
                   
                  </CInputGroup>
                   <CInputGroup className="mb-4">
                    
                    
                      <CFormSelect
                        size="lg"
                        className="mb-3"
                        aria-label="Large select example"
                        name="state"
                        onChange={handleInputChange}
                      >
                        <option value="">Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Telangana">Telangana</option>
                        
                      </CFormSelect>
                   
                   
                   
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    
                    <CFormSelect
                      size="lg"
                      className="mb-3"
                      aria-label="Large select example"
                      name="district"
                      onChange={handleInputChange}
                    >
                      
                      {formData.state==='' ?
                      <option value="">Select District</option>
                    

                    :

                   ( formData.state==='Telangana' ?tg.map((e,index)=>

                        <option key={index} value={e}>{e}</option>

                      )
                    :
                    ap.map((e,index)=>

                        <option key={index} value={e}>{e}</option>

                      )
                   )
                    
                    
                    }
                      
                     
                      
                        
                      
                      
                     
                      
                    </CFormSelect>
                 
                 
                 
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
