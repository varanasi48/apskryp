import React ,{useState} from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { Button } from '@mui/material';
import BaseSelect from "react-select";
import FixRequiredSelect from './required';




const options_state = [
  { value: 1, label: "1 - One" },
  { value: 2, label: "2 - Two" },
  { value: 3, label: "3 - Three" }
];
const options_district = [
  { value: 1, label: "1 - One" },
  { value: 2, label: "2 - Two" },
  { value: 3, label: "3 - Three" }
];

const Select = (props) => (
  <FixRequiredSelect {...props} SelectComponent={BaseSelect} />
);

const Header = () => {

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  
  
  return (
   
    <div className="c_nav_header">
      
      <div className="c_header">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#/about">About</a>
          </li>
          <li>
            <a href="/#/plans">Plans</a>
          </li>
          <li>
            <a href="/#/teams">Team</a>
          </li>
          <li>
            <a href="/#/contact-us">Contact Us</a>
          </li>
        </ul>

        <span>
          
          <a onClick={toggleShow} className="btn btn-primary px-4" type="button">
            Login
          </a>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent>
            <MDBModalHeader>
            <MDBModalTitle>
              <strong>
                Select Districts
              </strong>
            </MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <label><h3>Select State</h3></label>
            <Select  options={options_state} required />
  
<label><h3>Select District</h3></label>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example " required>
  <option selected>Select District</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
            </MDBModalBody>
            
            <MDBModalFooter>
            <Button href="/#/login" variant="contained">Proceed</Button>
            </MDBModalFooter>
            </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </span>
      </div>
    </div>
    
  )
}

export default Header
