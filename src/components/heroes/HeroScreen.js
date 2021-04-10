import React from 'react'
import { useSingleCharacter } from '../../hooks/useSingleCharacter'
import { Spinner } from '../spinner/Spinner'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export const HeroScreen = ({ history }) => {
  const { loading, character } = useSingleCharacter()
  const handleReturn = () => {
    history.goBack('/characters')
  }
  return (
        <div className="container-fluid mt-2">

            {
                loading
                  ? (
                        <Spinner/>
                    )
                  : (

                        <div className="row mt-5">
                                <>
                                    <div className="col-6">
                                        <img

                                            alt={character.name}
                                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                            className="img-thumbnail animate__animated animate__fadeInLeft"
                                        />
                                    </div>

                                    <div className="col-6">
                                        <h3>{character.name}</h3>
                                        <blockquote className="blockquote text-right">
                                            <p className="font-italic mb-0">{character.description}</p>
                                        </blockquote>

                                        <button className="btn btn-outline-danger"
                                            onClick={handleReturn}>
                                         <b>Back</b>
                                        </button>

                                        <a
                                            href={character.urls[0].url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="m-2"
                                        >
                                            <button className="btn btn-outline-secondary ">
                                                <b>Details</b>
                                            </button>
                                        </a>
                                    </div>
                                </>
                        </div>
                    )
            }
        </div>
  )
}

HeroScreen.propTypes = {
  history: PropTypes.object
}
