import { CButton, CFormLabel, CFormSelect } from '@coreui/react'
import { RadioButtonCheckedOutlined } from '@mui/icons-material'
import React,{useState} from 'react'
import axios from 'axios'
import { parse } from 'date-fns'

const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

const Deduction=()=>{
    const [error, setError] = useState('')
    const [data, setiData] = useState([])
    const API_URL = process.env.REACT_APP_API_URL
    
     
    let [deduction1,setd1]=useState('')
    let [deduction2,setd2]=useState('')
    let [date1,setd1d]=useState('')   
    let [date2,setd2d]=useState('')  

    const formSubmimtted={}
    
    

    



    const fetchi = async () => {
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
           setiData(data.data)
          //return data.data
          
          
          } catch (err) {
          setError(err.response.data.message)
        }
       
      
      }

    const deduct = async () => {
      fetchi() 
     let damount=''
     let ddate='' 
    
     console.log(data)
   data.map((e)=>{ 
    setd1=e.deduction1
    setd2=e.deduction2
    setd1d=e.d1date
    setd2d=e.d2date
    

    if(e.plan=='plan-a'){
       
       
        damount=(e.investment*0.1)/2

    
   
   
       if(e.deduction1==""){
        deduction1=deduction1
        deduction2=damount
        date2=date2
        date1=new Date().toString()

       }

       if(e.d2amount==''&& e.d1amount!=''){

        deduction2=damount
        deduction1=deduction1
        date1=date1
        date2=parse(new Date())

       }
    }
    formSubmimtted={deduction1:deduction1,deduction2:deduction2,d1date:date1,d2date:date2}
    }
    )

      try {
          // Send data to the register API with JWT token in header
          const data = await axios.post(
            `${API_URL}/updateDeduction`,
            formSubmimtted,
            {
              headers: {
                Authorization: `Bearer ${userData.token}}`,
              },
            },
          )
           console.log(data)
          //return data.data
          alert("deduction successfull")
          
          } catch (err) {
          setError(err.response.data.message)
        }
       
    
      }
   
    



 let k= ''
    return(
 <>
        <CFormLabel>
            Enter Deduction
        </CFormLabel>
        <CFormSelect>
            <option>Plan-A</option>
            <option>Plan-B</option>
        </CFormSelect>
        <CButton onClick={deduct}> Deduct</CButton>

</>

    )




    
}
export default Deduction