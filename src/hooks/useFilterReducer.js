import { useReducer } from 'react'

const ACTIONS = {
  CHANGE_ORDER: 'change_order',
  CHANGE_SEARCH: 'change_search'
}

const ACTIONS_REDUCERS = {
  [ACTIONS.CHANGE_ORDER]: (state, action) => ({
    ...state,
    sortBy: action.payload
  }),
  [ACTIONS.CHANGE_SEARCH]: (state, action) => ({
    ...state,
    times: state.times + 1,
    search: action.payload
  })
}

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export default function useFilter ({ initialSearch = '', initialOrder = 'name' } = {}) {
  const [{ sortBy, search }, dispatch] = useReducer(reducer, {
    search: initialSearch,
    sortBy: initialOrder
  })

  return {
    changeSearch: ({ search }) =>
      dispatch({ type: ACTIONS.CHANGE_SEARCH, payload: search }),
    changeOrder: ({ sortBy }) =>
      dispatch({ type: ACTIONS.CHANGE_ORDER, payload: sortBy }),
    sortBy,
    search
  }
}
