import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'
import bootstrap from 'bootstrap';
import App from '../js/creative.js';

const app = new App;
global.app = app;

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.props.history.listen((location, action) => {
      app.init();
    });
  }

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
