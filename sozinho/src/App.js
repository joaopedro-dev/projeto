import React, { Component } from 'react'
import './App.scss'
import HeaderNav from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'

class App extends Component {
  render(){
    return (
      <div className="App">
        <HeaderNav/>
        <Dashboard/>
      </div>
    )
  }
}

export default App;
