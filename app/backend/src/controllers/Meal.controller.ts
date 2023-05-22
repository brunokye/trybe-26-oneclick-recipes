import { Request, Response } from 'express';
import MealService from '../services/Meal.service';
import MealCategoryService from '../services/MealCategory.service';

export default class MealController {
  public static async findByName(req: Request, res: Response) {
    const { q = '' } = req.query;
    const meals = await MealService.findByName(q as string);

    res.status(200).json({ meals });
  }

  public static async findByFirstLetter(req: Request, res: Response) {
    const { q = '' } = req.query;
    const meals = await MealService.findByFirstLetter(q as string);

    res.status(200).json({ meals });
  }

  public static async findCategories(req: Request, res: Response) {
    const categories = await MealCategoryService.findAll();

    res.status(200).json({ categories });
  }
}
