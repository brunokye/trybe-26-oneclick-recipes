import { DataTypes, Model } from 'sequelize';
import sequelize from '.';

class DrinkCategoryModel extends Model {
  declare idCategory: string;
  declare strCategory: string;
}

DrinkCategoryModel.init(
  {
    idCategory: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    strCategory: { type: DataTypes.STRING },
  },
  {
    tableName: 'drinksCategories',
    sequelize,
    timestamps: false,
    underscored: false,
  },
);

export default DrinkCategoryModel;
