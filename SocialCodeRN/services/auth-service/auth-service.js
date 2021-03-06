let axios = require('axios');
const URI_HTTP_BASEPATH = 'http://10.0.2.2:80';
const URI_HTTPS_BASEPATH = 'https://10.0.2.2:433';

export const setAuthData = async (authData, storage) => {
  let responseStatus;
  let data = JSON.stringify({
    Username: authData.alias,
    FirstName: authData.name,
    LastName: authData.surname,
    Password: authData.password,
    RepeatPassword: authData.repeatPassword,
    Email: authData.email,
  });

  let config = {
    method: 'post',
    url: `${URI_HTTP_BASEPATH}/auth/register`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      const setStorage = async () => {
        await storage.setItem('userStorage', JSON.stringify(response.data));
      };
      setStorage();
      responseStatus = response.status;
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log('error: ', error.response);
      responseStatus = error.response.status;
      return error.response;
    });
  return responseStatus;
};

export const getAuthData = async (authData, storage) => {
  let responseStatus;
  let data = JSON.stringify({
    Username: authData.alias,
    Password: authData.password,
  });

  let config = {
    method: 'post',
    url: `${URI_HTTP_BASEPATH}/auth/login`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      const setStorage = async () => {
        await storage.setItem('userStorage', JSON.stringify(response.data));
      };
      setStorage();
      responseStatus = response.status;
      console.log(JSON.stringify(response));
    })
    .catch(function (error) {
      console.log('error: ', error);
      responseStatus = error.response.status;
    });
  return responseStatus;
};

export const getUserById = async (authData, storage) => {
  console.log(authData);
  let userData;

  let config = {
    method: 'get',
    url: `${URI_HTTP_BASEPATH}/users/${authData.id}`,
    headers: {
      Authorization: `Bearer ${authData.token}`,
      'Content-Type': 'application/json',
    },
  };

  await axios(config)
    .then(function (response) {
      userData = response.data;
    })
    .catch(function (error) {
      console.log(error);
      if (error == 'Error: Request failed with status code 401') {
        refreshToken(authData, storage).then(tokenResponse => {
          getUserById(tokenResponse);
        });
      }
    });

  return userData;
};

const refreshToken = async (authData, storage) => {
  let tokenResponse;
  let data = JSON.stringify({
    UserID: authData.id,
    Username: authData.username,
    Token: authData.token,
    RefreshToken: authData.refreshToken,
  });

  let config = {
    method: 'post',
    url: `${URI_HTTP_BASEPATH}/auth/refresh`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      const setStorage = async () => {
        await storage.setItem('userStorage', JSON.stringify(response.data));
      };
      setStorage();
      tokenResponse = response.data;
    })
    .catch(function (error) {
      console.log('error: ', error.response.status);
      const setStorage = async () => {
        await storage.setItem(
          'userStorage',
          JSON.stringify(error.response.status),
        );
      };
      setStorage();
      tokenResponse = error.response.status;
    });
  return tokenResponse;
};
export default {
  setAuthData,
  getAuthData,
  getUserById,
  refreshToken,
};
