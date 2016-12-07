import React, { Component } from 'react'
import '../login/css/login.css'
import {viewPosts} from '../../models/postOperations'
import Header from '../common/header'
import DetailsController from "./DetailsController"
import { Link } from 'react-router'
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
            <div id="whole">
                <h1>Articles</h1>
                <div>
                {this.state.posts.map((t,i)=>{
                    return <DetailsController key={i} title={t.title} desc={t.desc} teamId={t._id}/>
                })}
                </div>
                <div>
                <Link className="backButton" to="/">Back to home</Link>
                </div>
            </div>
        );
    }
}

export default DetailsView