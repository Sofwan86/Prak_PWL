import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";

export const getBeritasList = () => {
  return (dispatch) => {
    axios
      .get("https://my-json-server.typicode.com/Sofwan86/reactjs/")
      .then(function (response) {
        dispatch({
          type: GET_BeritaS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_BeritaS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

