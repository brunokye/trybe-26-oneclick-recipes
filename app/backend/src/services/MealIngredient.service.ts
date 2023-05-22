import MealIngredientModel from '../database/models/MealIngredient.model';

export default class MealIngredientService {
  public static async findAll() {
    const ingredients = await MealIngredientModel.findAll();
    return ingredients;
  }
}
