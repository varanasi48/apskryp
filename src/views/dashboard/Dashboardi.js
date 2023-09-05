import React ,{ useState,useEffect }from 'react'
import axios from "axios"

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CProgressBar,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'


import WidgetsBrand from '../widgets/WidgetsBrand'
import { format, formatDistanceToNow, formatDistanceToNowStrict } from 'date-fns'
import { LinearProgress } from '@mui/material'




  

const Dashboardi = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const userData = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : null
    
 
  const API_URL = process.env.REACT_APP_API_URL
    const [data, setData] = useState([]);
    const [error, setError] = useState('')
    const [sdate,setSdate]=useState('')
    const [visible, setVisible] = React.useState(false);
    const [state, setState] = React.useState('');
    let [ch, setCh] = React.useState([]);
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
        //return data.data
        
        
        } catch (err) {
        setError(err.response.data.message)
      }
     
  
    }
    
     
    useEffect(()=>{
      fetchUserData();
    },[])
    
   if(data.length>0){
    console.log(data)
   }

   let k=''
   let p=''

   let r=''
   let s=''
   let start=new Date()
   const end = new Date()
   let loop = new Date(start);


  
   
 
   let plan=data.filter((e)=>{return e.userid===userData.userid})

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

r=investment*0.1
     start = new Date(p);
    
    const ends=end.setMonth(start.getMonth()+36)
    
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



    
  let kp=85


  
 

  

  return (
    <>
      
    
      <WidgetsBrand withCharts />
      
     
      
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Investment Information</CCardHeader>
            <CCardBody>
              <CRow>
                
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Total Plan-A Investment</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Total Plan-b Investment</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  

                  <div className="mb-5"></div>

                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                   
                  <CTableHeaderCell>Investment</CTableHeaderCell>
                    <CTableHeaderCell>Payment status</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {plan.map((item) => (
                    <CTableRow v-for="item in tableItems" key={item.ObjectId}>
                      
                      <CTableDataCell>
                        <div>{item.investment}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.status}</span> 
                          
                        </div>
                      </CTableDataCell>
                     
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>item.usage.value%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">k</small>
                          </div>
                        </div>
                       
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.status}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboardi
