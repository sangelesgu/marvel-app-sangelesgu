import { API_KEY, API_URL, TS, HASH } from "./settings";

const foundCharacters = (resp) => {
  const { data } = resp;
  const { results } = data;
  return { results };
};

export const getSearchCharacters = async ({ search, name } = {}) => {
  console.log(search);
  const apiUrl = `${API_URL}?ts=${TS}&nameStartsWith=${name}&apikey=${API_KEY}&hash=${HASH}&limit=50`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then(foundCharacters);
};
