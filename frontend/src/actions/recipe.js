/* TODO: create recipe fetch actions, creators, and constants
  API: use /api/recipe/:id as a get request to fetch the recipe info
*/

export const FETCH_RECIPE_START = 'FETCH_RECIPE_START';
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const FETCH_RECIPE_FAILURE = 'FETCH_RECIPE_FAILURE';

export const fetchRecipeStart = () => ({
  type: FETCH_RECIPE_START,
});

export const fetchRecipeSuccess = (recipe) => ({
  type: FETCH_RECIPE_SUCCESS,
  payload: recipe,
});

export const fetchRecipeFailure = (error) => ({
  type: FETCH_RECIPE_FAILURE,
  payload: error,
});

export const fetchRecipe = (id) => {
  return (dispatch) => {
    dispatch(fetchRecipeStart());
    fetch(`/api/recipe/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        return dispatch(fetchRecipeSuccess(data))
      })
      .catch((error) => dispatch(fetchRecipeFailure(error.message)));
  };
};
