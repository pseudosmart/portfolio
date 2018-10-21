import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="social-icons">
          <a href="https://twitter.com/_SamSmart" target="_blank"><i className="fab fa-twitter-square" /></a>
          <a href="https://github.com/samsmarthx" target="_blank"><i className="fab fa-github-square" /></a>
          <a href="mailto:sam.j.b.smart@gmail.com"><i className="fas fa-envelope-square" /></a>
        </div>
      </div>
    );
  }
}

export default Footer
