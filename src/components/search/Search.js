
import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import './styles/Search.css';




export const Search = () => {
    
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);


    const [formValues, handleInputChange] = useSearch({searchText: q});

    const {searchText} = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
       // history.push(`?=${searchText}`)
    }
    return (
       <div className="container mt-2"> 
            <div className="row">
                <div className="col-6">
                    <div className="search">
                        <form onSubmit={handleSearch}>
                            <span className="fa fa-search"/>
                            <input 
                                type="text"
                                placeholder="Find your hero by name"
                                className="form-control"
                                autoComplete="off"
                                name="searchText"
                                value={searchText}
                                onChange={handleInputChange}

                            />
                        </form>
                    </div>
                </div>
                <div className="col-3">
                    <select className="custom-select my-1 mr-sm-2">
                        <option></option>
                    </select>
                </div>
                <div className="col-3">
                    <select className="custom-select my-1 mr-sm-2">
                        <option></option>
                    </select>
                </div>
            </div>
              
       </div>
    )
}
