import axios from "axios";

export async function createUser(data) {
  const api = import.meta.env.VITE_API_URL;
  const route = import.meta.env.VITE_API_ROUTE;
  const request = await axios.post(`${api}${route}create-user`, data);
  return request;
}
export async function login(data) {
  const api = import.meta.env.VITE_API_URL;
  const route = import.meta.env.VITE_API_ROUTE;
  const request = await axios.post(`${api}${route}login`, data);
  return request;
}
export async function getUserData(token) {
  const api = import.meta.env.VITE_API_URL;
  const route = import.meta.env.VITE_API_ROUTE;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = await axios.get(`${api}${route}user`, config);
  return request;
}
