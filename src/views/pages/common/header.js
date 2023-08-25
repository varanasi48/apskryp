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

import BaseSelect from "react-select";
import FixRequiredSelect from './required';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const options_state = [
  { value: 1, label: "Andhra Pradesh" },
  { value: 2, label: "Telangana" },
]


const options_district_AP = [
  { value: 0, label: "Select District" },
  { value: 1, label: "Alluri Sitharama Raju" },
  { value: 2, label: "Anakapalli" },
  { value: 3, label: "Ananthapuram" },
  { value: 4, label: "Annamayya" },
  { value: 5, label: "Bapatla" },
  { value: 6, label: "Chittoor" },
  { value: 7, label: "East Godavari" },
  { value: 8, label: "Eluru" },
  { value: 9, label: "Guntur" },
  { value: 10, label: "Kakinada" },
  { value: 11, label: "Kona Seema" },
  { value: 12, label: "Krishna" },
  { value: 13, label: "Kurnool" },
  { value: 14, label: "Manyam" },
  { value: 15, label: "NTR District" },
  { value: 16, label: "Nandyal" },
  { value: 17, label: "Palnadu" },
  { value: 18, label: "Prakasam" },
  { value: 19, label: "SPS Nellore" },
  { value: 20, label: "Sri Satyasai District" },
  { value: 21, label: "Sri. Balaji Dist" },
  { value: 22, label: "Srikakulam" },
  { value: 23, label: "Vishakhapatnam" },
  { value: 24, label: "Vizianagaram" },
  { value: 25, label: "West Godavari" },
  { value: 26, label: "YSR Kadapa" }
];
const options_district_TG = [
{value:1,label:"Adilabad"},
{value:2,label:"Kumuram Bheem"},
{value:3,label:"Mancherial"},
{value:4,label:"Nirmal"},
{value:5,label:"Nizamabad"},
{value:6,label:"Jagitial"},
{value:7,label:"Peddapalli"},
{value:8,label:"Kamareddy"},
{value:9,label:"Rajanna Sircilla"},
{value:10,label:"Karimnagar"},
{value:11,label:"Jayashankar"},
{value:12,label:"Sangareddy"},
{value:13,label:"Medak"},
{value:14,label:"Siddipet"},
{value:15,label:"Jangaon"},
{value:16,label:"Hanamkonda"},
{value:17,label:"Warangal"},
{value:18,label:"Mulugu"},
{value:19,label:"Bhadradri"},
{value:20,label:"Khammam"},
{value:21,label:"Mahabubabad"},
{value:22,label:"Suryapet"},
{value:23,label:"Nalgonda"},
{value:24,label:"Yadadri"},
{value:25,label:"Medchal–Malkajgiri"},
{value:26,label:"Hyderabad"},
{value:27,label:"Ranga Reddy"},
{value:28,label:"Vikarabad"},
{value:29,label:"Narayanpet"},
{value:30,label:"Mahabubnagar"},
{value:31,label:"Nagarkurnool"},
{value:32,label:"Wanaparthy"},
{value:33,label:"Jogulamba"}

];



const Header = () => {

  //const [basicModal, setBasicModal] = useState(false);

  //const toggleShow = () => setBasicModal(!basicModal);

  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState('');
  const [district,setDistrict]=React.useState(0);
  let data=''

  const handleChange = (event) => {
    setState(Number(event.target.value) || '');
  };
 console.log(state)
 if (state==1){
  data=options_district_AP
 }
 else
 {
  data=options_district_TG
 }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  
  
  
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
          
          <a onClick={handleClickOpen} className="btn btn-primary px-4" type="button">
            Login
          </a>
          <div>
     
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl required="required" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">State</InputLabel>
              <Select
                native
                value={state}
                onChange={handleChange}
                input={<OutlinedInput label="Select State" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="Select State" />
                <option value={1}>Andhra Pradesh</option>
                <option value={2}>Telangana</option>
                
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Age</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={data}
                onChange={handleChange}
                input={<OutlinedInput label="Age" />}
                 >
               
               {data.map(item => {
                  return (<option key={item.value} value={item.value}>{item.label}</option>);
              })}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
        </span>
      </div>
    </div>
    
  )
}

export default Header
