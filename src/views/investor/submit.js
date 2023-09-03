import React,{useState} from 'react'
import { CAlert, CButton, CCard, CCardBody, CCardHeader, CFooter, CForm, CFormInput, CFormLabel, CFormSelect, CHeader, CModal, CModalBody, CModalFooter, CModalHeader } from '@coreui/react'

import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import AWS from 'aws-sdk'
import { Dialog, DialogActions } from '@mui/material';

const userData = localStorage.getItem('userData')
? JSON.parse(localStorage.getItem('userData'))
: null
console.log(userData.name)
let dir=userData.name
let bname="lbfprofiles/"+dir

const Submit=()=>{
    const [file, setFile] = useState(null);
    let [visible, setVisible] = useState(false)
    const navigate=useNavigate()



    // Function to upload file to s3
  const uploadFile = async (event) => {
    let button_id=event.currentTarget.id
    console.log(button_id);
    bname=bname+button_id
    // S3 Bucket Name
    const S3_BUCKET = bname;

    // S3 Region
    const REGION = "us-east-1";

    // S3 Credentials
    AWS.config.update({
      accessKeyId: "AKIAWPP2ILKA3SQDYNZ4",
      secretAccessKey: "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",
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters

    const params = {
      Bucket: S3_BUCKET,
      
      Key: file.name,
      Body: file,
    };

    const onclose = () => {
        setVisible(false)
        navigate('/investor')
      }

    // Uploading file to s3

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        // File uploading progress
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);
      // Fille successfully uploaded
     //alert("File uploaded successfully.");
     /* <CAlert color='secondary' dismissible visible={visible} onClose={onclose }>
        Registration successful.Wait for aprooval.
      </CAlert>*/
      setVisible(true)
      console.log(visible)
    });
  };
  // Function to handle file and store it to file state
  const handleFileChange = (e) => {
    // Uploaded file
    const file = e.target.files[0];
    // Changing file state
    setFile(file);
  };
  const handleclick=()=>{
    setVisible(false)
    navigate('/#/investment')
  }
    
    
    return(
        <>
        <CCard>
            <CCardHeader>
                Payment
            </CCardHeader>
            <CCardBody>
                Please Pay to
                <strong color='danger'> Bank</strong>
                <h5>Account Number:919020073403006</h5>

                <h5>IFSCUTIB:00020880</h5>
                <h5>Bank Name:Axis Bank</h5>
                <h5>UPI Id:8859441</h5>
                <CCard>
                    <CFormLabel>Upload Receipt or screen shot</CFormLabel>
                    <CFormInput type='file' placeholder='Upload Receipt/Screenshot' onChange={handleFileChange}></CFormInput></CCard>
                    <CFooter>
                        <CButton type='submit' id='Receipt' onClick={uploadFile}>Submit</CButton>
                    </CFooter>

            </CCardBody>
        </CCard>


<CModal visible={visible}>
<CModalHeader>
    <strong>Succeful</strong>
</CModalHeader>
<CModalBody>
Registration successful.Wait for aprooval.
</CModalBody>
<CModalFooter>
    <CButton href='/#/investor'>Close</CButton>
</CModalFooter>
</CModal>

</>


    )

}


export default Submit