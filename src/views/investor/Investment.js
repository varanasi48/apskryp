import { CCard, CCardBody, CCardFooter, CCardHeader, CModal, CModalFooter, CModalHeader,CTableDataCell, CModalTitle,CButton,CModalBody, CTable, CTableBody, CTableHeaderCell, CTableRow, CTableHead } from '@coreui/react'
import React, {useState,useEffect} from 'react'
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
    const [visible, setVisible] = React.useState(false);
    const [state, setState] = React.useState('');
    let [ch, setCh] = React.useState([]);


    
    
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
    
     
    useEffect(()=>{
      fetchUserData();
    },[])
    
  
    return(
        <>
                        {data.map((e)=>{
                          
                          if(e.userid===userData.userid ){
                             let maturity_amount='' ;
                           let f_date_f='';
                           
                            if(e.plan=='plan-a'){
                            maturity_amount=0.1*36*e.investment

                            let d=format(new Date(e.createdAt),'dd-MMM-yy')
                            const f_date=addMonths(new Date(d),36)
                             f_date_f=format(new Date(f_date),'dd-MMM-yyyy')  
                            }
                            else
                            {
                                 maturity_amount=parseInt(2*e.investment)

                            let d=format(new Date(e.createdAt),'dd-MMM-yy')
                            const f_date=addMonths(new Date(d),12)
                             f_date_f=format(new Date(f_date),'dd-MMM-yyyy') 

                            } 
                            let loop = new Date(data.createdAt);

                            setCh = []
                         
                            for(loop;loop<=f_date_f;loop.setMonth(loop.getMonth()+1)){
                             ch.push(loop.toLocaleDateString());
                                 
                                }
                                

                            return(
                                <CCard key={e._id}>
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
                        <CTableHeaderCell><strong>Plan</strong></CTableHeaderCell>
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
                        <CTableHeaderCell><strong>{e.plan==='plan-a' ? "36 Months":"24 Months"}</strong></CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Status</strong></CTableHeaderCell>
                        <CTableHeaderCell><strong>
                          {e.status===false ? 'Pending': 'Aprooved'}
                          </strong></CTableHeaderCell>
                    </CTableRow>
                    
                    </CTableBody>
                </CTable>
            </CCardBody>
            <CCardFooter>
                <button onClick={() => setVisible(!visible)}>Statement</button>
            </CCardFooter>
        </CCard>
                                
                            )
 } })}

    

<CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle>Modal title</CModalTitle>
      </CModalHeader>
      
      <CModalBody>
      
        <CTable>
            
                <CTableHead color='purple'>
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
                
            </CTableBody>
        </CTable>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CButton>
        <CButton color="primary">Download</CButton>
      </CModalFooter>
    </CModal>

                   
        </>

    )
    
}
export default Investment