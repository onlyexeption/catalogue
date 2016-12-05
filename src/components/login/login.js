import React, { Component } from 'react'
import { Link } from 'react-router'
import './css/login.css'

class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <form className="login-login" onSubmit={this.submitForm.bind(this)}>
          <p className="login-title">Log in</p>
          <input type="text" placeholder="Username" autoFocus />
          <i className="fa fa-user" />
          <input type="password" placeholder="Password" />
          <i className="fa fa-key" />
          <button id="buttonLogin">
            <i className="login-spinner" />
            <span className="login-state">Log in</span>
          </button>
        </form>
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  submitForm(event) {
    event.preventDefault()
    console.log(event.target)
  }
}

export default Login