import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import './styles.css';
const  Loginsamp=()=> {
  return (
    <>
    <title>Login V1</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/*===============================================================================================*/}
    <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/bootstrap/css/bootstrap.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"
    />
    {/*===============================================================================================*/}
    <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/css-hamburgers/hamburgers.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/select2/select2.min.css"
    />
    {/*===============================================================================================*/}
    <link rel="stylesheet" type="text/css" href="css/util.css" />
    <link rel="stylesheet" type="text/css" href="css/main.css" />
    {/*===============================================================================================*/}
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt="">
            <img src="../images/logo-lg.png" alt="IMG" />
          </div>
          <form className="login100-form " id="form">
            <span className="login100-form-title">Member Login</span>
            <div className="wrap-input100 ">
              <input
                className="input100"
                type="text"
                name="phoneno"
                placeholder="Email"
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>
            <div className="wrap-input100 " data-validate="Password is required">
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div className="container-login100-form-btn">
              <button
                id="submit"
                name="submit"
                value="submit"
                className="login100-form-btn"
              >
                Login
              </button>
            </div>
            <div className="text-center p-t-12">
              <span className="txt1">Forgot</span>
              <a className="txt2" href="#">
                Username / Password?
              </a>
            </div>
            <div className="text-center p-t-136">
              <i className="fa fa-long-arrow-left m-l-5" aria-hidden="true" />
              <a className="txt2" href="../index.html">
                Back
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/*===============================================================================================*/}
    {/*===============================================================================================*/}
    {/*===============================================================================================*/}
    {/*===============================================================================================*/}
    {/*===============================================================================================*/}
  </>
  
  )
}

export default Loginsamp;