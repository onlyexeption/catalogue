/**
 * Created by Ivaylo on 12/4/2016.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'

class ContactForm extends Component {
    render() {
        return (
            <div>
                <p>Contact form should be placed here</p>
                <Link to="/">Back to home</Link>
            </div>
        )
    }
}

export default ContactForm