import React, { useState,useEffect } from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CTable,
  CTableDataCell,
  CTableBody,
  CTableHeaderCell,
  CTableHead,
  CTableRow,
  CFormSelect,
  CButton,

} from '@coreui/react'
import { DocsExample } from 'src/components'
import axios from 'axios'


const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

const API_URL = process.env.REACT_APP_API_URL

const Breadcrumbs = () => {
  

  const [info,setinfo]=useState([])
  const [error,setError]=useState('')
  const [status,setstatus]=useState(false)

  const fetchUserData = async () => {
    try {
      // Send data to the register API with JWT token in header
      const data = await axios.post(
        `${API_URL}/fetch-users`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userData.token}}`,
          },
        },
      )
       setinfo(data.data)
      //return data.data
      
      
      } catch (err) {
      setError(err.response.data.message)
    }
   

  }
  
   
    useEffect(() => {
 
fetchUserData()
 
   }, [])

    //update

    const statusupdate=(event)=>{
      setstatus(event.target.value)
    }

  const handleSubmit = async (event) => {
    event.preventDefault()
    

    const formSubmitted = {id:event.target.value,
      status:status
       }
	
      setError('')
	
 
    try {
      // Send data to the register API with JWT token in header
      await axios.post(`${API_URL}/updateTwo`, formSubmitted, {
        headers: {
          Authorization: `Bearer ${userData.token}}`,
        },
      })

      console.log(formSubmitted)
      
      
    } catch (err) {
      setError(err.response.data.message)
    }
  
  }
  return(
    <>
    <CInputGroup>
     <CFormInput placeholder='Enter User ID'/>
    </CInputGroup>

    <CCol xs={12}>
        <CCard className="mb-4">
         
          <CCardBody>
           
              <CTable>
                <CTableHead color="dark">
                  <CTableRow >
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Designation</CTableHeaderCell>
                   
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                
                  
                 {info.filter(e=>e.usertype==='investor' && e.status===false).map((e)=>
                   <CTableRow key={e.id}>
                   
                    <CTableHeaderCell scope="row">{e.userid}</CTableHeaderCell>
                    <CTableDataCell>{e.name}</CTableDataCell>
                    <CTableDataCell>{e.usertype}</CTableDataCell>
                    <CTableDataCell>{e.status==='true' ? 'Active':
                    
                    <CFormSelect onChange={statusupdate}>
                      <option value=''>Select action</option>
                      <option value='true'>Activate</option>
                      <option value='false'>Reject</option>
                      </CFormSelect>}</CTableDataCell>
                      <CButton onClick={handleSubmit} value={e._id}> Submit</CButton>
                    
                    <CTableDataCell>
                   
                    </CTableDataCell>
                    
                  </CTableRow>
)}
        
    

                                   
                  
                 
                </CTableBody>
              </CTable>
          
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
  }

export default Breadcrumbs
