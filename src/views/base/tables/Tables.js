import React,{useEffect,useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import axios from 'axios'

const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null
const num=localStorage.length

    console.log(userData)
    console.log(userData.name)
    console.log(num)


   

const Tables = () => {
  const API_URL = process.env.REACT_APP_API_URL
  const [data, setData] = useState([]);
  const [error, setError] = useState('')
  const [sdate,setSdate]=useState('')
  const [visible, setVisible] = React.useState(false);
  const [state, setState] = React.useState('');

   //fetch data

   const fetchUserData = async () => {
    
    try {
      // Send data to the register API with JWT token in header
      const data = await axios.post(
        `${API_URL}/fetch-investment`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userData.token}}`,
          },
        },
      )
       setData(data.data)
     
      
      
      } catch (err) {
      setError(err.response.data.message)
    }
   

  }
  useEffect(()=>{

    fetchUserData()

  },[])

  
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Payments</strong> 
          </CCardHeader>
          
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
         
          <CCardBody>
            
            
                         
            
              <CTable>
                <CTableHead color="dark">
                  <CTableRow>
                    
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Plan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
                    <CTableHeaderCell scope="col">status</CTableHeaderCell>
                    
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  
                <CTableRow>  
                     <CTableDataCell>e.id</CTableDataCell>
                     <CTableDataCell>e.plan</CTableDataCell>
                     <CTableDataCell>e.amount</CTableDataCell>
                     <CTableDataCell>e.status</CTableDataCell>
                     
                     
                   </CTableRow>

                 
                 
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
          
          </CCardBody>
        </CCard>
      </CCol>
     
    </CRow>
  )
}

export default Tables
