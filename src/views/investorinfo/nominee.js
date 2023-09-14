import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { CFormInput, CInputGroup } from '@coreui/react'


const API_URL = process.env.REACT_APP_API_URL
  // Retrieve data from localStorage
  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

const Nominee=()=>{
    const [data,setData]=useState([])
    const [error,setError]=useState('')
    const [uid,setuid]=useState('')
    
   
    const inputuid=  (e)=>{
        setuid(e.target.value)

      }

    const fetchuser = async () => {
        try {
          // Send data to the register API with JWT token in header
          const data = await axios.post(
            `${API_URL}/fetch-users`,{},
            
            {
              headers: {
                Authorization: `Bearer ${userData.token}}`,
              },
            },
          )
           setData(data.data)
          //return data.data
          
          
          } catch (err) {
          setError(err.response.data.message)
        }
       
              }
  
              
      
       
      useEffect(()=>{
        fetchuser();
       
      },[])
console.log(data)
let uname=''
      let unominee=''
      let dob=''
      
      const info=data.filter(e=>e.userid===uid).map((e)=>{
        uname=e.uname
        unominee=e.nominee
        dob=e.dob
      })
      
  return(
    
    
    <>
    {(userData.usertype==='branch_manager' || userData.usertype==='admin' ) && (<CInputGroup>
      <CFormInput placeholder='Enter User ID' onChange={inputuid} value={uid}></CFormInput>
      
    </CInputGroup>)}

    {uid!=='' && (<CInputGroup>
      <CFormInput  value={uname}></CFormInput>
      <CFormInput  value={unominee}></CFormInput>..
      <CFormInput  value={dob}></CFormInput>
      </CInputGroup>)}
    </>
  )
    }

export default Nominee