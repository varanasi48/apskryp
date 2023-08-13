import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'

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
            <a href="/plans" className="btn btn-light plan_box_detail_join">
              Join Us
            </a>
          </div>
          <div className="plan_box_detail">
            <a href="/plans" className="btn btn-light plan_box_detail_join">
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
