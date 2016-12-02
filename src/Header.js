/**
 * Created by Ivaylo on 12/2/2016.
 */
import React, { Component } from 'react';
import './App.css';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="#">Home</a>
                <a href="#">Login</a>
                <a href="#">Register</a>
                <a href="#">Articles</a>
                <a href="#">Create new article</a>
                <a href="#">Contact us</a>
                <a href="#">Logout</a>
            </div>
        );
    }
}

export default Header;
