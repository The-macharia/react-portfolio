import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './containers/Header'
import About from './containers/About'
import Services from './containers/Services'
import Projects from './containers/Projects'
import Contact from './containers/Contact'
import Footer from './containers/Footer'


class App extends Component {
  state = {
    links: ['home', 'about', 'services', 'projects', 'contact']
  }
  render() {
    return (
      <>
        <Header links={this.state.links} />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </>
    )
  }
}

export default App