import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

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
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">{home.expertise.heading}</h1>
            </div>
            {home.expertise.items.map((expertise) => (
                <div
                  className="content"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                  key={expertise.id}
                >
                  <h2 className="has-text-primary" >
                    {expertise.title}
                  </h2>
                  <p dangerouslySetInnerHTML={{__html: expertise.description}}>
                  </p>
                </div>
              ))}
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
                description
              }
            }
          }
        }
      }
    }
  }
`
