import { GET_EXP } from "../actions";

const initialState = {
  content: [],
};

const expReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXP:
      return {
        ...state,
        content: state.content.concat(action.payload),
      };
    default:
      return state;
  }
};

export default expReducers;
