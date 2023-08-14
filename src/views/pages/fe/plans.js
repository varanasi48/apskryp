import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import { CCard,CCardHeader,CCardBody ,CCardFooter,CCardSubtitle} from '@coreui/react'


const Plans = () => {
  return (
    <div className="plans">
      <Header />

      <div className="logo">
        <img alt="log" src="./logo-lg.png" />
      </div>
      <div className="body">
        <h1>Plans</h1>
        <div className="plan_box">
        
          <div className="plan_box_detail">
            <CCard className='mb-4'>
              <CCardHeader>
          <h2 > Plan-A</h2>
          </CCardHeader>
          <CCardSubtitle >
          Plan Details
          </CCardSubtitle>
          <CCardBody>
          Plan Value:Rs.100000<br/>
          Returns:Rs.10000x36Months<br/>
          Total Return:Rs.360000
          </CCardBody>
          </CCard>
           <CCardFooter>
            <a href="#/register" className="btn btn-light plan_box_detail_join">
             
              Join Us
            </a>
            </CCardFooter>
          </div>
          <div className="plan_box_detail">
            <a href="#/register" className="btn btn-light plan_box_detail_join">
              Join Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Plans
