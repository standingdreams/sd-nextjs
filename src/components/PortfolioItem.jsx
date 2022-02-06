import React from 'react'
import PropTypes from 'prop-types'

export function PortfolioItem({ item, currentItem, clickHandler, escaped, itemSlug }) {
  const { companyName, projectDescription, siteUrl, role, siteThumbnail } = item
  function handled(event) {
    if (event.keyCode === 27) {
      escaped()
    }
  }
  return (
    <article
      id={itemSlug}
      key={itemSlug}
      className={`listings-item${currentItem === itemSlug ? ' show-listings-item' : ''}`}
    >
      <div className="listings-item__content">
        <header className="listings-header">
          <button type="button" className="listings-item__name" onClick={clickHandler} onKeyDown={handled}>
            {companyName}
          </button>
          <h3 className="listings-item__role">{role}</h3>
        </header>
        <div className="listings-item__copy">
          <div dangerouslySetInnerHTML={{ __html: projectDescription }} />
          {siteUrl && (
            <a href={siteUrl} className="btn btn1" target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
          )}
        </div>
      </div>
      {siteThumbnail && (
        <div className="listings-item__thumbnail">
          <img src={siteThumbnail} alt="Hooters" />
        </div>
      )}
    </article>
  )
}

PortfolioItem.propTypes = {
  item: PropTypes.object,
  currentItem: PropTypes.string,
  clickHandler: PropTypes.func,
  escaped: PropTypes.func,
  itemSlug: PropTypes.string,
}
