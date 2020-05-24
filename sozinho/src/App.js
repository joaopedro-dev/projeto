import React, { Component } from 'react'
import './App.scss'
import HeaderNav from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
// import Footer from './Components/Footer/Footer'
// import Aside from './Components/Aside/Aside'

class App extends Component {
  render(){
    return (
      <div className="container">
          <HeaderNav/>
          <Dashboard/>
          {/* <Aside/> */}
          {/* <Footer/> */}
      </div>  
    )
  }
}

export default App;
