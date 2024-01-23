/*
  TODO: Create reducer and state updates here for recipe
*/

import { FETCH_RECIPE_START, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAILURE } from '../actions/recipe'

// Initial state
const initialState = {
  recipe: null,
  isLoading: false,
  error: null
};

// Reducer
const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPE_START:
      return fetchingRecipe();
    case FETCH_RECIPE_SUCCESS:
      return recipeFetched(state, action.payload);
    case FETCH_RECIPE_FAILURE:
      return recipeFetchError(state, action.payload);
    default:
      return state;
  }
};

export default recipeReducer;

const fetchingRecipe = (state) => {
  return { ...state, isLoading: true }
}

export const recipeFetched = (state, payload) => {
  return { ...state, isLoading: false, recipe: payload }
}

export const recipeFetchError = (state, payload) => {
  return { ...state, isLoading: false, error: payload }
}