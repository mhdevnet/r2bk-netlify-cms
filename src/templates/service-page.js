import React from 'react'
import PropTypes from 'prop-types'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

export const ServicePageTemplate = ({
  image,
  title,
  heading,
  description,
  items
}) => (
  <div>
    <header className="masthead text-center text-white d-flex"
      style={{ backgroundImage: `url(${image})` }}>
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="text-uppercase">
              <strong>{heading}</strong>
            </h1>
            <hr />
          </div>
          <div className="col-lg-8 mx-auto">
            <p className="text-faded mb-5">{description}</p>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#expertise">Find Out More</a>
          </div>
        </div>
      </div>
    </header>
    <section className="bg-dark" id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading text-white">We've got what you need!</h2>
            <hr className="light my-4" />
            <p className="text-faded mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</p>
            <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
          </div>
        </div>
      </div>
    </section>
  </div>
)

ServicePageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.shape({
    items: PropTypes.array,
  })
}

const ServicePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ServicePageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      services={frontmatter.services}
    />
  )
}

ServicePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicePage

export const ServicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        services {
          items {
            title
            icon
            text
          }
        }
      }
    }
  }
`
