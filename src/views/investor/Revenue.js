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
  CFormInput,
  CInputGroup
} from '@coreui/react'
import { DocsExample } from 'src/components'
import {addMonths, eachMonthOfInterval, format,formatDistanceToNowStrict} from 'date-fns'
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios'
import { isLastDayOfMonth } from 'date-fns/esm';


const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null
    
 
    
   


const Revenue = () => {

  const API_URL = process.env.REACT_APP_API_URL
  const [data, setData] = useState([]);
  const [error, setError] = useState('')
  const [uid,setuid]=useState('')
  let [investorname, setinvestorname] = useState('')
  let [status, setstatus] = useState('')
  let [investorid, setinvestorid] = useState('')
  const[idata,setiData]=useState([])

  

  


let [revenue,setRevenue]=useState('')  
let [investment,setInvestment]=useState('')
  
  

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
     setiData(data.data)
    //return data.data
    
    
    } catch (err) {
    setError(err.response.data.message)
  }
 

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
       setData(data.data)
     
      
      
      } catch (err) {
      setError(err.response.data.message)
    }
   

  }
  useEffect(()=>{

    fetchUserData()
    fetch()

  },[])


  const info= idata.filter((e)=>{
    return uid===e.userid
     
   })

   info.map((e)=>{
     investorid=e.userid
     investorname=e.name
        status=e.status
        
     console.log(investorid)
   })

       let k=''
       let p=''
       let ch=[]
       let r=''
       let s=''
       let m=''
       

       
 
           
         let totla=investment*0.1*36

    
         const handleChange = (e) => {
          setInvestment(e.target.value)
         
          
        }  

        console.log(investment)
        let plan=[]
        let dati=[]
  //data filter
     //console.log(data)
        {(userData.usertype==='branch_manager' || userData.usertype==='admin')  ? dati=data.filter(e=>{return  e.userid===uid  }) : dati=data.filter(e=>{return  e.userid===userData.userid  })}
      
      plan=dati.filter(e=>{return  e.investment===investment })
    

   
     
     if(plan.length==0){ 
      k="Plan Not Selected"
      p="Select plan"
      ch.push("please select")
      r='NOt selected'
      s="select "

      console.log(plan)

      //
      
     }
     else{
      {plan[0].status==="active" ? s='Pending': s='Aprooved'}
      k=plan[0].plan
      p=plan[0].createdAt

      console.log(plan[0].plan)
      
      
if(k=="plan-a"){

  r=investment*0.1
  m=investment*3.6
      const start = new Date(p);
      const end = new Date()
      const ends=end.setMonth(start.getMonth()+35)
      
      let loop = new Date(start);
      
            for(loop;loop<=ends;loop.setMonth(loop.getMonth()+1)){
              ch.push(format(new Date(loop.toLocaleDateString()),"MMM-yyyy"));
                  
                 }
                }
                else{
                  r=0
                  const start = new Date(p);
      const end = new Date()
      const ends=end.setMonth(start.getMonth()+12)
      console.log(start.getMonth())
      console.log(new Date(ends).getMonth())
     console.log(((new Date(ends).getMonth()-start.getMonth())/start.getMonth())*100)
      let loop = new Date(start);
  
     /* let diff=formatDistanceToNowStrict(new Date(ends),{unit:'month'})
      console.log((diff/24)*100)*/
           
  
  
            for(loop;loop<=ends;loop.setMonth(loop.getMonth()+1)){
              ch.push(format(new Date(loop.toLocaleDateString()),"MMM-yyyy"));
                  
                 }

                }
                
                        }
      
        //Duration
         
       

        //Duration Ends       



  return (
    <>
    {(userData.usertype==='branch_manager' || userData.usertype==='admin') && (<CInputGroup>
          <CFormInput onChange={inputuid} value={uid} placeholder='Enter User ID'></CFormInput>
          
        </CInputGroup>)}

        {investorid!=='' && (<CInputGroup>
          <CFormInput  value={investorid}></CFormInput>
          <CFormInput  value={investorname}></CFormInput>
          <CFormInput  value={status==='true' ? "Active":"Inactive"}></CFormInput>
          </CInputGroup>)}


    
      <CFormSelect onChange={handleChange} >
      
              <option >Select  Invetsment </option>
              {dati.map((e)=>{
                
     return(
      
      <>


     <option key={e.ObjectId}  value={e.investment}>{e.investment}({e.plan.toString().toUpperCase()})({e.userid})</option>
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
               
                
                <CTableHead color='danger'>
                  <CTableRow>
                    <CTableHeaderCell scope="col">S.no</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Plan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Amount Invested</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Months</CTableHeaderCell>
                   <CTableHeaderCell scope="col">Revenue</CTableHeaderCell>
                   <CTableHeaderCell scope="col">Balance Amount</CTableHeaderCell>
                   
                    <CTableHeaderCell scope="col">Cum.  Amt. Received</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
               
                  {ch.map((e,index)=>{


                  return(
                <CTableRow key={e.ObjectId}>
                      <CTableDataCell>{index+1}</CTableDataCell>   
                      <CTableDataCell>{k.toString().toUpperCase()}</CTableDataCell>
                      <CTableDataCell>{investment}</CTableDataCell>  
                      <CTableDataCell>{e}</CTableDataCell>  
                      <CTableDataCell>{r}</CTableDataCell> 
                      <CTableDataCell>{parseInt(m-index*r)}</CTableDataCell> 
                      <CTableDataCell>{e===new Date().getMonth() ? parseInt(index*r):0}</CTableDataCell> 
                      <CTableDataCell>{isLastDayOfMonth(e) ? "Paid":"Pending"}</CTableDataCell> 

                       
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
