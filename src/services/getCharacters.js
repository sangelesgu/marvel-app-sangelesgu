import { API_KEY, API_URL, LIMIT, TS, HASH } from "./settings";

const characters = (resp) => {
  const { data } = resp;
  const { results } = data;
  return { results };
};

export const getCharacters = async ({ page, name = "", sortBy = "" } = {}) => {
  let apiUrl;
  if (name === "") {
    apiUrl = `${API_URL}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${LIMIT}&offset=${
      page * LIMIT
    }&orderBy=${sortBy}`;
  } else {
    apiUrl = `${API_URL}?ts=${TS}&nameStartsWith=${name}&apikey=${API_KEY}&hash=${HASH}&limit=${LIMIT}&offset=${
      page * LIMIT
    }&orderBy=${sortBy}`;
  }
  return fetch(apiUrl)
    .then((res) => res.json())
    .then(characters);
};
