import MealRecipeInProgressModel from '../database/models/MealRecipeInProgress.model';

export default class MealRecipeService {
  public static async getMealRecipeInProgress(idUser: number, idMeal: string) {
    const mealRecipe = await MealRecipeInProgressModel.findOne({
      where: {
        idMeal,
        idUser,
        isFinished: false,
      },
      include: [
        { association: 'meal' },
      ],
    });

    return mealRecipe;
  }

  public static async updateMealRecipeInProgress(
    idField: string,
    idUser: number,
    idMeal: string,
    value: boolean,
  ) {
    const mealRecipe = await MealRecipeInProgressModel.upsert(
      {
        idMeal,
        idUser,
        [idField]: value,
      },
    );

    return mealRecipe;
  }

  public static async finishMealRecipeInProgress(idUser: number, idMeal: string) {
    const mealRecipe = await MealRecipeInProgressModel.update(
      { isFinished: true },
      {
        where: {
          idMeal,
          idUser,
          isFinished: false,
        },
      },
    );

    return mealRecipe;
  }
}
