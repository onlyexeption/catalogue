import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    if(sessionStorage.getItem("authToken"))
    return (
      <header id="header">
        <h1>Through simplicity comes beauty.</h1>
          <nav id="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/viewArticles">See all posts</Link></li>
              <li><Link to="/createNew">Create</Link></li>
              <li><p>Now you can see through everything!</p></li>
            </ul>
          </nav>
      </header>
    )
    else{
      return(
      <header id="header">
        <h1>Through simplicity comes beauty.</h1>
        <nav id="nav">
          <ul>
            <li><Link to="/">Home</Link>    |</li>
            <li><p>Sign in to Continue!</p></li>
          </ul>
        </nav>
      </header>)
    }
  }
}

export default Header