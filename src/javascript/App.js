import React, { Component } from 'react'

import Navbar from './components/Navbar'
import HomeContainer from './containers/Home'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home: true
    }
    this.toggleContainer = this.toggleContainer.bind(this)
  }

  toggleContainer (container) {
    this.setState({home: !this.state.home})
  }

  render() {
    const {home} = this.state
    return (
      <div className="App">
        <Navbar toggleContainer={this.toggleContainer}/>
        {home ? <HomeContainer /> : null}
        <Footer />
      </div>
    );
  }
}

export default App
