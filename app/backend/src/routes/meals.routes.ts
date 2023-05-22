import { Router } from 'express';
import MealController from '../controllers/Meal.controller';

const mealsRouter = Router();

const { findById, findByName, findByFirstLetter, findRandom,
  findAllCategories, findAllAreas, findAllIngredients,
  findByIngredient, findByCategory, findByArea } = MealController;

mealsRouter
  .get('/:id', findById)
  // query q=nomes
  .get('/name', findByName)
  // query q=primeira-letra
  .get('/letter', findByFirstLetter)
  .get('/random', findRandom)
  .get('/categories', findAllCategories)
  .get('/areas', findAllAreas)
  .get('/ingredients', findAllIngredients)
  // query q=ingredient-name
  .get('/ingredient', findByIngredient)
  // query q=category-name
  .get('/category', findByCategory)
  // query q=area-name
  .get('/area', findByArea);

export default mealsRouter;
