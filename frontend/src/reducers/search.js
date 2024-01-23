import { GET_SEARCH, RECEIVE_SEARCH, FAIL_SEARCH, RECIPE_ID } from "../actions"

const initialState = {
  recipes: null,
  isLoading: false,
  recipeId: undefined,
  error: null,
}

const searchFetching = (state) => {
  return { ...state, isLoading: true }
}

const searchFetched = (state, payload) => {
  return { ...state, isLoading: false, recipes: payload }
}

const searchFailed = (state, payload) => {
  return { ...state, isLoading: false, error: payload }
}

const setRecipeId = (state, payload) => {
  return { ...state, recipeId: payload }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SEARCH:
      return searchFetching()
    case RECEIVE_SEARCH:
      return searchFetched(state, payload)
    case FAIL_SEARCH:
      return searchFailed(state, payload)
    case RECIPE_ID:
      return setRecipeId(state, payload)
    default:
      return state
  }
}
