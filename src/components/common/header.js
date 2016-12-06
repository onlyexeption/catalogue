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
              <li><Link to="/view/about">About us</Link></li>
              <li><Link to="/viewArticles">See all posts</Link></li>
              <li><Link to="/createNew">Create</Link></li>
            </ul>
          </nav>
      </header>
    )
  }
}

export default Header