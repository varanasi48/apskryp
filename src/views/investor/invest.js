import { CButton, CCard, CCardBody, CCardHeader, CForm, CFormInput, CFormLabel, CFormSelect,CInputGroup,CAlert, CCardTitle, CTable, CTableRow,CTableHeaderCell } from '@coreui/react'
import React,{useState} from 'react'
import FormControl from '../forms/form-control/FormControl'
import axios from 'axios'
import { format,addMonths } from 'date-fns'


const API_URL = process.env.REACT_APP_API_URL
  // Retrieve data from localStorage
  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

const Invest=()=>{
    let revenue=''

    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    //const [revenue,setrevenue]=useState('')
  
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

          const handleSubmit = async (event) => {
            event.preventDefault()
            const formSubmitted = { ...formData }
            
           
            formSubmitted.userid = userData.userid;
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
            
            try {
              // Send data to the register API with JWT token in header
              await axios.post(`${API_URL}/invest`, formSubmitted, {
                headers: {
                  Authorization: `Bearer ${userData.token}}`,
                },
              })
        
              setMessage('Registration successful for ' + formSubmitted.plan)
             
              
            
                setFormData({
                  
                  
                  plan:'',
                  investment:'',
                  
                  
                })
          
               
               
                //nomineedate:'',
              
              console.log(formData)
              
            } catch (err) {
              setError(err.response.data.message)
            }
          }
          

              const dates=new Date()
              const date_a=format(new Date(addMonths(dates,36)),"dd-MMM-yyyy")
              const date_b=format(new Date(addMonths(dates,12)),"dd-MMM-yyyy")

        

    return(
        <>
        <div>Invest</div>
        <CCard>
        <CCardHeader color='purple'>
        Invest Now
        {message && <CAlert color="success">{message}</CAlert>}
              {error && <CAlert color="danger">{error}</CAlert>}
        </CCardHeader>  
        <CCardBody>
            
                <CForm>
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
                 </div>


                 </CForm>
                 
            
        </CCardBody>
        
        </CCard>
        
        
            
            
                    
                  
                    
                     
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