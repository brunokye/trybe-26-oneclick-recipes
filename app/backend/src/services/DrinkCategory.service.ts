import DrinkCategoryModel from '../database/models/DrinkCategory.model';

export default class DrinkCategoryService {
  public static async findAll() {
    const drinks = await DrinkCategoryModel.findAll();
    return drinks;
  }
}
