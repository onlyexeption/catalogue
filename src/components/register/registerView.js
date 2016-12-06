import React, { Component } from 'react'
import Register from './register'
import {register} from './../../models/userOperations'

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
        RegisterView.onRegisterSuccess = RegisterView.onRegisterSuccess.bind(this);

    }
    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = [event.target.value];
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        console.log(this.state.username[0]);
        register(this.state.username[0], this.state.password[0], RegisterView.onRegisterSuccess);
    }

    static onRegisterSuccess(result){
        alert('Successs!')
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