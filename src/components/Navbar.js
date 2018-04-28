import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import logo from '../img/logo.png'

class Navbar extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', function () {
      let scrollPos = window.scrollY;
      let nav = document.querySelector('.navbar');
      if(scrollPos > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    })
  }
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="nav-link js-scroll-trigger">
              <figure className="image">
                <img src={logo} alt="R2BK" />
              </figure>
            </Link>
          </div>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link js-scrol-trigger" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scrol-trigger" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scrol-trigger" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  data: PropTypes.object
}

export default Navbar
