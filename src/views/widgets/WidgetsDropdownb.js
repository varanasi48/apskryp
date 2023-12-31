import React, {useState,useEffect} from 'react'

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'
import axios from 'axios'
//import { useEffect } from 'react'

const WidgetsDropdown = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const userData = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : null
    
 
  
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


   


  let plan=ch.filter((e)=>{return e.userid===userData.userid })
  
  let plana=ch.filter((e)=>{return  e.plan==='plan-a' })
  let planb=ch.filter((e)=>{return  e.plan==='plan-b' })
  let plana_uv=idata.filter((e)=>{return e.userid===userData.userid && e.plan==='plan-a' })
  let planb_uv=idata.filter((e)=>{return e.userid===userData.userid && e.plan==='plan-b' })
  
  let amt_a=plana.reduce((a,v)=>a=a+parseInt(v.investment),0)
  
  let amt_b=planb.reduce((a,v)=>a=a+parseInt(v.investment),0)

  let amt_b_f=planb_uv.reduce((a,v)=>a=a+parseInt(v.investment),0)
  let amt_a_f=plana_uv.reduce((a,v)=>a=a+parseInt(v.investment),0)

    

  plan.map((e)=>{

  })

  

  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="primary"
          value={
            <>
              { amt_a}<br/>
              
            
            <label> Plan-A</label>
            </>
          }
          title={"Estimated Return:"+"₹"+(parseInt(amt_a)*3.6)}
         
         
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-primary'),
                    data: [10,10,10,10,10,10,10],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 0,
                    max: 100,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              {amt_b} <br/>
              <label> Plan-B</label>
             
            </>
          }
          title={"Estimated Return:"+"₹"+(parseInt(amt_b)*2)
                  }
          
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: [1, 18, 9, 17, 34, 22, 11],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 39,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              ₹{amt_a_f}
             
            </>
          }
          title="Self Plan-A Investments"
          
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: [5,5,5,5,5],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 0,
                    max: 10,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              ₹{amt_b_f}
              
            </>
          }
          title="Self Plan-B Investments"
         
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: [1, 18, 9, 17, 34, 22, 11],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 39,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              ₹{amt_a_f}
             
            </>
          }
          title="Social Fund"
          
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: [5,5,5,5,5],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 0,
                    max: 10,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      
     
      
      
    </CRow>
  )
}

export default WidgetsDropdown
