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

export default recipesRouter;
