export const StatusCode = {
  Ok: 200,
  BadRequest: 400,
  Unauthorized: 401,
  NotFound: 404,
  ServerError: 500,
};

async function Post(url: string, body = null): Promise<Response> {
  const options = {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body != null ? JSON.stringify(body) : null,
  };
  return await fetch(url, options);
}

async function Put(url: string, body = null): Promise<Response> {
  const options = {
    method: 'Put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body != null ? JSON.stringify(body) : null,
  };
  return await fetch(url, options);
}

class Request {
  url: string;
  method: string;
  headers: {};
  body: any;

  constructor(url, method) {
    this.url = url;
    this.method = method;
    this.headers = {};
  }

  static post(url: string): Request {
    return new Request(url, 'Post');
  }

  static put(url: string): Request {
    return new Request(url, 'Put');
  }

  static get(url: string): Request {
    return new Request(url, 'Get');
  }

  jsonBody(body: {}): Request {
    this.headers['Content-Type'] = 'application/json';
    this.body = JSON.stringify(body);
    return this;
  }

  multipartBody(body: FormData): Request {
    this.headers['Content-Type'] = 'multipart/form-data';
    this.body = body;
    return this;
  }

  bearerToken(token: string): Request {
    this.headers.Authorization = 'Bearer ' + token;
    return this;
  }

  header(key: string, value: string): Request {
    this.headers[key] = value;
    return this;
  }

  async call(): Promise<Response> {
    const options = {
      method: this.method,
      headers: this.headers,
      body: this.body,
    };

    return await fetch(this.url, options);
  }
}

export default {
  Post,
  Put,
  Request,
};
