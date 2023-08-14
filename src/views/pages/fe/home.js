import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="body">
        <div className="logo">
          <img alt="log" src="./logo-lg.png" />
        </div>
        <div className="content">
          <h1>Life is Beautiful</h1>
          <span>
            
          </span>
          <div className="content__glance">
            <div className="content__glance__item">
              <h3>3200 Investors </h3>
              <span>Servers with almost 100% up time.</span>
            </div>

            <div className="content__glance__item">
              <h3>200K</h3>
              <span>Lines of code created to deliver this to you.</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
