import StorageManager from '../format/StorageManager';

export const endpoint = 'http://localhost:3001/v1/';

export const formatDate = (date) => date;

export const getRequest = async (route) => fetch(endpoint + route, {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${StorageManager.getToken().token}`,
  },
}).then((response) => response);

export const postRequest = async (route, data) => fetch(endpoint + route, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${StorageManager.getToken().token}`,
  },
  body: JSON.stringify(data),
}).then((response) => response);

export const postRequestWithFormData = async (route, data) => fetch(endpoint + route, {
  method: 'POST',
  mode: 'cors',
  body: data,
}).then((response) => response.json());

export const getOneDoctor = (id) => {
  const resultFetch = fetch(`${endpoint}doctors/${id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${StorageManager.getToken().token}`,
    },
  }).then((res) => res.json());

  return resultFetch;
};

export const addDoctorApi = async (route, data) => fetch(endpoint + route, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${StorageManager.getToken().token}`,
  },
  body: data,
}).then((response) => response);

export const getAllReservation = async (route) => {
  const rest = await fetch(endpoint + route, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${StorageManager.getToken().token}`,
    },
  })
    .then((response) => response.json())
    .then((json) => json);
  return rest;
};
