import React,{useState,useEffect} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormSelect,
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
import { useNavigate } from 'react-router-dom'

const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

const API_URL = process.env.REACT_APP_API_URL


const Select = () => {
  const [error, setError] = useState('')
  const [info,setinfo]=useState([])
  const [message, setMessage] = useState('')
  const [status,setstatus]=useState(false)

  const nav=useNavigate()

  
  
  const statusupdate=(event)=>{
      
    setstatus(event.target.value)

  }

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
  
   
    useEffect(() => {
      
     
      fetchUserData()

      

   }, [])

  
   console.log(info)
   
  //  fetchUserData()


  //update
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formSubmitted = {id:event.target.value,
      status:status }
	
  
      const datapush=()=>{

        nav('/agreement',{state:{id:event.target.value}})
    
      }
	
  //formSubmitted.plan = "Plan-A";
	
    
    setError('')
    try {
      // Send data to the register API with JWT token in header
      await axios.post(`${API_URL}/updateOne`, formSubmitted, {
        headers: {
          Authorization: `Bearer ${userData.token}}`,
        },
      })

      setMessage('Registration successful for ' + formSubmitted.id)

      fetchUserData()
     datapush()
      
    
             
       
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
                    <CTableDataCell>{e.status==='true' ? 'Active':
                    
                    <CFormSelect onChange={statusupdate}>
                      <option value=''>Select action</option>
                      <option value='true'>Activate</option>
                      <option value='false'>Reject</option>
                      </CFormSelect>}</CTableDataCell>
                      <CButton onClick={handleSubmit} value={e._id}> Submit</CButton>
                    
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
