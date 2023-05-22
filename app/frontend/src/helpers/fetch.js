import { readObject, saveObject } from './localStorage';

export default async function custmonFetch(url, data) {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3001/';

  const option = data ? {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: JSON.stringify(readObject('user', '')),
    },
    body: JSON.stringify(data),
  } : null;

  const result = await fetch(baseUrl + url, option);
  const response = result.json();
  if (response.token) {
    saveObject('token', response.token);
    saveObject('user', response.email);
  }
}
