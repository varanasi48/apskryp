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
import WidgetsDropdown from '../widgets/WidgetsDropdowni'





  

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
  let plana=data.filter((e)=>{return e.userid===userData.userid && e.plan==='plan-a' && e.status===true})
  let planb=data.filter((e)=>{return e.userid===userData.userid && e.plan==='plan-b' && e.status===true})
  let plana_uv=data.filter((e)=>{return e.userid===userData.userid && e.plan==='plan-a' && e.status===false})
  let planb_uv=data.filter((e)=>{return e.userid===userData.userid && e.plan==='plan-b' && e.status===false})
  
  let amt_a=plana.reduce((a,v)=>a=a+parseInt(v.investment),0)
  console.log(amt_a)
  let amt_b=planb.reduce((a,v)=>a=a+parseInt(v.investment),0)

  let amt_b_f=planb_uv.reduce((a,v)=>a=a+parseInt(v.investment),0)
  let amt_a_f=plana_uv.reduce((a,v)=>a=a+parseInt(v.investment),0)
  

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
      
      <WidgetsDropdown />
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
                        <div className="fs-5 fw-semibold">{amt_a}</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Total Plan-B Investment</div>
                        <div className="fs-5 fw-semibold">{amt_b}</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  

                  <div className="mb-5" style={{color:'red'}}>
                    
                  </div>

                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                   
                  <CTableHeaderCell>Investment</CTableHeaderCell>
                    <CTableHeaderCell>Payment pending</CTableHeaderCell>
                    <CTableHeaderCell>Payment Received</CTableHeaderCell>
                    <CTableHeaderCell >Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {plan.map((item,index) => (
                    <CTableRow v-for="item in tableItems" key={item.ObjectId}>

<CTableDataCell>
                        <div>{index+1}</div>
                       </CTableDataCell>
                      
                      <CTableDataCell>
                        <div>{item.investment}</div>
                       </CTableDataCell>
                     
                      <CTableDataCell>
                         <div className="float-start">
                            <strong>Pending</strong>
                          </div>
                      </CTableDataCell>

                      <CTableDataCell>
                         <div className="float-start">
                            <strong>Received</strong>
                          </div>
                      </CTableDataCell>
                      
                      <CTableDataCell>
                      <div>Bank</div>
                       
                      </CTableDataCell>
                      <CTableDataCell>
                        
                        <strong>{item.status===false ? "Inactive":"Active"}</strong>
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
