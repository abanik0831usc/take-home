import { Request, Response, NextFunction } from "express"
import { RecipeModel } from "../models"

// export const recipeMiddleware = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   // TODO fetch and return a recipe
// }

export const recipeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Extract recipe ID or other identifiers from request, e.g., req.params.id
    const recipeId = req.params.id;

    // Fetch the recipe data using your service or database model
    // This is a placeholder function call. Replace with your actual fetch logic.
    const recipeData = await fetchRecipeById(recipeId);

    // Check if recipeData is found
    if (!recipeData) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    // Send the recipe data as response
    res.json(recipeData);
  } catch (error) {
    // Handle any errors during fetching
    next(error); // Pass the error to the error-handling middleware
  }
};

// Example function to fetch a recipe by ID - replace with your actual logic
async function fetchRecipeById(id: string) {
  // Fetch recipe logic here
  // This could be a database query or a call to an external API
  try {
    const item = await RecipeModel.findById(id);
    return item; 
  } catch (err) {
    throw err;
  }
}