import React, { useContext, useEffect } from "react";
import { orderBy } from "../../services/settings";
import { charactersContext } from "../../contexts/CharactersContext";
import filterReducer from "../../hooks/filterReducer";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

export const CustomSelect = ({ initialOrder = "" }) => {
  const context = useContext(charactersContext);
  const { setSortBy } = context;

  const { sortBy, changeOrder } = filterReducer(initialOrder);
  const history = useHistory();

  const location = useLocation();
  const { query = "" } = queryString.parse(location.search);

  const handleSelect = (e) => {
    changeOrder({ sortBy: e.target.value });
    if (query) {
      history.replace(`search/${query}?&sort=${e.target.value}`);
    } else {
      history.push(`?sort=${e.target.value}`);
    }
  };

  useEffect(() => {
    setSortBy(sortBy);
  }, [sortBy]);

  return (
    <>
      <select
        className="custom-select select"
        value={sortBy}
        onChange={handleSelect}
      >
        {orderBy.map((sort) => (
          <option key={sort.label} value={sort.value}>
            {sort.label}
          </option>
        ))}
      </select>
    </>
  );
};
