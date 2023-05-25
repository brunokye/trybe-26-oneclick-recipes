import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from '../utils/auth'

// @ts-ignore
import chaiHttp = require('chai-http');

import { Response } from 'superagent';
import { app } from '../app';

import DrinkRecipe from '../services/DrinkRecipe.service';
import MealRecipe from '../services/MealRecipe.service';
import RecipesDoneService from '../services/RecipesDone.service';
import RecipesFavoritesService from '../services/RecipesFavorite.service';

import {
  getDrinkStarted, getMealStarted,
  updateDrink, updateMeal,
  finishDrink, finishMeal, doneRecipe,
  createFavoriteRecipe, removeFavoriteRecipe, getAllFavorites,
} from './mocks/recipe.mock';
import { authorization, token } from './mocks/auth.mock';

import 'mocha';

const { expect } = chai;

chai.use(chaiHttp);

describe('DrinkController', () => {
  let chaiHttpResponse: Response;

  afterEach(() => {
    sinon.restore();
  });

  describe('getRecipeInProgress', () => {
    it('retorna as informações para dar inicio a receita do drink', async () => {
      // @ts-ignore
      sinon.stub(DrinkRecipe, 'getDrinkRecipeInProgress').resolves(null);
      // @ts-ignore
      sinon.stub(DrinkRecipe, 'updateDrinkRecipeInProgress').resolves(updateDrink);
      // @ts-ignore
      sinon.stub(jwt, 'verifyToken').resolves(token)

      chaiHttpResponse = await chai.request(app)
        .get('/recipes/drinks/in-progress/15997')
        .set('Authorization', authorization);

      const { status, body } = chaiHttpResponse

      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(updateDrink);
    });
  })
});
