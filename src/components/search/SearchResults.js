import React from 'react'
import { useSearchCharacters } from '../../hooks/useSearchCharacter'
import { ErrorSearch } from '../../nofound/ErrorSearch'
import { HeroCard } from '../heroes/HeroCard'
import { Spinner } from '../spinner/Spinner'
import { Search } from './Search'

export const SearchResults = () => {
  const { loading, characters } = useSearchCharacters()
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
                  characters.results.length === 0
                    ? (<ErrorSearch />)
                    : (
                    <>
                        <div className="container card-columns animate__animated animate__fadeIn">
                            {characters.results.map(hero => (
                                <HeroCard
                                key={hero.id}
                                {...hero}
                                />
                            ))}
                        </div>
                    </>)

                )
          }
    </>
  )
}
