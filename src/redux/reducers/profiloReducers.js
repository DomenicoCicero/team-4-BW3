import { GET_USER } from "../actions";

const initialState = {
  user: {},
};

const profiloReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default profiloReducer;
