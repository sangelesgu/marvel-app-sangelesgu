import { API_KEY, API_URL, TS, HASH } from "./settings";

const character = (resp) => {
  const { data } = resp;
  const { results } = data;
  const [hero] = results;
  return hero;
};

export const getSingleCharacter = async ({ id }) => {
  const apiUrl = `${API_URL}/${id}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then(character);
};
