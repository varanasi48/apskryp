import React,{useState,useEffect} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardTitle,
  CCol,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CInputGroupText,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import axios from 'axios'


const Tables = () => {
  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

    console.log(userData)
    console.log(userData.classname)
    const API_URL = process.env.REACT_APP_API_URL

  const [error, setError] = useState('')
  const[data,setdata]=useState([])
  const[idata,setidata]=useState([])
  const[uid,setuid]=useState([])
  let[k,setK]=useState('')
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

    const fetchinvestmnet = async () => {
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
  
        setidata(data.data)
        //console.log(userData, 'USERdata')
      } catch (err) {
        setError(err.response.data.message)
      }
    }
   useEffect(() => {
      fetchUserData()
      fetchinvestmnet()
    }, [])
    //fetchUserData()

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
     
      
     
             
       
        //nomineedate:'',
      
      console.log(formSubmitted)
      
    } catch (err) {
      setError(err.response.data.message)
    }
  }
  const inputuid=  (e)=>{
    setuid(e.target.value)
  
  }
const dat=data.filter(e=> e.userid===uid)

console.log(idata)
let plana=idata.filter((e)=>{return e.userid===uid && e.plan==='plan-a' && e.status===true})
let planb=idata.filter((e)=>{return e.userid===uid && e.plan==='plan-b' && e.status===true})

let amt_a=plana.reduce((a,v)=>a=a+parseInt(v.investment),0)

let amt_b=planb.reduce((a,v)=>a=a+parseInt(v.investment),0)
        

  return (
<>
    <CInputGroup>
    <CFormInput  onChange={inputuid} value={uid} placeholder='Enter Userid'/>
    <CButton>Submit</CButton>
    </CInputGroup>

   {dat.map((e)=>
    <CCard className="mx-auto" border key={e.id}>  
      
    <CCardTitle>
    
    <CFormLabel htmlFor="basic-url" className="position-absolute top-0 start-50">{e.usertype}</CFormLabel>
    </CCardTitle>
    <CCardBody>
    <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1">Name</CInputGroupText>
  <CFormInput placeholder="Username" aria-label="Username"  value={e.name} aria-describedby="basic-addon1"/>
</CInputGroup>

<CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1">Phone</CInputGroupText>
  <CFormInput placeholder="Phone Number" aria-label="Phone"  value={e.phoneno} aria-describedby="basic-addon1"/>
  <CInputGroupText id="basic-addon1">Email</CInputGroupText>
  <CFormInput placeholder="Mail ID" aria-label="Email" value={e.email} aria-describedby="basic-addon1"/>
</CInputGroup>

<CInputGroup className="mb-3">
<CInputGroupText id="basic-addon2">State</CInputGroupText>
  <CFormInput placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <CInputGroupText id="basic-addon2">District</CInputGroupText>
  <CFormInput placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  
</CInputGroup>



<CFormLabel htmlFor="basic-url">Total Investmnet</CFormLabel>
<CInputGroup className="mb-3">
  <CInputGroupText>Plan-A</CInputGroupText>
  <CFormInput aria-label="Amount (to the nearest dollar)" value={amt_a}/>
  <CInputGroupText>Plan-B</CInputGroupText>
  <CFormInput aria-label="Amount (to the nearest dollar)" value={amt_b}/>
  
</CInputGroup>

<CInputGroup className="mb-3">
<CInputGroupText>Account No.</CInputGroupText>
  <CFormInput placeholder="Account Number" aria-label="Username"/>
  <CInputGroupText>IFSC</CInputGroupText>
  <CFormInput placeholder="IFSC" aria-label="Server"/>
  <CInputGroupText>Bank</CInputGroupText>
  <CFormInput placeholder="Bank Name" aria-label="Server"/>
</CInputGroup>


    </CCardBody>
    <CCardFooter>
    <CInputGroup className="mb-3">
      <CButton >Submit</CButton>
      
      </CInputGroup>
    </CCardFooter>
     
    </CCard>
    
    )}

    </>
   
  )
}

export default Tables
