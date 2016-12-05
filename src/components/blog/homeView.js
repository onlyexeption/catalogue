import React, { Component } from 'react'
import Header from '../common/header'
import Main from '../common/main'
import Mini from '../common/mini-footer'

class HomeView extends Component {
  render() {
    return (
      <section id="HomeView">
        <Header />
        <Main />
        <Mini />
      </section>
    )
  }
}

export default HomeView