import React,{useState,useEffect} from 'react'
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

const API_URL = process.env.REACT_APP_API_URL


const Select = () => {
  const [error, setError] = useState('')
  const [info,setinfo]=useState([])
  


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
       setinfo(data.data)
      //return data.data
      
      
      } catch (err) {
      setError(err.response.data.message)
    }
   

  }
  
   
    /*useEffect(() => {
      
     
     

      

   }, [])*/

   fetchUserData()
   console.log(info)
   
  //  fetchUserData()
  return (
    <>
     
     
      
      
     

    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Investments</strong> 
          </CCardHeader>
          
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
         
          <CCardBody>
           
              <CTable>
                <CTableHead color="dark">
                  <CTableRow >
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Plan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Investment</CTableHeaderCell>
                    
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                
                  
                {info.map((e)=>{
                  let k=''
                      
      return(

                    <CTableRow key={e._id}>
                   
                    <CTableHeaderCell scope="row">{e.userid}</CTableHeaderCell>
                    <CTableDataCell>{e.plan}</CTableDataCell>
                    <CTableDataCell>{e.investment}</CTableDataCell>
                    <CTableDataCell>
                      {e.status===false ?
                    <button >Click to aproove</button> :
                    "Aprooved"
                    }
                      </CTableDataCell>
                    
                  </CTableRow>
                  )
      }
                )}
    

                                   
                  
                 
                </CTableBody>
              </CTable>
          
          </CCardBody>
        </CCard>
      </CCol>
     
    </CRow>
    </>
  )
  
}

export default Select
