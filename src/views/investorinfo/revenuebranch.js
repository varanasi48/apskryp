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
  CInputGroup,
  CHeaderText
} from '@coreui/react'
import { DocsExample } from 'src/components'
import {addMonths, eachMonthOfInterval, format,formatDistanceToNowStrict} from 'date-fns'
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios'


const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null
    
 
    
   


const Revenue = () => {

  const API_URL = process.env.REACT_APP_API_URL
  const [data, setData] = useState([]);
  const [error, setError] = useState('')
  let [uid,setuid]=useState('')
  let [investorname, setinvestorname] = useState('')
  let [status, setstatus] = useState('')
  let [investorid, setinvestorid] = useState('')
  const[idata,setiData]=useState([])

  

  


let [revenue,setRevenue]=useState('')  
let [investment,setInvestment]=useState('')
  
  

/*const inputuid=  (e)=>{
  setuid(e.target.value)

}*/
  

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

    fetch()

    fetchUserData()
    

  },[])

   console.log(userData.id)
  const info= idata.filter((e)=>{
    return userData.id===e.registeredBy
     
   })
   console.log(info)

   let idd=''

info.map((e)=>{
    
    idd=e.userid
})
console.log(idd)

console.log(data)



       let k=''
       let p=''
       let ch=[]
       let r=''
       let s=''

       
 
           
         let totla=investment*0.1*36

    
         const handleChange = (e) => {
          setInvestment(e.target.value)
         
          
        }  
        let plan=[]
        let dati=[]
  //data filter
     //console.log(data)
     
         dati=data.filter(e=>{return  e.userid===idd }) 
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
      {plan[0].status===false ? s='Pending': s='Aprooved'}
      k=plan[0].plan
      p=plan[0].createdAt

if(k=="plan-a"){

  r=investment*0.01
      const start = new Date(p);
      const end = new Date()
      const ends=end.setMonth(start.getMonth()+36)
      
      let loop = new Date(start);
      
            for(loop;loop<=ends;loop.setMonth(loop.getMonth()+1)){
              ch.push(format(new Date(loop.toLocaleDateString()),"MMM-yyyy"));
                  
                 }
                }
                else{
                  r=investment*0.01
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
    


    
      <CFormSelect onChange={handleChange} >
      
              <option >Select  Invetsment </option>
              {dati.map((e)=>{
                
     return(
      
      <>


     <option key={e.ObjectId}  value={e.investment}>{e.investment}({e.plan})({e.userid})</option>
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
                <CHeaderText>{investment}</CHeaderText>
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
               
                  {ch.map((e,index)=>{

                  return(
                <CTableRow key={e.ObjectId}>
                      <CTableDataCell>{index+1}</CTableDataCell>   
                      <CTableDataCell>{k.toString().toUpperCase()}</CTableDataCell>
                      <CTableDataCell>{investment}</CTableDataCell>  
                      <CTableDataCell>{e}</CTableDataCell>  
                      <CTableDataCell>{r}</CTableDataCell> 
                      <CTableDataCell>{s}</CTableDataCell> 
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
