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
recipesRouter.post('/meals/in-progress/:idMeal/finish', [
  authVerify,
  RecipeController.finishMealRecipeInProgress,
]);

recipesRouter.get('/done', [
  authVerify,
  RecipeController.getDoneRecipes,
]);

recipesRouter.get('/favorites', [
  authVerify,
  RecipeController.getFavoritesRecipes,
]);

recipesRouter.post('/favorites/:idRecipe', [
  authVerify,
  RecipeController.addFavoriteRecipe,
]);

recipesRouter.delete('/favorites/:idRecipe', [
  authVerify,
  RecipeController.removeFavoriteRecipe,
]);

export default recipesRouter;
