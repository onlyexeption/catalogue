import React, { Component } from 'react'
import Register from './register'

class RegisterView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeat: ''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onChangeHandler(event) {
        event.preventDefault();
        alert('change');
        let newState = {};
        newState[event.target.name] = [event.target.value];
        this.setState(newState);
    }
    onSubmitHandler(event) {
        event.preventDefault();
        alert('submit');
        let username = this.state.username;
        let password = this.state.password;
        let repeat = this.state.repeat;
        console.log(username);
        console.log(password);
        console.log(repeat);
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

}

export default RegisterView