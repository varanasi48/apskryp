import React from 'react'
import { CAlert, CButton, CCol } from '@coreui/react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const API_URL = process.env.REACT_APP_API_URL
  const navigate = useNavigate();
  const [phoneno, setPhoneno] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [user, setUser] = useState(null)

  const handleLoginSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(`${API_URL}/login`, {
        phoneno: phoneno.trim(),
        password: password.trim(),
      })

      // Save the received data in user's browser (localStorage) and state
      localStorage.setItem('userData', JSON.stringify(response.data))
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      setUser(response.data)
	  
    console.log(response.data.usertype)
    if(response.data.usertype=='admin'){
      navigate(`/dashboard`);
      
    }
    if(response.data.usertype=='branch_manager'){
      navigate(`/dashboardb`);

    }
    if(response.data.usertype=='investor'){
      navigate(`/dashboardi`);

    }
    } catch (err) {
      // Handle the error by updating the error state
      setError(err.response.data)
    }
  }
  return (
    <form>
      <div className="l_container ">
        <div className="l_container__inner_container ">
          <div className="l_body ">
            <div className="l_body__divide d-flex flex-row justify-content-evenly">
              <div className="l_body__img">
                <img src="./logo-lg.png" alt="logo" />
              </div>
              <div className="l_body__form">
                {error && <CAlert color="danger">{error}</CAlert>}
                <div className="l_body__form__user">
                  <span className="fs-3 block">Username</span>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="username"
                    onChange={(e) => {
                      setPhoneno(e.target.value)
                    }}
                  />
                </div>
                <div className="l_body__form__pwd">
                  <span className="fs-3 block">Password</span>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                </div>

                <div>
                  <CCol xs={6} className="l_body__form__btn">
                    <CButton
                      color="primary"
                      className="px-4"
                      type="submit"
                      onClick={handleLoginSubmit}
                    >
                      Login!
                    </CButton>
                  </CCol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login
