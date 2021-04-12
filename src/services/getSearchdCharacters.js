import { API_KEY, API_URL, TS, HASH } from './settings'

const foundCharacters = resp => {
  const { data } = resp
  const { results } = data
  return { results }
}

export const getSearchdCharacters = async ({ name } = {}) => {
  const apiUrl = `${API_URL}?ts=${TS}&nameStartsWith=${name}&apikey=${API_KEY}&hash=${HASH}`
  return fetch(apiUrl)
    .then((res) => res.json())
    .then(foundCharacters)
}
