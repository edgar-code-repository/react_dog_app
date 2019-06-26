import React from 'react'

export class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer text-center">
                <div className="container">
                    <h4 className="text-uppercase mb-4">The Dog App</h4>
                    <p className="lead mb-0">
                    The Dog App is based on the Freelance Bootstrap theme created by 
                    <a href="http://startbootstrap.com" target="_blank" rel="noopener noreferrer"> Start Bootstrap</a>.
                    </p>
                </div>
                </footer>

                <section className="copyright py-4 text-center text-white">
                <div className="container">
                    <small>Copyright &copy; The Dog App - 2019</small>
                </div>
                </section>

                <div className="scroll-to-top d-lg-none position-fixed ">
                <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                    <i className="fa fa-chevron-up"></i>
                </a>
                </div>
            </div>
        )
    }
}

export default Footer
