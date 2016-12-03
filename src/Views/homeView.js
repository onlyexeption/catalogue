import React, { Component } from 'react'
import Header from './Partials/header'
import Main from './Partials/main'
import Footer from './Partials/footer'

class HomeView extends Component {
  render() {
    return (
      <section id="HomeView">
        <Header />
        <Main />
        <Footer />
      </section>
    )
  }
}

export default HomeView