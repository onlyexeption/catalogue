import React, { Component } from 'react'
import { Link } from 'react-router'
import '../login/css/login.css'

class Register extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <form className="login-login" onSubmit={this.props.onSubmit}>
          <p className="login-title">Register</p>

          <input type="text" name="username" placeholder="Username" onChange={this.props.onChange} value={this.props.username}  required="required" autoFocus />

          <i className="fa fa-user" />

          <input type="password" name="password" placeholder="Password" onChange={this.props.onChange} value={this.props.password} required="required"/>

          <i className="fa fa-key" />

          <input type="password" name="repeat" placeholder="Password" onChange={this.props.onChange} value={this.props.repeat}  required="required" />

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