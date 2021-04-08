
import React, {useCallback, useEffect, useRef} from 'react';
//import useIntersectionScreen from '../../hooks/useIntersectionScreen';
import { Spinner } from '../spinner/Spinner';
import { HeroCard } from './HeroCard';
//import {debounce} from 'just-debounce-it';
//import { useCharacters } from '../../hooks/useCharacters';
import { useFetch } from '../../hooks/useFetch';
import {API_KEY, API_URL, LIMIT, TS, HASH} from '../../services/settings';


export const HeroList = (page = 0) => {
  
    const apiUrl = `${API_URL}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${LIMIT}&offset=${page * LIMIT}`;
   // const { loading, characters, setPage } = useCharacters({})

   const {loading, data} = useFetch(apiUrl)
   
   const {results} = !!data && data.data
    const externalRef = useRef();
    //const {isNearScreen } = useIntersectionScreen({externalRef: loading ? false : externalRef, once: false})
   
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    /* const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
      ), [setPage])
   

    useEffect(() => {
        if(isNearScreen) debounceHandleNextPage();
        
    }, [debounceHandleNextPage, isNearScreen]); */

    return (
        
        <>
            {
                loading
                ?
                (
                    <Spinner/>
                    )
                    :(
                            <div className="card-columns animate__animated animate__fadeIn">
                                {results.map( hero => (
                                    <HeroCard 
                                        key={hero.id}  
                                        {...hero}
                                    /> 
                                ))}
                                <div id="observer" ref={externalRef}></div>
                            </div>
                )
            }
        </>
    )
}
