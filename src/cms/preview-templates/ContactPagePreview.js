import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/service-page'

const ContactPagePreview = ({ entry, getAsset }) => {
  const existingSocialNetworks = entry.getIn(['data', 'intro', 'networks'])
  const socialNetworks = existingSocialNetworks ? existingSocialNetworks.toJS() : []
  return (
    <ContactPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      contact={entry.getIn(['data', 'contact'])}
      social={entry.getIn(['data', 'social'])}
    />
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContactPagePreview
