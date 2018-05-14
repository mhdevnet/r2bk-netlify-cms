import React from 'react'
import PropTypes from 'prop-types'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import ScrollReveal from 'scrollreveal';

// Scroll reveal calls
sr.reveal('.sr-icons', {
  duration: 600,
  scale: 0.3,
  distance: '0px'
}, 200);
sr.reveal('.sr-button', {
  duration: 1000,
  delay: 200
});
sr.reveal('.sr-contact', {
  duration: 600,
  scale: 0.3,
  distance: '0px'
}, 300);

export const ServicePageTemplate = ({
  image,
  title,
  heading,
  description,
  services
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
            <p className="text-faded mb-5" dangerouslySetInnerHTML={{__html: description}}></p>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#services-description">Find Out More</a>
          </div>
        </div>
      </div>
    </header>
    <section className="bg-dark" id="services-description">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading text-white">{services.title}</h2>
            <hr className="light my-4" />
            <p className="text-faded mb-4" dangerouslySetInnerHTML={{__html: services.description}}></p>
            <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Learn More!</a>
          </div>
        </div>
      </div>
    </section>
    <section id="services">
      <div className="container">
        <Services gridItems={services.items}/>
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
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array
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
          title
          description
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
