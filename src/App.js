import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Logout = React.lazy(() => import('./views/pages/login/Logout'))
const Redirect = React.lazy(() => import('./views/redirection/redirect'))


const Loginsamp = React.lazy(() => import('./views/pages/login/loginsamp'))
const Home = React.lazy(() => import('./views/pages/fe/home'))
const About = React.lazy(() => import('./views/pages/fe/about'))
const Plans = React.lazy(() => import('./views/pages/fe/plans'))
const Teams = React.lazy(() => import('./views/pages/fe/teams'))
const Contact = React.lazy(() => import('./views/pages/fe/contact'))
//const Select = React.lazy(() => import('./views/pages/common/selectop'))

const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/logout" name="Login Page" element={<Logout />} />
            <Route exact path="/loginsamp" name="Login Page" element={<Loginsamp />} />
            <Route exact path="/redirect" name="Login Page" element={<Redirect />} />
            
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="/" name="Home" element={<Home />} />
            <Route path="/about" name="Home" element={<About />} />
            <Route path="/plans" name="Home" element={<Plans />} />
            <Route path="/teams" name="Home" element={<Teams />} />
            
            
            
            <Route path="/contact-us" name="Home" element={<Contact />} />
            
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
