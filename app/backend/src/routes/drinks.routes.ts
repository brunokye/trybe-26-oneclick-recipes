import { Router } from 'express';
import DrinkController from '../controllers/Drink.controller';

const drinksRouter = Router();

const { findById, findByName, findByFirstLetter,
  findRandom, findAllCategories, findAllIngredients,
  findByIngredient, findByCategory } = DrinkController;

drinksRouter
  .get('/:id', findById)
  // query q=nomes
  .get('/name', findByName)
  // query q=primeira-letra
  .get('/letter', findByFirstLetter)
  .get('/random', findRandom)
  .get('/categories', findAllCategories)
  .get('/ingredients', findAllIngredients)
  // query q=ingredient-name
  .get('/ingredient', findByIngredient)
  // query q=category-name
  .get('/category', findByCategory);

export default drinksRouter;
