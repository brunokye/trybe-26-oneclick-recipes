import DrinkIngredientModel from '../database/models/DrinkIngredient.model';

export default class DrinkIngredientService {
  public static async findAll() {
    const drinks = await DrinkIngredientModel.findAll();
    return drinks;
  }
}
