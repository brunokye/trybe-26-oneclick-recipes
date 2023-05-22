import { Router } from 'express';

const drinksRouter = Router();

// query q=nomes
drinksRouter.get('/name', () => {});

// query q=primeira-letra
drinksRouter.get('/letter', () => {});

drinksRouter.get('/random', () => {});

drinksRouter.get('/categories', () => {});

drinksRouter.get('/ingredients', () => {});

// query q=ingredient-name
drinksRouter.get('/ingredient', () => {});

// query q=category-name
drinksRouter.get('/category', () => {});

export default drinksRouter;
