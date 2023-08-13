import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'

const Teams = () => {
  return (
    <div className="teams">
      <Header />

      <div className="logo">
        <img alt="log" src="./logo-lg.png" />
      </div>

      <div className="body">
        <img src="./team/p1.jpeg" alt="p1" className="team_people" />
        <img src="./team/p2.jpeg" alt="p2" className="team_people" />
        <img src="./team/p3.jpeg" alt="p3" className="team_people" />
        <img src="./team/p4.jpeg" alt="p4" className="team_people" />
        <img src="./team/p5.jpeg" alt="p5" className="team_people" />
      </div>
      <Footer />
    </div>
  )
}

export default Teams
