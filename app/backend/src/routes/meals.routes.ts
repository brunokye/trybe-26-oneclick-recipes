import { Router } from 'express';
import MealController from '../controllers/Meal.controller';

const mealsRouter = Router();

// query q=nomes
mealsRouter.get('/name', MealController.findByName);

// query q=primeira-letra
mealsRouter.get('/letter', MealController.findByFirstLetter);

mealsRouter.get('/random', MealController.findRandom);

mealsRouter.get('/categories', MealController.findAllCategories);

mealsRouter.get('/areas', MealController.findAllAreas);

mealsRouter.get('/ingredients', MealController.findAllIngredients);

// query q=ingredient-name
mealsRouter.get('/ingredient', MealController.findByIngredient);

// query q=category-name
mealsRouter.get('/category', MealController.findByCategory);

// query q=area-name
mealsRouter.get('/area', MealController.findByArea);

export default mealsRouter;
