import {AsyncStorage} from 'react-native';

module.exports = {
  save: (key, data) => {
    return new Promise(async (resolve, reject) => {
      try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
        resolve(data);
      } catch (ex) {
        reject(new Error(ex.message));
      }
    });
  },

  get: (key = '') => {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await AsyncStorage.getItem(key);

        resolve(JSON.parse(response));
      } catch (ex) {
        reject(ex.message);
      }
    });
  },

  remove: (key = '') => {
    return new Promise(async (resolve, reject) => {
      try {
        await AsyncStorage.removeItem(key);

        resolve(true);
      } catch (ex) {
        reject(ex.message);
      }
    });
  },

  logout: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let keys = ['user', 'home'];

        await AsyncStorage.multiRemove(keys);
        await AsyncStorage.clear();

        resolve(true);
      } catch (ex) {
        reject(ex.message);
      }
    });
  },

  defaultLogo:
    'https://res.cloudinary.com/dlk7iozek/image/upload/v1550663534/FFB/1WGjauXxEUtz0wyD26GRUOF8plIrSjrH.png',
};
