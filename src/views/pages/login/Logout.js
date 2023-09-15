import React, { useEffect, useState } from 'react'
import axios from 'axios'

function LogoutPage() {
  function logout() {
    // Remove the user data and JWT token from localStorage
    localStorage.removeItem('userData')

    // Remove the token from the default axios headers
    delete axios.defaults.headers.common['Authorization']

    // Optionally, redirect user to login page or another public page
    window.location = 'http://lbfkryptoz.com'
  }

  useEffect(() => {
    logout()
    return logout()
  }, [])
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Logging Out</h4>
          <p className="card-text">You are being logged out...</p>
        </div>
      </div>
    </div>
  )
}

export default LogoutPage
