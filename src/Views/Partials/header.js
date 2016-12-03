import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <header id="header">
        <h1>Through simplicity comes beauty.</h1>
          <nav id="nav">
            <ul>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
      </header>
    )
  }
}

export default Header