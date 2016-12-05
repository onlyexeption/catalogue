import React, { Component } from 'react'
import { Link } from 'react-router'

class Main extends Component {
  render() {
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

export default Main