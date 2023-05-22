import { Router } from 'express';
import DrinkController from '../controllers/Drink.controller';

const drinksRouter = Router();

// query q=nomes
drinksRouter.get('/name', DrinkController.findByName);

// query q=primeira-letra
drinksRouter.get('/letter', DrinkController.findByFirstLetter);

drinksRouter.get('/random', DrinkController.findRandom);

drinksRouter.get('/categories', DrinkController.findAllCategories);

// query q=ingredient-name
drinksRouter.get('/ingredient', DrinkController.findByIngredient);

// query q=category-name
drinksRouter.get('/category', DrinkController.findByCategory);

export default drinksRouter;
