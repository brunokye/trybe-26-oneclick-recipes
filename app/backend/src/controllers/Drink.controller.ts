import { Request, Response } from 'express';
import DrinkService from '../services/Drink.service';
import DrinkCategoryService from '../services/DrinkCategory.service';

export default class DrinkController {
  public static async findByName(req: Request, res: Response) {
    const { q = '' } = req.query;
    const drinks = await DrinkService.findByName(q as string);

    res.status(200).json({ drinks });
  }

  public static async findByFirstLetter(req: Request, res: Response) {
    const { q = '' } = req.query;
    const drinks = await DrinkService.findByFirstLetter(q as string);

    res.status(200).json({ drinks });
  }

  public static async findByCategory(req: Request, res: Response) {
    const { q = '' } = req.query;
    const drinks = await DrinkService.findByCategory(q as string);

    res.status(200).json({ drinks });
  }

  public static async findByIngredient(req: Request, res: Response) {
    const { q = '' } = req.query;
    const drinks = await DrinkService.findByIngredient(q as string);

    res.status(200).json({ drinks });
  }

  public static async findRandom(req: Request, res: Response) {
    const drinks = await DrinkService.findRandom();

    res.status(200).json({ drinks });
  }

  public static async findAllCategories(req: Request, res: Response) {
    const categories = await DrinkCategoryService.findAll();

    res.status(200).json({ drinks: categories });
  }
}
