import { CButton, CFormLabel, CFormSelect } from '@coreui/react'
import { RadioButtonCheckedOutlined } from '@mui/icons-material'
import React from 'react'


const Deduction=()=>{
 let k= ''
    return(
 <>
        <CFormLabel>
            Enter Deduction
        </CFormLabel>
        <CFormSelect>
            <option>Plan-A</option>
            <option>Plan-B</option>
        </CFormSelect>
        <CButton></CButton>

</>

    )




    
}
export default Deduction