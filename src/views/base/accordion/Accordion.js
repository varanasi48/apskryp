import React,{useState} from 'react'
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


const Tables = () => {
  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

    console.log(userData)
    console.log(userData.name)
    const API_URL = process.env.REACT_APP_API_URL

  const [error, setError] = useState('')
  const[data,setdata]=useState([])
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
  
        setdata(data.data)
        //console.log(userData, 'USERdata')
      } catch (err) {
        setError(err.response.data.message)
      }
    }
  //   useEffect(() => {
  //     fetchUserData()
  //   }, [])
    fetchUserData()

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Users</strong> 
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
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Designation</CTableHeaderCell>
                    
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                {data.map((e)=>{
                  if(e.usertype=="branch_manager"){
      return(
                    <CTableRow key={e._id}>
                   
                    <CTableHeaderCell scope="row">{e.userid}</CTableHeaderCell>
                    <CTableDataCell>{e.name}</CTableDataCell>
                    <CTableDataCell>{e.usertype}</CTableDataCell>
                    <CTableDataCell> {e.status===false ?
                    <button >Click to aproove</button> :
                    "Aprooved"
                    }</CTableDataCell>
                    
                  </CTableRow>
                  )
      }
                })}
                
                </CTableBody>
              </CTable>
          
          </CCardBody>
        </CCard>
      </CCol>
     
    </CRow>
  )
}

export default Tables
