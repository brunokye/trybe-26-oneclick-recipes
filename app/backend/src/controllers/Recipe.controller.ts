import { Request, Response } from 'express';
import MealRecipeService from '../services/MealRecipe.service';
import { decodeToken } from '../utils/auth';

const getUserId = (req: Request): number => {
  const { authorization } = req.headers;
  const { id } = decodeToken(authorization as string);
  return id;
};

export default class RecipeController {
  public static async getMealRecipeInProgress(req: Request, res: Response) {
    const { idMeal } = req.params;
    const idUser = getUserId(req);

    const recipe = await MealRecipeService.getMealRecipeInProgress(idUser, idMeal);
    res.status(200).json(recipe);
  }

  public static async updateMealRecipeInProgress(req: Request, res: Response) {
    const { idMeal } = req.params;
    const { idField, value } = req.body;
    const idUser = getUserId(req);

    await MealRecipeService.updateMealRecipeInProgress(idField, idUser, idMeal, value);
    res.status(200).json({ message: 'ok' });
  }

  public static async finishMealRecipeInProgress(req: Request, res: Response) {
    const { idMeal } = req.params;
    const idUser = getUserId(req);

    await MealRecipeService.finishMealRecipeInProgress(idUser, idMeal);
    res.status(200).json({ message: 'ok' });
  }
}
