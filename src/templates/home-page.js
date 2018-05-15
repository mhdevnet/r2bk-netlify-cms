import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import smoothScrollTo from '../components/smoothScrollTo';

export const HomePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const HomePage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <HomePageTemplate
      contentComponent={HTMLContent}
      title={page.frontmatter.title}
      heading={page.frontmatter.heading}
      description={page.frontmatter.description}
      content={page.html}
      expertise={page.frontmatter.expertise}
      contact={page.frontmatter.contact}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        description
        contact {
          email
          heading
          phone
          description
        }
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
`
