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

const Invest=()=>{
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
         
          plan:'',
          investment:'',
           
         
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
            
           
            {userData.usertype==='branch_manager' ? formSubmitted.userid = uid:formSubmitted.userid = userData.userid;}
            formSubmitted.status = false;
            formSubmitted.referal=userData.userid
            
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
            

            if(formData.plan=="plan-b" ){
              if(formData.investment<49999 || formData.investment>200001){
              
                setError('Investment not valid')
                return false
              }
              }

              if(formData.plan=="plan-a" ){
                if(formData.investment<49999 || formData.investment>1000001){
              
                setError('Investment not valid')
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
              const response=await axios.post(`${API_URL}/invest`, formSubmitted, {
                headers: {
                  Authorization: `Bearer ${userData.token}}`,
                },
              })
        
              
             if(response.status==201){
              navigate('/submit')
             }
              
            
                setFormData({
                  
                  
                  plan:'',
                  investment:'',
                  
                  
                })
                setMessage('Registration successful for ' + formSubmitted.plan)
               
               
               
                //nomineedate:'',
              
              console.log(formData)
              
            } catch (err) {
              setError(err.response.data.message)
            }
          }
          

              const dates=new Date()
              const date_a=format(new Date(addMonths(dates,36)),"dd-MMM-yyyy")
              const date_b=format(new Date(addMonths(dates,12)),"dd-MMM-yyyy")

        let k="hidden"


        useEffect(()=>{
          fetch();
        },[])
        const infofetch=()=>{
          const info= idata.filter((e)=>{
            return uid===e.userid
             
           })
   
           

        }

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
        <strong>{userData.usertype}</strong>
        {userData.usertype==='branch_manager' || userData.usertype==='admin'  && (<CInputGroup>
          <CFormInput placeholder='Enter User ID' onChange={inputuid} value={uid}></CFormInput>
          
        </CInputGroup>)}

        {investorid!=='' && (<CInputGroup>
          <CFormInput  value={investorid}></CFormInput>
          <CFormInput  value={investorname}></CFormInput>
          <CFormInput  value={status===false ? "Inactive":"Active"}></CFormInput>
          </CInputGroup>)}
     
       { userData.usertype==='branch_manager' || userData.usertype==='admin' && uid===''  ?
        <CCard hidden> 
        <CCardHeader color='purple'>
        Invest Now
        {message && <CAlert color="success">{message}</CAlert>}
              {error && <CAlert color="danger">{error}</CAlert>}
        </CCardHeader>  
        <CCardBody>
            
                <CForm >
                <CFormLabel>Amount</CFormLabel>
                <CFormInput  name="investment" onChange={handleInputChange}
                      value={formData.name} placeholder='Enter Amount'></CFormInput>

                    <CFormLabel>Select plan</CFormLabel>
                    <CFormSelect name='plan' onChange={handleInputChange}>
                    <option value="">Select Plan</option>
                        <option value='plan-a'>Plan-A</option>
                        <option value='plan-b'>Plan-B</option>
                    </CFormSelect>
                  
                  <div className='mb-3'>
                 <CButton type='submit' onSubmit={handleSubmit}
                      onClick={handleSubmit}>Submit</CButton>
                 </div >


                 </CForm>
                 
            
        </CCardBody>
        
        </CCard>


        :


        <CCard> 
        <CCardHeader color='purple'>
        Invest Now
        {message && <CAlert color="success">{message}</CAlert>}
              {error && <CAlert color="danger">{error}</CAlert>}
        </CCardHeader>  
        <CCardBody>
            
                <CForm >
                <CFormLabel>Amount</CFormLabel>
                <CFormInput  name="investment" onChange={handleInputChange}
                      value={formData.name} placeholder='Enter Amount'></CFormInput>

                    <CFormLabel>Select plan</CFormLabel>
                    <CFormSelect name='plan' onChange={handleInputChange}>
                    <option value="">Select Plan</option>
                        <option value='plan-a'>Plan-A</option>
                        <option value='plan-b'>Plan-B</option>
                    </CFormSelect>
                  
                  <div className='mb-3'>
                 <CButton type='submit' onSubmit={handleSubmit}
                      onClick={handleSubmit}>Submit</CButton>
                 </div >


                 </CForm>
                 
            
        </CCardBody>
        
        </CCard>

        }
        
        

            
            
                    
                  
                    
                     
        {formData.plan && formData.investment && (
                            <CCard>
            <CCardHeader>
                <strong>Estimated Returns</strong>
            </CCardHeader>
                            
                            <CCardBody>
                <CTable>
                <CTableRow>
                        <CTableHeaderCell scope="col"><strong>Plan Selected</strong></CTableHeaderCell>
                        <CTableHeaderCell scope="col">{formData.plan}</CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="col"><strong>Amount Invested</strong></CTableHeaderCell>
                        <CTableHeaderCell scope="col">{formData.investment}</CTableHeaderCell>
                    </CTableRow>
                            <CTableRow>
                            <CTableHeaderCell scope="col"><strong>Maturity Amount</strong></CTableHeaderCell>
                             {formData.plan==='plan-a' ?  
                            <CTableHeaderCell scope="col"><strong>{parseInt(formData.investment*0.1*36)}</strong></CTableHeaderCell>
                             : <CTableHeaderCell scope="col"><strong>{parseInt(formData.investment*2)}</strong></CTableHeaderCell>
                             } 
                            
                            
                            </CTableRow>
                            <CTableRow>
                            <CTableHeaderCell scope="col"><strong>Maturity Date</strong></CTableHeaderCell>
                             {formData.plan==='plan-a' ?  
                            <CTableHeaderCell scope="col"><strong>{date_a}</strong></CTableHeaderCell>
                             : <CTableHeaderCell scope="col"><strong>{date_b}</strong></CTableHeaderCell>
                             } 
                            
                            
                            </CTableRow>
                            </CTable>
            </CCardBody>
        </CCard>
         )}
                        
                        
                        
                        
                        
                    

              
        </>
    )
}

export default Invest