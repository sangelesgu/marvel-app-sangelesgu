import { useReducer } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const ACTIONS = {
  CHANGE_ORDER: "change_order",
  CHANGE_SEARCH: "change_search",
};

const ACTIONS_REDUCERS = {
  [ACTIONS.CHANGE_ORDER]: (state, action) => ({
    ...state,
    sortBy: action.payload,
  }),
  [ACTIONS.CHANGE_SEARCH]: (state, action) => ({
    ...state,
    search: action.payload,
  }),
};

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default function filterReducer({
  initialSearch = "",
  initialOrder = "",
} = {}) {
  const location = useLocation();
  const { sort = "" } = queryString.parse(location.search);
  const [{ sortBy, search }, dispatch] = useReducer(reducer, {
    search: initialSearch,
    sortBy: sort,
  });

  return {
    changeSearch: ({ search }) =>
      dispatch({ type: ACTIONS.CHANGE_SEARCH, payload: search }),
    changeOrder: ({ sortBy }) =>
      dispatch({ type: ACTIONS.CHANGE_ORDER, payload: sortBy }),
    sortBy,
    search,
  };
}
