import { expect } from 'chai';
import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiAsPromised = require('chai-as-promised');

import DrinkModel from '../database/models/Drink.model';
import DrinkIngredientModel from '../database/models/DrinkIngredient.model';
import DrinkCategoryModel from '../database/models/DrinkCategory.model';

import DrinkService from '../services/Drink.service';
import DrinkCategoryService from '../services/DrinkCategory.service';
import DrinkIngredientService from '../services/DrinkIngredient.service';

import { findById, findByName, findByFirstLetter, 
  findByCategory, findByIngredient, findRandom,
  findAllCategories, findAllIngredients } from './mocks/drink.mock';

import 'mocha';

chai.use(chaiAsPromised);

describe('DrinkService', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('findById - retorna um drink de acordo com id', async () => {
    // @ts-ignore
    sinon.stub(DrinkModel, 'findOne').resolves(findById);
    
    const result = await DrinkService.findById('15997');

    expect(result).to.be.deep.equal(findById)
  })

  it('findByName - retorna um drink de acordo com o nome', async () => {
    // @ts-ignore
    sinon.stub(DrinkModel, 'findAll').resolves(findByName);
    
    const result = await DrinkService.findByName('Zorro');

    expect(result).to.be.deep.equal(findByName)
  })

  it('findByFirstLetter - retorna os drinks de acordo com a primeira letra', async () => {
    // @ts-ignore
    sinon.stub(DrinkModel, 'findAll').resolves(findByFirstLetter);
    
    const result = await DrinkService.findByFirstLetter('M');

    expect(result).to.be.deep.equal(findByFirstLetter)
  })

  it('findByCategory - retorna os drinks de acordo com a categoria', async () => {
    // @ts-ignore
    sinon.stub(DrinkModel, 'findAll').resolves(findByCategory);
    
    const result = await DrinkService.findByCategory('Cocktail');

    expect(result).to.be.deep.equal(findByCategory)
  })

  it('findByIngredient - retorna os drinks de acordo com o ingrediente', async () => {
    // @ts-ignore
    sinon.stub(DrinkModel, 'findAll').resolves(findByIngredient);
    
    const result = await DrinkService.findByIngredient('Amaretto');

    expect(result).to.be.deep.equal(findByIngredient)
  })

  it('findRandom - retorna um drink de forma aleatória', async () => {
    // @ts-ignore
    sinon.stub(DrinkModel, 'findAll').resolves(findRandom);
    
    const result = await DrinkService.findRandom();

    expect(result).to.be.deep.equal(findRandom)
  })

  it('findAllCategories - retorna todas as categorias dos drinks', async () => {
    // @ts-ignore
    sinon.stub(DrinkCategoryModel, 'findAll').resolves(findAllCategories);
    
    const result = await DrinkCategoryService.findAll();

    expect(result).to.be.deep.equal(findAllCategories)
  })

  it('findAllIngredients - retorna todos os ingredientes dos drinks', async () => {
    // @ts-ignore
    sinon.stub(DrinkIngredientModel, 'findAll').resolves(findAllIngredients);
    
    const result = await DrinkIngredientService.findAll();

    expect(result).to.be.deep.equal(findAllIngredients)
  })
});
