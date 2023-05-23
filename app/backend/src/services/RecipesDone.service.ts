import RecipesDoneModel from '../database/models/RecipesDone.model';

export default class RecipesDoneService {
  public static async getFinishedMealRecipes(idUser: string, type?: string) {
    const recipes = await RecipesDoneModel.findAll({
      where: {
        idUser: +idUser,
        ...(type && { type }),
      },
    });

    return recipes;
  }
}
