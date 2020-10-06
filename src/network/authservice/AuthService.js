import AuthApi from '../authapi/AuthApi';
import {StatusCode} from '../HttpClient';
import {NonSuccessHttpError} from '../NonSuccessHttpError';

async function login(payload): Promise<any> {
  const response = await AuthApi.login(payload);
  if (response.rawResponse.status === StatusCode.Ok) {
    return response.body;
  } else {
    throw new NonSuccessHttpError(
      'Error From Server',
      response.rawResponse,
      response.rawResponse.status,
    );
  }
}

async function register(payload): Promise<any> {
  const response = await AuthApi.register(payload);
  if (response.rawResponse.status === StatusCode.Ok) {
    return response.body;
  } else {
    throw new NonSuccessHttpError(
      'Error From Server',
      response.rawResponse,
      response.rawResponse.status,
    );
  }
}

export default {
  login,
  register,
};
