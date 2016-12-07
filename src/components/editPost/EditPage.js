import React, { Component } from 'react'
import EditForm from '../createNew/CreateForm'
import {viewPost} from '../../models/postOperations'
import {editPost} from '../../models/postOperations'

class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc:''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onEditSuccess = this.onEditSuccess.bind(this);
    }
    componentDidMount(){
        viewPost(this.props.params.postId, this.onLoadSuccess)
    }
    onLoadSuccess(response){
        this.setState({title: response.title,
        desc: response.desc});
    }
    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = [event.target.value];
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
       // createPost(this.state.title[0],this.state.desc[0],CreatePage.onEditSuccess())
        /*console.log(this.state.title)
        console.log(this.state.desc)*/
        editPost(this.props.params.postId, this.state.title, this.state.desc, this.onEditSuccess)
        alert('Submit')
    }

    onEditSuccess(result){
        this.context.router.push("/")
    }

  render() {
    return (
      <section id="CreatePage">
        <EditForm
           title={this.state.title}
           desc={this.state.desc}
           onChange={this.onChangeHandler}
           onSubmit={this.onSubmitHandler}
        />
      </section>
    )
  }

}


EditPage.contextTypes = {
    router: React.PropTypes.object
};
export default EditPage