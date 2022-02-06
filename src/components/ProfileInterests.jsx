import React from 'react'
import PropTypes from 'prop-types'

export default function ProfileInterests({ heading, items }) {
  return (
    <div className="profile__grid-item">
      <h3 className="el-h4">{heading}</h3>
      <ul className="profile-item__list">
        {items.map((item, index) => (
          <li key={`interest-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

ProfileInterests.propTypes = {
  heading: PropTypes.string,
  items: PropTypes.array,
}
