export const API_BASE_URL = "https://dummyjson.com"

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const GET_USERS = getApiUrl('/products');