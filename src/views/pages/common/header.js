import React from 'react'

const Header = () => {
  return (
    <div className="c_nav_header">
      <div className="c_header">
        <ul>
          <li>
            <a href="/">Home</a>
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
          <a href="/#/login" className="btn btn-primary px-4" type="button">
            Login
          </a>
        </span>
      </div>
    </div>
  )
}

export default Header
