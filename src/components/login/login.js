import React, { Component } from 'react'
import { Link } from 'react-router'
import './css/login.css'

class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <form className="login-login" onSubmit={this.submitForm.bind(this)}>
          <p className="login-title">Log in</p>
          <input type="text" placeholder="Username" onChange={this.props.onChange} required="required" value={this.props.username}autoFocus />
          <i className="fa fa-user" />
          <input type="password" placeholder="Password" onChange={this.props.onChange} value={this.props.password}required="required"/>
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