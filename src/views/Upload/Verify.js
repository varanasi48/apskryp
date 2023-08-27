
import React ,{useState,useEffect} from "react"
import AWS from "aws-sdk"

AWS.config.update({
    accessKeyId: "AKIAWPP2ILKA3SQDYNZ4",
      secretAccessKey: "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",
    region: "us-east-1",
  });
  const s3 = new AWS.S3();

  const params = {
    Bucket: 'lbfprofiles',
     };

    
  

const Verify=()=>{
    
    
        const [listFiles, setListFiles] = useState([]);
      
        useEffect(() => {
          s3.listObjectsV2(params, (err, data) => {
            if (err) {
              console.log(err, err.stack);
            } else {
              setListFiles(data.Contents);
              console.log(data.Contents);
            }
          });
        }, []);
      
        return (
          <div className='card'>
            <div className='card-header'>SampleCompany Files</div>
            <ul className='list-group'>
              {listFiles &&
                listFiles.map((name, index) => (
                  <li className='list-group-item' key={index}>
                    {name.Key}
                  </li>
                ))}
            </ul>
          </div>
        );
      }
    

export default Verify;

