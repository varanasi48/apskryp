import React from 'react'
import { CButton, CCol } from '@coreui/react'

const Login = () => {
  return (
    <div className="l_container ">
      <div className="l_container__inner_container ">
        <div className="l_body ">
          <div className="l_body__divide d-flex flex-row justify-content-evenly">
            <div className="l_body__img">
              <img src="./logo-lg.png" alt="logo" />
            </div>
            <div className="l_body__form">
              <div className="l_body__form__user">
                <span className="fs-3 block">Username</span>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="l_body__form__pwd">
                <span className="fs-3 block">Password</span>
                <input type="password" placeholder="Password" />
              </div>

              <div>
                <CCol xs={6} className="l_body__form__btn">
                  <CButton color="primary" className="px-4">
                    Login!
                  </CButton>
                </CCol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login