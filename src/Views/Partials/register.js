import React, { Component } from 'react'
import { Link } from 'react-router'
import './css/login.css'

class Register extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <form className="login-login">
          <p className="login-title">Register</p>
          <input type="text" placeholder="Username" autoFocus />
          <i className="fa fa-user" />
          <input type="password" placeholder="Password" />
          <i className="fa fa-key" />
          <button>
            <i className="login-spinner" />
            <span className="login-state">Register</span>
          </button>
        </form>
        <Link to="/">Back to home</Link>
      </div>
    )
  }
}

export default Register