import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacters } from "../services/getCharacters";

export const useSearchCharacters = () => {
  const [loading, setLoading] = useState(true);

  const [characters, setCharacters] = useState([]);

  const { name } = useParams();
  useEffect(() => {
    getCharacters({ name }).then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, [name]);

  return {
    loading,
    characters,
  };
};
