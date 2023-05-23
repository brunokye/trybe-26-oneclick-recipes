import { Request, Response } from 'express';
import MealRecipeService from '../services/MealRecipe.service';

export default class RecipeController {
  public static async getMealRecipeInProgress(req: Request, res: Response) {
    const { idMeal } = req.params;
    const { idUser } = req.headers;

    const recipe = await MealRecipeService.getMealRecipeInProgress(Number(idUser), idMeal);
    res.status(200).json(recipe);
  }

  public static async updateMealRecipeInProgress(req: Request, res: Response) {
    const { idMeal } = req.params;
    const { idField, value } = req.body;
    const { idUser } = req.headers;

    await MealRecipeService.updateMealRecipeInProgress(idField, Number(idUser), idMeal, value);
    res.status(200).json({ message: 'ok' });
  }

  public static async finishMealRecipeInProgress(req: Request, res: Response) {
    const { idMeal } = req.params;
    const { idUser } = req.headers;

    await MealRecipeService.finishMealRecipeInProgress(Number(idUser), idMeal);
    res.status(200).json({ message: 'ok' });
  }
}
