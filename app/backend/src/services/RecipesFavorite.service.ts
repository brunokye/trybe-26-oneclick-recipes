import RecipesFavoritesModel from '../database/models/RecipesFavorites.model';
import { RecipeFavorite } from '../dtos/recipe/recipeFavorite.dto';

export default class RecipesFavovitesService {
  public static async getFavoritesRecipes(idUser: string, type?: string) {
    const recipes = await RecipesFavoritesModel.findAll({
      where: {
        idUser: +idUser,
        ...(type && { type }),
      },
    });
    return recipes;
  }

  public static async addFavoriteRecipe(recipe: RecipeFavorite) {
    await RecipesFavoritesModel.create(recipe);
  }

  public static async removeFavoriteRecipe(idUser: string, idRecipe: string, type: string) {
    await RecipesFavoritesModel.destroy({
      where: {
        idUser: +idUser,
        idRecipe,
        type,
      },
    });
  }
}
