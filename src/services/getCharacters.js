import { API_KEY, API_URL, LIMIT, TS, HASH } from './settings'

const characters = resp => {
  const { data } = resp
  const { results } = data
  return { results }
}

export const getCharacters = async ({ page, name = '', filter = '' } = {}) => {
  const apiUrl = `${API_URL}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${LIMIT}&offset=${page * LIMIT}&orderBy=${filter}`
  return fetch(apiUrl)
    .then((res) => res.json())
    .then(characters)
}
