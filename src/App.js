import React from 'react'

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Dogbreeds from './components/dogbreeds/Dogbreeds';
import About from './components/about/About';
import Footer from './components/footer/Footer';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Dogbreeds />
        <About />
        <Footer />
      </div>
    )
  }
}

export default App

