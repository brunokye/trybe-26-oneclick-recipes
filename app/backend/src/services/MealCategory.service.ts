import MealCategoryModel from '../database/models/MealCategory.model';

export default class MealCategoryService {
  public static async findAll() {
    const meals = await MealCategoryModel.findAll();
    return meals;
  }
}
