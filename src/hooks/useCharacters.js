import { useEffect, useState } from 'react'
import { getCharacters } from '../services/getCharacters'

export const useCharacters = () => {
  const [loading, setLoading] = useState(true)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(0)

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters({})
      .then(characters => {
        setCharacters(characters)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (page === 0) return
    setLoadingNextPage(true)
    getCharacters({ page })
      .then(data => {
        setCharacters(prevCharacters => ({
          ...data,
          results: prevCharacters.results.concat(data.results)
        }))
        setLoadingNextPage(false)
      })
  }, [page, setCharacters])

  return {
    loading,
    loadingNextPage,
    characters,
    setPage
  }
}
