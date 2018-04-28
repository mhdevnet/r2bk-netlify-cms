import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import logo from '../img/logo.png'

class Footer extends React.Component {
  render() {
    const { data } = this.props
    const global = data.contact;
    console.log(data);

    return (
      <footer id="contact">
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-heading">{global.heading}</h2>
              <hr className="my-4"/>
              <p className="mb-5" dangerouslySetInnerHTML={{__html: global.description}}></p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center">
              <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
              <p><a href={`tel:${global.phone}`}>{global.phone}</a></p>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
              <p>
                <a href={`mailto:${global.email}`}>{global.email}</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  data: PropTypes.object
}

export default Footer
