import React from 'react';
import { HeroList } from '../heroes/HeroList';
import { Search } from '../search/Search';


export const CharactersScreen = ({history}) => {
    
    return (
        <>
            <div className="container-fluid mt-3">
                <h1 className="display-4 text-center">Characters</h1>
                <div className="container mt-4">
                    <div className="col-12">
                        <Search />
                    </div>
                </div>
            </div>
            <HeroList/>
        </>
    )
}
