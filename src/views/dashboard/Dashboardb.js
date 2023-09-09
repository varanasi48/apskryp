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
import WidgetsDropdown from '../widgets/WidgetsDropdownb'
import { check } from 'prettier'





  

const Dashboardb = () => {

  const API_URL = process.env.REACT_APP_API_URL
  const [data, setData] = useState([]);
  const [idata, setiData] = useState([]);
  const [error, setError] = useState('')

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const userData = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : null
    
 console.log(userData.id)


 const fetch = async () => {
  try {
    // Send data to the register API with JWT token in header
    const data = await axios.get(
      `${API_URL}/users`,
      {params:{registeredBy:userData.id}},
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

useEffect(()=>{

  fetch()
  fetchi()

 
},[])
  let ch=[]
  let ia=0
  let ib=0
  let ic=0

  const info=data.map(e => {
    let idd=e.userid
    ch=idata.filter(e=>e.userid===idd)
   
  }
    ) 
  console.log(info)
  console.log(ch)
  
  

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
                        <div className="text-medium-emphasis small">Total Plan-A Investors</div>
                        <div className="fs-5 fw-semibold">pa.length</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Total Plan-b Investors</div>
                        <div className="fs-5 fw-semibold">planb.length</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Total Plan-A & Plan-B Investors</div>
                        <div className="fs-5 fw-semibold">planb.length</div>
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
                  <CTableHeaderCell>User</CTableHeaderCell>
                  <CTableHeaderCell>Investment</CTableHeaderCell>
                  <CTableHeaderCell>Plan</CTableHeaderCell>
                    <CTableHeaderCell>Payment pending</CTableHeaderCell>
                    <CTableHeaderCell>Payment Received</CTableHeaderCell>
                    <CTableHeaderCell >Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {ch.map((item) => (
                    <CTableRow v-for="item in tableItems" key={item.ObjectId}>

                      <CTableDataCell>
                        <div>{item.userid}</div>
                       </CTableDataCell>

                       <CTableDataCell>
                        <div>{item.plan}</div>
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

export default Dashboardb
