import { useEffect, useState } from 'react';
import {API_KEY, API_URL, TS, HASH, LIMIT} from '../services/settings';

export const useInfinityCharacters = () => {
    const [characters, setCharacters] = useState([]);
    //const apiUrl = `${API_URL}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${LIMIT}`;
    console.log(characters)
    const [page, setPage] = useState(1); 

    const more = async () => {
        const more_characters = await fetch_characters(page + 1);
        setPage(prev => prev + 1); 
        setCharacters(prev => [...prev, ...more_characters]);
    }

   const fetch_characters = async () => await fetch(`${API_URL}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${LIMIT}`);

   useEffect(() => {
       ;(async ()=> {
            const character = await fetch_characters(0);
            setCharacters(character)
       })()
   }, [])

   return [characters, more]
}
