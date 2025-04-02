/* eslint-disable no-unused-vars */
import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const createToDo = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/todo.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  });
const updateToDo = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/todo/${payload.firebaseKey}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  });

export { createToDo, updateToDo };
