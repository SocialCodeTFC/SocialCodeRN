let axios = require('axios');
const URI_HTTP_BASEPATH = 'http://10.0.2.2:80';
const URI_HTTPS_BASEPATH = 'https://10.0.2.2:433';

export const setAuthData = async (authData, storage) => {
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
                await storage.setItem(
                    'userStorage',
                    JSON.stringify(response.data),
                );
            };
            setStorage();
            console.log(JSON.stringify(response.data.value));
        })
        .catch(function (error) {
            console.log('error: ', error.response);
            return error.response;
        });
};

export const getAuthData = async (authData, storage) => {
    console.log(authData);
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
                await storage.setItem(
                    'userStorage',
                    JSON.stringify(response.data.value),
                );
            };
            setStorage();
            console.log(JSON.stringify(response));
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const getUserById = async (authData, storage) => {
    console.log('getUserById', authData);

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
            userData = response.data.value;
        })
        .catch(function (error) {
            console.log(error);
            if (error == 'Error: Request failed with status code 401') {
                return refreshToken(authData, storage);
            }
        });
    return userData;
};

const refreshToken = async (authData, storage) => {
    console.log('refreshToken', authData);
    let data = JSON.stringify({
        Id: authData.id,
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
                await storage.setItem(
                    'userStorage',
                    JSON.stringify(response.data),
                );
            };
            setStorage();
            console.log('pase', response.data);
            getUserById(response.data);
        })
        .catch(function (error) {
            console.log('error: ', error.response);
            return error.response;
        });
};
export default {
    setAuthData,
    getAuthData,
    getUserById,
};
