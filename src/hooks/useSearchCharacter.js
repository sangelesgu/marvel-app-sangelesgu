import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSearchdCharacters } from '../services/getSearchdCharacters'

export const useSearchCharacters = () => {
  const [loading, setLoading] = useState(true)

  const [characters, setCharacters] = useState([])

  const name = useParams()

  useEffect(() => {
    getSearchdCharacters(name)
      .then(characters => {
        setCharacters(characters)
        setLoading(false)
      })
  }, [])

  return {
    loading,
    characters
  }
}
