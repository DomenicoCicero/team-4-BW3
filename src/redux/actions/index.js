export const GET_USER = "GET_USER";

const jwt =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMDFkMGY5NGY0YTAwMTkzNzkxNjUiLCJpYXQiOjE3MTIxMjg0NjQsImV4cCI6MTcxMzMzODA2NH0.rrAz-vY_R1pN6Zjj9pjzUoV5PUAFIOfYKwZONwGTEzo";

export const getFetch = () => {
  return (dispatch, useState) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
      method: "GET",
      headers: {
        Authorization: jwt,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel reperimento dei dati");
        }
      })
      .then(data => {
        dispatch({
          type: GET_USER,
          payload: data,
        });
      })
      .catch(err => {
        console.log("ERRORE", err);
      });
  };
};
