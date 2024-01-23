export const GET_SEARCH = "GET_SEARCH"
export const RECEIVE_SEARCH = "RECEIVE_SEARCH"
export const FAIL_SEARCH = "FAIL_SEARCH"
export const RECIPE_ID = "RECIPE_ID"

const fetchingSearch = () => ({
  type: GET_SEARCH,
})

const fetchedSearch = (payload) => ({
  type: RECEIVE_SEARCH,
  payload,
})

const failedSearch = (payload) => ({
  type: FAIL_SEARCH,
  payload,
})

const searchRecipeId = (payload) => ({
  type: RECIPE_ID,
  payload,
})

export const executeSearch = async (name, ingredients) => {
  const response = await fetch("/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, ingredients }),
  })
  const searchResults = await response.json()
  return searchResults
}

// TODO: fix action
export const searchRecipes = (name, ingredients) => {
  return async (dispatch) => {
    dispatch(fetchingSearch())
    try {
      const res = await executeSearch(name, ingredients)
      return dispatch(fetchedSearch(res))
    } catch (err) {
      return dispatch(failedSearch(err))
    }
  }
}

export const setRecipeId = (id) => {
  return (dispatch) => {
    dispatch(searchRecipeId(id));
  }
}