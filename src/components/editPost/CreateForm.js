import React, { Component } from 'react'
import { Link } from 'react-router'
import '../login/css/login.css'

class CreateForm extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <form className="login-login" onSubmit={this.props.onSubmit}>
          <p className="login-title">Create new article</p>

          <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.props.onChange}
              value={this.props.title}
              required="required" autoFocus />

          <i className="" />

          <input
              name="desc"
              placeholder="Description"
              onChange={this.props.onChange}
              value={this.props.desc}
              required="required"/>

          <i className="" />

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

export default CreateForm