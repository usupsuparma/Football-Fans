import NetworkConfig from '../NetworkConfig';
import HttpClient from '../HttpClient';
import type {ApiResponse} from '../ApiResponse';

const URL_FEED = NetworkConfig.BASE_URL + '/api/feed/posts';

async function getDetailFeed(id): Promise<ApiResponse> {
  const response = await HttpClient.Request.get(URL_FEED + '/' + id).call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

async function filterFeed(query): Promise<ApiResponse> {
  const response = await HttpClient.Request.get(URL_FEED + query).call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

export default {
  getDetailFeed,
  filterFeed,
};
