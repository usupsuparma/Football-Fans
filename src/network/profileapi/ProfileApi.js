import NetworkConfig from '../NetworkConfig';
import HttpClient from '../HttpClient';
import type {ApiResponse} from '../ApiResponse';

const URL_PROFILE = NetworkConfig.BASE_URL + '/api/me/update-profile-image';

async function updateProfile(payload): Promise<ApiResponse> {
  const tokenYourApp = 'this your bearer token';
  const response = await HttpClient.Request.post(URL_PROFILE)
    .multipartBody(payload)
    .bearerToken(tokenYourApp)
    .call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

export default {
  updateProfile,
};
