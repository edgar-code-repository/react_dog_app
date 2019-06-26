import React from 'react'

export class About extends React.Component {
    render() {
        return (
            <section className="page-section-about bg-primary text-white mb-0" id="about">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

                <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                </div>
                <div className="divider-custom-line"></div>
                </div>

                <div className="row">
                <div className="col-lg-4 ml-auto">
                    <p className="lead">
                    The Dog App allows you to search through the biggest collection of open source dog pictures.</p>
                </div>
                <div className="col-lg-4 mr-auto">
                    <p className="about">
                    This application uses The Dog API as backend.
                    </p>
                    <p className="about">
                    <a href="https://dog.ceo/dog-api" target="_blank" rel="noopener noreferrer">Check this out!</a>
                    </p>
                </div>
                </div>

            </div>
            </section>
        )
    }
}

export default About
