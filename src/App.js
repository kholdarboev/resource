import React, { Component } from 'react'
import {Container} from './Style'
import Navbar from './Navbar'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
export class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Header/>
        <Body/>
        <Footer/>
      </Container>
    )
  }
}

export default App
