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

  public static async findByCategory(category: string) {
    const meals = await MealModel.findAll({
      where: {
        strCategory: category,
      },
    });

    return meals;
  }

  public static async findByArea(area: string) {
    const meals = await MealModel.findAll({
      where: {
        strArea: area,
      },
      attributes: ['strMeal', 'strMealThumb', 'idMeal'],
    });

    return meals;
  }

  public static async findRandom() {
    const meals = await MealModel.findAll({
      order: Sequelize.literal('RAND()'),
      limit: 1,
    });

    return meals;
  }

  public static async findAllAreas() {
    const areas = await MealModel.findAll({
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('strArea')), 'strArea'],
      ],
      order: [['strArea', 'ASC']],
    });
    return areas;
  }

  public static async findByIngredient(ingredient: string) {
    const meals = await MealModel.findAll({
      where: {
        strIngredient1: ingredient,
      },
    });

    return meals;
  }
}
