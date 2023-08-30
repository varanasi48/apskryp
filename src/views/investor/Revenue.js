import React ,{useState}from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import {addMonths, eachMonthOfInterval, format} from 'date-fns'

const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null
    const start = new Date();
    const end = new Date()
    const ends=end.setMonth(start.getMonth()+10)
    
    let loop = new Date(start);
   
   
    
    
       /* while (loop <= ends) {
           console.log(format(loop,'MMM/yyyy'));
           let newDate = loop.setMonth(loop.getMonth() + 1);
           loop = new Date(newDate);
       }*/

      

       const addmonths=addMonths(start,50)
       console.log(loop)
       console.log(addmonths)
       
     
       

       /* for(loop;loop<=ends;loop.setMonth(loop.getMonth()+1)){
            console.log(loop)
            
           }*/

          const result=eachMonthOfInterval({start:loop,end:addmonths})
          console.log(result)
          

    

  

    
    
   


const Revenue = () => {
    
  return (
    
   
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Payments</strong> 
          </CCardHeader>
          
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
         
          <CCardBody>
            
            
                         
            
              <CTable>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col">S.no</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Plan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Amount Invested</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Months</CTableHeaderCell>
                   <CTableHeaderCell scope="col">Revenue</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
               
                    
                <CTableRow>
                    <CTableHeaderCell scope="col">S.no</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Plan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Amount Invested</CTableHeaderCell>
             
            
                    
               
                    
                        <CTableHeaderCell scope="col" key='i'>date[0]</CTableHeaderCell>

                  
                    

                 
                   
               
                    
                   <CTableHeaderCell scope="col">Revenue</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                   
                   
        
                  
                 
                </CTableBody>
              </CTable>
          
          </CCardBody>
        </CCard>
      </CCol>
     
    </CRow>
    
  
  )
}

export default Revenue
