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
    .then(function (res) {})
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

export const getByTags = async (searchData, authData) => {
  let posts;
  let data = {
    Tags: searchData,
  };
  let config = {
    method: 'post',
    url: `${URI_HTTP_BASEPATH}/posts/getByTags?limit=10&offset=0
    `,
    headers: {
      Authorization: `Bearer ${authData.token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };
  await axios(config)
    .then(function async(response) {
      posts = response.data;
    })
    .catch(function (error) {
      console.log('error: ', error.response);
      return error.response;
    });
  return posts.items;
};

export const addComment = async commentData => {
  let comments;
  let data = {
    Content: commentData.comment,
    PostId: commentData.postId,
    Username: commentData.username,
  };
  let config = {
    method: 'post',
    url: `${URI_HTTP_BASEPATH}/comments`,
    headers: {
      Authorization: `Bearer ${commentData.token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };
  await axios(config)
    .then(function async(response) {
      comments = response.data;
    })
    .catch(function (error) {
      console.log('error: ', error.response);
      return error.response;
    });
  return comments;
};
export const getAllComments = async (postId, token) => {
  let comments;
  let config = {
    method: 'get',
    url: `${URI_HTTP_BASEPATH}/comments/${postId}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  await axios(config)
    .then(function async(response) {
      comments = response.data;
    })
    .catch(function (error) {
      console.log('error: ', error.response);
      comments = error.response.status;
    });
  return comments;
};

export const getUserComments = async (username, token) => {
  let comments;
  let config = {
    method: 'get',
    url: `${URI_HTTP_BASEPATH}/comments/username/${username}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  await axios(config)
    .then(function async(response) {
      comments = response.data;
    })
    .catch(function (error) {
      console.log('error: ', error.response);
      comments = error.response.status;
    });
  return comments;
};
export default {
  setPost,
  getAllUserPosts,
  getByTags,
  addComment,
  getAllComments,
  getUserComments,
};
