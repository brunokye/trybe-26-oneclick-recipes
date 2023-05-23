import DrinkRecipeInProgressModel from '../database/models/DrinkRecipeInProgress.model';
import RecipesDoneModel from '../database/models/RecipesDone.model';
import { RecipeDone } from '../dtos/recipe/recipeDone.dto';

export default class DrinkRecipeService {
  public static async getDrinkRecipeInProgress(idUser: number, idDrink: string) {
    const drinkRecipe = await DrinkRecipeInProgressModel.findOne({
      where: {
        idDrink,
        idUser,
        isFinished: false,
      },
      include: [
        { association: 'drink' },
      ],
    });
    if (!drinkRecipe) {
      return this.updateDrinkRecipeInProgress(idUser.toString(), +idDrink, 'strIngredient1', false);
    }
    return drinkRecipe;
  }

  public static async updateDrinkRecipeInProgress(
    idField: string,
    idUser: number,
    idDrink: string,
    value: boolean,
  ) {
    const drinkRecipe = await DrinkRecipeInProgressModel.upsert(
      {
        idDrink,
        idUser,
        [idField]: value,
      },
    );

    return drinkRecipe;
  }

  public static async finishDrinkRecipeInProgress(recipe: RecipeDone) {
    const { idRecipe: idDrink, idUser } = recipe;
    const drinkRecipe = await DrinkRecipeInProgressModel.update(
      { isFinished: true },
      {
        where: {
          idDrink,
          idUser,
          isFinished: false,
        },
      },
    );
    await RecipesDoneModel.upsert(recipe);
    return drinkRecipe;
  }
}
