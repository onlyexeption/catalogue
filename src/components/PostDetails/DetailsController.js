import React, { Component } from 'react'
//import {viewPosts} from '../../models/postOperations'
import './Details.css'
import {Link} from 'react-router'

class DetailsController extends Component {
    render() {
        return (
            <div id="postt-box">
                <span>Title</span><br/>
                <span>{this.props.title}</span><br/>
                <span>Description</span><br/>
                <p>{this.props.desc || "No description"}</p><br/>
                <Link to={"/Edit/" + this.props.teamId} className="btn btn-default">Edit</Link>
            </div>
        )
    }

}

export default DetailsController