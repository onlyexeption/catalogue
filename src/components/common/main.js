import React, { Component } from 'react'
import { Link } from 'react-router'
import {logout} from '../../models/userOperations'

class Main extends Component {
  render() {
    if(sessionStorage.getItem("authToken")){
      return(<main>
        <div>
          <section id="banner">
            <div className="inner">
              <h2>Welcome to our blog.</h2>
              <p />
              <ul className="actions">
                <h3>Hello {sessionStorage.getItem("username")}!!!</h3>
              <li id="linkLogin"><Link to="/#" onClick={logout} className="button big alt">Sign Out</Link></li>
                </ul>
              </div>
          </section>
        </div>
      </main>)
    }
    else if(!sessionStorage.getItem("authToken")){
    return (
      <main>
        <div>
          <section id="banner">
            <div className="inner">
              <h2>Welcome to our blog.</h2>
              <p />
              <ul className="actions">
                <li id="linkLogin"><Link to="/login" className="button big alt">Sign In</Link></li>
                <li id="linkRegister"><Link to="/register" className="button big alt">Sign Up</Link></li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    )
    }
  }
}

export default Main