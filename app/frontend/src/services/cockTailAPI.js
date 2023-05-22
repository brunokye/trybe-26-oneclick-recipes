import { parseJSONResponse } from '../helpers';
import { requestData } from '../helpers/fetch';

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

const messages = {
  notFound: 'Sorry, we haven\'t found any recipes for these filters.',
  invalidSearchInput: 'Your search must have only 1 (one) character',
};

export const fetchByIngredient = async (searchInput) => {
  // const response = await fetch(`${baseUrl}filter.php?i=${searchInput}`);
  let response;
  if (searchInput) {
    const { meals } = await requestData(`drinks/ingredient?q=${searchInput}`);
    response = meals;
  } else {
    const { meals } = await requestData('drinks/ingredients');
    response = meals;
  }

  // const { drinks } = await parseJSONResponse(response, []);
  if (!response || response.length === 0) {
    global.alert(messages.notFound);
  }
  return response || [];
};

export const fetchByName = async (searchInput) => {
  // const response = await fetch(`${baseUrl}search.php?s=${searchInput}`);
  let response;
  if (searchInput) {
    const { meals } = await requestData(`drinks/name?q=${searchInput}`);
    response = meals;
  } else {
    const { meals } = await requestData('drinks/name');
    response = meals;
  }

  // const { drinks } = await parseJSONResponse(response, []);
  if (!response || response.length === 0) {
    global.alert(messages.notFound);
  }
  return response || [];
};

export const fetchByFirstLetter = async (searchInput) => {
  // const response = await fetch(`${baseUrl}search.php?f=${searchInput}`);
  let response;
  if (searchInput) {
    const { meals } = await requestData(`drinks/letter?q=${searchInput}`);
    response = meals;
  } else {
    const { meals } = await requestData('drinks/letter');
    response = meals;
  }

  // const { drinks } = await parseJSONResponse(response, []);
  if (!response || response.length === 0) {
    global.alert(messages.notFound);
  }
  return response || [];
};

export const fetchDrinksById = async (id) => {
  const response = await fetch(`${baseUrl}lookup.php?i=${id}`);

  const { drinks } = await parseJSONResponse(response, []);
  if (!drinks || drinks.length === 0) {
    global.alert(messages.notFound);
  }
  return drinks || [];
};

export const fetchByType = async (searchType, searchInput) => {
  switch (searchType) {
  case 'ingredient':
    return fetchByIngredient(searchInput);

  case 'name':
    return fetchByName(searchInput);

  case 'first-letter':
    if (searchInput.length > 1) {
      global.alert(messages.invalidSearchInput);
      return [];
    }
    return fetchByFirstLetter(searchInput);

  case 'id':
    return fetchDrinksById(searchInput);

  default:
    break;
  }
};

export const fetchDrinks = async () => {
  // const response = await fetch(`${baseUrl}search.php?s=`);
  // const { drinks } = await response.json();
  const { drinks } = await requestData('/drinks/name');
  return drinks;
};

export const fetchDrinksCategories = async () => {
  // const response = await fetch(`${baseUrl}list.php?c=list`);
  // const { drinks } = await response.json();
  const { drinks } = await requestData('/drinks/categories');
  return drinks;
};

export const fetchDrinksByCategory = async (category) => {
  // const response = await fetch(`${baseUrl}filter.php?c=${category}`);
  // const { drinks } = await response.json();
  const { drinks } = await requestData(`/drinks/category?q=${category}`);
  return drinks;
};
