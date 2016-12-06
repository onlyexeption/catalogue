import React, { Component } from 'react'
import Login from './login'

  class LoginView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: sessionStorage.getItem('username'),
        userId: sessionStorage.getItem('userId')
      }
    }

    render() {
      return (
        <section id="LoginView">
          <Login />

        </section>
      )
    }
  }

export default LoginView