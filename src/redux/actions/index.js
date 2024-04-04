const jwt =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMDFkMGY5NGY0YTAwMTkzNzkxNjUiLCJpYXQiOjE3MTIxMjg0NjQsImV4cCI6MTcxMzMzODA2NH0.rrAz-vY_R1pN6Zjj9pjzUoV5PUAFIOfYKwZONwGTEzo";
export const GET_USER = "GET_USER";
export const GET_EXP = "GET_EXP";
export const DELETE_EXP = "DELETE_EXP";
export const ADD_EXP = "ADD_EXP";
export const GET_POSTS = "GET_POSTS";

export const deleteExp = (expId) => ({
  type: DELETE_EXP,
  payload: expId,
});

export const addExp = (expId) => ({
  type: ADD_EXP,
  payload: expId,
});

export const ADD_POST = "ADD_POST";

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const DELETE_POST = "DELETE_POST";

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});

export const getFetchUser = () => {
  return (dispatch, useState) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
      method: "GET",
      headers: {
        Authorization: jwt,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel reperimento dei dati");
        }
      })
      .then((data) => {
        dispatch({
          type: GET_USER,
          payload: data,
        });
      })
      .catch((err) => {
        console.log("ERRORE", err);
      });
  };
};

export const getFetchExp = (userId) => {
  return (dispatch, useState) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
      {
        method: "GET",
        headers: {
          Authorization: jwt,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel reperimento dei dati");
        }
      })
      .then((data) => {
        dispatch({
          type: GET_EXP,
          payload: data,
        });
      })
      .catch((err) => {
        console.log("ERRORE", err);
      });
  };
};

export const getFetchPosts = () => {
  return (dispatch, useState) => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
      method: "GET",
      headers: {
        Authorization: jwt,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel reperimento dei dati");
        }
      })
      .then((data) => {
        dispatch({
          type: GET_POSTS,
          payload: data,
        });
      })
      .catch((err) => {
        console.log("ERRORE", err);
      });
  };
};
