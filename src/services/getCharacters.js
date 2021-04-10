import { API_KEY, API_URL, LIMIT, TS, HASH } from './settings'

const fromApiRespCharacters = apiResp => {
  const { data } = apiResp
  const { results } = data
  return { results, data }
}

export const getCharacters = async ({ page = 0, character } = {}) => {
  const apiUrl = `${API_URL}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${LIMIT}&offset=${page * LIMIT}`
  return fetch(apiUrl)
    .then((res) => res.json())
    .then(fromApiRespCharacters)
}
