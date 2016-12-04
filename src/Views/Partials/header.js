import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <header id="header">
        <h1>Through simplicity comes beauty.</h1>
          <nav id="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/view/contact">Contact us</Link></li>
              <li><Link to="/view/create">Create new article</Link></li>
            </ul>
          </nav>
      </header>
    )
  }
}

export default Header