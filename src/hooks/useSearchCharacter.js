import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSearchCharacters } from "../services/getSearchCharacters";

export const useSearchCharacters = () => {
  const [loading, setLoading] = useState(true);

  const [characters, setCharacters] = useState([]);

  const name = useParams();
  useEffect(() => {
    getSearchCharacters(name).then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    characters,
  };
};
