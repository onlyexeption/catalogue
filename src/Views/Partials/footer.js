import React, { Component } from 'react'
import { Link } from 'react-router'

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row double">
            <div className="6u">
              <div className="row collapse-at-2">
                <div className="6u">
                  <h3>Sample links here</h3>
                  <ul className="alt">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">link 2</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="6u">
              <h2><Link to="/about">About the team</Link></h2>
              <p>Buyme™ is a team of four motivated young men. We strive to deliver great outcomes.</p>
              <ul className="icons">
                <li><a href="https://www.facebook.com/SoftwareUniversity/?fref=ts" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/softuni.bg/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
              </ul>
            </div>
          </div>
          <ul className="copyright">
            <li>© Software University 2016. All rights reserved.</li>
            <li>Design: <a href="http://templated.co">TEMPLATED</a></li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer