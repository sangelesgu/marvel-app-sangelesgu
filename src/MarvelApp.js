import React from 'react'
import { charactersContext } from './contexts/CharactersContext'
import { AppRouter } from './routers/AppRouter'
import './MarvelApp.css'
import { useCharacters } from './hooks/useCharacters'

export const MarvelApp = () => {
  const { characters, loading, setPage, loadingNextPage } = useCharacters([])
  return (
    <div>
    <charactersContext.Provider value={{ characters, loading, setPage, loadingNextPage }}>
      <AppRouter/>
    </charactersContext.Provider>
  </div>
  )
}
