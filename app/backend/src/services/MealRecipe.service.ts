import MealRecipeInProgressModel from '../database/models/MealRecipeInProgress.model';
import RecipesDoneModel from '../database/models/RecipesDone.model';
import { RecipeDone } from '../dtos/recipe/recipeDone.dto';

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
    if (!mealRecipe) {
      return this.updateMealRecipeInProgress(idUser.toString(), +idMeal, 'strIngredient1', false);
    }
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

  public static async finishMealRecipeInProgress(recipe: RecipeDone) {
    const { idRecipe: idMeal, idUser } = recipe;
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
    await RecipesDoneModel.upsert({ ...recipe, type: 'meal' });
    return mealRecipe;
  }
}
