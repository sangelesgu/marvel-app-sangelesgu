import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { getCharacters } from '../services/getCharacters'

export const useCharacters = ({ character }) => {
  const [loading, setLoading] = useState(true)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(0)

  const [characters, setCharacters] = useState([])

  // const { q } = useParams()
  // console.log(q)
  useEffect(() => {
    getCharacters({ character })
      .then(characters => {
        setCharacters(characters)
        setLoading(false)
      })
  }, [!characters.length])

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
