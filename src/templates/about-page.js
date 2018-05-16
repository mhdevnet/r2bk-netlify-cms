import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import smoothScrollTo from '../components/smoothScrollTo';
import Zoom from 'react-reveal/Zoom';

export const AboutPageTemplate = ({ title, image, heading, description, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <header className="masthead text-center text-white d-flex"
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
              <p className="text-faded mb-5" dangerouslySetInnerHTML={{__html: description}}></p>
              <Zoom>
                <div>
                  <a className="btn btn-primary btn-xl js-scroll-trigger sr-button" href="#about" onClick={(e) => smoothScrollTo(e)}>Learn More</a>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </header>
      <section className="section section--gradient" id="about">
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      heading={post.frontmatter.heading}
      description={post.frontmatter.description}
      content={post.html}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
        heading
        description
      }
    }
  }
`
