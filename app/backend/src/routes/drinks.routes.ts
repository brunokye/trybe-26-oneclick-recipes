import { Router } from 'express';
import DrinkController from '../controllers/Drink.controller';

const drinksRouter = Router();

const { findByName, findByFirstLetter, findRandom,
  findAllCategories, findByIngredient, findByCategory } = DrinkController;

drinksRouter
  // query q=nomes
  .get('/name', findByName)
  // query q=primeira-letra
  .get('/letter', findByFirstLetter)
  .get('/random', findRandom)
  .get('/categories', findAllCategories)
  // query q=ingredient-name
  .get('/ingredient', findByIngredient)
  // query q=category-name
  .get('/category', findByCategory);

export default drinksRouter;
