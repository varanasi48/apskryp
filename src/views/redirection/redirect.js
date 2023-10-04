import React, { useState,useEffect } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DatePicker } from '@mui/x-date-pickers';
import { format,addMonths } from 'date-fns';
import { CButton, CCard, CCardBody, CCardHeader, CForm, CFormInput, CFormLabel, CFormSelect,CInputGroup,CAlert, CCardTitle, CTable, CTableRow,CTableHeaderCell, CFormText, CInputGroupText, CFormTextarea, CModalBody, CModalHeader, CModalFooter, CModal, CTableDataCell } from '@coreui/react'

import FormControl from '../forms/form-control/FormControl'
import axios from 'axios'

import { Navigate, useNavigate } from 'react-router-dom'
import AWS from 'aws-sdk'

const API_URL = process.env.REACT_APP_API_URL
  // Retrieve data from localStorage
  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

    let dir=userData.name
let bname="lbfprofiles/"+dir


const Prevadd =()=>{

  let revenue=''
  const navigate=useNavigate()
  let doi=''
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  //const [revenue,setrevenue]=useState('')
  const [uid,setuid]=useState('')
  const[idata,setData]=useState([])
  let [investorid, setinvestorid] = useState('')
  let [investorname, setinvestorname] = useState('')
  let [status, setstatus] = useState('')
  let[investortype,setinvestortype]=useState('')
  const [file, setFile] = useState(null);
  let [visible, setVisible] = useState(false)
  const [value, setValue] = useState(null);

 
 console.log(format(new Date(value),"dd-MMM-yyyy"))


 const [formData, setFormData] = useState({
         
  plan:'',
  investment:'',
  payment:'',

   
 
  //nomineedate:'',
})

console.log(formData)
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

  const onclose = () => {
    setVisible(false)
    navigate('/investor')
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
    let x=''
    {formData.plan==='plan-a' ? x = "A":x="b"}

   
    {userData.usertype==='branch_manager' ? formSubmitted.userid = uid:formSubmitted.userid = userData.userid;}
    formSubmitted.status = "pending";
    formSubmitted.ref=userData.id
    formSubmitted.iid="LBF-"+x+"-"+parseInt(Math.random()*9000000)
    formSubmitted.aux="true"
    
    
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
    
    
  formSubmitted.doi=format(new Date(value),"dd-MMM-yyyy")


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
        setError('Investor not activated. Please contact admin')
        return false

      }

      
  const invest=async()=>{
    
    try {
      // Send data to the register API with JWT token in header
      const response=await axios.post(`${API_URL}/invest`, formSubmitted, {
        headers: {
          Authorization: `Bearer ${userData.token}}`,
        },
      })

      
     if(response.status==201){
      setVisible(true)
     }
      
    
        setFormData({
          
          
          plan:'',
          investment:'',
          payment:'',
          
          
          
        })
        setMessage('Registration successful for ' + formSubmitted.plan)
       
       
       
        //nomineedate:'',
      
      console.log(formSubmitted)
      
    } 

    catch (err) {
      setError(err.response.data.message)
    }
  }
     
    //aws
const investa= async ()=>{
    bname=bname+uid
    // S3 Bucket Name
    const S3_BUCKET = bname;

    // S3 Region
    const REGION = "us-east-1";

    // S3 Credentials
    AWS.config.update({
      accessKeyId: "AKIAWPP2ILKA3SQDYNZ4",
      secretAccessKey: "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",
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters

    const params = {
      Bucket: S3_BUCKET,
      
      Key: file.name,
      Body: file,
    };

    //uploading
    

     // Uploading file to s3

var upload = s3
.putObject(params)

.on("httpUploadProgress", (evt) => {
// File uploading progress
console.log(
"Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
);
})


.promise()



await upload.then((err, data) => {
console.log(err);



console.log(visible)

invest()


  });


  }
  {formSubmitted.payment==='cash' ?
    invest():investa()
    
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

const handleFileChange = (e) => {
  // Uploaded file
  const file = e.target.files[0];
  // Changing file state
  setFile(file);
};
return(
  <>
  <strong>{userData.usertype}</strong>
  {(userData.usertype==='branch_manager' || userData.usertype==='admin' ) && (<CInputGroup>
    <CFormInput placeholder='Enter User ID' onChange={inputuid} value={uid}></CFormInput>
    
  </CInputGroup>)}

  {investorid!=='' && (<CInputGroup>
    <CFormInput  value={investorid}></CFormInput>
    <CFormInput  value={investorname}></CFormInput>
    <CFormInput  value={status===false ? "Inactive":"Active"}></CFormInput>
    </CInputGroup>)}

 { (userData.usertype==='branch_manager' || userData.usertype==='admin') && uid===''  ?
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

              <CFormLabel>Select Plan</CFormLabel>
              <CFormSelect name='plan' onChange={handleInputChange}>
              <option value="">Select Plan</option>
                  <option value='plan-a'>Plan-A</option>
                  <option value='plan-b'>Plan-B</option>
              </CFormSelect>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker']}>
      
    <DatePicker value={value} onChange={(newValue) => setValue(newValue) } format='DD/MMM/YYYY' />
    </DemoContainer>
  </LocalizationProvider>

              <CFormLabel>Select Payment Mode</CFormLabel>
              <CFormSelect name='payment' onChange={handleInputChange}>
              <option value="">Select Payment Mode</option>
                  <option value='cash'>Cash</option>
                  <option value='bank'>Bank</option>
                  <option value='upi'>UPI</option>
              </CFormSelect>

              {formData.payment==='bank' &&
              <>
              <CFormLabel>Account Details</CFormLabel>
              <CTable disabled>
                <CTableRow>
                  <CTableDataCell scope='col'>Account Number</CTableDataCell>
                  <CTableDataCell scope='col'>919020073403006</CTableDataCell>
                  

                </CTableRow>
                <CTableRow>
                  <CTableDataCell scope='col'>Bank Name</CTableDataCell>
                  <CTableDataCell scope='col'>Axis Bank</CTableDataCell>
                  

                </CTableRow>
                <CTableRow>
                  <CTableDataCell scope='col'>IFSC Code</CTableDataCell>
                  <CTableDataCell scope='col'>UTIB00020880</CTableDataCell>
                  

                </CTableRow>
              </CTable>
              </>
              }
              {formData.payment==='upi' &&
              <>
              <CFormLabel>UPI Information</CFormLabel>
              <CFormText disabled><h3>UPI ID:8859441</h3></CFormText>
              </>
            }
            {formData.payment!=='cash'   &&
            <CCard>
            <CFormLabel>Upload Receipt or screen shot</CFormLabel>
              <CFormInput type='file' placeholder='Upload Receipt/Screenshot' onChange={handleFileChange}></CFormInput>
              
            </CCard>
}
              
            
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

              <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker']}>
      
    <DatePicker value={value} onChange={(newValue) => setValue(newValue) } format='DD/MMM/YYYY' />
    </DemoContainer>
  </LocalizationProvider>
              <CFormLabel>Select Payment Mode</CFormLabel>
              <CFormSelect name='payment' onChange={handleInputChange}>
              <option >Select Payment Mode</option>
                  <option value='cash'>Cash</option>
                  <option value='bank'>Bank</option>
                  <option value='upi'>UPI</option>
              </CFormSelect>

             
              
              {formData.payment==='bank' &&
              <>
              <CFormLabel>Account Details</CFormLabel>
              <CTable disabled>
                <CTableRow>
                  <CTableDataCell scope='col'>Account Number</CTableDataCell>
                  <CTableDataCell scope='col'>919020073403006</CTableDataCell>
                  

                </CTableRow>
                <CTableRow>
                  <CTableDataCell scope='col'>Bank Name</CTableDataCell>
                  <CTableDataCell scope='col'>Axis Bank</CTableDataCell>
                  

                </CTableRow>
                <CTableRow>
                  <CTableDataCell scope='col'>IFSC Code</CTableDataCell>
                  <CTableDataCell scope='col'>UTIB00020880</CTableDataCell>
                  

                </CTableRow>
              </CTable>
              </>
              }
              {formData.payment==='upi' &&
              <>
              <CFormLabel>UPI Information</CFormLabel>
              <CFormText disabled><h3>UPI ID:8859441</h3></CFormText>
              </>
            }
            {formData.payment!=='cash'   &&
            <CCard>
            <CFormLabel>Upload Receipt or screen shot</CFormLabel>
              <CFormInput type='file' placeholder='Upload Receipt/Screenshot' onChange={handleFileChange}></CFormInput>
              
            </CCard>
}

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
                  <CTableHeaderCell scope="col">{formData.plan.toUpperCase()}</CTableHeaderCell>
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
                  
                  
                  

         <CModal visible={visible}>
<CModalHeader>
<strong>Succeful</strong>
</CModalHeader>
<CModalBody>
Registration successful.Wait for aprooval.
</CModalBody>
<CModalFooter>
<CButton href='/#/investor'>Close</CButton>
</CModalFooter>
</CModal>         
                  
              

        
  </>
)
}
export default Prevadd