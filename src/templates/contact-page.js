import React from 'react'
import PropTypes from 'prop-types'
import Zoom from 'react-reveal/Zoom';
import SocialNetworks from '../components/SocialNetworks'
import Content, { HTMLContent } from '../components/Content'
import smoothScrollTo from '../components/smoothScrollTo';

export const ContactPageTemplate = ({
  title,
  content,
  heading,
  image,
  description,
  contact,
  social,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <header className="masthead half text-center text-white d-flex"
        style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)), url(${image})` }}>
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 className="text-uppercase">
                <strong>{heading}</strong>
              </h1>
              <hr />
            </div>
            <div className="col-lg-8 mx-auto">
              <SocialNetworks gridItems={social}/>
            </div>
            <div className="col-lg-8 mx-auto">
              <Zoom>
                <div>
                  <p className="text-faded mb-5" dangerouslySetInnerHTML={{__html: description}}></p>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </header>
      <section className="section section--gradient" id="contact-description">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  social: PropTypes.array,
  contact: PropTypes.shape({
    phone: PropTypes.string,
    address: PropTypes.string
  })
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={frontmatter.title}
      heading={frontmatter.heading}
      image={frontmatter.image}
      description={frontmatter.description}
      contact={frontmatter.contact}
      social={frontmatter.social}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  })
}

export default ContactPage

export const aboutPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        image
        description
        contact {
          address
          phone
          email
        }
        social {
          url
          icon
          name
        }
      }
    }
  }
`
