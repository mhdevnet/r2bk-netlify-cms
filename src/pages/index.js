import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Expertise from '../components/Expertise'

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const home = data.allMarkdownRemark.edges[0].node.frontmatter;
    return (
      <div>
        <header className="masthead text-center text-white d-flex">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1 className="text-uppercase">
                  <strong>{home.heading}</strong>
                </h1>
                <hr />
              </div>
              <div className="col-lg-8 mx-auto">
                <p className="text-faded mb-5">{home.description}</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#expertise">Find Out More</a>
              </div>
            </div>
          </div>
        </header>
        <section className="section" id="expertise">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="section-heading">{home.expertise.heading}</h1>
                <hr className="my-4"/>
              </div>
            </div>
            <Expertise gridItems={home.expertise.items} />
          </div>
        </section>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {
        frontmatter: {
          templateKey: {
            eq: "home-page"
          }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            heading
            description
            expertise {
              heading
              items {
                title
                image
                description
              }
            }
          }
        }
      }
    }
  }
`
