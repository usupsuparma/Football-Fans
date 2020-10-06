import NetworkConfig from '../NetworkConfig';
import HttpClient from '../HttpClient';
import type {ApiResponse} from '../ApiResponse';

const URL_FEEDS = NetworkConfig.BASE_URL + '/api/feed/posts';
const URL_FEED = NetworkConfig.BASE_URL + '/api/feed/post';
const URL_FEED_FOLLOW = URL_FEED + '/follow/';
const URL_FEED_UNFOLLOW = URL_FEED + '/unfollow/';
const URL_FEED_CATEGORIES = URL_FEED + 'categories';
const URL_FEED_CATEGORY_POST_DETAIL = URL_FEED + 'categories/posts/';

async function getDetailFeed(id): Promise<ApiResponse> {
  const response = await HttpClient.Request.get(URL_FEEDS + '/' + id).call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

async function filterFeed(query): Promise<ApiResponse> {
  const response = await HttpClient.Request.get(URL_FEEDS + query).call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

async function feedFollow(postId): Promise<ApiResponse> {
  const token = 'this is your bearer token get from session';
  const response = await HttpClient.Request.get(URL_FEED_FOLLOW + postId)
    .bearerToken(token)
    .call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

async function feedUnfollow(postId): Promise<ApiResponse> {
  const token = 'this is your bearer token ';
  const response = await HttpClient.Request.get(URL_FEED_UNFOLLOW + postId)
    .bearerToken(token)
    .call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

async function getFeedCategories(): Promise<ApiResponse> {
  const response = await HttpClient.Request.get(URL_FEED_CATEGORIES).call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

async function getFeedCategoryPostDetail(id, query): Promise<ApiResponse> {
  const response = await HttpClient.Request.get(
    URL_FEED_CATEGORY_POST_DETAIL + id + query,
  ).call();
  const body = await response.json();
  return {
    rawResponse: response,
    body: body,
  };
}

export default {
  getDetailFeed,
  filterFeed,
  feedFollow,
  feedUnfollow,
  getFeedCategories,
  getFeedCategoryPostDetail,
};
