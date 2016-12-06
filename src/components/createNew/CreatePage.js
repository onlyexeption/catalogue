import React, { Component } from 'react'
import CreateForm from './CreateForm'
import {createPost} from '../../models/postOperations'

class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc:''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        CreatePage.onCreateSuccess = CreatePage.onCreateSuccess.bind(this);
    }
    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = [event.target.value];
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        createPost(this.state.title[0],this.state.desc[0],CreatePage.onCreateSuccess)
        console.log(this.state.title)
        console.log(this.state.desc)
        alert('Submit')
    }

    static onCreateSuccess(result){
        alert('Success!')
    }

  render() {
    return (
      <section id="CreatePage">
        <CreateForm
           title={this.state.title}
           desc={this.state.desc}
           onChange={this.onChangeHandler}
           onSubmit={this.onSubmitHandler}
        />
      </section>
    )
  }

}

export default CreatePage