import { Router } from 'express';
import RecipeController from '../controllers/Recipe.controller';
import authVerify from '../middlewares/auth.middleware';

const recipesRouter = Router();

recipesRouter.get('/meals/in-progress/:idMeal', [
  authVerify,
  RecipeController.getMealRecipeInProgress,
]);
recipesRouter.patch('/meals/in-progress/:idMeal', [
  authVerify,
  RecipeController.updateMealRecipeInProgress,
]);

recipesRouter.get('/drinks/in-progress/:idDrink', [
  authVerify,
  RecipeController.getDrinkRecipeInProgress,
]);
recipesRouter.patch('/drinks/in-progress/:idDrink', [
  authVerify,
  RecipeController.updateDrinkRecipeInProgress,
]);

recipesRouter.post('/in-progress/:idRecipe/finish', [
  authVerify,
  RecipeController.finishRecipeInProgress,
]);

recipesRouter.get('/done', [
  authVerify,
  RecipeController.getDoneRecipes,
]);

export default recipesRouter;
