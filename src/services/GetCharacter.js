import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import {API_KEY, API_URL, TS, HASH} from './settings';

export const GetCharacter = () => {

    const {id} = useParams();

    const {loading, data} = useFetch(`${API_URL}/${id}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}`);
    
    return {
        loading, 
        data
    }
}
