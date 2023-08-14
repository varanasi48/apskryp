import React, { useState } from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import { Link } from 'react-router-dom';

const initialFormData = Object.freeze({
  name: "",
  phone: "",
  email:"",
  message:""
});





const Contact = () => {
  const [formData, updateFormData] = React.useState(initialFormData);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
  
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    // ... submit to API or something
    <Link
  to={{
    pathname: "backend/contacthandle",
    state: formData // your data array of objects
  }}
></Link>
    
  };
  


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
            <input type="text"  name="name" onChange={handleChange} placeholder="Enter name" />
          </div>
          <div className="form-element">
            <label>Phone</label>
            <input type="tel"  name="phone" onChange={handleChange} placeholder="Enter phone" />
          </div>
          <div className="form-element">
            <label>Email</label>
            <input type="email"  name="email" onChange={handleChange} placeholder="Enter email" />
          </div>
          <div className="form-element">
            <label>Message</label>
            <textarea rows={4}  name="message" onChange={handleChange} placeholder="Type your message here" />
          </div>
          <div className="form-element">
            <button className="btn btn-primary" onClick={handleSubmit} >Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
  }
 


export default Contact
