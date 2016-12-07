import React, { Component } from 'react'
import LoginForm from './LoginForm'
import {login} from '../../models/userOperations'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
    }
    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = [event.target.value];
        this.setState(newState);
    }

    onLoginSuccess(result){
        this.context.router.push("/")
    }
    onSubmitHandler(event) {
        event.preventDefault();
        login(this.state.username[0],this.state.password[0],this.onLoginSuccess)
        /*console.log(this.state.username[0])
        console.log(this.state.password[0])
        alert('Submit')*/
    }


  render() {
    return (
      <section id="LoginView">
        <LoginForm
           username={this.state.username}
           password={this.state.password}
           onChange={this.onChangeHandler}
           onSubmitt={this.onSubmitHandler}
        />
      </section>
    )
  }

}

LoginPage.contextTypes = {
    router: React.PropTypes.object
};
export default LoginPage