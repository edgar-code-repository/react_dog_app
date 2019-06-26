import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">

                <img className="masthead-avatar mb-5" src="assets/img/dog1.png" alt="" />

                <h1 className="masthead-heading text-uppercase mb-0">The Dog App</h1>

                <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                </div>
                <div className="divider-custom-line"></div>
                </div>

                <p className="masthead-subheading font-weight-light mb-0">
                    In this application you can search through the biggest collection of open source dog pictures.
                </p>

            </div>
            </header>
        )
    }
}

export default Header
