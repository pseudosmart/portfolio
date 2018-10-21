import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    const {toggleContainer} = this.props
    return (
      <div className="navbar">
        <ul>
          <li onClick={toggleContainer}>Home</li>
          <li>CV</li>
          <li>Projects</li>
          <li>Other</li>
        </ul>
      </div>
    );
  }
}

export default Navbar
