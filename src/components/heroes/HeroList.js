import React, { useContext, useEffect, useRef } from 'react'
import useIntersectionScreen from '../../hooks/useIntersectionScreen'
import { Spinner } from '../spinner/Spinner'
import { HeroCard } from './HeroCard'
import { Search } from '../search/Search'
import PropTypes from 'prop-types'
import { charactersContext } from '../../contexts/CharactersContext'

export const HeroList = ({ page = 0, character = '' }) => {
  const context = useContext(charactersContext)
  const { characters, loading, setPage } = context
  const externalRef = useRef()
  const { isIntersect } = useIntersectionScreen({ externalRef: loading ? null : externalRef, once: false })
  useEffect(() => {
    if (isIntersect) {
      setPage(prevPage => prevPage + 1)
    }
  }, [isIntersect, setPage])

  return (

        <>

              <>
                <div className="container-fluid mt-3">
                    <h1 className="display-4 text-center">Characters</h1>
                    <div className="container mt-4">
                        <div className="col-12">
                            <Search />
                        </div>
                    </div>
                </div>
            </>
            {
                loading
                  ? (
                    <Spinner/>
                    )
                  : (
                        <>
                            <div className="card-columns animate__animated animate__fadeIn">
                                {characters.results.map(hero => (
                                    <HeroCard
                                    key={hero.id}
                                    {...hero}
                                    />
                                ))}
                            </div>
                            { <div ref={externalRef}></div>}
                            <Spinner/>
                        </>

                    )
            }
        </>
  )
}

HeroList.propTypes = {
  page: PropTypes.number,
  character: PropTypes.string
}
