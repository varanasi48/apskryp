import React, { useState } from 'react'
import Header from '../common/header'
import Footer from '../common/footer'







const Contact = () => {
  return (
    
    <div className="contact">
      <Header />

      <div className="body">
        <div className="map">
          <h3>Reach Us</h3>
          <h4>Ambedkar Centre</h4>
          <h6>NTR District</h6>
          <h6>Andhra Pradesh</h6>
          <h6>Vissannapeta-52125</h6>
        </div>
        <div className="form-container">
          <div className="form-element">
            <label>Name</label>
            <input type="text" value={name} name="name" placeholder="Enter name" />
          </div>
          <div className="form-element">
            <label>Phone</label>
            <input type="tel" value={phone} name="phone" placeholder="Enter phone" />
          </div>
          <div className="form-element">
            <label>Email</label>
            <input type="email" value={email} name="email" placeholder="Enter email" />
          </div>
          <div className="form-element">
            <label>Message</label>
            <textarea rows={4} value={message} name="message" placeholder="Type your message here" />
          </div>
          <div className="form-element">
            <button className="btn btn-primary" >Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
  }
 


export default Contact
