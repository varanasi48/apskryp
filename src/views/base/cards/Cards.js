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


const Tables = () => {
  const [error, setError] = useState('')
  const [info,setinfo]=useState([])
  


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

   
   console.log(info)
   
  //  fetchUserData()


  //update

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formSubmitted = {id:event.target.value,
      status:true }
	
  
	
  //formSubmitted.plan = "Plan-A";
	
    
    setError('')
    try {
      // Send data to the register API with JWT token in header
      await axios.post(`${API_URL}/updateTwo`, formSubmitted, {
        headers: {
          Authorization: `Bearer ${userData.token}}`,
        },
      })

     // setMessage('Registration successful for ' + formSubmitted.id)
     
      
     fetchUserData()
             
       
        //nomineedate:'',
      
      console.log(formSubmitted)
      
    } catch (err) {
      setError(err.response.data.message)
    }
  }
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
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Designation</CTableHeaderCell>
                   
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                
                  
                {info.map((e)=>{
                  if(e.usertype=="investor"){
      return(
                    <CTableRow key={e._id}>
                   
                    <CTableHeaderCell scope="row">{e.userid}</CTableHeaderCell>
                    <CTableDataCell>{e.name}</CTableDataCell>
                    <CTableDataCell>{e.usertype}</CTableDataCell>
                    
                    <CTableDataCell>
                    {e.status===false ?
                    <button  onClick={handleSubmit} value={e._id}>Click to aproove</button> :
                    "Aprooved"
                    }
                    </CTableDataCell>
                    
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
    </>
  )
  
}

export default Tables
