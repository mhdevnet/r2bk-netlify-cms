import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

class TemplateWrapper extends React.Component {
  render () {
    let { data, children } = this.props;
    const global = data.allMarkdownRemark.edges[0].node.frontmatter;
    return (
      <div>
        <Helmet title="Home | R2BK" />
        <Navbar data={global}/>
        <div>{children()}</div>
        <Footer data={global} />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const GlobalQuery = graphql`
  query GlobalQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "home-page" } }
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            contact {
              heading
              phone
              email
              description
            }
          }
        }
      }
    }
  }
`
