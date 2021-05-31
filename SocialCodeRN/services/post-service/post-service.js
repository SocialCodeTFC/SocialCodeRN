let axios = require('axios');
const URI_HTTP_BASEPATH = 'http://10.0.2.2:80';
const URI_HTTPS_BASEPATH = 'https://10.0.2.2:433';

export const setPost = postData => {
    let data = {
        Author_Id: postData.userId,
        Title: postData.Title,
        Tags: postData.Tags,
        Description: postData.Description,
        Code: postData.Code,
        IsFree: true,
        Price: 0,
    };
    let config = {
        method: 'post',
        url: `${URI_HTTP_BASEPATH}/posts`,
        headers: {
            Authorization: `Bearer ${postData.userToken}`,
            'Content-Type': 'application/json',
        },
        data: data,
    };
    axios(config)
        .then(function (res) {
            console.log(res);
        })
        .catch(function (error) {
            console.log('error: ', error.response);
            return error.response;
        });
};
export const getAllUserPosts = async authData => {
    let userPosts;
    let config = {
        method: 'get',
        url: `${URI_HTTP_BASEPATH}/posts/user/${authData.id}`,
        headers: {
            Authorization: `Bearer ${authData.token}`,
            'Content-Type': 'application/json',
        },
    };
    await axios(config)
        .then(function async(response) {
            userPosts = response.data;
        })
        .catch(function (error) {
            console.log('error: ', error.response);
            return error.response;
        });
    return userPosts;
};
export default {
    setPost,
    getAllUserPosts,
};
