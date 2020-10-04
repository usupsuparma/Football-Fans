// let BASE_URL = 'http://admin.ffb.com.ng/api';
//BASE_URL = 'https://d66f572a.ngrok.io/api';
let BASE_URL = 'http://ffb.com.ng/api/public/v1/api/public';

const Local = require('./Local');

module.exports = {
  get: (endpoint = '', token = '') => {
    return new Promise(async (resolve, reject) => {
      if (token.length == 0) {
        let user = await Local.get('user');
        token = !user ? '' : user.api_token;
      }

      let payload = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      fetch(`${BASE_URL}/${endpoint}`, payload)
        .then((response) => response.json())
        .then((json) => {
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  post: (endpoint = '', data = {}, token = '') => {
    return new Promise(async (resolve, reject) => {
      if (token.length == 0) {
        let user = await Local.get('user');
        token = !user ? '' : user.api_token;
      }

      let payload = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      };

      fetch(`${BASE_URL}/${endpoint}`, payload)
        .then((response) => response.json())
        .then((json) => {
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
