import { CButton, CCard, CCardBody, CCardHeader, CForm, CFormInput, CFormLabel, CFormSelect,CInputGroup,CAlert, CCardTitle, CTable, CTableRow,CTableHeaderCell } from '@coreui/react'
import React,{useEffect, useState} from 'react'
import FormControl from '../forms/form-control/FormControl'
import axios from 'axios'
import { format,addMonths } from 'date-fns'
import { Navigate, useNavigate } from 'react-router-dom'


const API_URL = process.env.REACT_APP_API_URL
  // Retrieve data from localStorage
  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

const Bank=()=>{
    let revenue=''
    const navigate=useNavigate()

    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    //const [revenue,setrevenue]=useState('')
    const [uid,setuid]=useState('')
    const[idata,setData]=useState([])
    let [investorid, setinvestorid] = useState('')
    let [investorname, setinvestorname] = useState('')
    let [status, setstatus] = useState('')
    let[investortype,setinvestortype]=useState('')

  
      const [formData, setFormData] = useState({
         
          account:'',
          bank:'',
          ifsc:'',
           
         
          //nomineedate:'',
        })
        const handleInputChange = (event) => {
            const { name, value } = event.target
            
            setFormData((prevData) => ({
              ...prevData,
              [name]: value,
            }))
          }
          const inputuid=  (e)=>{
            setuid(e.target.value)

          }

          const fetch = async () => {
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
               setData(data.data)
              //return data.data
              
              
              } catch (err) {
              setError(err.response.data.message)
            }
           
        
          }

      
       
          const handleSubmit = async (event) => {
            event.preventDefault()
            const formSubmitted = { ...formData }
            
           
             formSubmitted.userid = uid;
            formSubmitted.status = false;
           
            
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
            
              if(investortype==='admin'){

                setError('wrong user type')
                return false
              }
              if(status===false){
                setError('Investor not actiavtes. Please contact admin')
                return false

              }
             
            

            
            try {
              // Send data to the register API with JWT token in header
              const response=await axios.post(`${API_URL}/bank`, formSubmitted, {
                headers: {
                  Authorization: `Bearer ${userData.token}}`,
                },
              })
        
              
             
              
            
                setFormData({
                  
                  
                  account:'',
                  bank:'',
                  ifsc:'',
                  
                  
                })
                setMessage('Bank details registered successfully for ' + formSubmitted.userid)
               
               
               
                //nomineedate:'',
              
              console.log(formData)
              
            } catch (err) {
              setError(err.response.data.message)
            }
          }
          

             

       


        useEffect(()=>{
          fetch();
        },[])
       

       const info= idata.filter((e)=>{
         return uid===e.userid
          
        })

        info.map((e)=>{
          investorid=e.userid
          investorname=e.name
             status=e.status
             setinvestortype=e.type
          console.log(investorid)
        })

    return(
        <>
        
          <CFormInput onChange={inputuid} value={uid}></CFormInput>
          
       

        {investorid!=='' && (<CInputGroup>
          <CFormInput  disabled value={investorid}></CFormInput>
          <CFormInput  disabled value={investorname}></CFormInput>
          <CFormInput  disabled value={status}></CFormInput>
          </CInputGroup>)}

       {uid!==''  &&
       
        <CCard> 
        <CCardHeader color='purple'>
        Invest Now
        {message && <CAlert color="success">{message}</CAlert>}
              {error && <CAlert color="danger">{error}</CAlert>}
        </CCardHeader>  
        <CCardBody>
            
                <CForm >
                <CFormLabel>Account</CFormLabel>
                <CFormInput  name="account" onChange={handleInputChange}
                      value={formData.name} placeholder='Enter Account Number'></CFormInput>

<CFormLabel>Bank Name</CFormLabel>
                <CFormInput  name="bank" onChange={handleInputChange}
                      value={formData.bank} placeholder='Enter Bank Name'></CFormInput>

<CFormLabel>Account</CFormLabel>
                <CFormInput  name="ifsc" onChange={handleInputChange}
                      value={formData.ifsc} placeholder='Enter IFSC Code'></CFormInput>
                  
                  <div className='mb-3'>
                 <CButton type='submit' onSubmit={handleSubmit}
                      onClick={handleSubmit}>Submit</CButton>
                 </div >


                 </CForm>
                 
            
        </CCardBody>
        
        </CCard>

        }
        
        

            
            
                    
                  
                    
                     
        
        
                        
                        
                        
                        
                        
                    

              
        </>
    )
}

export default Bank