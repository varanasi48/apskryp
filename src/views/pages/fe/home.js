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
              <a href='/#/about'><h3>Start the amazing journey  </h3></a>
              
            </div>

            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
