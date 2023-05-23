import { Request, Response } from 'express';
import MealRecipeService from '../services/MealRecipe.service';
import { RecipeDone } from '../dtos/recipe/recipeDone.dto';
import RecipesDoneService from '../services/RecipesDone.service';
import RecipesFavovitesService from '../services/RecipesFavorite.service';

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
    const { category, alcoholicOrNot, name, image, nationality, tags } = req.body;

    const recipe = {
      idUser: Number(idUser),
      idRecipe: idMeal,
      category,
      alcoholicOrNot,
      name,
      image,
      nationality,
      tags,
    } as RecipeDone;

    await MealRecipeService.finishMealRecipeInProgress(recipe);
    res.status(200).json({ message: 'ok' });
  }

  public static async getDoneRecipes(req: Request, res: Response) {
    const { idUser } = req.headers;
    const { type } = req.query;

    const recipes = await RecipesDoneService
      .getFinishedMealRecipes(idUser as string, type as string);
    res.status(200).json(recipes);
  }

  public static async getFavoritesRecipes(req: Request, res: Response) {
    const { idUser } = req.headers;
    const { type } = req.query;

    const recipesFavorites = await RecipesFavovitesService
      .getFavoritesRecipes(idUser as string, type as string);
    res.status(200).json(recipesFavorites);
  }

  public static async addFavoriteRecipe(req: Request, res: Response) {
    const { idUser } = req.headers;
    const { type } = req.query;

    const recipe = {
      idUser: Number(idUser),
      ...req.body,
      type: type as string,
    } as RecipeDone;

    await RecipesFavovitesService.addFavoriteRecipe(recipe);
    res.status(200).json({ message: 'ok' });
  }

  public static async removeFavoriteRecipe(req: Request, res: Response) {
    const { idUser } = req.headers;
    const { idRecipe } = req.params;
    const { type } = req.query;

    await RecipesFavovitesService.removeFavoriteRecipe(idUser as string, idRecipe, type as string);
    res.status(200).json({ message: 'ok' });
  }
}
