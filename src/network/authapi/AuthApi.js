import HttpClient from '../HttpClient';
import type {ApiResponse} from '../ApiResponse';
import NetworkConfig from '../NetworkConfig';

const URL_LOGIN = NetworkConfig.BASE_URL + 'api/auth/login';
const URL_USER = NetworkConfig.BASE_URL + '/api/auth/user/';
const URL_REGISTER = NetworkConfig.BASE_URL + 'register';

async function login(payload): Promise<ApiResponse> {
  const response = await HttpClient.Request.post(URL_LOGIN)
    .jsonBody(payload)
    .call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

async function addUser(payload): Promise<ApiResponse> {
  const response = await HttpClient.Request.post(URL_USER)
    .jsonBody(payload)
    .call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

async function updateUser(id, payload): Promise<ApiResponse> {
  const response = await HttpClient.Request.put(URL_USER + id)
    .jsonBody(payload)
    .call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

async function getUsers(): Promise<ApiResponse> {
  const response = await HttpClient.Request.get(URL_USER).call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

async function getDetailUser(id): Promise<ApiResponse> {
  const response = await HttpClient.Request.get(URL_USER + id).call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

async function register(payload): Promise<ApiResponse> {
  const response = await HttpClient.Request.post(payload).call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

export default {
  login,
  addUser,
  updateUser,
  getUsers,
  getDetailUser,
  register,
};
