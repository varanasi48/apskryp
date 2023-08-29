import { CCard, CCardBody, CCardHeader, CTable, CTableBody, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'


const userData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null
const maturity_amount=0.1*36*userData.investment
console.log(userData)

const Investment=()=>{
    return(
        <CCard>
           <CCardHeader>
            Investment Details
            </CCardHeader> 
            <CCardBody>
                <CTable>
                    <CTableBody>
                    <CTableRow>
                        <CTableHeaderCell scope="col"><strong>User ID</strong></CTableHeaderCell>
                        <CTableHeaderCell scope="col">{userData.userid}</CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Name</strong></CTableHeaderCell>
                        <CTableHeaderCell>{userData.name}</CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>District</strong></CTableHeaderCell>
                        <CTableHeaderCell>{userData.district}</CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Plan</strong></CTableHeaderCell>
                        <CTableHeaderCell>{userData.plan}</CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Amount Invested</strong></CTableHeaderCell>
                        <CTableHeaderCell>{userData.investment}</CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Amount On Maturity</strong></CTableHeaderCell>
                        <CTableHeaderCell><strong>{maturity_amount}</strong></CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Date of First Payment</strong></CTableHeaderCell>
                        <CTableHeaderCell><strong>Name</strong></CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Date of Last Payment</strong></CTableHeaderCell>
                        <CTableHeaderCell><strong>Name</strong></CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Pending Months</strong></CTableHeaderCell>
                        <CTableHeaderCell><strong>Name</strong></CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell><strong>Joined By</strong></CTableHeaderCell>
                        <CTableHeaderCell><strong>Name</strong></CTableHeaderCell>
                    </CTableRow>
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>

    )
    
}
export default Investment