import { Router } from 'express';
import MealController from '../controllers/Meal.controller';

const mealsRouter = Router();

// query q=nomes
mealsRouter.get('/name', MealController.findByName);

// query q=primeira-letra
mealsRouter.get('/letter', MealController.findByFirstLetter);

mealsRouter.get('/random', () => {});

mealsRouter.get('/categories', MealController.findCategories);

mealsRouter.get('/areas', () => {});

mealsRouter.get('/ingredients', () => {});

// query q=ingredient-name
mealsRouter.get('/ingredient', () => {});

// query q=category-name
mealsRouter.get('/category', () => {});

// query q=area-name
mealsRouter.get('/area', () => {});

export default mealsRouter;
