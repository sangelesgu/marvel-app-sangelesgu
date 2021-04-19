import React from "react";
import "./styles/Search.css";
import { CustomSelect } from "./CustomSelect";
import filterReducer from "../../hooks/filterReducer";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
// import { useSearchCharacters } from "../../hooks/useSearchCharacter";

export const Search = ({ inititalSearch = "" }) => {
  const { search, changeSearch } = filterReducer({ inititalSearch });
  const handleInputChange = (e) => {
    changeSearch({ search: e.target.value });
  };
  const location = useLocation();
  const { sort = "" } = queryString.parse(location.search);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sort) {
      history.push(`/search/${search}/${sort}`);
    } else {
      history.push(`/search/${search}`);
    }
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-6 mt-1">
          <div className="search">
            <form onSubmit={handleSubmit}>
              <span className="fa fa-search" />
              <input
                type="text"
                placeholder="Find hero by name"
                className="form-control"
                autoComplete="off"
                name="search"
                value={search}
                onChange={handleInputChange}
              />
            </form>
          </div>
        </div>
        <div className="col-md-6 mt-1">
          <CustomSelect />
        </div>
      </div>
    </div>
  );
};
