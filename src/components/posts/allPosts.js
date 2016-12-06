import React, { Component } from 'react'
import { Link } from 'react-router'
//import {seeAllPosts} from '../../models/forPosts'
class Posts extends Component {
    render() {
        return (
            <div className="posts-section">
                <div>
                    <h1>Postove</h1>
                    {}
                </div>
                <Link to="/">Back to home</Link>
            </div>
        )
    }
    submitForm(event) {
        event.preventDefault()
        console.log(event.target)
    }
}

export default Posts