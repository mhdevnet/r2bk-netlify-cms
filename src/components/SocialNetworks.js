import React from 'react'
import PropTypes from 'prop-types'
import Zoom from 'react-reveal/Zoom';

const SocialNetworkGrid = ({ gridItems }) => (
  <div className="row is-multiline">
    {gridItems.filter(network => network.url && network.url !== 'url').map((network, key) => (
        <div key={key} className="col-lg-3 col-md-6 text-center">
            <div className="network-box mt-5 mx-auto">
              <Zoom>
                <div>
                    <a href={network.url}>
                        <i className={`fa fa-4x fa-${network.icon} social-icon text-primary mb-3 sr-icons`}></i>
                    </a>
                </div>
              </Zoom>
            </div>
        </div>
    ))}
  </div>
)

SocialNetworkGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  )
}

export default SocialNetworkGrid
