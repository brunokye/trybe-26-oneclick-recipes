import { Op, Sequelize } from 'sequelize';
import DrinkModel from '../database/models/Drink.model';

export default class DrinkService {
  public static async findByName(name: string) {
    return DrinkModel.findAll({
      where: {
        strDrink: {
          [Op.like]: `%${name}%`,
        },
      },
    });
  }

  public static async findByFirstLetter(letter: string) {
    return DrinkModel.findAll({
      where: {
        strDrink: {
          [Op.like]: `${letter}%`,
        },
      },
    });
  }

  public static async findByCategory(category: string) {
    return DrinkModel.findAll({
      where: {
        strCategory: category,
      },
    });
  }

  public static async findRandom() {
    return DrinkModel.findAll({
      order: Sequelize.literal('RAND()'),
      limit: 1,
    });
  }

  public static async findByIngredient(ingredient: string) {
    return DrinkModel.findAll({
      where: {
        strIngredient1: ingredient,
      },
    });
  }
}
