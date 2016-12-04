import React, { Component } from 'react'
import Register from './Partials/register'
// import Header from './Partials/header'
// import Main from './Partials/main'

class RegisterView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      repeat: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  render() {
    return (
      <section id="RegisterView">
        <Register
          username={this.state.username}
          password={this.state.password}
          repeat={this.state.repeat}
          onChange={this.onChangeHandler}
          onSubmit={this.onSubmitHandler}
        />
      </section>
    )
  }

  onChangeHandler(event) {
    event.preventDefault()
    let newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  onSubmitHandler(event) {
    event.preventDefault()
    
    // let username = this.state.username
    // let passowrd = this.state.password
    // let repeat = this.state.repeat
  }
}

export default RegisterView