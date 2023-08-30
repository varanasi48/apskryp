import { CCard, CCardBody, CCardHeader, CTable, CTableBody, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, {useState} from 'react'
import axios from 'axios'
import {addMonths, eachMonthOfInterval, format,parseISO,parse,parseJSON} from 'date-fns'
import enGB from 'date-fns/locale/en-GB'
import { enIN } from 'date-fns/locale'


const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null




  

const Investment=()=>{
      
    const API_URL = process.env.REACT_APP_API_URL
    const [data, setData] = useState([]);
    const [error, setError] = useState('')
    const [sdate,setSdate]=useState('')
  
    
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
        //return data.data
        
        
        } catch (err) {
        setError(err.response.data.message)
      }
     
  
    }
    
     
      /*useEffect(() => {
        
       
       
  
        
  
     }, [])*/
  
     
    /*useEffect(()=>{
      getdata();
    },[])*/
    fetchUserData()
    
  
   console.log(data)
   

   
    return(
        <>
                        {data.map((e)=>{
                            let maturity_amount='' ;
                            let f_date_f='';
                            if(e.plan=='plan-a'){
                            maturity_amount=0.1*36*userData.investment

                            let d=format(new Date(e.createdAt),'dd-MMM-yy')
                            const f_date=addMonths(new Date(d),36)
                             f_date_f=format(new Date(f_date),'dd-MMM-yyyy')  
                            }
                            else
                            {
                                 maturity_amount=parseInt(0.1*24*userData.investment)

                            let d=format(new Date(e.createdAt),'dd-MMM-yy')
                            const f_date=addMonths(new Date(d),24)
                             f_date_f=format(new Date(f_date),'dd-MMM-yyyy') 

                            } 
                                 
                                               


                            
                           
                            
                            return(
                                <CCard key={e.userid}>
           <CCardHeader>
            Investment Details
            </CCardHeader> 
            <CCardBody>
                <CTable>
                    <CTableBody >
                                
                                <CTableRow>
                        <CTableHeaderCell scope="col"><strong>User ID</strong></CTableHeaderCell>
                        <CTableHeaderCell scope="col">{e.userid}</CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Name</strong></CTableHeaderCell>
                        <CTableHeaderCell>{e.plan}</CTableHeaderCell>
                    </CTableRow>
                    
                    
                    <CTableRow>
                        <CTableHeaderCell><strong>Amount Invested</strong></CTableHeaderCell>
                        <CTableHeaderCell>{e.investment}</CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Amount On Maturity</strong></CTableHeaderCell>
                        <CTableHeaderCell><strong>{maturity_amount}</strong></CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Date of First Payment</strong></CTableHeaderCell>
                        <CTableHeaderCell><strong>{format(new Date(e.createdAt),'dd-MMM-yyyy')}</strong></CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Date of Last Payment</strong></CTableHeaderCell>
                        <CTableHeaderCell><strong>{f_date_f}</strong></CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Pending Months</strong></CTableHeaderCell>
                        <CTableHeaderCell><strong>Name</strong></CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Status</strong></CTableHeaderCell>
                        <CTableHeaderCell><strong>{e.status}</strong></CTableHeaderCell>
                    </CTableRow>
                    
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
                                
                            )
                        })}
                    
                   
        </>

    )
    
}
export default Investment