
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleCharacter } from '../services/getSingleCharacter'

export const useSingleCharacter = () => {
  const [loading, setLoading] = useState(true)

  const [character, setCharacter] = useState()
  const { id } = useParams()
  useEffect(() => {
    getSingleCharacter({ id })
      .then(character => {
        setCharacter(character)
        setLoading(false)
      })
  }, [setCharacter])
  // const [name] = character
  return {
    loading,
    character
  }
}
