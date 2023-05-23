import { Request, Response } from 'express';
import MealRecipeService from '../services/MealRecipe.service';
import DrinkRecipeService from '../services/DrinkRecipe.service';
import { RecipeDone } from '../dtos/recipe/recipeDone.dto';
import RecipesDoneService from '../services/RecipesDone.service';

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

  public static async getDrinkRecipeInProgress(req: Request, res: Response) {
    const { idDrink } = req.params;
    const { idUser } = req.headers;

    const recipe = await DrinkRecipeService.getDrinkRecipeInProgress(Number(idUser), idDrink);
    res.status(200).json(recipe);
  }

  public static async updateDrinkRecipeInProgress(req: Request, res: Response) {
    const { idDrink } = req.params;
    const { idField, value } = req.body;
    const { idUser } = req.headers;

    await DrinkRecipeService.updateDrinkRecipeInProgress(idField, Number(idUser), idDrink, value);
    res.status(200).json({ message: 'ok' });
  }

  public static async finishRecipeInProgress(req: Request, res: Response) {
    const { idRecipe } = req.params;
    const { idUser } = req.headers;
    const { category, alcoholicOrNot, name, image, nationality, tags, type } = req.body;

    const recipe = {
      idUser: Number(idUser),
      idRecipe,
      category,
      alcoholicOrNot,
      name,
      image,
      nationality,
      tags,
      type,
    } as RecipeDone;

    await MealRecipeService.finishMealRecipeInProgress(recipe);
    res.status(200).json({ message: 'ok' });
  }

  public static async getDoneRecipes(req: Request, res: Response) {
    const { idUser } = req.headers;
    const { type = '' } = req.query;

    const recipes = await RecipesDoneService
      .getFinishedMealRecipes(idUser as string, type as string);
    res.status(200).json(recipes);
  }
}
