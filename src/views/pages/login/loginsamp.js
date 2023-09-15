import React,{useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login=()=> {

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
    <MDBContainer fluid style={{backgroundImage:"url('/lbfbg.gif')"}}>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto ' style={{borderRadius: '3rem', maxWidth: '400px',opacity:'80%'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address'  name="phoneno"
                    onChange={(e) => {
                      setPhoneno(e.target.value)
                    }} type="text" size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password'  name="password"
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}  type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' type="submit" onClick={handleLoginSubmit}>
                Login
              </MDBBtn>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login