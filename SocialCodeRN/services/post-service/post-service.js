let axios = require('axios');
const URI_HTTP_BASEPATH = 'http://10.0.2.2:80';
const URI_HTTPS_BASEPATH = 'https://10.0.2.2:433';

export const setPost = async postData => {
    let data = {
        userId: postData.userId,
        Title: postData.Title,
        Tags: postData.Tags,
        Description: postData.Description,
        Code: postData.Code,
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
    let response = await axios(config);
    try {
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
export default {
    setPost,
};
