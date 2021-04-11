import React from 'react'
import { Link } from 'react-router-dom'
import './styles/HeroCard.css'
import PropTypes from 'prop-types'
export const HeroCard = ({ id, name, thumbnail }) => {
  return (
                <div className="container-fluid">
                    <Link to={`./characters/${id}`} className="my-card">
                        <img
                            className="img"
                            alt={name}
                            src={`${thumbnail.path}.${thumbnail.extension}`}
                        />
                        <div className="profile-name">{name}</div>
                    </Link>
                </div>
  )
}

HeroCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.object

}
