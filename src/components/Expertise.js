import React from 'react'
import PropTypes from 'prop-types'

const ExpertiseGrid = ({ gridItems }) => (
    <section className="row no-gutters popup-gallery p-0" id="expertise-items">
        <div id="expertiseCarouselControls" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
            {
                gridItems.map((item, key) =>
                    <li data-target="#expertiseCarouselControls" key={key} data-slide-to={key} className="active"></li>
                )
            }
            </ol>
            <div className="carousel-inner">
                {gridItems.map((item, key) => (
                    <div className={`portfolio-box-container carousel-item ${key==0 ? 'active' : ''}`} key={key}>
                        <a className="portfolio-box" href="#" style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover"
                        }}>
                            <div className="portfolio-box-title">{item.title}</div>
                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-name" dangerouslySetInnerHTML={{__html: item.title}}></div>
                                    <div className="project-description" dangerouslySetInnerHTML={{__html: item.description}}></div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#expertiseCarouselControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#expertiseCarouselControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
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
