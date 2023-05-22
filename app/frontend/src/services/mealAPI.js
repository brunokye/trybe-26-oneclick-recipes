import { parseJSONResponse } from '../helpers';
import { requestData } from '../helpers/fetch';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

const messages = {
  notFound: 'Sorry, we haven\'t found any recipes for these filters.',
  invalidSearchInput: 'Your search must have only 1 (one) character',
};

export const fetchByIngredient = async (searchInput) => {
  let response;
  if (searchInput) {
    const { meals } = await requestData(`meals/ingredient?q=${searchInput}`);
    response = meals;
  } else {
    const { meals } = await requestData('meals/ingredients');
    response = meals;
  }

  // const { meals } = await parseJSONResponse(response, []);
  if (!response || response.length === 0) {
    global.alert(messages.notFound);
  }
  return response || [];
};

export const fetchByName = async (searchInput) => {
  // const response = await fetch(`${baseUrl}search.php?s=${searchInput}`);
  let response;
  if (searchInput) {
    const { meals } = await requestData(`meals/name?q=${searchInput}`);
    response = meals;
  } else {
    const { meals } = await requestData('meals/name');
    response = meals;
  }
  // const { meals } = await parseJSONResponse(response, []);
  if (!response || response.length === 0) {
    global.alert(messages.notFound);
  }
  return response || [];
};

export const fetchByFirstLetter = async (searchInput) => {
  // const response = await fetch(`${baseUrl}search.php?f=${searchInput}`);
  let response;
  if (searchInput) {
    const { meals } = await requestData(`meals/letter?q=${searchInput}`);
    response = meals;
  } else {
    const { meals } = await requestData('meals/letter');
    response = meals;
  }

  // const { meals } = await parseJSONResponse(response, []);
  if (!response || response.length === 0) {
    global.alert(messages.notFound);
  }
  return response || [];
};

export const fetchMealsById = async (id) => {
  const response = await fetch(`${baseUrl}lookup.php?i=${id}`);

  const { meals } = await parseJSONResponse(response, []);
  if (!meals || meals.length === 0) {
    global.alert(messages.notFound);
  }
  return meals || [];
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
    return fetchMealsById(searchInput);

  default:
    break;
  }
};

export const fetchMeals = async () => {
  const { meals } = await requestData('/meals/name');
  return meals;
};

export const fetchMealsCategories = async () => {
  // const response = await fetch(`${baseUrl}list.php?c=list`);
  // const { meals } = await response.json();
  const { meals } = await requestData('/meals/categories');
  return meals;
};

export const fetchMealsByCategory = async (category) => {
  // const response = await fetch(`${baseUrl}filter.php?c=${category}`);
  // const { meals } = await response.json();
  const { meals } = await requestData(`/meals/category?q=${category}`);
  return meals;
};
