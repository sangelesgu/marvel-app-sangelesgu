import { useContext, useEffect, useState } from 'react';
import { getCharacters } from '../services/getCharacters';
import { CharactersContext } from '../context/CharactersContext';

const INITIAL_PAGE = 0; 

export const useCharacters = () => {

    const [loading, setLoading] = useState(false); 
    const [loadingNextPage, setLoadingNextPage] = useState(false); 

    const [page, setPage] = useState(INITIAL_PAGE);
    const [characters, setCharacters] = useContext({CharactersContext}); 

    useEffect (() => { 
        setLoading(true); 
        getCharacters({})
         .then(characters => {
             setCharacters(characters)
             setLoading(false)
         })
    }, [setCharacters])


    useEffect(()=> {
        if (page === INITIAL_PAGE) return
        setLoadingNextPage(true)

        getCharacters({page})
            .then(nextCharcters => {
                setCharacters(prevCharacters => prevCharacters.concat(nextCharcters))
                setLoadingNextPage(false)
            })
    }, [page, setCharacters])


    return {loading, loadingNextPage, characters, setPage}
}