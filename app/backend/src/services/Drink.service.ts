import { Op, Sequelize } from 'sequelize';
import DrinkModel from '../database/models/Drink.model';

export default class DrinkService {
  public static async findByName(name: string) {
    const drinks = await DrinkModel.findAll({
      where: {
        strDrink: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    return drinks;
  }

  public static async findByFirstLetter(letter: string) {
    const drinks = await DrinkModel.findAll({
      where: {
        strDrink: {
          [Op.like]: `${letter}%`,
        },
      },
    });
    return drinks;
  }

  public static async findByCategory(category: string) {
    const drinks = await DrinkModel.findAll({
      where: {
        strCategory: category,
      },
    });

    return drinks;
  }

  public static async findRandom() {
    const drinks = await DrinkModel.findAll({
      order: Sequelize.literal('RAND()'),
      limit: 1,
    });

    return drinks;
  }

  public static async findByIngredient(ingredient: string) {
    const drinks = await DrinkModel.findAll({
      where: {
        strIngredient1: ingredient,
      },
    });

    return drinks;
  }
}
