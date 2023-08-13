import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'

const Contact = () => {
  return (
    <div className="contact">
      <Header />

      <div className="body">
        <div className="map">
          <h1>Reach Us</h1>
          <h2>Vissannapeta-52125</h2>
        </div>
        <div className="form-container">
          <div className="form-element">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter name" />
          </div>
          <div className="form-element">
            <label>Phone</label>
            <input type="tel" name="phone" placeholder="Enter phone" />
          </div>
          <div className="form-element">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter email" />
          </div>
          <div className="form-element">
            <label>Message</label>
            <textarea rows={4} name="message" placeholder="Type your message here" />
          </div>
          <div className="form-element">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact