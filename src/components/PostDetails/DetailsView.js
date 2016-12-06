import React, { Component } from 'react'
import '../login/css/login.css'
import {viewPosts} from '../../models/postOperations'
import DetailsController from "./DetailsController"
class DetailsView extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }
    componentDidMount(){
        viewPosts(this.onLoadSuccess)
    }
    onLoadSuccess(response){
        this.setState({posts: response});
    }
    render() {
        return(
            <div>
                <h1>Details Page</h1>
                {this.state.posts.map((t,i)=>{
                    return <DetailsController key={i} title={t.title} desc={t.desc} teamId={t._id}/>
                })}
            </div>
        );
    }
}

export default DetailsView