import React from 'react'
import CIcon from '@coreui/icons-react'

import { cibInstagram, cibTwitter, cibFigma } from '@coreui/icons'

// import { cibInstagram } from './cib-instagram'
// import { cibTwitter } from './cib-twitter'
// import { cibFigma } from './cib-figma'

const Header = () => {
  return (
    <div className="c_footer_wrapper">
      <div className="c_footer">
        <div className="footer">© 2023 Life is Beautiful, Inc. All rights reserved.</div>
        <div className="footer_icon">
          <CIcon icon={cibInstagram} size="xl" />
          <CIcon icon={cibTwitter} size="xl" />
          <CIcon icon={cibFigma} size="xl" />
        </div>
      </div>
    </div>
  )
}

export default Header
