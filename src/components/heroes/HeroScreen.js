import React from 'react';
import { GetCharacter } from '../../services/GetCharacter';
import { Spinner } from '../spinner/Spinner';

export const HeroScreen = ({history}) => {

    
 
    const {loading, data} = GetCharacter()
    const { results } = !!data && data.data; 
    
 
    

   const handleReturn = () => {
       if (history.length <= 2) {
           history.push('/');
       } else {
           history.goBack();
       }
   }
    return (
        <div className="container-fluid mt-2">

            {
                loading
                ?
                    (
                        <Spinner/>
                    )
                    :(
                        
                        <div className="row mt-5">
                            {results.map( hero => (
                                <>  
                                
                                    <div className="col-4">
                                        <img      
                                            alt={hero.name}
                                            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                                            className="img-thumbnail animate__animated animate__fadeInLeft"
                                        /> 
                                    </div>

                                    <div className="col-8">
                                        <h3>{hero.name}</h3>
                                        <blockquote className="blockquote text-right">
                                            <p className="font-italic mb-0">{hero.description}</p>
                                        </blockquote>
                                        
                                        <button className="btn btn-outline-danger"
                                            onClick={handleReturn}>
                                         <b>Back</b> 
                                        </button>
                                    </div>
                                </>
                                
                                   
                            ))}
                        </div>    
                            
                        
                    )
            }
        </div>
    )
}
