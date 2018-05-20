import React from 'react'
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const ExpertiseGrid = ({ gridItems }) => (
    <section className="row no-gutters popup-gallery p-0" id="expertise-items">
        {gridItems.map((item, key) => (
            <Fade left={key % 2 == 0} right={key % 2 != 0} key={key}>
            <div className={`portfolio-box-container col-sm-12 col-md-6 ${key==0 ? 'active' : ''}`}>
                <div className="portfolio-box" style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.15)), url(${item.image})`,
                    backgroundSize: "cover"
                }}>
                    <div className="portfolio-box-title">{item.title}</div>
                    <div className="portfolio-box-caption">
                        <div className="portfolio-box-caption-content">
                            <div className="project-name" dangerouslySetInnerHTML={{__html: item.title}}></div>
                            <div className="project-description" dangerouslySetInnerHTML={{__html: item.description}}></div>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        ))}
    </section>
)

ExpertiseGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default ExpertiseGrid
