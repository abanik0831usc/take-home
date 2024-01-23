// TODO Create a connected component to render a fetched recipe

import React, { useEffect } from "react"
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from "redux"
import * as actions from "../../actions"

// Step 1: Create the component
const Recipe = ({ recipe, isLoading, error, fetchRecipe, recipeId }) => {
  let { id } = useParams();  // Get the ID from the URL

  id = id || recipeId;

  useEffect(() => {
    if(id) {
      fetchRecipe(id);
    }
  }, [fetchRecipe, id])

  if (recipe === null) {
    return null
  }

  if (isLoading) {
    return <div>is loading...</div>
  }

  if (recipe === undefined) {
    return <p>No recipe found</p>
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.instructions}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => {
          const { amount, unit, name } = ingredient;
          return (
            <li key={index}><b>{amount} {unit}</b> of {name}</li>
          )
        })}
      </ul>
    </div>
  );
};

// Step 2 and 3: Map state to props
const mapStateToProps = (state) => ({
  recipe: state.recipe.recipe,
  isLoading: state.recipe.isLoading,
  error: state.recipe.error,
  recipeId: state.search.recipeId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchRecipe: actions.fetchRecipe,
    },
    dispatch
  )

// Step 5: Export the connected component
export default connect(mapStateToProps, mapDispatchToProps)(Recipe);