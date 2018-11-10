import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.links = ['CV', 'Projects', 'Other']
  }
  
  render() {
    return (
      <div className="navbar">
        <ul>
          <li><Link to='/'>Home</Link></li>
          {
            this.links.map(link => (
              <li key={link}><Link to={link}>{link}</Link></li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Navbar
