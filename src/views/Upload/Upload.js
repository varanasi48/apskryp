import React from "react";
import AWS from "aws-sdk";
import { useState } from "react";

function FileUpload() {
  // Create state to store file
  const [file, setFile] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL
  // Retrieve data from localStorage
  const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null
console.log(userData.name)
let dir=userData.name
let bname="lbfprofiles/"+dir



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
      alert("File uploaded successfully.");
    });
  };
  // Function to handle file and store it to file state
  const handleFileChange = (e) => {
    // Uploaded file
    const file = e.target.files[0];
    // Changing file state
    setFile(file);
  };
  return (
    <div className="App">
      <div>
        <input type="file" onChange={handleFileChange} />
        <button id="pic" onClick={uploadFile}>Upload Pic</button>
      </div>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button id="receipt" onClick={uploadFile}>Upload receipt</button>
      </div>
    </div>
  );
}

export default FileUpload;