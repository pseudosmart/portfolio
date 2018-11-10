import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './containers/Home'
import CV from './containers/CV'
import Projects from './containers/Projects'
import Other from './containers/Other'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/CV' component={CV} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Other' component={Other} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
