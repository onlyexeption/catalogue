import React, { Component } from 'react'
import { Link } from 'react-router'
import '../login/css/login.css'

class LoginForm extends Component {
  render() {
    return (
        <div className="login-wrapper">
            <form className="login-login" onSubmit={this.props.onSubmitt}>
                <p className="login-title">Log in</p>

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.props.onChange}
                    value={this.props.username}
                    required="required" autoFocus />

                <i className="fa fa-user" />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.props.onChange}
                    value={this.props.password}
                    required="required"/>

                <i className="fa fa-key" />

                <button>
                    <i className="login-spinner" />
                    <span className="login-state">Log in</span>
                </button>
            </form>
            <Link to="/">Back to home</Link>
        </div>
    )
  }
}

export default LoginForm