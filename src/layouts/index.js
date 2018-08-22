import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass';

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  initHelpers() {
    const ready = function (e) {
      console.debug("[App Helpers]: Initing app helpers...", e);
      try {
        // Smooth scrolling using jQuery easing
        // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        //         var target = $(this.hash);
        //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        //         if (target.length) {
        //           // Closes responsive menu when a scroll trigger link is clicked
        //           target.get(0).scrollIntoView({
        //             behavior: 'smooth'
        //           });
        //           return false;
        //         }
        //       }
        // });
        let items = document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])');
        console.log("Found", items);
        if(items.length) {
          const handler = function (e) {
            e.preventDefault();
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = document.querySelector(this.hash);
              target = target ? target : document.querySelector('[name=' + this.hash.slice(1) + ']');
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth'
                });
                return false;
              }
            }
          };
          [].forEach.call(items, function (item) {
            item.addEventListener('click', handler, false);
          });
        }
      } catch(e) {
        console.debug(e);
      }
    }
    console.debug("[App Helpers]: Checking ready state", document.readyState);
    document.addEventListener('DOMContentloaded', ready);
    if(document.readyState == 'loading') {
      console.debug("[App Helpers]: Waiting for loading state");
      document.addEventListener('DOMContentloaded', ready);
    } else {
      ready();
    }
  }

  componentDidMount() {
    // this.initHelpers();
    // this.props.history.listen((location, action) => {
    //   console.debug("[App Helpers]: Route changed...", action, location);
    //   this.initHelpers();
    // });
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
        frontmatter: { templateKey: { eq: "contact-page" } }
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            heading
            contact {
              name
              address
              phone
              email
            }
            networks {
              items {
                name
                url
                icon
              }
            }
          }
        }
      }
    }
  }
`
