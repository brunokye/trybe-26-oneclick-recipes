import { Op, Sequelize } from 'sequelize';
import MealModel from '../database/models/Meal.model';

export default class MealService {
  public static async findByName(name: string) {
    const meals = await MealModel.findAll({
      where: {
        strMeal: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    return meals;
  }

  public static async findByFirstLetter(letter: string) {
    const meals = await MealModel.findAll({
      where: {
        strMeal: {
          [Op.like]: `${letter}%`,
        },
      },
    });
    return meals;
  }

  public static async findCategories() {
    const categories = await MealModel.findAll({
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('strCategory')), 'strCategory'],
      ],
    });
    return categories;
  }
}
