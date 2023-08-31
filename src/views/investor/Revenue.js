import React ,{useEffect, useState}from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormSelect,
  CPagination,
  CPaginationItem,
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
import {addMonths, eachMonthOfInterval, format} from 'date-fns'
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios'


const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null
    
 
    
   


const Revenue = () => {

  const API_URL = process.env.REACT_APP_API_URL
  const [data, setData] = useState([]);
  const [error, setError] = useState('')
  

  


let [revenue,setRevenue]=useState('')  
let [investment,setInvestment]=useState('')
  
  


  


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
       setData(data.data)
     
      
      
      } catch (err) {
      setError(err.response.data.message)
    }
   

  }
  useEffect(()=>{

    fetchUserData()

  },[])

       let k=''
       let p=''
       let ch=[]
       let r=''
 
           
         let totla=investment*0.1*36

    
         const handleChange = (e) => {
          setInvestment(e.target.value)
         
          
        }  
  //data filter
     //console.log(data)
     let plan=data.filter(e=>{return e.investment===investment})
     if(plan.length==0){ 
      k="Plan Not Selected"
      p="Select plan"
      ch.push("please select")
      r='NOt selected'
      
     }
     else{
      k=plan[0].plan
      p=plan[0].createdAt

if(k=="plan-a"){

  r=investment*0.1
      const start = new Date(p);
      const end = new Date()
      const ends=end.setMonth(start.getMonth()+36)
      
      let loop = new Date(start);
           
  
  
            for(loop;loop<=ends;loop.setMonth(loop.getMonth()+1)){
              ch.push(format(new Date(loop.toLocaleDateString()),"MMM-yyyy"));
                  
                 }
                }
                else{
                  r=0
                  const start = new Date(p);
      const end = new Date()
      const ends=end.setMonth(start.getMonth()+24)
      
      let loop = new Date(start);
           
  
  
            for(loop;loop<=ends;loop.setMonth(loop.getMonth()+1)){
              ch.push(format(new Date(loop.toLocaleDateString()),"MMM-yyyy"));
                  
                 }

                }
                        }
      
     


        //Duration
         
       

        //Duration Ends       



  return (
    <>
    
      <CFormSelect onChange={handleChange} >
      
              <option >Select  Invetsment </option>
              {data.map((e)=>{
                
     return(
      <>

     <option key={e.index}  value={e.investment}>{e.investment}({e.plan})</option>
      </>
     )
    })}
    </CFormSelect>
   
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Payments</strong> 
          </CCardHeader>
          
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
         
          <CCardBody>
            
            
                         
          {userData  && (

          
              <CTable className='md-3'  >
               
                
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col">S.no</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Plan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Amount Invested</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Months</CTableHeaderCell>
                   <CTableHeaderCell scope="col">Revenue</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
               
                  {ch.map((e)=>{

                  return(
                <CTableRow key={e._id}>
                      <CTableDataCell>no</CTableDataCell>   
                      <CTableDataCell>{k}</CTableDataCell>
                      <CTableDataCell>{investment}</CTableDataCell>  
                      <CTableDataCell>{e}</CTableDataCell>  
                      <CTableDataCell>{r}</CTableDataCell> 
                      <CTableDataCell></CTableDataCell> 
                </CTableRow>
          )})
}
                 
                   
                   
        
                  
                 
                </CTableBody>

                
                

              </CTable>
             ) }
    
  </CCardBody>
        </CCard>
      </CCol>
     
    </CRow>
    
    </>
  )
}

export default Revenue
