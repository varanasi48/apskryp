import { CCard, CContainer, CForm,CTableRow, CFormLabel,CFormInput,CInputGroupText,CFormTextarea, CInputGroup, CTable ,CRow,CCol,CCardImage,CCardBody,CCardTitle,CCardText, CCardHeader, CTableHeaderCell, CTableDataCell} from '@coreui/react'
import { Label, Padding, PaddingRounded, PrintDisabledSharp } from '@mui/icons-material'
import React,{useRef, useState} from 'react'
import { useLocation } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

//import { ComponentToPrint } from './ComponentToPrint';

const Agreement=()=>{
    const [id,setId]=useState('')
    const componentRef = useRef();
    let location=useLocation()

    //this.setState((state,props)=>({id:location.state.id}))


return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  )


    
}


export class ComponentToPrint extends React.PureComponent {
   
   
    render() {
        
        return(
            <>
            
            <CCard name="card">
    <CContainer>
        <CCardHeader>
      <CRow className="align-items-start">
        <CCol><CCardImage src={'./logo-lg.png'} style={{width:'40%'}}/></CCol>
        <CCol ><CCardTitle className='text-center' ><strong>Life is beautiful</strong></CCardTitle></CCol>
        <CCol>District:</CCol>
      </CRow>
      </CCardHeader>
      <CCardBody>
      <CRow className="justify-content-end">
      <CCol xs={4}>One of three columns</CCol>
        
        <CCol xs={8}><CInputGroup className="mb-3">
      <CInputGroupText id="basic-addon1">UserID</CInputGroupText>
      <CFormInput placeholder="User ID" aria-label="Username" aria-describedby="basic-addon1"/>
    </CInputGroup>
    
    <CInputGroup className="mb-3">
    <CInputGroupText id="basic-addon2">Name</CInputGroupText>
      <CFormInput placeholder="Full Name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
      
    </CInputGroup>
    
    <CFormLabel htmlFor="basic-url">Investment details</CFormLabel>
    <CTable bordered borderColor="dark">
       
    <CTableRow>
        <CTableDataCell scope='col'>Investment Amount</CTableDataCell>
        <CTableDataCell>1</CTableDataCell>
    
    </CTableRow>
    <CTableRow>
        <CTableHeaderCell>Plan</CTableHeaderCell>
        <CTableHeaderCell>1</CTableHeaderCell>
    
    </CTableRow>
    <CTableRow>
        <CTableHeaderCell>Date of Activation</CTableHeaderCell>
        <CTableHeaderCell>1</CTableHeaderCell>
    
    </CTableRow>
    <CTableRow>
        <CTableHeaderCell>Maturity Amount</CTableHeaderCell>
        <CTableHeaderCell>1</CTableHeaderCell>
    
    </CTableRow>
    <CTableRow>
        <CTableHeaderCell>Maturity Date</CTableHeaderCell>
        <CTableHeaderCell>1</CTableHeaderCell>
    
    </CTableRow>
    <CTableRow>
        <CTableHeaderCell>Monthly Payment</CTableHeaderCell>
        <CTableHeaderCell>1</CTableHeaderCell>
    
    </CTableRow>
    </CTable>
    
    <CInputGroup className="mb-3">
    <CInputGroupText>Branch Manager</CInputGroupText>
      <CFormInput placeholder="Branch Manager" aria-label="Username"/>
      <CInputGroupText>Phone</CInputGroupText>
      <CFormInput placeholder="Phone Number" aria-label="Server"/>
    </CInputGroup>
    
    <CFormLabel htmlFor="basic-url">Bank details</CFormLabel>
    <CTable >
       
    <CTableRow>
        <CTableDataCell></CTableDataCell>
        <CTableDataCell scope='col'>Account Number</CTableDataCell>
        <CTableDataCell>1</CTableDataCell>
    
    </CTableRow>
    <CTableRow>
    <CTableDataCell></CTableDataCell>
        <CTableHeaderCell>Bank Name</CTableHeaderCell>
        <CTableHeaderCell>1</CTableHeaderCell>
    
    </CTableRow>
    <CTableRow>
    <CTableDataCell></CTableDataCell>
        <CTableHeaderCell>IFSC CODE</CTableHeaderCell>
        <CTableHeaderCell>1</CTableHeaderCell>
    
    </CTableRow>
    <CTableRow>
    <CTableDataCell></CTableDataCell>
        <CTableHeaderCell>Branch</CTableHeaderCell>
        <CTableHeaderCell>1</CTableHeaderCell>
    
    </CTableRow>
    
    </CTable>
    </CCol>
       
      </CRow>
      <CRow className="justify-content-end">
     
      </CRow>
      <CRow className="align-items-end">
        <CCol>
          <CCardTitle>Investor</CCardTitle>
          <CFormInput placeholder='Signature'/>
        </CCol>
        <CCol>
          <CCardTitle>Branch Manager</CCardTitle>
          <CFormInput placeholder='Signature'/>
        </CCol>
        <CCol>
          <CCardTitle>Management
          </CCardTitle>
          <CFormInput placeholder='Signature'/>
        </CCol>
      </CRow>
      </CCardBody>
    
    </CContainer>
            </CCard>
            
            </>
     )
    }
  }



export default Agreement
